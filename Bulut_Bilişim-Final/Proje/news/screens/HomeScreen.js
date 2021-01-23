import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Dimensions, Image, TouchableWithoutFeedback, Linking, Share } from "react-native";
import * as firebase from 'firebase';
const { width, height } = Dimensions.get('window');
console.disableYellowBox = true;


export default class HomeScreen extends React.Component {
    state = {
        news: [],
        loading: true,
        email: "",
        displayName: ""
    };

    fetchnews = () => {
        fetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=3aa3d6d9e0a84340bf1404f5d58a678d')
            .then((res) => res.json())
            .then((response) => {
                this.setState({
                    news: response.articles,
                    loading: false
                })
            })

    }

    componentDidMount() {
        this.fetchnews()
        const { displayName } = firebase.auth().currentUser;
        this.setState({ displayName });
    }
    sharearticle = async article => {
        try {
            await Share.share({
                message : 'Bu Habere Göz Atmalısın.! ' +article
            })

        }catch (error) {
            console.log(error)

        }

    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' }}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.welcomeUser} delayPressIn={2000} >
                        <Text style={styles.txtWelcome}>Sayın {this.state.displayName} Hoşgeldiniz.!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutBtn} onPress={this.signOutUser}>
                        <Text style={styles.logoutTxt}>Çıkış Yap</Text>
                    </TouchableOpacity>
                    <View style={styles.news}>
                        <FlatList
                            data={this.state.news}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableWithoutFeedback onPress={() => Linking.openURL(item.url)}>
                                        <View style={{ width: width - 50, height: 200, backgroundColor: '#fff', marginBottom: 15, borderRadius: 15 }}>
                                            <Image source={{ uri: item.urlToImage }} style={[StyleSheet.absoluteFill, { borderRadius: 15 }]} />
                                            <View style={styles.gradient}>
                                                <Text
                                                    style={{ position: 'absolute', bottom: 0, color: '#fff', fontSize: 20, padding: 5 }}
                                                >{item.title}</Text>
                                                <Text style={{ fontsize: 17, color: 'green', position: 'absolute', top: 0, right: 0, padding: 5, fontWeight: 'bold' }} onPress={() => this.sharearticle(item.url)}>Paylaş</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

                                );
                            }}
                        />
                    </View>
                </View>
            );
        }

    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333'
    },
    welcomeUser: {
        width: 400,
        alignSelf: "center",
        marginHorizontal: 30,
        backgroundColor: "green",
        borderRadius: 4,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3
    },
    logoutBtn: {
        width: 250,
        alignSelf: "center",
        marginHorizontal: 30,
        backgroundColor: "#cd853f",
        borderRadius: 4,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    txtWelcome: {
        color: "#FFF"
    },
    logoutTxt: {
        color: "#333"
    },
    news: {
        marginTop: 10,
        alignSelf: 'center'
    },
    gradient: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 15
    }


});




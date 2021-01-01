import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default class Zomato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rest: null
        }
    }


    /**
     * 
     * {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    curl -X GET --header "Accept: application/json" --header "user_key: 9e1460ecdafcd80c6ff8ed5ed7df0a63" "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624"
     */

    componentDidMount() {

        // fetch("https://developers.zomato.com/api/v2.1/cities?q=ist"
        fetch("https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624"
            , {
                method: 'GET',
                headers: {
                    "user-key": "9e1460ecdafcd80c6ff8ed5ed7df0a63"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ rest: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });
    }

    render() {

        console.warn("rest : ", this.state.rest)

        if (!this.state.rest) {
            return null;
        }

        return (
            <View>
                {/* MENU 1 */}
                <Text style={{ fontSize: 30, color: 'cyan', textAlign: 'center', marginTop: 10 }}>MENU 1 </Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Name : {this.state.rest.daily_menus[0].daily_menu.name}</Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Start Date : {this.state.rest.daily_menus[0].daily_menu.start_date}</Text>
                <Text style={{ fontSize: 25, color: 'red', textAlign: 'center', marginTop: 15 }}>FOOD</Text>
                {/* Menu 1 Food */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Name : {this.state.rest.daily_menus[0].daily_menu.dishes[0].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[0].daily_menu.dishes[0].dish.price}</Text>

                {/* Menu 2 */}

                <Text style={{ fontSize: 30, color: 'cyan', textAlign: 'center', marginTop: 20 }}>MENU 2 </Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Name : {this.state.rest.daily_menus[1].daily_menu.name}</Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Start Date : {this.state.rest.daily_menus[1].daily_menu.start_date}</Text>
                <Text style={{ fontSize: 25, color: 'red', textAlign: 'center', marginTop: 15 }}>FOODS</Text>

                {/* Menu 2 Food 1[0] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[0].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[0].dish.price}</Text>

                {/* Menu 2 Food 2[1] */}

                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[1].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[1].dish.price}</Text>

                {/* Menu 2 Food 3[2] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[2].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[2].dish.price}</Text>

                {/* Menu 2 Food 4[3] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[3].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[3].dish.price}</Text>

                {/* Menu 2 Food 5[4] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[4].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[4].dish.price}</Text>

                {/* Menu 2 Food 6[5] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[5].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[5].dish.price}</Text>

                {/* Menu 2 Food 7[6] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[6].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[6].dish.price}</Text>

                {/* Menu 2 Food 8[7] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[7].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[7].dish.price}</Text>

                {/* Menu 2 Food 9[8] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[8].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[8].dish.price}</Text>

                {/* Menu 2 Food 10[9] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[1].daily_menu.dishes[9].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[1].daily_menu.dishes[9].dish.price}</Text>

                {/* MENU 3 */}
                <Text style={{ fontSize: 30, color: 'cyan', textAlign: 'center', marginTop: 10 }}>MENU 3 </Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Name : {this.state.rest.daily_menus[2].daily_menu.name}</Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Start Date : {this.state.rest.daily_menus[2].daily_menu.start_date}</Text>
                <Text style={{ fontSize: 25, color: 'red', textAlign: 'center', marginTop: 15 }}>FOODS</Text>

                {/* Menu 3 Food 1[0] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[2].daily_menu.dishes[0].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[2].daily_menu.dishes[0].dish.price}</Text>

                {/* Menu 3 Food 2[1] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[2].daily_menu.dishes[1].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[2].daily_menu.dishes[1].dish.price}</Text>

                {/* Menu 3 Food 3[2] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[2].daily_menu.dishes[2].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[2].daily_menu.dishes[2].dish.price}</Text>

                {/* Menu 3 Food 4[3] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[2].daily_menu.dishes[3].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[2].daily_menu.dishes[3].dish.price}</Text>

                {/* Menu 3 Food 5[4] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[2].daily_menu.dishes[4].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[2].daily_menu.dishes[4].dish.price}</Text>

                {/* Menu 3 Food 6[5] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[2].daily_menu.dishes[5].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[2].daily_menu.dishes[5].dish.price}</Text>

                {/* Menu 3 Food 7[6] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[2].daily_menu.dishes[6].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[2].daily_menu.dishes[6].dish.price}</Text>

                {/* Menu 3 Food 8[7] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[2].daily_menu.dishes[7].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[2].daily_menu.dishes[7].dish.price}</Text>

                {/* Menu 4 SALADS */}

                <Text style={{ fontSize: 30, color: 'cyan', textAlign: 'center', marginTop: 20 }}>SALADS </Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Name : {this.state.rest.daily_menus[3].daily_menu.name}</Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Start Date : {this.state.rest.daily_menus[3].daily_menu.start_date}</Text>
                <Text style={{ fontSize: 25, color: 'red', textAlign: 'center', marginTop: 15 }}>FOODS</Text>

                {/* Menu 4 Food 1[0] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[3].daily_menu.dishes[0].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[3].daily_menu.dishes[0].dish.price}</Text>

                {/* Menu 4 Food 2[1] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[3].daily_menu.dishes[1].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[3].daily_menu.dishes[1].dish.price}</Text>

                {/* Menu 4 Food 3[2] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[3].daily_menu.dishes[2].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[3].daily_menu.dishes[2].dish.price}</Text>

                {/* Menu 5 DESSERTS */}

                <Text style={{ fontSize: 30, color: 'cyan', textAlign: 'center', marginTop: 20 }}>DESSERTS </Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Name : {this.state.rest.daily_menus[4].daily_menu.name}</Text>
                <Text style={{ fontSize: 25, color: 'yellow', textAlign: 'center' }}>Start Date : {this.state.rest.daily_menus[4].daily_menu.start_date}</Text>
                <Text style={{ fontSize: 25, color: 'red', textAlign: 'center', marginTop: 15 }}>FOODS</Text>

                {/* Menu 5 Food 1[0] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[4].daily_menu.dishes[0].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[4].daily_menu.dishes[1].dish.price}</Text>

                {/* Menu 5 Food 2[1] */}
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center', marginTop: 20 }}>Name : {this.state.rest.daily_menus[4].daily_menu.dishes[1].dish.name}</Text>
                <Text style={{ fontSize: 20, color: 'yellow', textAlign: 'center' }}>Price : {this.state.rest.daily_menus[4].daily_menu.dishes[1].dish.price}</Text>









            </View>
        );
    }
}
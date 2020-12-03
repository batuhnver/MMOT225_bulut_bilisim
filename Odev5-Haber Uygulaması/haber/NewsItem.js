import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class NewsItem extends React.Component {
    render() {

        const { type, title, description } = this.props;
        let buttonBackground;



        if (type === 'Health') {
            buttonBackground = 'red';
        } else if (type === 'Technology') {
            buttonBackground = 'green';
        } else if (type === 'Magazine') {
            buttonBackground = 'yellow';
        } else if (type === 'Politics') {
            buttonBackground = 'steelblue'
        } else if (type === 'Sports') {
            buttonBackground = 'cyan'
        }



        return (
            <TouchableOpacity
                style={{
                    backgroundColor: buttonBackground,
                    flex: 1,
                    height: 150,
                    width: 'auto',
                    marginTop: 15
                }}>

                <Text
                    style={{ color: 'black', fontSize: 25, textAlign: 'center' }}
                >{title}</Text>

                <Text
                    style={{ color: 'black', fontSize: 17, textAlign: 'center', marginTop: 50 }}


                >{description}</Text>

            </TouchableOpacity>
        )

    }


}



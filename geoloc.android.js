import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Button,
    ScrollView
} from 'react-native';

export default class CustomGeolocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: ''
        };
    }

    watchID: ?number = null;

    componentDidMount() {
        console.log("COMPONENT DID MOUNT ");

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({position: JSON.stringify(position.coords)})
                console.log('TEST : '+this.state.position);
            },
            (error) => {
                console.log(JSON.stringify(error));
                this.componentWillUnmount();
            },
            {enableHighAccuracy: true, timeout: 40000, maximumAge: 1000}
        );


        {/**this.watchID = navigator.geolocation.watchPosition((position) => {
            let currentPosition = JSON.stringify(position);
            if(this.state.initialPosition === 'vide')
                this.setState({initialPosition: currentPosition});
            else
                this.setState({lastPosition: currentPosition});
            console.log("Initial : " + this.state.initialPosition);
            console.log("Current : " + this.state.lastPosition);
        });**/}
    }

    componentWillUnmount() {
        console.log("UNMOUNT");
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View>
                <Text>
                    <Text style={styles.title}>Position notée : </Text>
                    {this.state.position}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '500'
    },
});
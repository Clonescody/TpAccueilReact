/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import {StackNavigator} from 'react-navigation';

class HomeView extends Component {

    static navigationOptions = {
        title: 'Bienvenue',
    };

    constructor(props) {
        super(props);
    }

    render() {

        const {navigate} = this.props.navigation;
        return (
            <View style={accueil_styles.container}>
                <View style={accueil_styles.row}>
                    <Text style={accueil_styles.title}>Application test React Native</Text>
                </View>
                <View style={accueil_styles.row}>
                    <CustomButton title="Bouton 1" style="orange" URI='Presentation' navigator={this.props.navigation}/>
                    <CustomButton title="Bouton 2" style="orange" URI='Presentation' navigator={this.props.navigation}/>
                    <CustomButton title="Bouton 3" style="orange" URI='Presentation' navigator={this.props.navigation}/>
                </View>
                <View style={accueil_styles.row}>
                    <CustomButton title="Bouton 1" style="orange"/>
                    <CustomButton title="Bouton 2" style="orange"/>
                    <CustomButton title="Bouton 3" style="orange"/>
                </View>
            </View>
        );
    }
}

const accueil_styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#716f70',
        paddingRight: 10,
        paddingLeft: 10
    },
    title: {}
});

export class PresentationView extends Component {

    static navigationOptions = {
        title: 'Prés de l\'ent',
    };
    render() {
        return (

            <ScrollView style={presentation_style.container}>

                <Text style={presentation_style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </Text>
                <Text style={presentation_style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </Text>
                <Text style={presentation_style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </Text>
                <Text style={presentation_style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </Text>
            </ScrollView>

        )
    };
}

const presentation_style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        flex: 1,
    }
});

class CustomButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    }

    onPressChange = () => {
        const {navigate} = this.props.navigator;
        navigate(this.props.URI);
    };

    render() {
        return (
            <TouchableHighlight onPress={this.onPressChange}>
                <View
                    style={[button_styles.size, ( this.state.pressed ? button_styles.yellow : button_styles[this.props.style] ) ]}>
                    <Text style={button_styles.text}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const button_styles = StyleSheet.create({
    orange: {
        backgroundColor: '#F7760F'
    },
    size: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000000',
        height: 150,
    },
    text: {
        fontSize: 25
    }
});


const App_routes = StackNavigator({
    Home: { screen: HomeView },
    Presentation: { screen: PresentationView },
});

class TpAccueil4_4_2 extends Component {
    render() {
        return (
            <View></View>
        );


    }
}

AppRegistry.registerComponent('TpAccueil4_4_2', () => App_routes);

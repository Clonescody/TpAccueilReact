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
    Alert
} from 'react-native';

class CustomButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    }

    onPressChange = () => {
        this.setState({pressed: !this.state.pressed});
    };

    render(){
        return (
            <TouchableHighlight onPress={this.onPressChange}>
                <View style={[button_styles.size, ( this.state.pressed ? button_styles.yellow : button_styles[this.props.style] ) ]}>
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
    lightblue: {
        backgroundColor: '#91a8d0'
    },
    purple: {
        backgroundColor: '#9b082c'
    },
    yellow: {
        backgroundColor: '#FFFF00'
    },
    size: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000000'
    },
    text: {
        fontSize: 25
    }
});


class Accueil extends Component {
    render() {
        return (
            <View style={accueil_styles.container}>
                <View style={accueil_styles.row}>
                    <Text style={accueil_styles.title}>Application test React Native</Text>
                </View>
                <View style={accueil_styles.row}>
                    <CustomButton title="Bouton 1" style="orange"/>
                    <CustomButton title="Bouton 2" style="lightblue"/>
                    <CustomButton title="Bouton 3" style="purple"/>
                </View>
                <View style={accueil_styles.row}>
                    <CustomButton title="Bouton 1" style="orange"/>
                    <CustomButton title="Bouton 2" style="lightblue"/>
                    <CustomButton title="Bouton 3" style="purple"/>
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
        backgroundColor: '#6fa32e',
        paddingRight: 10,
        paddingLeft: 10
    },
    title: {
        
    }
});

class TpAccueil4_4_2 extends Component {
    render() {
        return (
            <Accueil/>
        );
    }
}

AppRegistry.registerComponent('TpAccueil4_4_2', () => TpAccueil4_4_2);

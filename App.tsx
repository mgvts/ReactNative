import React, {Component, useCallback} from 'react';
import {Text, View, StyleSheet, Button, Alert, Linking} from 'react-native';
import {MyBtn} from "./src/Bybtn";

export default class App extends Component<any, any> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello</Text>
                <Text style={styles.welcome}>this is test App of ReactNative</Text>
                <MyBtn>
                    open GitHub
                </MyBtn>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        marginBottom: 20,
    },
    btn: {

    }
});
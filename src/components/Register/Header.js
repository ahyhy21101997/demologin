import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Head extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Tạo tài khoản</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
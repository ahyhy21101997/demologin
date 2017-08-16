import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class Head extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.props._goback}
                >
                    <Text style={styles.txtRegister}>Quay Lại</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.props._gotoTems}
                >
                    <Text style={styles.txtRegister}>Quy định</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txtRegister: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
})
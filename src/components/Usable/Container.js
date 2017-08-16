import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Container extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2AC38A' }}>
                {this.props.children}
            </View>
        );
    }
}

export default Container;
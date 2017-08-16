import React, { Component, PropTypes } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconInput extends Component {
    render() {
        const { style, iconStyle,
            iconSize, iconName,
            iconColor, placeholder,
            placeholderTextColor, underlineColorAndroid,
            secureTextEntry } = this.props;
        return (
            <View style={[styles.iconInput, this.props.style]} >
                <Icon active name={iconName} size={iconSize} color={iconColor || 'white'} style={iconStyle} />
                <TextInput
                    style={[styles.input, this.props.inputStyle]}
                    underlineColorAndroid={underlineColorAndroid || 'transparent'}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry || false}
                    onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
}
IconInput.propTypes = {
    style: View.propTypes.style, 
    iconStyle: View.propTypes.style,
    iconSize: PropTypes.number, 
    iconName: PropTypes.string.isRequired,
    iconColor: PropTypes.string, 
    inputStyle: View.propTypes.style,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string, 
    underlineColorAndroid: PropTypes.any,
    secureTextEntry: PropTypes.bool,
}



const styles = StyleSheet.create({
    iconInput: {
        marginBottom: 20,
        paddingLeft: 15,
        paddingRight: 2,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 15,
        marginLeft: 5
    },
});
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import IconInput from '../Usable/IconInput';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: String,
            phonenumber: Number,
            email: String,
            password: String
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <IconInput
                    iconName='user'
                    iconSize={22}
                    iconColor='white'
                    placeholder='Tên tài khoản'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => { this.setState({ username: value }) }}
                />
                <IconInput
                    iconName='phone'
                    iconSize={22}
                    iconColor='white'
                    placeholder='Số điện thoại'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => { this.setState({ username: value }) }}
                />
                <IconInput
                    iconName='envelope'
                    iconSize={22}
                    iconColor='white'
                    placeholder='Email'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => { this.setState({ username: value }) }}
                />
                <IconInput
                    iconName='unlock'
                    iconSize={22}
                    iconColor='white'
                    placeholder='Mật khẩu'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={(value) => { this.setState({ password: value }) }}
                />

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.btnRegisterTitle}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        padding: 10
    },
    btnRegister: {
        marginBottom: 15,
        height: 40,
        width: '100%',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.8)'
    },
    btnRegisterTitle: {
        fontSize: 17,
        color: 'white',
    },
});

import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconInput from '../Usable/IconInput';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: String,
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
                    placeholder='Mật khẩu'
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
                <TouchableOpacity style={styles.btnLogin}
                    onPress={() => this.props.doLogin(this.state.username, this.state.password)}
                >
                    <Text style={styles.btnTitle}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLoginFb}>
                    <Icon active name='facebook' size={22} color='white' />
                    <Text style={styles.btnTitleFb}>Đăng nhập với Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        padding: 10,
    },
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
        paddingLeft: 5,

    },
    btnLogin: {
        marginBottom: 15,
        height: 50,
        width: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04CDA1'
    },
    btnTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    btnLoginFb: {
        marginBottom: 15,
        height: 40,
        width: '100%',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3B5998'
    },
    btnTitleFb: {
        marginLeft: 20,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
})
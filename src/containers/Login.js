import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Login/Header';
import Form from '../components/Login/Form';
import Footer from '../components/Login/Footer';

export default class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    constructor(props) {
        super(props);
    }
    // thực hiện login với username và pasword
    _doLogin(username, password) {
        Alert.alert(username)

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2AC38A' }}>
                <Header />
                <Form doLogin={this._doLogin.bind(this)} />
                <Footer
                    gotoRegister={() => { this.props.navigation.navigate('Register'); }}
                />
            </View>
        );
    }
}

const mapStateToProps = () => {

}
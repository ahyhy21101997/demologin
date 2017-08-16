import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../components/Register/Header';
import Form from '../components/Register/Form';
import Footer from '../components/Register/Footer';
import Container from '../components/Usable/Container';

export class Register extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }

    render() {
        return (
            <Container>
                <Header />
                <Form />
                <Footer _goback={() => { this.props.navigation.goBack() }} />
            </Container>
        );
    }
}

export default Register;
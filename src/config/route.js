import Login from '../containers/Login';
import Register from '../containers/Register';

import { View } from 'react-native';

const route = {
    Home: { screen: Login },
    Login: { screen: Login },
    Register: { screen: Register }
}
export default route;
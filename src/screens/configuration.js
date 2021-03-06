import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Expo from "expo"
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Styles from '../styles/styles'
import AsyncStorage from '@react-native-community/async-storage'
import * as Font from 'expo-font'

// import {auth2} from './src/functions/auth'


const auth = require('../functions/auth')

class Configuration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            label: "Carregando...",
            loading: true,
        }

    }

    async componentDidMount() {

        await Font.loadAsync({
            'SF-Pro-Display-Ultralight': require('../assets/fonts/SF-Pro-Display-Ultralight.ttf'),
            'SFProDisplay-Regular': require('../assets/fonts/SFProDisplay-Regular.ttf'),
            'SFProDisplay-Bold': require('../assets/fonts/SFProDisplay-Bold.ttf'),
            'SFProDisplay-Semibold': require('../assets/fonts/SFProDisplay-Semibold.ttf'),
            'SFProDisplay-Medium': require('../assets/fonts/SFProDisplay-Medium.ttf'),
            
        })
        this.setState({ loading: false });

        const { navigation } = this.props
        let email = await AsyncStorage.getItem('EMAIL')
        let psw = await AsyncStorage.getItem('PSW')

        try {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: await auth.login(email, psw) ? 'Home' : 'Login' }],
                }))
        } catch (error) {
            console.log(error.toString(error));
        }
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator />
        }
        return (
            <View style={styles.container}>
                <Text style={Styles.txtLoading}>{this.state.label}</Text>
                <StatusBar style='auto' />
            </View>
        )
    }
}

function isLoged() {
    const request = new Request('https://frontend-test.agendaedu.com/api/login', {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'student@ae.com',
            password: '123456'
        })
    })

    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('erro em no servidor.')
            }
        })
        .then(response => {
            // console.log(`RESPONSE: ${JSON.stringify(response)} `)
            console.debug(response)
            // ...
        })
        .catch(error => {
            console.log(`RESPONSE: ${JSON.stringify(error)} `)
            // console.error(error)
        })
}

function getEvents() {
    const myRequest = new Request(
        'https://frontend-test.agendaedu.com/api/events?limit=3;page=34',
        {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                token:
                    '3O701JINSMVIRtuuB7fY1SZ37bYIqDoPTs1auRYzHzLzxXXcuxvptQaowASztVJzAnGl6X00MRIZYjOTAN9SDt0rMZ47EfCNrAWB2oadSedsKbGGx2FRE9HnnloCs0sbONRvpqg5YmI7lrZ90RhrKGI',
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
            // body: JSON.stringify({
            //   token: '3O701JINSMVIRtuuB7fY1SZ37bYIqDoPTs1auRYzHzLzxXXcuxvptQaowASztVJzAnGl6X00MRIZYjOTAN9SDt0rMZ47EfCNrAWB2oadSedsKbGGx2FRE9HnnloCs0sbONRvpqg5YmI7lrZ90RhrKGI',
            // })
        }
    )

    fetch(myRequest)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('erro em no servidor.')
            }
        })
        .then(response => {
            // console.log(`RESPONSE: ${JSON.stringify(response)} `)
            console.debug(response)
            // ...
        })
        .catch(error => {
            console.log(`RESPONSE: ${JSON.stringify(error)} `)
            // console.error(error)
        })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default function ({ props, route }) {
    const navigation = useNavigation()

    return <Configuration {...props} navigation={navigation} />
}

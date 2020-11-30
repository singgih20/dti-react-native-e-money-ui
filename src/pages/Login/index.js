import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input, Link } from '../../components'
import axios from 'axios';
import { getData, showError, showSuccess, storeData } from '../../utils';
import { useEffect } from 'react';

export default function Login({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        getData('gagal').then(res => {
            setStatus(res)
        })
    }, [])

    const onSubmit = () => {
        axios.post('https://emoneydti.basicteknologi.co.id/index.php/api/users/login', {
            email,
            password
        })
            .then(function (response) {
                if (response.data.status === "true") {
                    storeData('user', response.data)
                    console.log('login berhasil')
                    navigation.navigate('MainApp', {
                        data: response.data.data
                    })
                } else {
                    console.log('gagal login')
                }
            })
            .catch(err => {
                showError(err.message);
            })
    }

    return (
        <View style={styles.page}>
            <View style={styles.top}>
                <Text style={styles.text}>
                    Logo
             </Text>
            </View>
            <Input
                label="Email"
                onChangeText={(value) => setEmail(value)}
                value={email}
            />
            <Gap height={16} />
            <Input
                secureTextEntry={true}
                label="Password"
                onChangeText={(value) => setPassword(value)}
                value={password}
            />
            <Gap height={16} />
            <Button title="Login" onPress={() => onSubmit()} />
            <Gap height={10} />
            <Link title="Create My New Account" size={16} align="center" onPress={() => navigation.navigate('Register')} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: '7%'
    },
    top: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 24,
        // fontFamily: 'Nunito-SemiBold'
    }
})

import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input, Link } from '../../components'


export default function Login({ navigation }) {
    return (
        <View style={styles.page}>
            <View style={styles.top}>
                <Text style={styles.text}>
                    Logo
             </Text>
            </View>
            <Input
                label="Email"

            />
            <Gap height={16} />
            <Input
                secureTextEntry={true}
                label="Password"
            />
            <Gap height={16} />
            <Button title="Login" onPress={() => navigation.replace('MainApp')} />
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

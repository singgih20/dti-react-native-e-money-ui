import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts, colors } from '../../utils'

export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    }, [])

    return (
        <View style={styles.page}>
            <Text style={styles.text}>E-Money App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 60,
        color: 'white',
        fontFamily: fonts.primary[200],
        textAlign: 'center'
    }
})

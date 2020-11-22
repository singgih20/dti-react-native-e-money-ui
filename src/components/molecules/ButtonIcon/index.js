import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAdd, IconProfileActive, IconQrCode, IconRightArrow } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function ButtonIcon({ title, onPress }) {

    const Icon = () => {
        if (title === 'Top Up') {
            return <IconAdd />
        }
        if (title === 'QR Pay') {
            return <IconQrCode />
        }
        if (title === 'Transfer') {
            return <IconRightArrow />
        }

        return <IconAdd />
    }

    return (
        <View >
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Icon />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 5
    },
    title: {
        fontFamily: fonts.primary[400],
        color: colors.white
    }
})

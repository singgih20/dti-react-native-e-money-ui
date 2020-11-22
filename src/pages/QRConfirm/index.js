import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILQr, ILTopUp } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { colors, fonts } from '../../utils'

export default function QRConfirm({ navigation, route }) {

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={ILQr} />
            </View>
            <Gap height={28} />
            <Text style={styles.nominal}>Rp. 60.000</Text>

            <Gap height={23} />
            <View style={styles.info}>
                <Text style={styles.textInfo1}>Pembayaran kepada:</Text>
                <Text style={styles.textInfo2}>DTI Telkom University</Text>
                <Text style={styles.textInfo2}>Jl. Telekomunikasi, Kota Bandung</Text>
            </View>
            <Gap height={27} />
            <Button title="Submit" onPress={() => navigation.navigate("QRSuccess")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
        paddingHorizontal: 32,
        backgroundColor: 'white'
    },
    nominal: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 24
    },
    image: {
        alignItems: 'center',

    },
    textView: {
        alignItems: 'center'
    },
    text: {
        fontFamily: fonts.primary[400],
        fontSize: 24
    },
    info: {
        width: '100%',
        backgroundColor: colors.primary,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInfo1: {
        color: colors.white,
        fontFamily: fonts.primary[400],
        fontSize: 18
    },
    textInfo2: {
        color: colors.white,
        fontFamily: fonts.primary[700],
        fontSize: 18
    }
})

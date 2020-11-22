import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILTopUp } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { colors, fonts } from '../../utils'

export default function FinishTopUp({ navigation, route }) {
    const nominal = route.params.nominal;

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={ILTopUp} />
            </View>
            <Gap height={28} />
            <View style={styles.textView}>
                <Text style={styles.text}>Top Up Berhasil!</Text>
                <Text style={styles.text}>{nominal}</Text>
            </View>
            <Gap height={23} />
            <View style={styles.info}>
                <Text style={styles.textInfo}>20 Agustus 2020</Text>
                <Text style={styles.textInfo}>VA Mandiri</Text>
            </View>
            <Gap height={27} />
            <Button title="Selesai" onPress={() => navigation.navigate("MainApp")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center',
        paddingHorizontal: 32
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
    textInfo: {
        color: colors.white,
        fontFamily: fonts.primary[400],
        fontSize: 18
    }
})

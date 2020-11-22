import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILTransfer } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { colors, fonts } from '../../utils'

export default function TransferSuccess({ route, navigation }) {
    const nominal = route.params.nominal;
    console.log(nominal)
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={ILTransfer} />
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Transfer Berhasil! </Text>
                <Text style={styles.text}>Rp. {nominal} </Text>
                <Gap height={23} />
                <View style={styles.info}>
                    <Text style={styles.textInfo}>20 Agustus 2020</Text>
                    <Text style={styles.textInfo}>Penerima: Dendi Aditiya</Text>
                    <Text style={styles.textInfo}>0813131xxx</Text>
                </View>
            </View>

            <Gap height={29} />
            <Button title="selesai" onPress={() => navigation.navigate('MainApp')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.white,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    image: {
        alignItems: 'center'
    },
    content: {
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        fontFamily: fonts.primary[400]
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

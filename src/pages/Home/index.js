import React, { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonIcon, HistoryList } from '../../components/molecules'
import { colors, fonts, getData } from '../../utils'
import axios from 'axios';

export default function Home({ navigation, route }) {
    const { data } = route.params;
    const [saldo, setSaldo] = useState('')
    useEffect(() => {
        console.log(data)
        // axios.get(`https://emoneydti.basicteknologi.co.id/index.php/api/dashboard?id_user=`)
        //     .then(function (res) {
        //         setSaldo(res.data.saldo)
        //     }).catch(err => {
        //         console.log(err)
        //     })
    }, [])

    return (
        <View style={styles.page}>
            <View style={styles.top}>
                <Text style={styles.text}>Saldo : </Text>
                <Text style={styles.description}>Rp. {saldo}</Text>
            </View>

            <View style={styles.mid}>
                <View style={styles.midContainer}>
                    <ButtonIcon onPress={() => navigation.navigate('TopUp')} title="Top Up" />
                    <ButtonIcon title="QR Pay" onPress={() => navigation.navigate('QRScan')} />
                    <ButtonIcon onPress={() => navigation.navigate('Transfer')} title="Transfer" />
                </View>

            </View>
            <View style={styles.bottom}>
                <Text>5 Transaksi terakhir anda</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginHorizontal: 16
    },
    text: {
        fontFamily: fonts.primary[400],
        fontSize: 14
    },
    description: {
        fontFamily: fonts.primary[600],
        fontSize: 28
    },
    top: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'flex-end'
    },
    mid: {
        flex: 1,
        paddingTop: 20
    },
    midContainer: {
        flex: 1,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 8
    },
    bottom: {
        flex: 3,
        marginTop: 40
    }
})

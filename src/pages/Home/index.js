import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonIcon, HistoryList } from '../../components/molecules'
import { colors, fonts } from '../../utils'

export default function Home({ navigation }) {
    return (
        <View style={styles.page}>
            <View style={styles.top}>
                <Text style={styles.text}>Saldo Anda: </Text>
                <Text style={styles.description}>Rp. 1.234.567.000</Text>
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
                <HistoryList />
                <HistoryList />
                <HistoryList />
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

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconTwoArrow } from '../../../assets'

export default function HistoryList() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <IconTwoArrow />
            </View>

            <View style={styles.mid}>
                <Text>
                    Rp.80.000
            </Text>
                <Text>Transfer ke 081238012380</Text>
            </View>

            <View style={styles.right}>
                <Text>20/12/2020</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 72,
        width: 319,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    left: {
        flex: 1
    },
    mid: {
        flex: 4
    },
    right: {
        flex: 2
    }
})

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILTransfer } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { colors } from '../../utils'

export default function Transfer({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={ILTransfer} />
            </View>
            <View>
                <Input label="Nominal Transfer" />
                <Gap height={17} />
                <Input label="Nomor Hp Penerima" />
            </View>
            <Gap height={21} />
            <Button title="Periksa Nomor" onPress={() => navigation.navigate('TransferSecond')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.white,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    image: {
        alignItems: 'center'
    }
})

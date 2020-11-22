import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILTransfer } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { colors, fonts } from '../../utils'

export default function TransferSecond({ navigation }) {
    const [nominal, setNominal] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={ILTransfer} />
            </View>
            <View>
                <Input label="Nominal Transfer" value={nominal} onChangeText={(value) => setNominal(value)} />
                <Gap height={17} />
                <Input label="Nomor Hp Penerima" />
            </View>
            <Gap height={16} />
            <View style={styles.text}>
                <Text style={styles.text1}>Penerima:</Text>
                <Text>Dendy Aditya</Text>
            </View>
            <Gap height={21} />
            <Button title="Transfer" onPress={() => navigation.navigate('TransferSuccess', nominal)} />
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
    },
    text: {
        alignItems: 'center'
    },
    text1: {
        fontSize: 20,
        fontFamily: fonts.primary[400]
    },
    text2: {
        fontSize: 20,
        fontFamily: fonts.primary[300]
    },
})

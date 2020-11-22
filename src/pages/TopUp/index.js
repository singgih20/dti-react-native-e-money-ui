import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILTopUp } from '../../assets'
import { Button, Gap, Input } from '../../components'

export default function TopUp({ navigation }) {
    const [nominal, setNominal] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={ILTopUp} />
            </View>
            <Gap height={28} />
            <View>
                <Input label="Nominal Top Up" value={nominal} onChangeText={(value) => setNominal(value)} />
                <Gap height={20} />
                <Button title="SUBMIT" onPress={() => navigation.navigate('FinishTopUp', { nominal })} />
            </View>
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
    }
})

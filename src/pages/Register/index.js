import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input, Link } from '../../components'
import { colors } from '../../utils'

export default function Register() {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.text}>
                        Logo
             </Text>
                </View>
                <Input
                    label="Email"

                />
                <Gap height={16} />
                <Input
                    label="Password"
                    secureTextEntry={true}
                />
                <Gap height={16} />
                <Input
                    label="Nama"
                />
                <Gap height={16} />
                <Input
                    label="Nomor Handphone"
                />
                <Gap height={24} />
                <Button title="Submit" />
                <Gap height={10} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        // marginHorizontal: '7%',
        backgroundColor: colors.white
    },
    container: {
        marginHorizontal: '7%',
    },
    top: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 24
    }
})

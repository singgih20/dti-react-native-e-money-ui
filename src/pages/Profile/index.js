import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils/colors'

import { Button, Gap } from '../../components'
export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.circle}></View>
                <Gap height={35} />
                <Text style={styles.text}>Singgih Aji Sasongko</Text>
                <Text style={styles.text}>081317080</Text>
            </View>
            <Gap height={35} />
            <View style={styles.bottom}>
                <Button title="Ubah Profil" onPress={() => navigation.replace('MainApp')} />
                <Gap height={26} />
                <Button title="Ganti Password" onPress={() => navigation.replace('MainApp')} />
                <Gap height={26} />
                <Button title="Logout" onPress={() => navigation.replace('MainApp')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    circle: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 50
    },
    top: {
        flex: 1,
        backgroundColor: colors.primary2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 2,
        paddingHorizontal: 41
    },
    text: {
        color: colors.white
    }
})

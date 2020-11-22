import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconHistory, IconHome, IconProfile, IconHistoryActive, IconHomeActive, IconProfileActive } from '../../../assets/icon'
import { fonts, colors } from '../../../utils'

export default function TabItem({ title, active, onLongPress, onPress }) {
    const Icon = () => {
        if (title === 'Home') {
            return active ? <IconHomeActive /> : <IconHome />
        }

        if (title === 'History') {
            return active ? <IconHistoryActive /> : <IconHistory />
        }

        if (title === 'Profile') {
            return active ? <IconProfileActive /> : <IconProfile />
        }

        return <IconHome />;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    text: (active) => ({
        fontFamily: fonts.primary[600],
        fontSize: 10,
        marginTop: 4,
        color: active ? colors.primary : colors.black
    })
})

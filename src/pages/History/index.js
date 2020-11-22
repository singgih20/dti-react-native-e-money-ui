import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { HistoryList } from '../../components'

export default function History() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HistoryList />
                <HistoryList />
                <HistoryList />
                <HistoryList />
                <HistoryList />
                <HistoryList />
                <HistoryList />
                <HistoryList />
                <HistoryList />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

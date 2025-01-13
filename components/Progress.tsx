import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import ProgressCard from './ProgressCard'
import Feather from '@expo/vector-icons/Feather'

const Progress = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: Colors.primary.DEFAULT, fontSize: 16, fontWeight: "400" }}>Task Progress</Text>
                <Text>3/7 Tasks</Text>
                <Text>Completed Today.</Text>
                <View>
                    <Feather name='calendar' color={Colors.secondary[200]} size={12} />
                    <Text>Jan. 10</Text>
                </View>
            </View>
            <View>
                <ProgressCard />
            </View>
        </View>
    )
}

export default Progress

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        borderRadius: 12,
        backgroundColor: Colors.secondary[100],
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10
    }
})
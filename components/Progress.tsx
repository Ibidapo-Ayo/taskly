import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import ProgressCard from './ProgressCard'
import Feather from '@expo/vector-icons/Feather'
import { generateDate } from '@/lib/helper'


const Progress = () => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, gap: 15 }}>
                <View style={{gap: 5}}>  
                    <Text style={{ color: Colors.primary.DEFAULT, fontSize: 16, fontWeight: "400", letterSpacing: -1,  fontFamily: "Inter_600SemiBold" }}>Task Progress</Text>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "500", fontFamily: "Inter_600SemiBold", letterSpacing: -1 }}>3/7 Tasks Completed Today.</Text>
                </View>

                <View>
                    <Feather name='calendar' color={Colors.secondary[200]} size={14} />
                    <Text style={{ color: Colors.secondary[200], fontSize: 14, fontFamily: "Inter_600SemiBold" }}>{generateDate()}</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems:"flex-end" }}>
                <ProgressCard />
            </View>
        </View>
    )
}

export default Progress

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 12,
        backgroundColor: Colors.secondary[100],
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10
    }
})
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import UserImage from "../../assets/images/profile_pic.jpg"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: true,
        headerStyle: {
          backgroundColor: "#000"
        },
        headerTitleAlign: "center",
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          headerLeft: () => (
            <View style={{
              paddingHorizontal: 20,
            }}>
             <View>
              <Text style={{ color: Colors.secondary[200], fontWeight: "600", fontSize: 18 }}>Friday</Text>
              <Text>January 10</Text>
             </View>
            </View>
          ),
          headerTitle: "Taskly",
          headerShadowVisible: false,
          headerRight: () => (
            <View style={{
              paddingHorizontal: 20,
            }}>
              <Image source={UserImage}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100
                }}
              />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="task"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <Feather name="clipboard" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="earn"
        options={{
          title: 'Earn',
          tabBarIcon: ({ color }) => <Ionicons name="cash" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

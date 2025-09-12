import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import ReviewsScreen from './src/screens/ReviewsScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import RecommendScreen from './src/screens/RecommendScreen';
import NotificationScreen from './src/screens/NotificationScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#667eea" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Reviews') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'Community') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Recommend') {
              iconName = focused ? 'share-social' : 'share-social-outline';
            } else {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#667eea',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#e0e0e0',
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ tabBarLabel: '홈' }}
        />
        <Tab.Screen 
          name="Reviews" 
          component={ReviewsScreen}
          options={{ tabBarLabel: '후기' }}
        />
        <Tab.Screen 
          name="Community" 
          component={CommunityScreen}
          options={{ tabBarLabel: '커뮤니티' }}
        />
        <Tab.Screen 
          name="Recommend" 
          component={RecommendScreen}
          options={{ tabBarLabel: '추천하기' }}
        />
        <Tab.Screen 
          name="Notifications" 
          component={NotificationScreen}
          options={{ tabBarLabel: '알림및공지' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
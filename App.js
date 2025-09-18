/App.js
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import ReviewsScreen from './src/screens/ReviewsScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import RecommendScreen from './src/screens/RecommendScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import colors from './src/theme/colors';

enableScreens();

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background || '#F7F7FB',
    primary: colors.primary || '#FF6B00',
    card: colors.card || '#FFFFFF',
    text: colors.text || '#000000',
    border: colors.border || '#E6E6EA',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.muted || '#888',
          tabBarStyle: {
            backgroundColor: colors.card || '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: colors.border || '#E6E6EA',
            height: 80,
            paddingBottom: 10,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginBottom: 2,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home-outline';
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Reviews':
                iconName = focused ? 'star' : 'star-outline';
                break;
              case 'Community':
                iconName = focused ? 'people' : 'people-outline';
                break;
              case 'Recommend':
                iconName = focused ? 'share-social' : 'share-social-outline';
                break;
              case 'Notifications':
                iconName = focused ? 'notifications' : 'notifications-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
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
          options={{ tabBarLabel: '알림공지' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

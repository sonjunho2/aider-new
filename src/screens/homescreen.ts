import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const avatars = [
    { id: 1, color: '#FF6B35', avatar: require('../../assets/avatars/avatar1.png') },
    { id: 2, color: '#F7931E', avatar: require('../../assets/avatars/avatar2.png') },
    { id: 3, color: '#4ECDC4', avatar: require('../../assets/avatars/avatar3.png') },
    { id: 4, color: '#556B8D', avatar: require('../../assets/avatars/avatar4.png') },
    { id: 5, color: '#FFD23F', avatar: require('../../assets/avatars/avatar5.png') },
    { id: 6, color: '#4ECDC4', avatar: require('../../assets/avatars/avatar6.png') },
    { id: 7, color: '#FFD23F', avatar: require('../../assets/avatars/avatar7.png') },
    { id: 8, color: '#4ECDC4', avatar: require('../../assets/avatars/avatar8.png') },
    { id: 9, color: '#FF6B35', avatar: require('../../assets/avatars/avatar9.png') },
  ];

  const specialItems = [
    { id: 1, image: require('../../assets/special/owl.png') },
    { id: 2, image: require('../../assets/special/flower.png') },
    { id: 3, image: require('../../assets/special/butterfly.png') },
    { id: 4, image: require('../../assets/special/orange.png') },
    { id: 5, image: require('../../assets/special/person.png') },
    { id: 6, image: require('../../assets/special/mario.png') },
  ];

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 10, fontWeight: '600' }}>프로필</Text>
          </View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#FFD700', textShadowColor: 'rgba(0,0,0,0.3)', textShadowOffset: {width: 2, height: 2}, textShadowRadius: 4 }}>
            ANDER
          </Text>
        </View>

        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
          {/* Profile Selection Grid */}
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, marginBottom: 20, elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {avatars.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: (width - 80) / 3,
                    height: (width - 80) / 3,
                    backgroundColor: item.color,
                    borderRadius: (width - 80) / 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 15,
                    elevation: 4,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Image 
                    source={item.avatar} 
                    style={{ width: '70%', height: '70%', borderRadius: (width - 80) / 8 }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* Special Items */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
              {specialItems.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    width: (width - 80) / 3,
                    height: (width - 80) / 3,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 15,
                    elevation: 2,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                  }}
                >
                  <Image 
                    source={item.image} 
                    style={{ width: '80%', height: '80%' }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#4C51BF',
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 25,
                elevation: 6,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>변경</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: 25,
                borderWidth: 2,
                borderColor: 'rgba(255,255,255,0.5)',
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>취소</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewsScreen() {
  const dreams = [
    {
      id: 1,
      title: '가족과 제주도로 여행가고 싶어요.',
      current: 1220000,
      total: 78100000,
      isHighlighted: true
    },
    {
      id: 2,
      title: '나만의 공방을 열고 싶어요.',
      current: 20000,
      total: 78100000,
      isHighlighted: false
    },
    {
      id: 3,
      title: '세계일주를 하고 싶어요.',
      current: 500000,
      total: 120000000,
      isHighlighted: false
    }
  ];

  const users = [
    { name: '화이팅', id: 'fkd5*******' },
    { name: '렌트는 하나렌트카', id: 'sano*******' },
    { name: '', id: 'mash*******' },
    { name: 'ㅇㅇ', id: 'polo*******' },
    { name: '곧 가시컬!!', id: 'hidd*******' }
  ];

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 10, fontWeight: '600' }}>응원글</Text>
          </View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#FFD700', textShadowColor: 'rgba(0,0,0,0.3)', textShadowOffset: {width: 2, height: 2}, textShadowRadius: 4 }}>
            ANDER
          </Text>
        </View>

        {/* Profile Section */}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 }}>
          <TouchableOpacity style={{ backgroundColor: '#FFD700', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 }}>
            <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>주의사항필독</Text>
          </TouchableOpacity>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: 'white', fontSize: 14, opacity: 0.9 }}>반가워요</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>sonoo2 님</Text>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <View style={{ width: 60, height: 60, backgroundColor: '#4ECDC4', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="person" size={30} color="white" />
            </View>
          </View>
        </View>

        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
          {/* Featured Dream */}
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, marginBottom: 20, elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <View style={{ backgroundColor: '#667eea', width: 30, height: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>1</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 15 }}>
                  가족과 제주도로 여행가고 싶어요.
                </Text>
                <View style={{ backgroundColor: '#E2E8F0', borderRadius: 20, padding: 3 }}>
                  <View style={{ backgroundColor: 'white', borderRadius: 17, paddingVertical: 8, paddingHorizontal: 15 }}>
                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: '#667eea' }}>
                      1,220,000 P / 78,100,000 P
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Support Messages */}
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 }}>
            {users.map((user, index) => (
              <View key={index} style={{ marginBottom: 15, paddingBottom: 15, borderBottomWidth: index < users.length - 1 ? 1 : 0, borderBottomColor: '#E2E8F0' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: user.name ? '#333' : '#667eea' }}>
                    {user.name || 'ㅇㅇ'}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#666' }}>{user.id}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Social Share Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#EF4444',
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 25,
              alignSelf: 'center',
              marginVertical: 30,
              elevation: 6,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>아래 링크로 추천해주세요</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
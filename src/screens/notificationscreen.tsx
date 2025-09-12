import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationScreen() {
  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 10, fontWeight: '600' }}>실현된꿈</Text>
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
          {/* Points Display */}
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, marginBottom: 20, elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>내가받은 총 POINT</Text>
              <View style={{ backgroundColor: '#F7FAFC', borderWidth: 2, borderColor: '#E2E8F0', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>1,240,000 P</Text>
              </View>
            </View>

            {/* Navigation Icons */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10, borderTopWidth: 1, borderTopColor: '#E2E8F0' }}>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Ionicons name="person-outline" size={24} color="#666" />
                <Text style={{ fontSize: 12, color: '#666', marginTop: 5, fontWeight: '600' }}>MY</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Ionicons name="document-text-outline" size={24} color="#666" />
                <Text style={{ fontSize: 12, color: '#666', marginTop: 5, fontWeight: '600' }}>실현된꿈</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Ionicons name="chatbubbles-outline" size={24} color="#666" />
                <Text style={{ fontSize: 12, color: '#666', marginTop: 5, fontWeight: '600' }}>성공후기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Ionicons name="notifications-outline" size={24} color="#667eea" />
                <Text style={{ fontSize: 12, color: '#667eea', marginTop: 5, fontWeight: '600' }}>알림</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Empty State Message */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 60 }}>
            <Ionicons name="checkmark-circle-outline" size={80} color="rgba(255,255,255,0.6)" />
            <Text style={{ 
              color: 'white', 
              fontSize: 18, 
              fontWeight: '600', 
              marginTop: 20,
              textAlign: 'center',
              opacity: 0.9
            }}>
              꿈을 이루신걸 축하드립니다
            </Text>
            <Text style={{ 
              color: 'white', 
              fontSize: 14, 
              marginTop: 10,
              textAlign: 'center',
              opacity: 0.7,
              lineHeight: 22
            }}>
              아직 실현된 꿈이 없습니다.{'\n'}첫 번째 꿈을 이뤄보세요!
            </Text>
          </View>

          {/* Social Share Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#EF4444',
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 25,
              alignSelf: 'center',
              marginBottom: 30,
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
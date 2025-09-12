// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [showComments, setShowComments] = useState(false);
  const [myPoints] = useState(245000);
  
  const supporters = [
    { id: 1, name: '김철수', comment: '꿈을 이루시길 응원합니다!', date: '2024.03.15' },
    { id: 2, name: '이영희', comment: '항상 파이팅하세요!', date: '2024.03.14' },
    { id: 3, name: '박민수', comment: '좋은 결과 있으시길!', date: '2024.03.13' },
    { id: 4, name: '정수진', comment: '응원하고 있어요', date: '2024.03.12' },
    { id: 5, name: '최동환', comment: '꼭 성공하세요!', date: '2024.03.11' },
  ];

  return (
    <LinearGradient
      colors={['#FFB347', '#FF8C00', '#FF6B00']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
          {/* Header with Title */}
          <View style={{ alignItems: 'center', paddingVertical: 40 }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <View style={{ backgroundColor: 'rgba(255,215,0,0.3)', borderRadius: 50, padding: 15, marginBottom: 15 }}>
                <Ionicons name="star" size={60} color="#FFD700" />
              </View>
              <Text style={{ 
                fontSize: 36, 
                fontWeight: 'bold', 
                color: 'white',
                textShadowColor: 'rgba(0,0,0,0.3)',
                textShadowOffset: {width: 2, height: 2},
                textShadowRadius: 4,
                marginBottom: 10
              }}>
                ANDER
              </Text>
              <Text style={{ 
                fontSize: 16, 
                color: 'white',
                opacity: 0.9,
                textAlign: 'center'
              }}>
                1만원으로 시작하는 돈 불리기 게임!
              </Text>
            </View>
          </View>

          {/* Points Box */}
          <View style={{ 
            backgroundColor: 'white', 
            borderRadius: 20, 
            padding: 25, 
            marginBottom: 20, 
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8
          }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 15 }}>
                내가 받은 총 POINT
              </Text>
              <View style={{ 
                backgroundColor: '#FFF8DC', 
                borderWidth: 3, 
                borderColor: '#FFD700', 
                paddingHorizontal: 30, 
                paddingVertical: 15, 
                borderRadius: 15 
              }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#FF6B00' }}>
                  {myPoints.toLocaleString()} P
                </Text>
              </View>
            </View>
          </View>

          {/* My Dream Box */}
          <TouchableOpacity 
            style={{ 
              backgroundColor: 'white', 
              borderRadius: 20, 
              padding: 25, 
              marginBottom: 30, 
              elevation: 8,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8
            }}
            onPress={() => setShowComments(true)}
          >
            <View style={{ alignItems: 'center' }}>
              <Ionicons name="heart" size={40} color="#FF6B00" style={{ marginBottom: 15 }} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>
                나의 꿈
              </Text>
              <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', lineHeight: 24 }}>
                가족과 함께 제주도 여행가기
              </Text>
              <View style={{ marginTop: 15, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#eee' }}>
                <Text style={{ fontSize: 14, color: '#999', textAlign: 'center' }}>
                  탭하여 응원 메시지 보기
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Comments Modal */}
        <Modal
          visible={showComments}
          animationType="slide"
          onRequestClose={() => setShowComments(false)}
        >
          <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              paddingHorizontal: 20, 
              paddingVertical: 15,
              backgroundColor: '#FF6B00'
            }}>
              <TouchableOpacity onPress={() => setShowComments(false)}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', marginLeft: 15 }}>
                나를 추천한 사람들의 응원 메시지
              </Text>
            </View>
            
            <FlatList
              data={supporters}
              style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}
              renderItem={({ item }) => (
                <View style={{ 
                  backgroundColor: 'white', 
                  borderRadius: 15, 
                  padding: 20, 
                  marginBottom: 15,
                  elevation: 3,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 3
                }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#999' }}>
                      {item.date}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 14, color: '#666', lineHeight: 20 }}>
                    {item.comment}
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
}
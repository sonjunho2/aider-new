// screens/ReviewsScreen.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewsScreen() {
  const reviews = [
    {
      id: 1,
      name: '김성공',
      goal: '내 카페 오픈',
      amount: '5,500,000원',
      period: '8개월',
      story: '처음에는 정말 반신반의했는데, 꾸준히 참여하고 친구들에게 추천하다 보니 정말로 목표 금액을 모을 수 있었어요! 이제 제 카페를 운영하고 있습니다.',
      date: '2024.02.15',
      rating: 5
    },
    {
      id: 2,
      name: '박여행러',
      goal: '유럽 한 달 여행',
      amount: '8,200,000원',
      period: '1년 2개월',
      story: '유럽 여행이 꿈이었는데 혼자서는 돈 모으기가 힘들었어요. 이 앱을 통해서 많은 분들의 도움을 받아 꿈을 이룰 수 있었습니다. 정말 감사해요!',
      date: '2024.01.28',
      rating: 5
    },
    {
      id: 3,
      name: '이창업자',
      goal: '온라인 쇼핑몰 창업',
      amount: '12,000,000원',
      period: '1년 6개월',
      story: '창업 자금을 모으는게 가장 큰 고민이었는데, 여기서 많은 도움을 받았어요. 지금은 성공적으로 사업을 운영하고 있고, 저도 다른 분들을 도와주고 있습니다.',
      date: '2023.12.10',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Ionicons
        key={index}
        name={index < rating ? 'star' : 'star-outline'}
        size={16}
        color="#FFD700"
      />
    ));
  };

  return (
    <LinearGradient colors={['#FFB347', '#FF8C00']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>성공 후기</Text>
          <Text style={{ color: 'white', fontSize: 14, opacity: 0.9, marginTop: 5 }}>
            꿈을 이룬 분들의 진짜 이야기
          </Text>
        </View>

        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
          {reviews.map((review) => (
            <View
              key={review.id}
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 25,
                marginBottom: 20,
                elevation: 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                <View style={{ 
                  width: 50, 
                  height: 50, 
                  backgroundColor: '#FF6B00', 
                  borderRadius: 25, 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginRight: 15 
                }}>
                  <Ionicons name="person" size={24} color="white" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>
                    {review.name}
                  </Text>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    {renderStars(review.rating)}
                  </View>
                </View>
              </View>

              <View style={{ 
                backgroundColor: '#FFF8DC', 
                borderRadius: 15, 
                padding: 15, 
                marginBottom: 15,
                borderLeftWidth: 4,
                borderLeftColor: '#FFD700'
              }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FF6B00', marginBottom: 5 }}>
                  달성한 꿈: {review.goal}
                </Text>
                <Text style={{ fontSize: 14, color: '#666', marginBottom: 3 }}>
                  목표 금액: {review.amount}
                </Text>
                <Text style={{ fontSize: 14, color: '#666' }}>
                  달성 기간: {review.period}
                </Text>
              </View>

              <Text style={{ 
                fontSize: 15, 
                color: '#333', 
                lineHeight: 22, 
                marginBottom: 15,
                fontStyle: 'italic' 
              }}>
                "{review.story}"
              </Text>

              <Text style={{ fontSize: 12, color: '#999', textAlign: 'right' }}>
                {review.date}
              </Text>
            </View>
          ))}

          <View style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: 20,
            padding: 25,
            marginBottom: 30,
            alignItems: 'center'
          }}>
            <Ionicons name="trophy" size={40} color="#FFD700" style={{ marginBottom: 15 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: 10 }}>
              당신도 할 수 있습니다!
            </Text>
            <Text style={{ fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 20 }}>
              작은 시작이 큰 꿈을 이룹니다.{'\n'}지금 시작해보세요!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
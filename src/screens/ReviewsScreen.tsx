// screens/ReviewsScreen.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewsScreen() {
  const reviews = [
    {
      id: 1,
      userID: 'user456', // 백엔드에서 받아올 아이디
      dreamTitle: '내 카페 오픈', // 등록한 소망 내용
      reviewContent: '처음에는 정말 반신반의했는데, 꾸준히 참여하고 친구들에게 추천하다 보니 정말로 목표 금액을 모을 수 있었어요! 이제 제 카페를 운영하고 있습니다. 정말 감사합니다.',
      date: '2024.02.15'
    },
    {
      id: 2,
      userID: 'traveler88',
      dreamTitle: '유럽 한 달 여행',
      reviewContent: '유럽 여행이 꿈이었는데 혼자서는 돈 모으기가 힘들었어요. 이 앱을 통해서 많은 분들의 도움을 받아 꿈을 이룰 수 있었습니다. 파리의 에펠탑 앞에서 찍은 사진을 볼 때마다 감동이에요!',
      date: '2024.01.28'
    },
    {
      id: 3,
      userID: 'businessman01',
      dreamTitle: '온라인 쇼핑몰 창업',
      reviewContent: '창업 자금을 모으는게 가장 큰 고민이었는데, 여기서 많은 도움을 받았어요. 지금은 성공적으로 사업을 운영하고 있고, 저도 다른 분들을 도와주고 있습니다. 정말 좋은 선순환 구조네요.',
      date: '2023.12.10'
    },
    {
      id: 4,
      userID: 'student_kim',
      dreamTitle: '어학연수 가기',
      reviewContent: '대학생 신분으로 어학연수 비용을 마련하기 어려웠는데, 많은 분들의 응원과 도움으로 호주 어학연수를 다녀올 수 있었어요. 영어 실력도 늘고 좋은 추억도 만들었습니다!',
      date: '2023.11.22'
    }
  ];

  return (
    <LinearGradient colors={['#FFD700', '#FFA500']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ 
          paddingHorizontal: 20, 
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(255,255,255,0.3)'
        }}>
          <Text style={{ 
            color: 'white', 
            fontSize: 28, 
            fontWeight: '800',
            textAlign: 'center'
          }}>
            성공후기
          </Text>
        </View>

        <ScrollView 
          style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#f8f9fa' }} 
          contentContainerStyle={{ paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {reviews.map((review) => (
            <View
              key={review.id}
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 24,
                marginBottom: 20,
                elevation: 6,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
              }}
            >
              {/* User Info */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                <View style={{ 
                  width: 50, 
                  height: 50, 
                  backgroundColor: '#FF6B00', 
                  borderRadius: 25, 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginRight: 16 
                }}>
                  <Ionicons name="person" size={24} color="white" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: '#333' }}>
                    {review.userID}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#999', marginTop: 2 }}>
                    {review.date}
                  </Text>
                </View>
              </View>

              {/* Dream Title */}
              <View style={{ 
                backgroundColor: '#FFF8E1', 
                borderRadius: 12, 
                padding: 16, 
                marginBottom: 16,
                borderLeftWidth: 4,
                borderLeftColor: '#FFD700'
              }}>
                <Text style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>
                  달성한 꿈
                </Text>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#FF6B00' }}>
                  {review.dreamTitle}
                </Text>
              </View>

              {/* Review Content */}
              <View style={{
                backgroundColor: '#f8f8f8',
                borderRadius: 12,
                padding: 16
              }}>
                <Text style={{ 
                  fontSize: 15, 
                  color: '#333', 
                  lineHeight: 24,
                  fontStyle: 'italic'
                }}>
                  "{review.reviewContent}"
                </Text>
              </View>
            </View>
          ))}

          {/* Motivational Message */}
          <View style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: 20,
            padding: 30,
            marginBottom: 20,
            alignItems: 'center'
          }}>
            <Ionicons name="trophy" size={50} color="#FFD700" style={{ marginBottom: 16 }} />
            <Text style={{ 
              fontSize: 20, 
              fontWeight: '800', 
              color: '#333', 
              textAlign: 'center', 
              marginBottom: 12 
            }}>
              당신도 할 수 있습니다!
            </Text>
            <Text style={{ 
              fontSize: 16, 
              color: '#666', 
              textAlign: 'center', 
              lineHeight: 24 
            }}>
              작은 시작이 큰 꿈을 이룹니다.{'\n'}지금 시작해보세요!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

// screens/RecommendScreen.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function RecommendScreen() {
  const socialApps = [
    { 
      name: '카카오톡', 
      icon: 'chatbubble-ellipses', 
      color: '#FEE500', 
      textColor: 'black',
      url: 'kakaotalk://' 
    },
    { 
      name: '인스타그램', 
      icon: 'logo-instagram', 
      color: '#E4405F', 
      textColor: 'white',
      url: 'instagram://share' 
    },
    { 
      name: '페이스북', 
      icon: 'logo-facebook', 
      color: '#1877F2', 
      textColor: 'white',
      url: 'fb://share' 
    },
    { 
      name: '트위터', 
      icon: 'logo-twitter', 
      color: '#1DA1F2', 
      textColor: 'white',
      url: 'twitter://post' 
    },
    { 
      name: 'SMS', 
      icon: 'chatbubbles', 
      color: '#34C759', 
      textColor: 'white',
      url: 'sms:' 
    },
    { 
      name: '이메일', 
      icon: 'mail', 
      color: '#007AFF', 
      textColor: 'white',
      url: 'mailto:' 
    }
  ];

  const handleSocialPress = (app) => {
    const shareMessage = `🌟 만원으로 돈복사 앱 추천! 🌟\n\n1만원으로 시작해서 꿈을 이루는 특별한 경험을 함께해요!\n\n지금 참여하면 포인트도 받을 수 있어요. 👇\n\n[다운로드 링크]`;
    
    let shareUrl = app.url;
    
    if (app.name === 'SMS') {
      shareUrl = `sms:?body=${encodeURIComponent(shareMessage)}`;
    } else if (app.name === '이메일') {
      shareUrl = `mailto:?subject=${encodeURIComponent('만원으로 돈복사 앱 추천')}&body=${encodeURIComponent(shareMessage)}`;
    }
    
    Linking.openURL(shareUrl).catch(() => {
      Alert.alert('알림', `${app.name} 앱을 찾을 수 없습니다.`, [
        { text: '확인' }
      ]);
    });
  };

  const handleCopyLink = () => {
    Alert.alert('링크 복사', '추천 링크가 클립보드에 복사되었습니다!', [
      { text: '확인' }
    ]);
  };

  return (
    <LinearGradient colors={['#FFB347', '#FF8C00']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>추천하기</Text>
          <Text style={{ color: 'white', fontSize: 14, opacity: 0.9, marginTop: 5 }}>
            친구들과 함께 꿈을 이뤄보세요!
          </Text>
        </View>

        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
          {/* Recommendation Info */}
          <View style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 25,
            marginBottom: 30,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
          }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Ionicons name="gift" size={50} color="#FF6B00" style={{ marginBottom: 15 }} />
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>
                친구 추천 혜택
              </Text>
              <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', lineHeight: 24 }}>
                친구를 추천하면 추천한 사람과 추천받은 사람 모두에게 보너스 포인트를 드려요!
              </Text>
            </View>
            
            <View style={{ 
              backgroundColor: '#FFF8DC', 
              borderRadius: 15, 
              padding: 20,
              borderLeftWidth: 4,
              borderLeftColor: '#FFD700' 
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Ionicons name="star" size={20} color="#FFD700" />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FF6B00', marginLeft: 8 }}>
                  추천 보너스
                </Text>
              </View>
              <Text style={{ fontSize: 14, color: '#666' }}>
                • 추천한 분: 10,000 포인트 즉시 지급{'\n'}
                • 추천받은 분: 가입 시 5,000 포인트 지급{'\n'}
                • 추천받은 분이 첫 목표 달성 시 추가 20,000 포인트
              </Text>
            </View>
          </View>

          {/* Share Message Preview */}
          <View style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: 15,
            padding: 20,
            marginBottom: 25,
            borderWidth: 2,
            borderColor: 'rgba(255,255,255,0.5)'
          }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>
              공유 메시지 미리보기:
            </Text>
            <Text style={{ fontSize: 13, color: '#555', lineHeight: 20, fontStyle: 'italic' }}>
              "🌟 만원으로 돈복사 앱 추천! 🌟{'\n\n'}
              1만원으로 시작해서 꿈을 이루는 특별한 경험을 함께해요!{'\n\n'}
              지금 참여하면 포인트도 받을 수 있어요. 👇"
            </Text>
          </View>

          {/* Social Media Grid */}
          <View style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            marginBottom: 20,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' }}>
              공유할 플랫폼 선택
            </Text>
            
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {socialApps.map((app, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: '48%',
                    backgroundColor: app.color,
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    borderRadius: 15,
                    marginBottom: 15,
                    alignItems: 'center',
                    elevation: 4,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                  onPress={() => handleSocialPress(app)}
                >
                  <Ionicons 
                    name={app.icon as any} 
                    size={35} 
                    color={app.textColor} 
                  />
                  <Text style={{ 
                    color: app.textColor, 
                    fontSize: 14, 
                    fontWeight: 'bold', 
                    marginTop: 8 
                  }}>
                    {app.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Copy Link Button */}
          <TouchableOpacity
            onPress={handleCopyLink}
            style={{
              backgroundColor: '#10B981',
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
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Ionicons name="copy" size={20} color="white" style={{ marginRight: 8 }} />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              추천 링크 복사하기
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
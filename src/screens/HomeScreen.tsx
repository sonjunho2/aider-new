// screens/RecommendScreen.tsx  
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function RecommendScreen() {
  const socialApps = [
    { 
      name: 'SMS', 
      icon: 'chatbubbles', 
      color: '#34C759', 
      url: 'sms:?body=딱만원으로 돈 불리기! 지금 참여해서 함께 꿈을 이뤄보세요!' 
    },
    { 
      name: '인스타그램', 
      icon: 'logo-instagram', 
      color: '#E4405F', 
      url: 'instagram://share' 
    },
    { 
      name: '카카오톡', 
      icon: 'chatbubble-ellipses', 
      color: '#FEE500', 
      url: 'kakaotalk://' 
    },
    { 
      name: '텔레그램', 
      icon: 'paper-plane', 
      color: '#0088CC', 
      url: 'tg://' 
    },
    { 
      name: '페이스북', 
      icon: 'logo-facebook', 
      color: '#1877F2', 
      url: 'fb://' 
    }
  ];

  const handleSocialPress = (app) => {
    Linking.openURL(app.url).catch(() => {
      Alert.alert('알림', `${app.name} 앱을 찾을 수 없습니다.`);
    });
  };

  const handleCopyLink = () => {
    Alert.alert('복사 완료', '추천 주소가 복사되었습니다!');
  };

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex: 1 }}>
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
            추천하기
          </Text>
        </View>

        <ScrollView 
          style={{ flex: 1 }} 
          contentContainerStyle={{ paddingVertical: 30 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Social Media Grid */}
          <View style={{ paddingHorizontal: 20 }}>
            <View style={{ 
              flexDirection: 'row', 
              flexWrap: 'wrap', 
              justifyContent: 'space-between',
              marginBottom: 20
            }}>
              {socialApps.map((app, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: '48%',
                    backgroundColor: 'white',
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                    borderRadius: 20,
                    marginBottom: 16,
                    alignItems: 'center',
                    elevation: 6,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.2,
                    shadowRadius: 6,
                    borderWidth: 3,
                    borderColor: app.color,
                  }}
                  onPress={() => handleSocialPress(app)}
                >
                  <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: app.color,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 16
                  }}>
                    <Ionicons 
                      name={app.icon as any} 
                      size={28} 
                      color={app.name === '카카오톡' ? 'black' : 'white'} 
                    />
                  </View>
                  <Text style={{ 
                    color: '#333', 
                    fontSize: 16, 
                    fontWeight: '700'
                  }}>
                    {app.name}
                  </Text>
                </TouchableOpacity>
              ))}
              
              {/* Empty space to balance layout if odd number */}
              {socialApps.length % 2 !== 0 && (
                <View style={{ width: '48%' }} />
              )}
            </View>
          </View>

          {/* Bottom Copy Button */}
          <View style={{ 
            paddingHorizontal: 20,
            marginTop: 30 
          }}>
            <View style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 20,
              padding: 24,
              alignItems: 'center'
            }}>
              <Ionicons name="gift" size={40} color="#FF6B00" style={{ marginBottom: 16 }} />
              <Text style={{ 
                fontSize: 18, 
                fontWeight: '700', 
                color: '#333',
                textAlign: 'center',
                marginBottom: 20
              }}>
                친구 추천 혜택
              </Text>
              
              <TouchableOpacity
                onPress={handleCopyLink}
                style={{
                  backgroundColor: '#4CAF50',
                  paddingVertical: 16,
                  paddingHorizontal: 24,
                  borderRadius: 25,
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
                  추천 주소 복사하기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function RecommendScreen() {
  const socialApps = [
    { 
      name: '메시지', 
      icon: 'chatbubbles', 
      color: '#007AFF', 
      url: 'sms:' 
    },
    { 
      name: '인스타그램', 
      icon: 'logo-instagram', 
      color: '#E4405F', 
      url: 'instagram://user?username=' 
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

  const handleSocialPress = (url: string, name: string) => {
    Linking.openURL(url).catch(() => {
      alert(`${name} 앱이 설치되어 있지 않습니다.`);
    });
  };

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 10, fontWeight: '600' }}>추천하기</Text>
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
          {/* Share Message */}
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 25, marginBottom: 30, elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: 15 }}>
              ANDER를 친구들에게 추천해보세요!
            </Text>
            <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', lineHeight: 24 }}>
              꿈을 이루는 특별한 경험을 함께 나누세요. 아래 SNS를 통해 쉽게 공유할 수 있습니다.
            </Text>
          </View>

          {/* Social Media Grid */}
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 20, marginBottom: 20, elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' }}>
              공유할 플랫폼 선택
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {socialApps.map((app, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: '45%',
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
                  onPress={() => handleSocialPress(app.url, app.name)}
                >
                  <Ionicons 
                    name={app.icon as any} 
                    size={40} 
                    color={app.name === '카카오톡' ? 'black' : 'white'} 
                  />
                  <Text style={{ 
                    color: app.name === '카카오톡' ? 'black' : 'white', 
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
            style={{
              backgroundColor: '#10B981',
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 25,
              alignSelf: 'center',
              marginBottom: 20,
              elevation: 6,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Ionicons name="link" size={20} color="white" style={{ marginRight: 8 }} />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>링크 복사하기</Text>
          </TouchableOpacity>

          {/* Main Share Button */}
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
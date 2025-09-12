// screens/NotificationScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationScreen() {
  const [activeTab, setActiveTab] = useState('공지');

  const announcements = [
    {
      id: 1,
      title: '새로운 추천 보너스 이벤트 시작!',
      content: '친구 추천 시 기존보다 2배 많은 포인트를 드립니다. 이번 기회를 놓치지 마세요!',
      date: '2024.03.15',
      isImportant: true
    },
    {
      id: 2,
      title: '시스템 점검 안내',
      content: '3월 18일(월) 새벽 2시-4시 시스템 점검이 진행됩니다. 이용에 불편을 드려 죄송합니다.',
      date: '2024.03.14',
      isImportant: false
    },
    {
      id: 3,
      title: '개인정보 처리방침 변경 안내',
      content: '개인정보 처리방침이 일부 변경되었습니다. 자세한 내용은 설정에서 확인하실 수 있습니다.',
      date: '2024.03.10',
      isImportant: false
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'point',
      title: '포인트 적립',
      content: '김철수님이 회원가입하여 추천 보너스 10,000P가 지급되었습니다.',
      date: '2024.03.15 14:30',
      isRead: false
    },
    {
      id: 2,
      type: 'comment',
      title: '새 댓글',
      content: '나의 꿈 게시글에 새로운 응원 메시지가 등록되었습니다.',
      date: '2024.03.15 12:15',
      isRead: false
    },
    {
      id: 3,
      type: 'achievement',
      title: '목표 달성 축하!',
      content: '축하합니다! 중간 목표인 50만원을 달성하셨습니다.',
      date: '2024.03.14 16:22',
      isRead: true
    },
    {
      id: 4,
      type: 'point',
      title: '포인트 적립',
      content: '일일 출석체크로 1,000P가 지급되었습니다.',
      date: '2024.03.14 09:00',
      isRead: true
    },
    {
      id: 5,
      type: 'system',
      title: '시스템 알림',
      content: '새로운 업데이트가 출시되었습니다. 더 나은 서비스를 경험해보세요!',
      date: '2024.03.13 18:00',
      isRead: true
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'point':
        return { name: 'star', color: '#FFD700' };
      case 'comment':
        return { name: 'chatbubble', color: '#4CAF50' };
      case 'achievement':
        return { name: 'trophy', color: '#FF6B00' };
      case 'system':
        return { name: 'settings', color: '#2196F3' };
      default:
        return { name: 'notifications', color: '#666' };
    }
  };

  return (
    <LinearGradient colors={['#FFB347', '#FF8C00']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>알림 & 공지</Text>
        </View>

        {/* Tab Buttons */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20 }}>
          <TouchableOpacity
            onPress={() => setActiveTab('공지')}
            style={{
              flex: 1,
              backgroundColor: activeTab === '공지' ? 'white' : 'rgba(255,255,255,0.3)',
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 25,
              marginRight: 10,
              alignItems: 'center'
            }}
          >
            <Text style={{ 
              color: activeTab === '공지' ? '#FF6B00' : 'white',
              fontSize: 16,
              fontWeight: 'bold'
            }}>
              공지사항
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => setActiveTab('알림')}
            style={{
              flex: 1,
              backgroundColor: activeTab === '알림' ? 'white' : 'rgba(255,255,255,0.3)',
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 25,
              alignItems: 'center'
            }}
          >
            <Text style={{ 
              color: activeTab === '알림' ? '#FF6B00' : 'white',
              fontSize: 16,
              fontWeight: 'bold'
            }}>
              알림
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
          {activeTab === '공지' ? (
            // Announcements
            announcements.map((announcement) => (
              <View
                key={announcement.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 15,
                  padding: 20,
                  marginBottom: 15,
                  elevation: 4,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  borderLeftWidth: announcement.isImportant ? 4 : 0,
                  borderLeftColor: announcement.isImportant ? '#FF4444' : 'transparent'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
                  {announcement.isImportant && (
                    <Ionicons name="warning" size={20} color="#FF4444" style={{ marginRight: 8, marginTop: 2 }} />
                  )}
                  <Text style={{ 
                    fontSize: 16, 
                    fontWeight: 'bold', 
                    color: '#333',
                    flex: 1 
                  }}>
                    {announcement.title}
                  </Text>
                </View>
                
                <Text style={{ 
                  fontSize: 14, 
                  color: '#666', 
                  lineHeight: 20,
                  marginBottom: 10 
                }}>
                  {announcement.content}
                </Text>
                
                <Text style={{ fontSize: 12, color: '#999' }}>
                  {announcement.date}
                </Text>
              </View>
            ))
          ) : (
            // Notifications
            notifications.map((notification) => {
              const iconInfo = getNotificationIcon(notification.type);
              
              return (
                <View
                  key={notification.id}
                  style={{
                    backgroundColor: notification.isRead ? 'white' : '#FFF8E1',
                    borderRadius: 15,
                    padding: 20,
                    marginBottom: 15,
                    elevation: 4,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    borderLeftWidth: notification.isRead ? 0 : 4,
                    borderLeftColor: '#FFD700'
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={{
                      width: 40,
                      height: 40,
                      backgroundColor: notification.isRead ? '#f5f5f5' : iconInfo.color,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15
                    }}>
                      <Ionicons 
                        name={iconInfo.name as any} 
                        size={20} 
                        color={notification.isRead ? '#666' : 'white'} 
                      />
                    </View>
                    
                    <View style={{ flex: 1 }}>
                      <Text style={{ 
                        fontSize: 16, 
                        fontWeight: notification.isRead ? 'normal' : 'bold',
                        color: '#333',
                        marginBottom: 5 
                      }}>
                        {notification.title}
                      </Text>
                      
                      <Text style={{ 
                        fontSize: 14, 
                        color: '#666', 
                        lineHeight: 18,
                        marginBottom: 8 
                      }}>
                        {notification.content}
                      </Text>
                      
                      <Text style={{ fontSize: 12, color: '#999' }}>
                        {notification.date}
                      </Text>
                    </View>
                    
                    {!notification.isRead && (
                      <View style={{
                        width: 8,
                        height: 8,
                        backgroundColor: '#FF4444',
                        borderRadius: 4,
                        marginTop: 5
                      }} />
                    )}
                  </View>
                </View>
              );
            })
          )}

          <View style={{ height: 20 }} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
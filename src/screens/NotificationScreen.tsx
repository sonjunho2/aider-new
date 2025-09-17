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
    },
    {
      id: 4,
      title: '딱만원 앱 정식 출시!',
      content: '딱만원 앱이 정식으로 출시되었습니다! 더 안정적이고 편리한 서비스를 제공하겠습니다.',
      date: '2024.03.01',
      isImportant: true
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'point',
      title: '포인트 적립 완료',
      content: 'kim_user님이 회원가입하여 추천 보너스 10,000P가 지급되었습니다.',
      date: '2024.03.15 14:30',
      isRead: false
    },
    {
      id: 2,
      type: 'comment',
      title: '새 응원 메시지',
      content: '나의 꿈에 새로운 응원 메시지가 등록되었습니다. 확인해보세요!',
      date: '2024.03.15 12:15',
      isRead: false
    },
    {
      id: 3,
      type: 'achievement',
      title: '중간 목표 달성!',
      content: '축하합니다! 중간 목표인 50만원을 달성하셨습니다. 최종 목표까지 화이팅!',
      date: '2024.03.14 16:22',
      isRead: true
    },
    {
      id: 4,
      type: 'point',
      title: '일일 출석 보너스',
      content: '일일 출석체크로 1,000P가 지급되었습니다. 내일도 잊지 마세요!',
      date: '2024.03.14 09:00',
      isRead: true
    },
    {
      id: 5,
      type: 'system',
      title: '앱 업데이트 알림',
      content: '새로운 기능이 추가된 업데이트가 출시되었습니다. 지금 업데이트하세요!',
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
            알림 & 공지
          </Text>
        </View>

        {/* Tab Buttons */}
        <View style={{ 
          flexDirection: 'row', 
          paddingHorizontal: 20, 
          paddingVertical: 16,
          gap: 12
        }}>
          <TouchableOpacity
            onPress={() => setActiveTab('공지')}
            style={{
              flex: 1,
              backgroundColor: activeTab === '공지' ? 'white' : 'rgba(255,255,255,0.25)',
              paddingVertical: 14,
              borderRadius: 25,
              alignItems: 'center',
              elevation: activeTab === '공지' ? 4 : 0,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          >
            <Text style={{ 
              color: activeTab === '공지' ? '#FF6B00' : 'white',
              fontSize: 16,
              fontWeight: '700'
            }}>
              공지사항
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => setActiveTab('알림')}
            style={{
              flex: 1,
              backgroundColor: activeTab === '알림' ? 'white' : 'rgba(255,255,255,0.25)',
              paddingVertical: 14,
              borderRadius: 25,
              alignItems: 'center',
              elevation: activeTab === '알림' ? 4 : 0,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          >
            <Text style={{ 
              color: activeTab === '알림' ? '#FF6B00' : 'white',
              fontSize: 16,
              fontWeight: '700'
            }}>
              알림
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          style={{ flex: 1, paddingHorizontal: 20 }} 
          contentContainerStyle={{ paddingVertical: 12 }}
          showsVerticalScrollIndicator={false}
        >
          {activeTab === '공지' ? (
            // Announcements Section
            announcements.map((announcement) => (
              <View
                key={announcement.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 16,
                  padding: 20,
                  marginBottom: 12,
                  elevation: 4,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  borderLeftWidth: announcement.isImportant ? 5 : 0,
                  borderLeftColor: announcement.isImportant ? '#FF4444' : 'transparent'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 }}>
                  {announcement.isImportant && (
                    <View style={{
                      backgroundColor: '#FF4444',
                      borderRadius: 12,
                      padding: 4,
                      marginRight: 12,
                      marginTop: 2
                    }}>
                      <Ionicons name="warning" size={16} color="white" />
                    </View>
                  )}
                  <Text style={{ 
                    fontSize: 17, 
                    fontWeight: '700', 
                    color: '#333',
                    flex: 1,
                    lineHeight: 24
                  }}>
                    {announcement.title}
                  </Text>
                </View>
                
                <Text style={{ 
                  fontSize: 14, 
                  color: '#666', 
                  lineHeight: 22,
                  marginBottom: 12 
                }}>
                  {announcement.content}
                </Text>
                
                <Text style={{ fontSize: 12, color: '#999', fontWeight: '500' }}>
                  {announcement.date}
                </Text>
              </View>
            ))
          ) : (
            // Notifications Section
            notifications.map((notification) => {
              const iconInfo = getNotificationIcon(notification.type);
              
              return (
                <View
                  key={notification.id}
                  style={{
                    backgroundColor: notification.isRead ? 'white' : '#FFF9E6',
                    borderRadius: 16,
                    padding: 20,
                    marginBottom: 12,
                    elevation: 4,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    borderLeftWidth: notification.isRead ? 0 : 5,
                    borderLeftColor: '#FFD700'
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={{
                      width: 44,
                      height: 44,
                      backgroundColor: notification.isRead ? '#f8f8f8' : iconInfo.color,
                      borderRadius: 22,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 16
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
                        fontWeight: notification.isRead ? '600' : '700',
                        color: '#333',
                        marginBottom: 6 
                      }}>
                        {notification.title}
                      </Text>
                      
                      <Text style={{ 
                        fontSize: 14, 
                        color: '#666', 
                        lineHeight: 20,
                        marginBottom: 8 
                      }}>
                        {notification.content}
                      </Text>
                      
                      <Text style={{ fontSize: 12, color: '#999', fontWeight: '500' }}>
                        {notification.date}
                      </Text>
                    </View>
                    
                    {!notification.isRead && (
                      <View style={{
                        width: 10,
                        height: 10,
                        backgroundColor: '#FF4444',
                        borderRadius: 5,
                        marginTop: 6
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

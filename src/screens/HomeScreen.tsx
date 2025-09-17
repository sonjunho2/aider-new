// screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [showComments, setShowComments] = useState(false);
  const [showDreamModal, setShowDreamModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [myPoints] = useState(245000);
  const [userID] = useState('user123');
  const [dreamProgress] = useState(65);
  const [myDream, setMyDream] = useState(''); // 빈 문자열로 초기화 - 소망 등록 안됨
  const [newDream, setNewDream] = useState('');
  
  const helpUsers = [
    { id: 'friend001', helped: false },
    { id: 'family02', helped: true },
    { id: 'neighbor3', helped: false },
    { id: 'coworker4', helped: true },
    { id: 'buddy_05', helped: false }
  ];

  const supporters = [
    { id: 1, name: '김철수', comment: '꿈을 이루시길 응원합니다!', date: '2024.03.15' },
    { id: 2, name: '이영희', comment: '항상 파이팅하세요!', date: '2024.03.14' },
    { id: 3, name: '박민수', comment: '좋은 결과 있으시길!', date: '2024.03.13' },
    { id: 4, name: '정수진', comment: '응원하고 있어요', date: '2024.03.12' },
    { id: 5, name: '최동환', comment: '꼭 성공하세요!', date: '2024.03.11' },
  ];

  const handleDreamSubmit = () => {
    if (newDream.trim()) {
      setMyDream(newDream);
      setNewDream('');
      setShowDreamModal(false);
      Alert.alert('완료', '소망이 등록되었습니다!');
    } else {
      Alert.alert('알림', '소망 내용을 입력해주세요.');
    }
  };

  const handleHelpUser = (userId: string) => {
    Alert.alert('도움주기', `${userId}님에게 도움을 주시겠습니까?`);
  };

  const handleRegisterDream = () => {
    const allHelped = helpUsers.every(user => user.helped);
    if (allHelped) {
      Alert.alert('성공', '소망이 등록되었습니다! 이제 다른 사람들의 도움을 받을 수 있어요.');
      setShowDreamModal(false);
    } else {
      Alert.alert('알림', '5명 모두에게 도움을 주신 후 등록할 수 있습니다.');
    }
  };

  return (
    <LinearGradient
      colors={['#4c6ef5', '#364fc7']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#f8f9fa' }} showsVerticalScrollIndicator={false}>
          {/* Header with Home Icon */}
          <View style={{ alignItems: 'center', paddingVertical: 30 }}>
            <Image 
              source={require('assets/homeicon.png')} 
              style={{ width: 280, height: 80, marginBottom: 20 }}
              resizeMode="contain"
            />
            
            <Text style={{ 
              fontSize: 18, 
              color: 'white',
              fontWeight: '700',
              textAlign: 'center'
            }}>
              만원으로 시작하는 작은소망
            </Text>
          </View>

          {/* User Profile Section */}
          <View style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 16,
            marginBottom: 16,
            elevation: 6,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: '#333' }}>{userID}</Text>
              
              <TouchableOpacity style={{
                width: 50,
                height: 50,
                backgroundColor: '#f0f0f0',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 3,
                borderColor: '#FFD700'
              }}>
                <Ionicons name="person" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Points Display */}
          <View style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 16,
            marginBottom: 16,
            elevation: 6,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center', marginBottom: 12 }}>
              내가 도움받은 총 POINT
            </Text>
            
            <View style={{
              backgroundColor: '#FFF8E1',
              borderRadius: 12,
              padding: 12,
              alignItems: 'center'
            }}>
              <Text style={{ fontSize: 28, fontWeight: '900', color: '#FF6B00' }}>
                {myPoints.toLocaleString()} P
              </Text>
            </View>
          </View>

          {/* My Dream Section */}
          <View style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            marginBottom: 20,
            elevation: 6,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#333', textAlign: 'center', marginBottom: 16 }}>
              나의 작은 소망
            </Text>

            {myDream ? (
              <View style={{
                backgroundColor: '#FFF5F5',
                borderRadius: 12,
                padding: 20,
                marginBottom: 16
              }}>
                <Text style={{ fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 24 }}>
                  {myDream}
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => setShowDreamModal(true)}
                style={{
                  backgroundColor: '#f8f8f8',
                  borderRadius: 12,
                  padding: 40,
                  alignItems: 'center',
                  marginBottom: 16,
                  borderWidth: 2,
                  borderColor: '#ddd',
                  borderStyle: 'dashed'
                }}
              >
                <Ionicons name="add" size={40} color="#FF6B00" />
                <Text style={{ fontSize: 14, color: '#666', marginTop: 8 }}>
                  소망을 등록해주세요
                </Text>
              </TouchableOpacity>
            )}

            {/* Progress Bar - only show if dream exists */}
            {myDream && (
              <View style={{ marginBottom: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                  <Text style={{ fontSize: 14, color: '#666' }}>진행률</Text>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#FF6B00' }}>{dreamProgress}%</Text>
                </View>
                <View style={{
                  height: 8,
                  backgroundColor: '#f0f0f0',
                  borderRadius: 4,
                  overflow: 'hidden'
                }}>
                  <View style={{
                    width: `${dreamProgress}%`,
                    height: '100%',
                    backgroundColor: dreamProgress === 100 ? '#4CAF50' : '#FF6B00',
                    borderRadius: 4
                  }} />
                </View>
              </View>
            )}

            {/* Action Button - only show if dream exists */}
            {myDream && (
              dreamProgress === 100 ? (
                <TouchableOpacity
                  onPress={() => setShowReviewModal(true)}
                  style={{
                    backgroundColor: '#4CAF50',
                    borderRadius: 12,
                    paddingVertical: 12,
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
                    후기 작성
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setShowComments(true)}
                  style={{
                    backgroundColor: '#FF69B4',
                    borderRadius: 12,
                    paddingVertical: 12,
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
                    응원 메시지 보기
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </ScrollView>

        {/* Dream Registration Modal */}
        <Modal visible={showDreamModal} animationType="slide">
          <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 15,
              backgroundColor: '#4c6ef5'
            }}>
              <TouchableOpacity onPress={() => setShowDreamModal(false)}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 15 }}>
                소망 등록
              </Text>
            </View>

            <ScrollView style={{ flex: 1, padding: 20 }}>
              {/* My Dream Input */}
              <View style={{
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 20,
                marginBottom: 20,
                elevation: 4
              }}>
                <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
                  내 소망 등록
                </Text>
                <TextInput
                  placeholder="이루고 싶은 소망을 입력해주세요"
                  value={newDream}
                  onChangeText={setNewDream}
                  style={{
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 8,
                    padding: 12,
                    fontSize: 16
                  }}
                  multiline
                />
              </View>

              {/* Help 5 Users */}
              <View style={{
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 20,
                marginBottom: 20,
                elevation: 4
              }}>
                <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 16 }}>
                  5명에게 도움주기
                </Text>
                {helpUsers.map((user, index) => (
                  <View key={index} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 12,
                    borderBottomWidth: index < helpUsers.length - 1 ? 1 : 0,
                    borderBottomColor: '#f0f0f0'
                  }}>
                    <Text style={{ fontSize: 16, color: '#333' }}>{user.id}</Text>
                    <TouchableOpacity
                      onPress={() => handleHelpUser(user.id)}
                      style={{
                        backgroundColor: user.helped ? '#4CAF50' : '#FF6B00',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 20
                      }}
                    >
                      <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>
                        {user.helped ? '완료' : '도움주기'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              {/* Register Button */}
              <TouchableOpacity
                onPress={handleRegisterDream}
                style={{
                  backgroundColor: '#667eea',
                  borderRadius: 15,
                  paddingVertical: 16,
                  alignItems: 'center',
                  marginBottom: 30
                }}
              >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
                  등록하기
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
        </Modal>

        {/* Comments Modal */}
        <Modal visible={showComments} animationType="slide">
          <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 15,
              backgroundColor: '#667eea'
            }}>
              <TouchableOpacity onPress={() => setShowComments(false)}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 15 }}>
                응원 메시지
              </Text>
            </View>

            <ScrollView style={{ flex: 1, padding: 20 }}>
              {supporters.map((item) => (
                <View key={item.id} style={{
                  backgroundColor: 'white',
                  borderRadius: 15,
                  padding: 20,
                  marginBottom: 12,
                  elevation: 2
                }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>
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
              ))}
            </ScrollView>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
}

/src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Alert, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../theme/colors';
import { commonStyles } from '../theme/styles';

type Helper = { id: string; helped: boolean };
type Supporter = { id: number; name: string; comment: string; date: string };

export default function HomeScreen() {
  const [showComments, setShowComments] = useState(false);
  const [showDreamModal, setShowDreamModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [myPoints] = useState(245000);
  const [userID] = useState('user123');
  const [dreamProgress] = useState(65);
  const [myDream, setMyDream] = useState(''); // 비어있으면 미등록 상태
  const [newDream, setNewDream] = useState('');

  const [helpUsers, setHelpUsers] = useState<Helper[]>([
    { id: 'friend001', helped: false },
    { id: 'family02', helped: true },
    { id: 'neighbor3', helped: false },
    { id: 'coworker4', helped: true },
    { id: 'buddy_05', helped: false },
  ]);

  const supporters: Supporter[] = [
    { id: 1, name: '김철수', comment: '꿈을 이루시길 응원합니다!', date: '2024.03.15' },
    { id: 2, name: '이영희', comment: '항상 파이팅하세요!', date: '2024.03.14' },
    { id: 3, name: '박민수', comment: '좋은 결과 있으시길!', date: '2024.03.13' },
    { id: 4, name: '정수진', comment: '응원하고 있어요', date: '2024.03.12' },
    { id: 5, name: '최동환', comment: '꼭 성공하세요!', date: '2024.03.11' },
  ];

  const handleDreamSubmit = () => {
    if (newDream.trim()) {
      setMyDream(newDream.trim());
      setNewDream('');
      setShowDreamModal(false);
      Alert.alert('완료', '소망이 등록되었습니다!');
    } else {
      Alert.alert('알림', '소망 내용을 입력해주세요.');
    }
  };

  const handleHelpUser = (userId: string) => {
    setHelpUsers(prev =>
      prev.map(h => (h.id === userId ? { ...h, helped: !h.helped } : h)),
    );
    Alert.alert('도움주기', `${userId}님에게 도움을 표시했습니다.`);
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
    <SafeAreaView style={commonStyles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* 헤더 */}
        <View style={styles.header}>
          <Ionicons name="home" size={22} color={colors.primary} />
          <Text style={styles.headerTitle}>만원으로 시작하는 작은소망</Text>
        </View>

        {/* 프로필 카드 */}
        <LinearGradient colors={[colors.card, '#f7f8ff']} style={styles.profileCard}>
          <View style={styles.profileRow}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.userId}>{userID}</Text>
              <Text style={styles.pointsCaption}>내가 도움받은 총 POINT</Text>
              <Text style={styles.pointsValue}>{myPoints.toLocaleString()} P</Text>
            </View>
          </View>
        </LinearGradient>

        {/* 나의 소망 */}
        <Text style={styles.sectionTitle}>나의 작은 소망</Text>
        {myDream ? (
          <View style={styles.dreamBox}>
            <Text style={styles.dreamText}>{myDream}</Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setShowDreamModal(true)}
            style={styles.dreamEmpty}
          >
            <Ionicons name="add-circle-outline" size={22} color={colors.muted} />
            <Text style={styles.dreamEmptyText}>소망을 등록해주세요</Text>
          </TouchableOpacity>
        )}

        {/* 진행률 (소망이 있을 때만) */}
        {myDream && (
          <View style={styles.progressWrap}>
            <Text style={styles.progressLabel}>진행률 {dreamProgress}%</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${dreamProgress}%` }]} />
            </View>
          </View>
        )}

        {/* 액션 버튼 (소망이 있을 때만) */}
        {myDream && (
          dreamProgress === 100 ? (
            <TouchableOpacity onPress={() => setShowReviewModal(true)} style={[styles.actionBtn, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.actionText}>후기 작성</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setShowComments(true)} style={[styles.actionBtn, { backgroundColor: '#FF9800' }]}>
              <Text style={styles.actionText}>응원 메시지 보기</Text>
            </TouchableOpacity>
          )
        )}

        {/* 5명에게 도움주기 */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>5명에게 도움주기</Text>
        </View>
        <View style={styles.helperWrap}>
          {helpUsers.map((user) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => handleHelpUser(user.id)}
              style={[
                styles.helperChip,
                { backgroundColor: user.helped ? '#4CAF50' : '#FF9800' },
              ]}
            >
              <Text style={styles.helperText}>{user.id}</Text>
              <Text style={styles.helperStatus}>{user.helped ? '완료' : '도움주기'}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 등록 버튼 */}
        <TouchableOpacity onPress={handleRegisterDream} style={styles.registerBtn}>
          <Text style={styles.registerText}>등록하기</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 소망 등록 모달 */}
      <Modal visible={showDreamModal} animationType="slide" transparent onRequestClose={() => setShowDreamModal(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>소망 등록</Text>
            <TextInput
              value={newDream}
              onChangeText={setNewDream}
              placeholder="내 소망을 입력하세요"
              placeholderTextColor={colors.muted}
              style={styles.input}
            />
            <View style={styles.modalRow}>
              <TouchableOpacity onPress={() => setShowDreamModal(false)} style={[styles.modalBtn, styles.modalCancel]}>
                <Text style={styles.modalBtnText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDreamSubmit} style={[styles.modalBtn, styles.modalOk]}>
                <Text style={[styles.modalBtnText, { color: '#fff' }]}>등록</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 응원 메시지 모달 */}
      <Modal visible={showComments} animationType="fade" transparent onRequestClose={() => setShowComments(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>응원 메시지</Text>
            <ScrollView style={{ maxHeight: 320 }}>
              {supporters.map(item => (
                <View key={item.id} style={styles.commentItem}>
                  <Text style={styles.commentTitle}>{item.name}</Text>
                  <Text style={styles.commentDate}>{item.date}</Text>
                  <Text style={styles.commentBody}>{item.comment}</Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity onPress={() => setShowComments(false)} style={[styles.modalBtn, styles.modalOk, { alignSelf: 'center', width: '60%' }]}>
              <Text style={[styles.modalBtnText, { color: '#fff' }]}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 후기 모달 (UI 더미) */}
      <Modal visible={showReviewModal} animationType="fade" transparent onRequestClose={() => setShowReviewModal(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>후기 작성</Text>
            <Text style={styles.commentBody}>출시 전 더미 화면입니다. 실제 입력/전송 로직은 서버 연동 후 구현하세요.</Text>
            <TouchableOpacity onPress={() => setShowReviewModal(false)} style={[styles.modalBtn, styles.modalOk, { alignSelf: 'center', width: '60%' }]}>
              <Text style={[styles.modalBtnText, { color: '#fff' }]}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 24 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  headerTitle: { fontSize: 16, fontWeight: '700', color: colors.text },
  profileCard: {
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },
  profileRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 56, height: 56, borderRadius: 28 },
  userId: { fontSize: 14, fontWeight: '700', color: colors.text },
  pointsCaption: { marginTop: 4, color: colors.muted, fontSize: 12 },
  pointsValue: { marginTop: 2, color: colors.primary, fontWeight: '800', fontSize: 18 },

  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: 8 },

  dreamBox: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    marginBottom: 12,
  },
  dreamText: { color: colors.text, fontSize: 14, lineHeight: 20 },
  dreamEmpty: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    gap: 8,
  },
  dreamEmptyText: { color: colors.muted, fontSize: 14, fontWeight: '600' },

  progressWrap: { marginBottom: 12 },
  progressLabel: { color: colors.text, marginBottom: 6, fontWeight: '600' },
  progressBarBg: { height: 10, backgroundColor: '#ececec', borderRadius: 6, overflow: 'hidden' },
  progressBarFill: { height: 10, backgroundColor: colors.primary },

  actionBtn: { height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  actionText: { color: '#fff', fontWeight: '700' },

  helperWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 12 },
  helperChip: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  helperText: { color: '#fff', fontWeight: '700' },
  helperStatus: { color: '#fff', fontSize: 12, opacity: 0.9 },

  registerBtn: {
    height: 46,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  registerText: { color: '#fff', fontWeight: '800' },

  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  modalCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  modalTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: 10 },
  input: {
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    color: colors.text,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  modalRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  modalBtn: { flex: 1, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  modalCancel: { backgroundColor: '#EEE' },
  modalOk: { backgroundColor: colors.primary },
  modalBtnText: { fontWeight: '700', color: colors.text },

  commentItem: {
    backgroundColor: '#f9f9ff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 8,
  },
  commentTitle: { fontWeight: '700', color: colors.text },
  commentDate: { color: colors.muted, fontSize: 12, marginBottom: 4 },
  commentBody: { color: colors.text, lineHeight: 18 },
});

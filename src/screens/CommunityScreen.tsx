// screens/CommunityScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function CommunityScreen() {
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newComment, setNewComment] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '첫 만원으로 성공한 후기',
      content: '정말 처음에는 반신반의했는데, 꾸준히 참여하니까 정말로 포인트가 쌓이더라구요! 이제 목표 금액의 50%까지 왔어요.',
      author: 'happy_user',
      date: '2024.03.15',
      comments: [
        { id: 1, author: 'success_king', content: '축하드려요! 저도 열심히 해보겠습니다!', date: '2024.03.15' },
        { id: 2, author: 'dream_tree', content: '어떤 방법으로 하셨나요?', date: '2024.03.15' }
      ]
    },
    {
      id: 2,
      title: '추천하기 꿀팁 공유',
      content: '친구들에게 추천할 때 이렇게 말해보세요. "1만원으로 시작해서 꿈을 이룰 수 있다"고 하면 관심을 많이 가져요!',
      author: 'tip_master',
      date: '2024.03.14',
      comments: [
        { id: 1, author: 'beginner01', content: '좋은 팁 감사합니다!', date: '2024.03.14' }
      ]
    },
    {
      id: 3,
      title: '목표 달성까지 얼마나 걸릴까요?',
      content: '제주도 여행이 목표인데, 지금 진행 속도로는 언제쯤 갈 수 있을지 궁금해요. 경험자분들 조언 부탁드려요.',
      author: 'jeju_lover',
      date: '2024.03.13',
      comments: []
    }
  ]);

  const handleWritePost = () => {
    if (!newTitle.trim() || !newContent.trim()) {
      Alert.alert('알림', '제목과 내용을 모두 입력해주세요.');
      return;
    }
    
    const newPost = {
      id: posts.length + 1,
      title: newTitle,
      content: newContent,
      author: 'user123',
      date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').slice(0, -1),
      comments: []
    };
    
    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewContent('');
    setShowWriteModal(false);
    Alert.alert('성공', '글이 등록되었습니다!');
  };

  const handleAddComment = () => {
    if (!newComment.trim()) {
      Alert.alert('알림', '댓글 내용을 입력해주세요.');
      return;
    }
    
    const updatedPosts = posts.map(post => {
      if (post.id === selectedPost.id) {
        const updatedPost = {
          ...post,
          comments: [...post.comments, {
            id: post.comments.length + 1,
            author: 'user123',
            content: newComment,
            date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').slice(0, -1)
          }]
        };
        setSelectedPost(updatedPost);
        return updatedPost;
      }
      return post;
    });
    
    setPosts(updatedPosts);
    setNewComment('');
    Alert.alert('성공', '댓글이 등록되었습니다!');
  };

  const openPost = (post) => {
    setSelectedPost(post);
    setShowPostModal(true);
  };

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingHorizontal: 20, 
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(255,255,255,0.3)'
        }}>
          <Text style={{ 
            color: 'white', 
            fontSize: 28, 
            fontWeight: '800' 
          }}>
            커뮤니티
          </Text>
          <TouchableOpacity
            onPress={() => setShowWriteModal(true)}
            style={{ 
              backgroundColor: 'white', 
              paddingHorizontal: 20, 
              paddingVertical: 12, 
              borderRadius: 25,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          >
            <Text style={{ color: '#FF6B00', fontSize: 16, fontWeight: '700' }}>
              글쓰기
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, paddingHorizontal: 20 }} contentContainerStyle={{ paddingVertical: 20 }}>
          {posts.map((post) => (
            <TouchableOpacity
              key={post.id}
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 20,
                marginBottom: 16,
                elevation: 4,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              }}
              onPress={() => openPost(post)}
            >
              <Text style={{ fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 12 }}>
                {post.title}
              </Text>
              <Text style={{ fontSize: 14, color: '#666', lineHeight: 22, marginBottom: 16 }} numberOfLines={2}>
                {post.content}
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: '#FF6B00', fontWeight: '600' }}>
                  {post.author}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="chatbubble-outline" size={16} color="#999" />
                  <Text style={{ fontSize: 12, color: '#999', marginLeft: 4, marginRight: 12 }}>
                    {post.comments.length}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>
                    {post.date}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Write Post Modal */}
        <Modal visible={showWriteModal} animationType="slide">
          <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              paddingHorizontal: 20, 
              paddingVertical: 16, 
              backgroundColor: '#FF6B00',
              justifyContent: 'space-between'
            }}>
              <TouchableOpacity onPress={() => setShowWriteModal(false)}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
                새 글 작성
              </Text>
              <TouchableOpacity onPress={handleWritePost}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>
                  등록
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={{ flex: 1, padding: 20 }}>
              <TextInput
                placeholder="제목을 입력하세요"
                value={newTitle}
                onChangeText={setNewTitle}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  padding: 16,
                  fontSize: 16,
                  marginBottom: 16,
                  elevation: 2,
                  borderWidth: 1,
                  borderColor: '#f0f0f0'
                }}
              />
              <TextInput
                placeholder="내용을 입력하세요"
                value={newContent}
                onChangeText={setNewContent}
                multiline
                textAlignVertical="top"
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  padding: 16,
                  fontSize: 16,
                  flex: 1,
                  elevation: 2,
                  borderWidth: 1,
                  borderColor: '#f0f0f0'
                }}
              />
            </View>
          </SafeAreaView>
        </Modal>

        {/* Post Detail Modal */}
        <Modal visible={showPostModal} animationType="slide">
          <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              paddingHorizontal: 20, 
              paddingVertical: 16, 
              backgroundColor: '#FF6B00' 
            }}>
              <TouchableOpacity onPress={() => setShowPostModal(false)}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 16 }}>
                게시글
              </Text>
            </View>
            
            {selectedPost && (
              <ScrollView style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white', margin: 20, borderRadius: 20, padding: 24, elevation: 4 }}>
                  <Text style={{ fontSize: 22, fontWeight: '700', color: '#333', marginBottom: 12 }}>
                    {selectedPost.title}
                  </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={{ fontSize: 14, color: '#FF6B00', fontWeight: '600' }}>
                      {selectedPost.author}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      {selectedPost.date}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 16, color: '#333', lineHeight: 26 }}>
                    {selectedPost.content}
                  </Text>
                </View>

                <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 16 }}>
                    댓글 {selectedPost.comments.length}개
                  </Text>
                  {selectedPost.comments.map((comment) => (
                    <View key={comment.id} style={{ 
                      backgroundColor: 'white', 
                      borderRadius: 12, 
                      padding: 16, 
                      marginBottom: 12, 
                      elevation: 2 
                    }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#FF6B00' }}>
                          {comment.author}
                        </Text>
                        <Text style={{ fontSize: 12, color: '#999' }}>
                          {comment.date}
                        </Text>
                      </View>
                      <Text style={{ fontSize: 14, color: '#666', lineHeight: 20 }}>
                        {comment.content}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}

            <View style={{ 
              flexDirection: 'row', 
              padding: 20, 
              backgroundColor: 'white', 
              elevation: 8,
              borderTopWidth: 1,
              borderTopColor: '#f0f0f0'
            }}>
              <TextInput
                placeholder="댓글을 입력하세요"
                value={newComment}
                onChangeText={setNewComment}
                style={{
                  flex: 1,
                  backgroundColor: '#f8f8f8',
                  borderRadius: 20,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  marginRight: 12,
                  fontSize: 14
                }}
              />
              <TouchableOpacity
                onPress={handleAddComment}
                style={{
                  backgroundColor: '#FF6B00',
                  borderRadius: 20,
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: 'white', fontWeight: '700' }}>등록</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
}

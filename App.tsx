import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Platform } from "react-native";

/**
 * Snack 전용 커뮤니티 데모
 * - 글 목록/상세/댓글/작성 단일 파일
 * - 실제 API는 아래 API_BASE만 교체하면 연동 가능
 * - 현 단계는 in-memory mock 으로 동작
 */

type Comment = {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
};

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

const API_BASE = ""; // 실서버 붙일 때: 예) "https://api.example.com" (POST/GET 경로는 /community/* 로 매핑 예정)

// ---- In-memory Mock Store (Snack용) ----
function uid() {
  return Math.random().toString(36).slice(2, 10);
}
const now = () => new Date().toISOString();

const seedPosts: Post[] = [
  { id: uid(), title: "첫 글입니다", content: "여기에 내용을 적어주세요.", author: "관리자", createdAt: now() },
  { id: uid(), title: "커뮤니티 오픈!", content: "자유롭게 글과 댓글을 남겨보세요.", author: "운영팀", createdAt: now() },
];

const seedComments: Comment[] = [
  { id: uid(), postId: seedPosts[0].id, author: "게스트", content: "환영해요!", createdAt: now() },
];

type ViewMode = { name: "list" } | { name: "detail"; postId: string } | { name: "new-post" };

// ---- App ----
export default function App() {
  const [posts, setPosts] = useState<Post[]>(seedPosts);
  const [comments, setComments] = useState<Comment[]>(seedComments);
  const [mode, setMode] = useState<ViewMode>({ name: "list" });

  // New Post form
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // New Comment form
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentContent, setCommentContent] = useState("");

  const currentPost = useMemo(() => {
    if (mode.name !== "detail") return null;
    return posts.find((p) => p.id === mode.postId) || null;
  }, [mode, posts]);

  const currentPostComments = useMemo(() => {
    if (mode.name !== "detail") return [];
    return comments.filter((c) => c.postId === mode.postId).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }, [mode, comments]);

  // ---- Actions (현 단계: mock, 서버연동 시 fetch로 교체) ----
  async function createPost() {
    const title = newTitle.trim();
    const content = newContent.trim();
    const author = (newAuthor || "익명").trim();

    if (!title || !content) return alert("제목과 내용을 입력하세요.");

    // 서버 연동 예시 (실서버 준비되면 주석 해제하고 API_BASE 설정)
    // const res = await fetch(`${API_BASE}/community/posts`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title, content, author }),
    // });
    // const created: Post = await res.json();

    const created: Post = { id: uid(), title, content, author, createdAt: now() };
    setPosts((prev) => [created, ...prev]);
    setNewTitle("");
    setNewContent("");
    setNewAuthor("");
    setMode({ name: "list" });
  }

  async function createComment() {
    if (mode.name !== "detail" || !currentPost) return;
    const author = (commentAuthor || "익명").trim();
    const content = commentContent.trim();
    if (!content) return alert("댓글 내용을 입력하세요.");

    // 서버 연동 예시
    // const res = await fetch(`${API_BASE}/community/posts/${currentPost.id}/comments`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ author, content }),
    // });
    // const created: Comment = await res.json();

    const created: Comment = { id: uid(), postId: currentPost.id, author, content, createdAt: now() };
    setComments((prev) => [created, ...prev]);
    setCommentAuthor("");
    setCommentContent("");
  }

  // ---- UI ----
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>커뮤니티</Text>
        {mode.name === "list" ? (
          <TouchableOpacity onPress={() => setMode({ name: "new-post" })} style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>글쓰기</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setMode({ name: "list" })} style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>목록</Text>
          </TouchableOpacity>
        )}
      </View>

      {mode.name === "list" && (
        <View style={styles.container}>
          <FlatList
            data={[...posts].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card} onPress={() => setMode({ name: "detail", postId: item.id })}>
                <Text numberOfLines={1} style={styles.cardTitle}>{item.title}

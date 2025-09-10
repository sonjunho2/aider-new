import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Platform } from "react-native";

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

const API_BASE = ""; // 실서버 붙일 때 사용

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

export default function App() {
  const [posts, setPosts] = useState<Post[]>(seedPosts);
  const [comments, setComments] = useState<Comment[]>(seedComments);
  const [mode, setMode] = useState<ViewMode>({ name: "list" });

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

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

  async function createPost() {
    const title = newTitle.trim();
    const content = newContent.trim();
    const author = (newAuthor || "익명").trim();
    if (!title || !content) return alert("제목과 내용을 입력하세요.");

    // 실서버 연동 시 fetch 사용
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

    // 실서버 연동 시 fetch 사용
    const created: Comment = { id: uid(), postId: currentPost.id, author, content, createdAt: now() };
    setComments((prev) => [created, ...prev]);
    setCommentAuthor("");
    setCommentContent("");
  }

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
                <Text numberOfLines={1} style={styles.cardTitle}>{item.title}</Text>
                <Text numberOfLines={2} style={styles.cardContent}>{item.content}</Text>
                <View style={styles.metaRow}>
                  <Text style={styles.meta}>{item.author}</Text>
                  <Text style={styles.meta}>{new Date(item.createdAt).toLocaleString()}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {mode.name === "new-post" && (
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>새 글 작성</Text>
          <TextInput placeholder="제목" value={newTitle} onChangeText={setNewTitle} style={styles.input} />
          <TextInput placeholder="내용" value={newContent} onChangeText={setNewContent} style={[styles.input, styles.multiline]} multiline />
          <TextInput placeholder="작성자 (미입력 시 익명)" value={newAuthor} onChangeText={setNewAuthor} style={styles.input} />
          <TouchableOpacity style={styles.primaryBtn} onPress={createPost}>
            <Text style={styles.primaryBtnText}>등록</Text>
          </TouchableOpacity>
        </View>
      )}

      {mode.name === "detail" && currentPost && (
        <View style={styles.container}>
          <Text style={styles.postTitle}>{currentPost.title}</Text>
          <Text style={styles.postMeta}>
            {currentPost.author} · {new Date(currentPost.createdAt).toLocaleString()}
          </Text>
          <Text style={styles.postBody}>{currentPost.content}</Text>

          <View style={styles.commentsHeader}>
            <Text style={styles.sectionTitle}>댓글</Text>
          </View>
          <FlatList
            data={currentPostComments}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text style={styles.empty}>첫 댓글을 남겨보세요.</Text>}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <View style={styles.commentCard}>
                <Text style={styles.commentContent}>{item.content}</Text>
                <View style={styles.metaRow}>
                  <Text style={styles.meta}>{item.author}</Text>
                  <Text style={styles.meta}>{new Date(item.createdAt).toLocaleString()}</Text>
                </View>
              </View>
            )}
            style={{ marginBottom: 16 }}
          />

          <TextInput placeholder="작성자 (미입력 시 익명)" value={commentAuthor} onChangeText={setCommentAuthor} style={styles.input} />
          <TextInput placeholder="댓글 내용을 입력하세요" value={commentContent} onChangeText={setCommentContent} style={[styles.input, styles.multiline]} multiline />
          <TouchableOpacity style={styles.primaryBtn} onPress={createComment}>
            <Text style={styles.primaryBtnText}>댓글 등록</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f4f6fb" },
  header: {
    paddingTop: Platform.select({ ios: 0, android: 8 }),
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "#5b7cfa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "700" },
  headerBtn: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 10 },
  headerBtnText: { color: "#fff", fontWeight: "600" },
  container: { flex: 1, padding: 16 },
  separator: { height: 12 },
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 14, shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 8, elevation: 2 },
  cardTitle: { fontSize: 16, fontWeight: "700", marginBottom: 6 },
  cardContent: { fontSize: 14, color: "#374151" },
  metaRow: { marginTop: 10, flexDirection: "row", justifyContent: "space-between" },
  meta: { fontSize: 12, color: "#6b7280" },
  sectionTitle: { fontSize: 18, fontWeight: "800", marginBottom: 10 },
  input: { backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 10, fontSize: 14, borderWidth: 1, borderColor: "#e5e7eb" },
  multiline: { minHeight: 100, textAlignVertical: "top" },
  primaryBtn: { backgroundColor: "#5b7cfa", borderRadius: 10, paddingVertical: 12, alignItems: "center" },
  primaryBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  postTitle: { fontSize: 22, fontWeight: "900", marginBottom: 8 },
  postMeta: { fontSize: 12, color: "#6b7280", marginBottom: 12 },
  postBody: { fontSize: 15, lineHeight: 22, color: "#111827", marginBottom: 18 },
  commentsHeader: { marginTop: 8, marginBottom: 8 },
  commentCard: { backgroundColor: "#fff", borderRadius: 10, padding: 12 },
  commentContent: { fontSize: 14, color: "#111827" },
  empty: { textAlign: "center", color: "#9ca3af", paddingVertical: 12 },
});

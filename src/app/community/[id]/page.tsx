// src/app/community/[id]/page.tsx  (새파일)
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

type Comment = {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
};

const LS_POSTS = 'community_posts_v1';
const LS_COMMENTS = 'community_comments_v1';

function uid() {
  return Math.random().toString(36).slice(2, 10);
}
const now = () => new Date().toISOString();

function loadPosts(): Post[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LS_POSTS);
    return raw ? (JSON.parse(raw) as Post[]) : [];
  } catch {
    return [];
  }
}
function savePosts(posts: Post[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LS_POSTS, JSON.stringify(posts));
}

function loadComments(): Comment[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LS_COMMENTS);
    return raw ? (JSON.parse(raw) as Comment[]) : [];
  } catch {
    return [];
  }
}
function saveComments(comments: Comment[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LS_COMMENTS, JSON.stringify(comments));
}

export default function CommunityDetailPage() {
  const params = useParams<{ id: string }>();
  const postId = params?.id;

  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  // 초기 로드
  useEffect(() => {
    setPosts(loadPosts());
    setComments(loadComments());
  }, []);

  const post = useMemo(() => posts.find((p) => p.id === postId), [posts, postId]);

  const postComments = useMemo(
    () =>
      comments
        .filter((c) => c.postId === postId)
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
    [comments, postId]
  );

  function addComment() {
    const a = (author || '익명').trim();
    const c = content.trim();
    if (!c) return;

    const created: Comment = {
      id: uid(),
      postId: String(postId),
      author: a,
      content: c,
      createdAt: now(),
    };

    const next = [created, ...comments];
    setComments(next);
    saveComments(next);
    setContent('');
  }

  // 게시글이 없는 경우 목록으로 유도
  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-8">
          <h1 className="mb-4 text-xl font-bold">게시글을 찾을 수 없습니다.</h1>
          <Link
            href="/community"
            className="inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            목록으로
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-6">
        <header className="mb-5 flex items-center justify-between">
          <Link
            href="/community"
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50"
          >
            ← 목록
          </Link>
          <div className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</div>
        </header>

        <article className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <h1 className="mb-2 text-2xl font-extrabold">{post.title}</h1>
          <div className="mb-4 text-sm text-gray-500">{post.author}</div>
          <p className="whitespace-pre-wrap text-[15px] leading-6 text-gray-800">{post.content}</p>
        </article>

        <section className="mt-8">
          <h2 className="mb-3 text-lg font-bold">댓글</h2>

          <div className="mb-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="mb-2 grid gap-2">
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="작성자 (미입력 시 익명)"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="댓글 내용을 입력하세요"
                className="min-h-[100px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              onClick={addComment}
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              댓글 등록
            </button>
          </div>

          <ul className="space-y-3">
            {postComments.length === 0 && (
              <li className="rounded-xl bg-white p-4 text-center text-sm text-gray-500 ring-1 ring-black/5">
                첫 댓글을 남겨보세요.
              </li>
            )}
            {postComments.map((c) => (
              <li key={c.id} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="whitespace-pre-wrap text-[15px] leading-6 text-gray-800">{c.content}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>{c.author}</span>
                  <time>{new Date(c.createdAt).toLocaleString()}</time>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

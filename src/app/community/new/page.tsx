// src/app/community/new/page.tsx  (새파일)
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

const LS_POSTS = 'community_posts_v1';

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

export default function CommunityNewPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    setReady(true);
  }, []);

  function submit() {
    if (!ready) return;
    const t = title.trim();
    const c = content.trim();
    const a = (author || '익명').trim();

    if (!t || !c) return;

    const posts = loadPosts();
    const created: Post = { id: uid(), title: t, content: c, author: a, createdAt: now() };
    const next = [created, ...posts];

    savePosts(next);
    router.push(`/community/${created.id}`);
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
          <h1 className="text-lg font-bold">새 글 작성</h1>
        </header>

        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <div className="mb-3 grid gap-3">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용"
              className="min-h-[160px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="작성자 (미입력 시 익명)"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={submit}
            className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            등록
          </button>
        </div>
      </div>
    </main>
  );
}

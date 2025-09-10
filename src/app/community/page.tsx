// src/app/community/page.tsx  (새파일)
'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}
const now = () => new Date().toISOString();

const seedPosts: Post[] = [
  { id: uid(), title: '첫 글입니다', content: '여기에 내용을 적어주세요.', author: '관리자', createdAt: now() },
  { id: uid(), title: '커뮤니티 오픈!', content: '자유롭게 글과 댓글을 남겨보세요.', author: '운영팀', createdAt: now() },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>(seedPosts);
  const ordered = useMemo(
    () => [...posts].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
    [posts]
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-6">
        <header className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">커뮤니티</h1>
          <Link
            href="/community/new"
            className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            글쓰기
          </Link>
        </header>

        <ul className="space-y-3">
          {ordered.map((p) => (
            <li key={p.id}>
              <Link
                href={`/community/${p.id}`}
                className="block rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 hover:shadow-md"
              >
                <h2 className="truncate text-lg font-semibold">{p.title}</h2>
                <p className="line-clamp-2 text-sm text-gray-700">{p.content}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>{p.author}</span>
                  <time>{new Date(p.createdAt).toLocaleString()}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* 데모용: 글 추가(임시) */}
        <div className="mt-6">
          <button
            onClick={() =>
              setPosts((prev) => [
                {
                  id: uid(),
                  title: `임시 글 ${prev.length + 1}`,
                  content: '임시 내용입니다.',
                  author: '익명',
                  createdAt: now(),
                },
                ...prev,
              ])
            }
            className="w-full rounded-lg border border-gray-300 bg-white py-2 text-sm font-medium hover:bg-gray-50"
          >
            임시 글 추가
          </button>
        </div>
      </div>
    </main>
  );
}

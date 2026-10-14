"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Home, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';

const BreadCrumb = ({ links = [], currentPageTitle }) => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-between gap-3 mb-6 border-b border-stone-200 py-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link
              href="/dashboard"
              className="inline-flex gap-1.5 items-center text-sm font-medium text-stone-500 hover:text-green-600 transition-colors"
            >
              <Home size={16} />
              <span className="hidden md:inline">Home</span>
            </Link>
          </li>

          {/* Dynamic Links */}
          {links.map((link, index) => (
            <li key={index} className="inline-flex items-center">
              <div className="flex items-center">
                <ChevronRight size={16} className="text-stone-400" />
                <Link
                  href={link.path}
                  className="ms-1 md:ms-2 text-sm font-medium text-stone-500 hover:text-green-600 transition-colors"
                >
                  {link.title}
                </Link>
              </div>
            </li>
          ))}

          {/* Current Page */}
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight size={16} className="text-stone-400" />
              <span className="ms-1 text-sm font-semibold text-stone-900 md:ms-2">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Navigation Controls */}
      <div className="flex items-center bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm">
        <button
          type="button"
          onClick={() => router.back()}
          className="p-1.5 flex justify-center items-center text-stone-500 hover:bg-stone-50 hover:text-green-600 border-r border-stone-200 transition-colors"
          title="Go back"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => router.forward()}
          className="p-1.5 flex justify-center items-center text-stone-500 hover:bg-stone-50 hover:text-green-600 transition-colors"
          title="Go forward"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default BreadCrumb;
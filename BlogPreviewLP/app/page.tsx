import Image from "next/image";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weights: ["500", "800"],
});

export default function Home() {
  return (
    <div className={`flex min-h-screen items-center justify-center bg-yellow-400 ${figtree.className}`}>
      {/* Centered white box */}
      <div className="bg-white rounded-2xl shadow-[4px_4px_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-start p-6">
        {/* Image without padding */}
        <img
          src="/assets/images/illustration-article.svg"
          alt="Illustration article"
          className="rounded-lg"
          style={{ width: 'auto', height: 'auto', display: 'block' }}
        />
        {/* Text content with padding */}
        <div className="mt-3 flex flex-col items-start w-72">
          <p className="bg-[hsl(47,88%,63%)] text-black text-sm font-bold px-2 py-1">Learning</p>
          <p className="text-gray-500 text-sm mt-2">Published 21 Dec 2023</p>
          <p className="text-black text-base font-bold mt-2">HTML & CSS foundations</p>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed whitespace-normal break-normal">
            These languages are the backbone of every website, defining structure, content, and presentation
          </p>
        </div>

        {/* Author: avatar + name */}
        <div className="mt-4 flex items-center gap-3">
          <img
            src="/assets/images/image-avatar.webp"
            alt="Author avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-black text-sm font-bold">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}


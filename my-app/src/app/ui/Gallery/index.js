"use client";

import Link from "next/link";
import Image from 'next/image';

const Gallery = [
  {
    image: "https://i.imghippo.com/files/FdLQ8483nc.jpg",
    pattern: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    className: "col-span-1 row-span-1",
    caption: "CodeForCause Hackthon",
  },
  {
    image: "https://i.imghippo.com/files/oYVx6632ydQ.jpg",
    pattern: "bg-gradient-to-bl from-blue-500/20 to-cyan-500/20",
    className: "col-span-1 row-span-1",
    caption: "International Student MasterClass",
  },
  {
    image: "https://i.imghippo.com/files/nqc8109l.jpg",
    pattern: "bg-gradient-to-tr from-emerald-500/20 to-teal-500/20",
    className: "col-span-2 row-span-2",
    caption: "Frontend Development Learnathon",
  },
  {
    image: "https://i.imghippo.com/files/NwUx4164BSI.jpg",
    pattern: "bg-gradient-to-tl from-orange-500/20 to-yellow-500/20",
    className: "col-span-1 row-span-1",
    caption: "24-Hour Webathon 2nd Place",
  },
  {
    image: "https://i.imghippo.com/files/MYVB8219kk.jpg",
    pattern: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
    className: "col-span-1 row-span-1",
    caption: "Induction program ZOCC",
  },
  {
    image: "https://i.imghippo.com/files/wqcJ6700pg.jpg",
    pattern: "bg-gradient-to-bl from-indigo-500/20 to-purple-500/20",
    className: "col-span-1 row-span-1",
    caption: "ZeroOne CodeClub Club Membership appriceation",
  },
  {
   image: "https://i.imghippo.com/files/xOFh5966ouA.JPG",
    pattern: "bg-gradient-to-tr from-green-500/20 to-emerald-500/20",
    className: "col-span-1 row-span-1",
    caption: "Linux Adminstration workshop",
  },
  {
    image: "https://i.imghippo.com/files/BrTE3928TI.jpg",
    pattern: "bg-gradient-to-tl from-blue-500/20 to-indigo-500/20",
    className: "col-span-1 row-span-1",
    caption: "Web Development Basics MasterClass",
  },
  {
    image: "https://i.imghippo.com/files/oWv5292BBI.jpg",
    pattern: "bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20",
    className: "col-span-1 row-span-1",
    caption: "ZOCC Web Development Jam Session",
  }
];
const GalleryItem = ({ image, pattern, className, caption }) => {
  return (
    <Link 
      href={image} 
      target="_blank" 
      className={`relative overflow-hidden group rounded-xl border border-white/10 ${className}`}
    >
      {image ? (
        <>
          <Image 
            src={image}
            alt="Achievement"
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {caption}
          </div>
        </>
      ) : (
        <div className={`w-full h-full ${pattern} flex items-center justify-center`}>
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      )}
    </Link>
  );
};

export default function GalleryComponent() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {Gallery.map((achievement, index) => (
            <GalleryItem 
              key={index} 
              {...achievement}
              className={`${
                achievement.className.includes('col-span-2') 
                  ? 'col-span-1 sm:col-span-2 lg:col-span-2' 
                  : 'col-span-1'
              } ${
                achievement.className.includes('row-span-2')
                  ? 'row-span-1 sm:row-span-2'
                  : 'row-span-1'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
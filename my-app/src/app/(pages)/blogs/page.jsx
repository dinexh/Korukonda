"use client";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-center mb-8">My Blogs</h1>
      <div className="space-y-8">
        <div className="bg-white/5 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">Blog Title 1</h2>
          <p className="text-gray-400">Short description of the blog post goes here.</p>
          <a href="#" className="text-blue-400 hover:underline">Read more →</a>
        </div>
        <div className="bg-white/5 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">Blog Title 2</h2>
          <p className="text-gray-400">Short description of the blog post goes here.</p>
          <a href="#" className="text-blue-400 hover:underline">Read more →</a>
        </div>
        {/* Add more blog entries as needed */}
      </div>
    </div>
  );
};

export default Blogs;

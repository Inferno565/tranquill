import BlogCard from "@/components/BlogCard";
import NavBar from "@/components/NavBar";
import React from "react";

export default function ExplorePage() {
  const sampleData = [
    {
      title: "Passage of Time",
      author: "John Doe",
      desc: "This is some description",
      likes: 100,
      shares: 50,
      saves: 20,
    },
    {
      title: "Deja Vu",
      author: "Rogers Steven",
      desc: "This is some description dhsjhjdhsjhhjsdhsj",
      likes: 212,
      shares: 20,
      saves: 20,
    },
    {
      title: "Deja Vu",
      author: "Rogers Steven",
      desc: "This is some description dhsjhjdhsjhhjsdhsj",
      likes: 212,
      shares: 20,
      saves: 20,
    },
    {
      title: "Deja Vu",
      author: "Rogers Steven",
      desc: "This is some description dhsjhjdhsjhhjsdhsj",
      likes: 212,
      shares: 20,
      saves: 20,
    },
    {
      title: "Deja Vu",
      author: "Rogers Steven",
      desc: "This is some description dhsjhjdhsjhhjsdhsj",
      likes: 212,
      shares: 20,
      saves: 20,
    },
    {
      title: "Deja Vu",
      author: "Rogers Steven",
      desc: "This is some description dhsjhjdhsjhhjsdhsj",
      likes: 212,
      shares: 20,
      saves: 20,
    },
    {
      title: "Deja Vu",
      author: "Rogers Steven",
      desc: "This is some description dhsjhjdhsjhhjsdhsj",
      likes: 212,
      shares: 20,
      saves: 20,
    },
    {
      title: "Deja Vu",
      author: "Rogers Steven",
      desc: "This is some description dhsjhjdhsjhhjsdhsj",
      likes: 212,
      shares: 20,
      saves: 20,
    },
  ];
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="p-4 mt-10">
        <h1 className="text-4xl">New Blogs</h1>
        <div className="grid grid-cols-3 gap-5 mt-7 ">
          {sampleData.map((content, index) => {
            return (
              <div key={index} className={index === 0 ? "col-span-2" : " "}>
                <BlogCard data={content} key={index} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

import BlogCard from "@/components/BlogCard";
import NavBar from "@/components/NavBar";
import React from "react";

export default function ExplorePage() {
  const sampleData = [
    {
      title: "Moments in Time",
      author: "John Doe",
      desc: "A deep dive into time and memory.",
      likes: 267,
      shares: 70,
      saves: 11,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "Urban Chaos",
      author: "Alice Johnson",
      desc: "Exploring cities through a creative lens.",
      likes: 96,
      shares: 53,
      saves: 31,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    {
      title: "Into the Forest",
      author: "Mark Lee",
      desc: "Nature walks and quiet moments.",
      likes: 170,
      shares: 46,
      saves: 12,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "Desert Mirage",
      author: "Sara Ali",
      desc: "Wandering across hot landscapes.",
      likes: 395,
      shares: 60,
      saves: 45,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    },
    {
      title: "Calm Waters",
      author: "Mia Singh",
      desc: "Peaceful lakeside reflections.",
      likes: 83,
      shares: 19,
      saves: 5,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
    {
      title: "The Mountain Path",
      author: "Rogers Steven",
      desc: "Climbing toward clarity.",
      likes: 412,
      shares: 72,
      saves: 39,
      image: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3",
    },
    {
      title: "City Lights",
      author: "Bruce Wayne",
      desc: "A story of sleepless cities.",
      likes: 205,
      shares: 31,
      saves: 20,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    },
    {
      title: "Winter Silence",
      author: "Clark Kent",
      desc: "Snow and stillness in the air.",
      likes: 189,
      shares: 15,
      saves: 22,
      image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    },
    {
      title: "Ocean Eyes",
      author: "Diana Prince",
      desc: "Watching waves for hours.",
      likes: 499,
      shares: 82,
      saves: 50,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "IM THIRD LAST",
      author: "Tony Stark",
      desc: "Glimpses of the future.",
      likes: 433,
      shares: 12,
      saves: 41,
      image: "https://images.unsplash.com/photo-1534081333815-ae5019106621",
    },
    {
      title: "im second last",
      author: "Natasha Romanoff",
      desc: "Stories untold, yet familiar.",
      likes: 488,
      shares: 99,
      saves: 13,
      image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
    },
    {
      title: "im last",
      author: "Steve Rogers",
      desc: "Time waits for no one.",
      likes: 319,
      shares: 88,
      saves: 33,
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    },
  ];

  return (
    <>
      <main className="p-4 mt-10">
        <h1 className="text-4xl">New Blogs</h1>
        <div className="grid grid-cols-3 gap-5 mt-7 grid-flow-dense ">
          {sampleData.map((content, index) => {
            return <BlogCard data={content} key={index} />;
          })}
        </div>
      </main>
    </>
  );
}

// Code for random sized cards

{
  /* <div
key={index}
className={
  index != sampleData.length - 1 && content.likes > 400
    ? "col-span-2"
    : "col-span-1"
}> */
}

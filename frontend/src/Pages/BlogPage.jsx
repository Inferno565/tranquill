import NavBar from "@/components/NavBar";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <main>
        <div className="p-5 bg-amber-100 text-center">
          This is Main image section
        </div>
        <div>
          <div className="p-3 ml-0 mr-0">
            <h1 className="text-4xl">This will be blog title</h1>
            <text>Author name or some thing else</text>
          </div>
          <div className="p-3 ml-0 mr-0">this will be main blog text</div>
        </div>
      </main>
    </>
  );
}

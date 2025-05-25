import NavBar from "@/components/NavBar";
import React from "react";
import Image from "../assets/Herobg.jpg";
export default function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div
          className=" bg-no-repeat bg-contain bg-fixed"
          style={{
            backgroundImage: "url(" + Image + ")",
          }}>
          <div className="p-10">
            <div className="mt-110">
              <h1 className="text-4xl text-center">Some catchy text</h1>
            </div>
          </div>
          <div className="p-10 mb-20">
           some text
          </div>
        </div>
        <div className="p-10">
         about section
        </div>
      </main>
    </>
  );
}

import "@mdxeditor/editor/style.css";
import { React, useState, useEffect } from "react";
import {
  MDXEditor,
  headingsPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  BlockTypeSelect,
  CreateLink,
  linkDialogPlugin,
  Separator,
  quotePlugin,
  listsPlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageUpload from "@/components/ImageUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BlogDisplay from "./BlogDisplay";
export default function EditBlogPage() {
  const [content, setContent] = useState("");
  const [title, settitle] = useState();

  useEffect(() => {
    localStorage.setItem("blog", content);
  }, [content]);

  const handlePublish = () => {
    console.log(content);
  };

  const handleOnChange = (newContent) => {
    setContent(newContent);
  };

  const handleTChange = (newTitle) => {
    settitle(newTitle);
    localStorage.setItem("title", newTitle);
  };
  const blogImage = localStorage.getItem("image");
  const blogTitle = localStorage.getItem("title");
  const blogContent = localStorage.getItem("blog");
  return (
    <>
      <main className="p-3">
        <div>
          <h1 className="text-3xl">Write Your Blog</h1>
        </div>
        <div className="p-3">
          <Tabs
            defaultValue="image"
            className="w-full rounded-2xl shadow-2xl p-3 bg-white">
            <TabsList className="w-full border-1 border-black h-12 p-2 rounded-3xl">
              <TabsTrigger value="image" className="rounded-3xl">
                Upload Cover Image
              </TabsTrigger>
              <TabsTrigger value="blog" className="rounded-3xl">
                Blog Editor
              </TabsTrigger>
              <TabsTrigger value="preview" className="rounded-3xl">
                Preview Blog
              </TabsTrigger>
            </TabsList>

            <TabsContent value="image" className="p-3 rounded-2xl">
              <ImageUpload />
            </TabsContent>

            <TabsContent
              value="blog"
              className="p-3 rounded-2xl bg-accent w-5xl mr-auto ml-auto">
              <div className="flex p-3 gap-3">
                <Label className="text-lg">Enter your blog title -</Label>
                <Input
                  type="text"
                  className="w-md border-black bg-white"
                  value={title}
                  onChange={(e) => handleTChange(e.target.value)}
                />
              </div>
              <div className="border-1 border-black rounded-xl bg-white h-fit">
                <MDXEditor
                  markdown={content}
                  onChange={handleOnChange}
                  plugins={[
                    headingsPlugin(),
                    quotePlugin(),
                    listsPlugin(),
                    linkDialogPlugin(),
                    toolbarPlugin({
                      toolbarClassName: "toolbar",
                      toolbarContents: () => (
                        <>
                          <UndoRedo />
                          <Separator />
                          <BoldItalicUnderlineToggles />
                          <Separator />
                          <BlockTypeSelect />
                          <Separator />
                          <CreateLink />
                          <Separator />
                        </>
                      ),
                    }),
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent
              value="preview"
              className="p-3 border-1 rounded-2xl border-black">
              <BlogDisplay
                image={blogImage}
                title={blogTitle}
                blog={blogContent}
              />
            </TabsContent>
          </Tabs>
        </div>
        {/*
         */}
        {/* <Button onClick={handlePublish}>Publish</Button> */}
      </main>
    </>
  );
}

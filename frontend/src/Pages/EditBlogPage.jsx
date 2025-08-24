import "@mdxeditor/editor/style.css";
import { React, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageUpload from "@/components/ImageUpload";

export default function EditBlogPage() {
  const [content, setContent] = useState("Start writing here...");

  const handlePublish = () => {
    console.log(content);
  };

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
              <div className="border-1 border-black rounded-xl bg-white h-fit">
                <MDXEditor
                  markdown={content}
                  onChange={setContent}
                  plugins={[
                    headingsPlugin(),
                    thematicBreakPlugin(),
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
              Blog Preview
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

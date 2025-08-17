'use client'
import React, { useState, useCallback, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Smile,
  Paperclip,
} from "lucide-react";

import type { EditorType, PostContentPartial } from "@/type/resources/postContent.type";

interface Props {
  onNext?: () => void;
  onPrev?: () => void;
  editor?: EditorType | null;
  postContent?: PostContentPartial;
  onChangePostContent?: (content: PostContentPartial) => void;
}

const EditPost: React.FC<Props> = ({
  onNext,
  onPrev,
  editor,
  postContent,
  onChangePostContent
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [images, setImages] = useState<File[]>([]);

  const commonEmojis = ["🍭", "⚡", "🚨", "🔥", "💼", "✅", "📢", "🚀", "⏳", "💡", "🎯", "📈"];

  const tiptapEditor = useEditor({
    extensions: [StarterKit, Underline],
    content: postContent?.content || "<p></p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none p-4",
      },
    },
  });

  // Sync editor content to postContent
  useEffect(() => {
    if (!tiptapEditor || !onChangePostContent) return;

    const updateContent = () => {
      const html = tiptapEditor.getHTML();
      onChangePostContent({
        ...postContent,
        content: html,
      });
    };

    tiptapEditor.on("update", updateContent);
    return () => {
      tiptapEditor.off("update", updateContent);
    };
  }, [tiptapEditor, postContent, onChangePostContent]);

  // Handle image uploads
  const handleImageUpload = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;

    input.onchange = (e) => {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      setImages((prev) => [...prev, ...files]);

      const newImageURLs = files.map((file) => URL.createObjectURL(file));
      onChangePostContent?.({
        ...postContent,
        images: [...(postContent?.images || []), ...newImageURLs],
      });
    };

    input.click();
  }, [postContent, onChangePostContent]);

  // Emoji add
  const addEmoji = useCallback(
    (emoji: string) => {
      tiptapEditor?.chain().focus().insertContent(emoji).run();
      setShowEmojiPicker(false);
    },
    [tiptapEditor]
  );

  // Remove image
  const removeImage = (index: number) => {
    const updated = (postContent?.images || []).filter((_, i) => i !== index);
    onChangePostContent?.({
      ...postContent,
      images: updated,
    });
  };

  const MenuButton = ({
    onClick,
    isActive = false,
    title,
    children,
  }: {
    onClick: () => void;
    isActive?: boolean;
    title: string;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      title={title}
      className={`p-2 rounded-md transition-colors ${
        isActive
          ? "bg-blue-100 text-blue-600"
          : "hover:bg-gray-100 text-gray-600"
      } cursor-pointer`}
      type="button"
    >
      {children}
    </button>
  );

  if (!tiptapEditor) return <div>Loading editor...</div>;

  return (
    <div className="w-full p-4 max-h-[80%] overflow-y-auto font-inter">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          {editor ? `Create ${editor.replace("_", " ")} Post` : "Create Post"}
        </h2>
      </div>

      {/* Toolbar */}
      <div className="border rounded-t-lg bg-gray-50 p-2 flex justify-between items-center relative">
        <div className="flex gap-1">
          <MenuButton
            onClick={() => tiptapEditor.chain().focus().toggleBold().run()}
            isActive={tiptapEditor.isActive("bold")}
            title="Bold"
          >
            <Bold size={16} />
          </MenuButton>

          <MenuButton
            onClick={() => tiptapEditor.chain().focus().toggleItalic().run()}
            isActive={tiptapEditor.isActive("italic")}
            title="Italic"
          >
            <Italic size={16} />
          </MenuButton>

          <MenuButton
            onClick={() => tiptapEditor.chain().focus().toggleUnderline().run()}
            isActive={tiptapEditor.isActive("underline")}
            title="Underline"
          >
            <UnderlineIcon size={16} />
          </MenuButton>
        </div>

        <div className="flex gap-1 items-center relative">
          <MenuButton
            onClick={() => setShowEmojiPicker((show) => !show)}
            isActive={showEmojiPicker}
            title="Add Emoji"
          >
            <Smile size={16} />
          </MenuButton>
          <MenuButton onClick={handleImageUpload} title="Upload Image">
            <Paperclip size={16} />
          </MenuButton>

          {showEmojiPicker && (
            <div className="absolute top-full right-0 mt-1 w-40 bg-white border rounded-lg shadow-lg p-3 z-10 grid grid-cols-6 gap-1">
              {commonEmojis.map((emoji, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => addEmoji(emoji)}
                  className="w-full h-auto hover:bg-gray-100 rounded flex items-center justify-center text-lg"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Editor */}
      <div
        className="border border-t-0 rounded-b-lg bg-white"
        style={{
          width: "100%",
          height: 130,
          overflowY: "auto",
          overflowX: "auto",
        }}
      >
        <EditorContent editor={tiptapEditor} className="w-full h-full" />
      </div>

      {/* Image preview */}
      {(postContent?.images?.length || 0) > 0 && (
        <div className="mt-4">
          <h2 className="text-sm font-medium text-gray-700 mb-2">
            Image Preview
          </h2>
          <div className="flex gap-2 flex-wrap">
            {postContent?.images?.map((url, index) => (
              <div
                key={index}
                className="relative w-24 h-24 border rounded-md overflow-hidden"
              >
                <img
                  src={url}
                  alt={`Preview ${index}`}
                  className="object-cover w-full h-full"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-black bg-opacity-50 text-white text-xs px-1 rounded-bl cursor-pointer"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hashtags input */}
      <div className="mt-4 space-y-2">
        <h2 className="font-medium text-sm text-[#555555]">Hashtags</h2>
        <input
          type="text"
          value={postContent?.hashTags || ""}
          onChange={(e) =>
            onChangePostContent?.({
              ...postContent,
              hashTags: e.target.value,
            })
          }
          className="w-full px-2 py-2 border border-[#dfdfdf] rounded-lg placeholder:text-[#777777]"
          placeholder="Add hashtags"
        />
      </div>

      {/* Nav buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={onPrev}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          type="button"
        >
          Previous
        </button>
        <button
          onClick={() => {
            const content = tiptapEditor.getHTML();
            console.log("Editor Content:", content);
            console.log("Images:", postContent?.images);
            if (onNext) onNext();
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EditPost;

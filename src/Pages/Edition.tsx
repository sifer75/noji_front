import { useEditor, EditorContent } from "@tiptap/react";
import MenuEdition from "../components/MenuEdition/MenuEdition";
import StarterKit from "@tiptap/starter-kit";

interface EditionProps {
  id: string;
}

function Edition({ id }: EditionProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
    <h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>`,
  });

  return (
    <div
      id={`Edition__page__${id}`}
      className="flex justify-center w-full h-full flex-1 items-center bg-pink-200 p-10"
    >
      <div className="w-3/4 h-full bg-yellow-200 rounded-3xl flex flex-col items-center justify-center">
        {/* <div className="w-full h-1/2 bg-green-300 p-10">
          <div className="w-full h-full bg-red-300 p-10 rounded-2xl flex flex-col items-center justify-center">
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className={`p-2 rounded ${
                  editor?.isActive("bold")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Gras
              </button>
              <button
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                className={`p-2 rounded ${
                  editor?.isActive("italic")
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                Italique
              </button>
            </div>
            <EditorContent editor={editor} className="tiptap-editor" />
          </div>
        </div> */}
        <div className="w-full h-1/2 bg-green-300 p-10">
          <div className="w-full h-full bg-blue-300 p-10 rounded-2xl flex flex-col items-center justify-center">
            <MenuEdition id={`MenuEdition__${id}`} editor={editor} />
            <EditorContent
              editor={editor}
              className="w-full h-full bg-gray-100 rounded-b-xl overflow-scroll border-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edition;

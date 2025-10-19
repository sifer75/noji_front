import { useEditor, EditorContent } from "@tiptap/react";
import { FloatingMenu, BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';

// Charger les langages pour la coloration
const lowlight = createLowlight();
lowlight.register({ css, js, ts });

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Désactiver le codeBlock de base pour utiliser celui avec coloration
        codeBlock: false,
      }),
      // Ajouter le nouveau codeBlock configuré
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: "<p>Hello World! Essayez d'ajouter un bloc de code.</p>",
  });

  return (
    <div className="w-full h-full">
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </div>
  );
};

export default Tiptap;

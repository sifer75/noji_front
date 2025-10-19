import { Editor } from "@tiptap/react";
import ButtonEdition from "./ButtonEdition";
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa6";
import { FaStrikethrough } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
// import { FaCodeBlock } from "react-icons/fa6";
import { FaHeading } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { FaListOl } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
// import { FaUndo } from "react-icons/fa6";
// import { FaRedo } from "react-icons/fa6";
import type { ReactNode } from "react";

interface MenuEditionProps {
  id: string;
  editor?: Editor;
}

interface TypographysProps {
  typography: string;
  icon: ReactNode;
  action: (editor: Editor) => void;
  isActiveCheck: (editor: Editor) => boolean;
}

function MenuEdition({ id, editor }: MenuEditionProps) {
  const typographys: TypographysProps[] = [
    {
      typography: "Gras",
      icon: <FaBold size={10} />,
      action: (editor: Editor) => editor.chain().focus().toggleBold().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("bold"),
    },
    {
      typography: "Italique",
      icon: <FaItalic />,
      action: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("italic"),
    },
    {
      typography: "Souligné",
      icon: <FaUnderline />,
      action: (editor: Editor) =>
        editor.chain().focus().toggleUnderline().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("underline"),
    },
    {
      typography: "Barré",
      icon: <FaStrikethrough />,
      action: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("strike"),
    },
    {
      typography: "Code",
      icon: <FaCode />,
      action: (editor: Editor) => editor.chain().focus().toggleCode().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("code"),
    },
    {
      typography: "Bloc de code",
      icon: <FaCode />,
      action: (editor: Editor) =>
        editor.chain().focus().toggleCodeBlock().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("codeBlock"),
    },
    {
      typography: "H1",
      icon: <FaHeading />,
      action: (editor: Editor) =>
        editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActiveCheck: (editor: Editor) =>
        editor.isActive("heading", { level: 1 }),
    },
    {
      typography: "H2",
      icon: <FaHeading />,
      action: (editor: Editor) =>
        editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActiveCheck: (editor: Editor) =>
        editor.isActive("heading", { level: 2 }),
    },
    {
      typography: "H3",
      icon: <FaHeading />,
      action: (editor: Editor) =>
        editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActiveCheck: (editor: Editor) =>
        editor.isActive("heading", { level: 3 }),
    },
    {
      typography: "Liste à puces",
      icon: <FaListUl />,
      action: (editor: Editor) =>
        editor.chain().focus().toggleBulletList().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("bulletList"),
    },
    {
      typography: "Liste numérotée",
      icon: <FaListOl />,
      action: (editor: Editor) =>
        editor.chain().focus().toggleOrderedList().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("orderedList"),
    },
    {
      typography: "Citation",
      icon: <FaQuoteLeft />,
      action: (editor: Editor) =>
        editor.chain().focus().toggleBlockquote().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("blockquote"),
    },
    {
      typography: "Ligne horizontale",
      icon: <FaMinus />,
      action: (editor: Editor) =>
        editor.chain().focus().setHorizontalRule().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("horizontalRule"),
    },
    {
      typography: "Annuler",
      icon: <FaCode />,
      action: (editor: Editor) => editor.chain().focus().undo().run(),
      isActiveCheck: (editor: Editor) => editor.can().undo(),
    },
    {
      typography: "Rétablir",
      icon: <FaCode />,
      action: (editor: Editor) => editor.chain().focus().redo().run(),
      isActiveCheck: (editor: Editor) => editor.can().redo(),
    },
  ];

  return (
    <div
      id={`MenuEdition__container__${id}`}
      className="w-full h-15 bg-green-200 rounded-t-xl flex gap-2 items-center overflow-scroll"
    >
  
      {typographys.map((typography) => (
        <ButtonEdition
          id={`ButtonEdition__${typography.typography}__${id}`}
          key={typography.typography}
          typography={typography.typography}
          editor={editor}
          action={typography.action}
          isActiveCheck={typography.isActiveCheck}
          icon={typography.icon}
        />
      ))}
    </div>
  );
}

export default MenuEdition;

import { Editor } from "@tiptap/react";
import ButtonEdition from "./ButtonEdition";

interface MenuEditionProps {
  id: string;
  editor?: Editor;
}

interface TypographysProps {
  typography: string;
  action: (editor: Editor) => void;
  isActiveCheck: (editor: Editor) => boolean;
}

function MenuEdition({ id, editor }: MenuEditionProps) {
  const typographys: TypographysProps[] = [
    {
      typography: "Gras",
      action: (editor: Editor) => editor.chain().focus().toggleBold().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("bold"),
    },
    {
      typography: "Italique",
      action: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("italic"),
    },
    {
      typography: "Souligné",
      action: (editor: Editor) =>
        editor.chain().focus().toggleUnderline().run(),
      isActiveCheck: (editor: Editor) => editor.isActive("underline"),
    },
  ];

  return (
    <div
      id={`MenuEdition__container__${id}`}
      className="w-full h-15 bg-green-200 rounded-t-xl p-2 flex gap-2 items-center overflow-scroll"
    >
      {typographys.map((typography) => (
        <ButtonEdition
          id={`ButtonEdition__${typography.typography}__${id}`}
          typography={typography.typography}
          editor={editor}
          action={typography.action}
          isActiveCheck={typography.isActiveCheck}
        />
      ))}
      MenuEdition
    </div>
  );
}

export default MenuEdition;

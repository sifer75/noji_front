import type { Editor } from "@tiptap/react";

interface ButtonEditionProps {
  id: string;
  typography: string;
  editor?: Editor;
  action: (editor: Editor) => void;
  isActiveCheck: (editor: Editor) => boolean;
}

function ButtonEdition({ id, typography, editor, action, isActiveCheck }: ButtonEditionProps) {
  return (
    <button
      id={`ButtonEdition__${id}`}
      className={`p-2 rounded flex-nowrap ${
        editor && isActiveCheck(editor) ? "bg-blue-500 text-white" : "bg-gray-200"
      } hover:bg-gray-200 hover:text-black`}
      onClick={() => editor && action(editor)}
    >
      {typography}
    </button>
  );
}

export default ButtonEdition;

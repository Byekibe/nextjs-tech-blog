"use client";

import { MdEditor, MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useTheme } from "next-themes";

export default function Editor({ data }) {
  const { theme, setTheme } = useTheme();
  return (
    <MdPreview
      language="en-US"
      previewTheme="cyanosis"
      theme={theme}
      modelValue={data}
      className="editorRt"
      showCodeRowNumber={true}
    />
  );
}

"use client";

import { MdEditor, MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useTheme } from "next-themes";

export default function Editor({ data }) {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <MdPreview language="en-US" theme={theme || "dark"} modelValue={data} />
  );
}

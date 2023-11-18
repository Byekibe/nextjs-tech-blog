"use client";

import { MdEditor, MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/style.css";

export default function Editor({ data }) {
  return <MdPreview language="en-US" theme="dark" modelValue={data} />;
}

import React, { useState } from "react";
import RichTextEditor from "react-rte";

const TextEditor = ({ onChange }) => {
	const [ value, setValue ] = useState(RichTextEditor.createEmptyValue());
	return (
		<RichTextEditor
			value={value}
			onChange={(e) => {
				setValue(e);
				onChange(e.toString("html"));
			}}
		/>
	);
};
export default TextEditor;

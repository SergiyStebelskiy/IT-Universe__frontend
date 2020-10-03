import React from "react";
import s from "./TextEditor.module.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const TextEditor = ({ value, onChange, placeholder }) => {
	const modules = {
		toolbar: [
			[ { header: [ 1, 2, false ] } ],
			[ "bold", "italic", "underline", "strike", "blockquote", "code", "code-block" ],
			[ { list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" } ],
			[ "link", "image", "video" ],
			[ "clean" ]
		]
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"code",
		"code-block",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"video",
		"clean"
	];
	return (
		<ReactQuill
			theme="snow"
			className={s.textEditor}
			placeholder={placeholder}
			modules={modules}
			formats={formats}
			value={value}
			onChange={onChange}
		/>
	);
};
export default TextEditor;

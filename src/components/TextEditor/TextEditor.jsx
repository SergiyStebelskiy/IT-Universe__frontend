import React, { Fragment } from "react";
import classNames from "classnames";
import s from "./TextEditor.module.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const TextEditor = ({ value, onChange, placeholder, error }) => {
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
		<Fragment>
			<ReactQuill
				theme="snow"
				className={classNames(s.textEditor, { [s.error]: error })}
				placeholder={placeholder}
				modules={modules}
				formats={formats}
				defaultValue={value}
				onChange={onChange}
			/>
			{error && <span className="errorMessage">{error}</span>}
		</Fragment>
	);
};
export default TextEditor;

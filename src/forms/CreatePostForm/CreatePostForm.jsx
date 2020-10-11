import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./CreatePostForm.module.scss";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import TextEditor from "components/TextEditor/TextEditor";
import { useFormik } from "formik";
import { object, string } from "yup";
const CreatePostForm = ({ onSubmit, onClose }) => {
	const [ content, setContent ] = useState("");
	const formik = useFormik({
		initialValues: {
			title: "",
			description: "",
			content: ""
		},
		validationSchema: object({
			title: string()
				.required("Please, type the project title")
				.min(6, "The title is too short. It should be 6 words or more.")
				.max(300, "The title is too long. It should be 300 words or less. "),
			description: string()
				.required("Please, type the project description")
				.min(6, "The description is too short. It should be 6 words or more.")
				.max(500, "The title is too long. It should be 500 words or less. "),
			content: string()
				.required("Please, type the project content")
				.min(700, "The content is too short. It should be 5 000 words or more.")
				.max(10000, "The content is too long. It should be 10 000 words or less.")
		}),
		onSubmit: (values) => {
			onSubmit({
				...values,
				content
			});
		}
	});
	const { handleSubmit, handleChange, values, errors, touched, setFieldValue } = formik;
	return (
		<form className={s.createPostForm} onSubmit={handleSubmit} noValidate>
			<Input
				className={s.field}
				value={values.title}
				onChange={handleChange}
				name="title"
				label="Title"
				variant="outlined"
				size="small"
				autoComplete="off"
				autoFocus
				error={errors.title && touched.title && Boolean(errors.title)}
				helperText={errors.title && touched.title && errors.title}
			/>
			<Input
				className={s.field}
				value={values.description}
				onChange={handleChange}
				rowsMax={5}
				name="description"
				label="Description"
				autoComplete="off"
				variant="outlined"
				error={errors.description && touched.description && Boolean(errors.description)}
				helperText={errors.description && touched.description && errors.description}
				multiline
			/>
			<div className={s.textEditor}>
				<TextEditor
					value={content}
					onChange={(content, delta, source, editor) => {
						setFieldValue("content", editor.getText().replace(/\s/g, ""));
						setContent(content);
					}}
					error={errors.content && touched.content && errors.content}
					placeholder="Content"
				/>
			</div>
			<div className="popupBtns">
				<Button onClick={onClose} className="btn" variant="outlined" size="small">
					Cancel
				</Button>
				<Button type="submit" className="btn" variant="contained" color="primary" size="small">
					Save
				</Button>
			</div>
		</form>
	);
};
CreatePostForm.propTypes = {
	onSubmit: PropTypes.func,
	onClose: PropTypes.func
};
CreatePostForm.defaultProps = {
	onSubmit: () => {},
	onClose: () => {}
};
export default CreatePostForm;

import React from "react";
import s from "./CreatePostForm.module.scss";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Textarea from "components/Textarea/Textarea";
import TextEditor from "components/TextEditor/TextEditor";
import { useFormik } from "formik";
import { object, string } from "yup";
const CreatePostForm = ({ onSubmit, onClose }) => {
	const formik = useFormik({
		initialValues: {
			title: "",
			description: "",
			content: ""
		},
		validationSchema: object({
			title: string()
				.required("Please, type the project title")
				.max(300, "The title is too long. It should be 300 words or less. "),
			description: string()
				.required("Please, type the project description")
				.max(500, "The title is too long. It should be 500 words or less. "),
			content: string()
				.required("Please, type the project content")
				.max(10000, "The content is too long. It should be 10 000 words or less. ")
		}),
		onSubmit: (values) => {
			console.log(values);
			onSubmit(values);
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
			<Textarea
				className={s.field}
				value={values.description}
				onChange={handleChange}
				placeholder="Description"
				name="description"
				error={errors.description && touched.description && errors.description}
			/>
			<div className={s.textEditor}>
				<TextEditor
					value={values.content}
					onChange={(content, delta, source, editor) => {
						setFieldValue("content", content);
						console.log(editor.getText());
					}}
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
export default CreatePostForm;

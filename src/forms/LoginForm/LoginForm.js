import React from "react";
import s from "./LoginForm.module.scss";
import classNames from "classnames";
import { Box, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { object } from "yup";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Link from "components/Link/Link";
import { validation } from "helpers/validation";

const LoginForm = ({ onSubmit, loading, success, error }) => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		onSubmit: (values) => onSubmit(values),
		validationSchema: object().shape({
			email: validation.email,
			password: validation.userPassword
		})
	});
	const { handleSubmit, handleChange, values, errors } = formik;
	return (
		<Box className={s.loginFormWrap} boxShadow={3}>
			<form className={s.loginForm} onSubmit={handleSubmit}>
				<Input
					value={values.email}
					onChange={handleChange}
					error={Boolean(errors.email)}
					helperText={errors.email}
					className={s.field}
					label="Email"
					variant="outlined"
					type="email"
					name="email"
					autoComplete="username"
				/>
				<Input
					value={values.password}
					onChange={handleChange}
					error={Boolean(errors.password)}
					helperText={errors.password}
					className={s.field}
					label="Password"
					variant="outlined"
					type="password"
					name="password"
					autoComplete="current-password"
				/>
				<Button
					className={s.btn}
					success={success}
					loading={loading}
					type="submit"
					color="primary"
					variant="contained"
					size="large"
					fullWidth
				>
					log in
				</Button>
				<Typography className={classNames("errorMessage", s.errorMessage)} variant="body2">
					{error && error}
				</Typography>
				<Typography className={s.registrationText} variant="body2" color="textPrimary" align="center">
					Don't have an account?
					<Link path="/registration">Registration</Link>
				</Typography>
			</form>
		</Box>
	);
};

export default LoginForm;

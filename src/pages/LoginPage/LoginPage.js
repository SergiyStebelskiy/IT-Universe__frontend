import React, { useState } from "react";
import s from "./LoginPage.module.scss";
import LoginForm from "forms/LoginForm/LoginForm";
import services from "services";

const LoginPage = () => {
	const [ loading, setLoading ] = useState(false);
	const [ reqResult, setReqResult ] = useState({ success: false, error: null });

	const handleAuthorization = (values) => {
		setLoading(true);
		services.userServices
			.authorization(values)
			.then(() => {
				setLoading(false);
				setReqResult({ error: null, success: true });
			})
			.catch((error) => {
				setLoading(false);
				setReqResult({ success: false, error: error.response.data });
			});
	};
	return (
		<div className={s.loginPage}>
			<LoginForm
				onSubmit={handleAuthorization}
				loading={loading}
				success={reqResult.success}
				error={reqResult.error}
			/>
		</div>
	);
};

export default LoginPage;

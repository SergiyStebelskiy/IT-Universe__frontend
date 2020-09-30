import React, { useState } from "react";
import s from "./LoginPage.module.scss";
import LoginForm from "forms/LoginForm/LoginForm";
import services from "services";
import { setUser } from "actions/user";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MainLayout from "layouts/MainLayout/MainLayout";
import { USER } from "helpers/userRoles";

const LoginPage = ({ setUser }) => {
	const [ loading, setLoading ] = useState(false);
	const [ reqResult, setReqResult ] = useState({ success: false, error: null });
	const history = useHistory();
	const handleAuthorization = (values) => {
		setLoading(true);
		services.userServices
			.authorization(values)
			.then((res) => {
				setUser({
					type: USER,
					...res.data
				});
				setLoading(false);
				setReqResult({ error: null, success: true });
				history.push("/profile");
			})
			.catch((error) => {
				setLoading(false);
				setReqResult({ success: false, error: error.response.data });
			});
	};
	return (
		<MainLayout>
			<div className={s.loginPage}>
				<LoginForm
					onSubmit={handleAuthorization}
					loading={loading}
					success={reqResult.success}
					error={reqResult.error}
				/>
			</div>
		</MainLayout>
	);
};

export default connect(null, { setUser })(LoginPage);

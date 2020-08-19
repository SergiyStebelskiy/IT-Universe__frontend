import React, { useState } from "react";
import s from "./RegistrationPage.module.scss";
import RegistrationForm from "forms/RegistrationForm/RegistrationForm";
import services from "services";

const RegistrationPage = () => {
	const [ loading, setLoading ] = useState(false);
	const [ reqResult, setReqResult ] = useState({ success: false, error: null });

	const handleRegistration = (values) => {
		setLoading(true);
		services.userServices
			.registration(values)
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
		<div className={s.registrationPage}>
			<RegistrationForm
				onSubmit={handleRegistration}
				loading={loading}
				success={reqResult.success}
				error={reqResult.error}
			/>
		</div>
	);
};

export default RegistrationPage;

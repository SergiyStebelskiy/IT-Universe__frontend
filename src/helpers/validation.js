import { string } from "yup";

export const validation = {
	userName: string().required("Name is required").min(3, "Name must contain more than 3 characters"),
	userPassword: string().required("Password is required").min(6, "Password must contain more than 6 characters"),
	email: string().required("Email is required").email("Email not valid")
};

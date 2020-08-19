export const load = (item) => {
	try {
		const serializedState = localStorage.getItem(item);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const save = (name, value) => {
	try {
		const serializedState = JSON.stringify(value);
		localStorage.setItem(name, serializedState);
	} catch (error) {
		// ignore write errors
	}
};

export const remove = (item) => {
	localStorage.removeItem(item);
};

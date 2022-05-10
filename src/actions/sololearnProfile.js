import { types } from "../types/types";
import axios from "axios";

export const getProfileFull = (id) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`https://selectprocess.herokuapp.com/api/candidate/sololearm/${id}`
			);
			dispatch(getResult(res));
		} catch (error) {
			return error;
		}
	};
};

const getResult = (resp) => ({
	type: types.getResult,
	payload: resp,
});

export const getData = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`https://selectprocess.herokuapp.com/api/candidate/result/${id}`
			);
			dispatch(getProfile(data));
		} catch (error) {
			return error;
		}
	};
};
export const getProfile = (profile) => ({
	type: types.getProfile,
	payload: profile,
});

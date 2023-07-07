import axios, { AxiosError } from "axios";
import { decrytData, encryptData } from "../helper";

export const instance = () => {
    const base = axios.create({
        baseURL: import.meta.env.VITE_BACKEND_URL,
        timeout: 1500000,
        headers: {
            "Content-Type": "application/json",
            withCredentials: true,
        }
    });

    const methods = ['post', 'patch', 'put'];
	base.interceptors.request.use(config => {
		if (methods.includes(config.method as string)) {
			if (Object.values(config.data).length) {
				const newData = JSON.stringify(config.data);
				const decrypt = encryptData(newData);
				config.data = {
					payload: decrypt
				}

			}
		}

		return config;
	});

	base.interceptors.response.use(config => {
		if (config.data) {
			const newData = decrytData<string>(config.data.data);
				config.data = {
					...config.data,
					data: { ...JSON.parse(newData) },
				}
		}
		if (methods.includes(config.config.method as string)) {
			if (config.data) {
                if (config.data?.token) {
                    localStorage.setItem('js', config.data.token);
                }
			}
		}
		return config;
	})

	return base;
}

export const next = (e: AxiosError<{message: string}>) => {
    throw new Error(e.response?.data ? e.response.data.message : 'Something went wrong');
}

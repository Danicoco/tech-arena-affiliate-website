import { AES, enc } from 'crypto-js';

export const toBase64 = (file: File) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

export const isPositive = (n: number) => 1 / (n * 0) === 1 / 0;

export const decrytData = <T>(message: string) => {
	const enMessage = AES.decrypt(message, String(import.meta.env.VITE_PUBLIC_ENCRYPTIONKEY));
	return enMessage.toString(enc.Utf8) as T;
  }

  export const encryptData = (message: string) => {
	const bytes  = AES.encrypt(message, String(import.meta.env.VITE_PUBLIC_ENCRYPTIONKEY));
   return bytes.toString();
  }

import { instance, next } from "./base"

export const sendMail = async (body: Partial<IMail>) => {
    const { data } = await instance().post('/v1/mails/send', body).catch(e => next(e));
    return data;
}

export const scheduleMail = async (body: Partial<IMail>) => {
    const { data } = await instance().post('/v1/mails/schedule', body).catch(e => next(e));
    return data;
}


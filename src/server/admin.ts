import { instance, next } from "./base"

export const adminLogin = async (body: Partial<IAdmin>) => {
    const { data } = await instance().post('/v1/admins/login', body).catch(e => next(e));
    return data;
}

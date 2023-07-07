import { instance, next } from "./base"

export const createTechSubscribers = async (body: ISubscriber) => {
    const { data } = await instance().post('/v1/subscribers/create', body).catch(e => next(e));
    return data;
}

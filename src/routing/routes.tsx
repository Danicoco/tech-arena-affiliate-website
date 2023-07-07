import { createBrowserRouter } from "react-router-dom";

import TechBeginner from "../pages/TechBeginner";
import ThankYou from "../pages/ThankYou";
import Error from "../pages/Error";
import Login from "../pages/Login";
import SendMail from "../pages/SendMail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <TechBeginner />,
        errorElement: <Error />
    },
    {
        path: '/thank-you',
        element: <ThankYou />
    },
    {
        path: '/sp-admin',
        element: <Login />
    },
    {
        path: '/sp-mails',
        element: <SendMail />
    }
]);

export default router;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { RequireAuth } from "./RequireAuth";
import Main from "../pages/Main/Main";
import SellerHome from "../pages/Account/Seller/SellerHome";
import Container from "./Container";

const Routes = () => {
    const { token } = useAuth();
    console.log("token in routes is " + token)

    const router = createBrowserRouter([
        {
            path: "/",
            loader() {
                return { token: token };
            },
            element: <Container />,
            children: [
                {
                    index: true,
                    element: <Main />,
                },
                {
                    path: "/",
                    element: <RequireAuth />,
                    children: [
                        {
                            path: "seller-home",
                            element: <SellerHome />,
                        },
                    ],
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;

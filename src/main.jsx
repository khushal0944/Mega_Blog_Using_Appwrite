import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from './store/store.js'
import {Provider} from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Home, AddPost, AllPosts, EditPost, Login, Post, Signup} from './pages/index.js'
import AuthLayout from "./components/AuthLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                )
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
        ]
    }
])

// const route = createBrowserRouter(
//     createRoutesFromElements(
//         <Routes path="/" element={<App />}>
//             <Routes path="" element={<Home />} />
//         </Routes>
//     )
// )

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

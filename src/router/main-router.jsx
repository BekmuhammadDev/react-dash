import { createBrowserRouter } from "react-router-dom";
import { Dashboard, AuthLayout } from "@layout";
import { Home, Leads, Orders, Users,Posts,PostItem, Error } from "@pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/posts", element: <Posts /> }, 
            { path: "/posts/:id", element: <PostItem /> }, 
            { path: "/leads", element: <Leads /> },
            { path: "/orders", element: <Orders /> },
            { path: "/users", element: <Users /> }
        ]
    },
    {
        path:"/login",
        element: <AuthLayout />,
       
    },
    {
        path: "*",
        element: <Error />
    }
]);


















// export const MainRouter = () => {

//     return (
//         <>
//             <Routes>

//                 <Route path="/" element={<Dashboard />}>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/leads" element={<Leads />} />
//                     <Route path="/orders" element={<Orders />} />
//                     <Route path="/users" element={<Users />} />
//                 </Route>

//                 <Route path="/login" element={<AuthLayout />} />
//                 <Route path="*" element={<Error />} />
                
//             </Routes>
//         </>
//     );
// };

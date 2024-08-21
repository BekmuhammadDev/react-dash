import { Outlet } from "react-router";



const App = () => {
    let isAuth = false;
    return (
        <>
         <Outlet/>
        </>
    );
};

export default App; 
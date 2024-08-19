import { useHref,useNavigate } from "react-router";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { Header,Section,Aside,Footer } from "@layouts";

const index = () => {

 
  const href=useHref();
 const navigate=useNavigate();
  useEffect(() => {
   let isAuth=localStorage.getItem("token")
  
   if (!isAuth) {
    navigate("/login")
   }
  }, [href]);

    return(
        <>
           <Header/>
           <Section className="flex">

             <Aside/>
  
              <Section className="p-2">
                <div className="border rounded-lg border-indigo-400 border-dashed p-4">
                 <Outlet/>
                </div>
              </Section>
           </Section>
           <Footer/>
        </>
    );
};

export default index;
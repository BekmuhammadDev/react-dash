import { useHref, useNavigate } from "react-router";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { useReducer } from "react";
import { modalStore } from "@/context";
import {states,reducer} from "@components/reducer/modal-reducer"
import "./style.scss"
import { Header, Section, Aside, Footer } from "@layouts";

const index = () => {

  const href = useHref();
  const navigate = useNavigate();

  const [{ isOpen }, dispatch] = useReducer(reducer, states)

  const setModal = (arg) => {
    dispatch({ ...arg })
  }

  useEffect(() => {
    let isAuth = localStorage.getItem("token")

    if (!isAuth) {
      navigate("/login")
    }
  }, [href]);

  return (
    <>
      <modalStore.Provider value={{ isOpen, setModal }}>
        <Header />
        <Section className="flex">

          <Aside />

          <Section className="p-2">
            <div className="border rounded-lg border-indigo-400 border-dashed p-4">
              <Outlet />
            </div>
          </Section>
        </Section>
        <Footer />
      </modalStore.Provider>
    </>
  );
};

export default index;
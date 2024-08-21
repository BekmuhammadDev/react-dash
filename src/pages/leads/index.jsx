import { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router";
import { leadsAPI } from "@service/leads";
import { Loader, Datatable, Button, Modal } from "@components/ui";
import { Input } from "@components/form"
import { modalStore } from "@/context";
import { states, reducer } from "@components/reducer/lead-reducer";
import "./style.scss"

const index = () => {

    const { setModal } = useContext(modalStore);
    const back = useNavigate();

    async function useFetch(params) {

        dispatch({ type: "LOADING_START" });

        try {
            const response = await leadsAPI.getAll();

            if (response.status === 200) {
                dispatch({ type: "SUCCESS", payload: response.data });
                dispatch({ type: "LOADING_END" })
            }

        } catch (err) {
            dispatch({ type: "ERROR", payload: err.message });
            dispatch({ type: "LOADING_END" })
            throw new Error({ message: err.message })
        }
    }

    async function deleteLead(id){
        try {
            const response =await leadsAPI.delete(id);
            if (response.status === 200) {
                useFetch();
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    const [{ leads, status, loading, }, dispatch] = useReducer
    (reducer, states);

    useEffect(() => {
        useFetch();
    }, []);


    if (loading) {
        return <Loader />
    }

    return (
        <>


            <Modal title="Create lead" />

            <div className="p-5 flex justify-between bg-slate-100 rounded-2xl">
                <Button fun={() => back(-1)} text="go back" />
                <form>
                    <Input type="search" placeholder="enter custoner name" />
                </form>
                <Button fun={() => setModal({ type: 'OPEN' })} text="Add New leads" />
            </div>
            {status === 'success' && <Datatable data={leads}  deleteItem={deleteLead}/>}


        </>
    )

};

export default index;
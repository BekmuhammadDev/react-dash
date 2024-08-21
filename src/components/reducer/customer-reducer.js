export const customerStates={
    name:"",
    email:"",
    phone:""
}

export const reducer = (state,action)=> {

    switch (action.type) {

        case "UPDATE_NAME": return {...state, name:action.payload}; break;
        case "UPDATE_EMAIL": return {...state, email:action.payload}; break;
        case "UPDATE_PHONE": return {...state, phone:action.payload}; break;
        default: return state;
    }

}
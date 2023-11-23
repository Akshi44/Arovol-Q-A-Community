const  authReducer = (state={data:null},action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            // ?. is for optional condition 
            // if we use . without ? and data does not exists then it will throw error.
            return {...state, data : action?.data}
        case "LOGOUT":
            localStorage.clear();
            return { ...state, data: null };
        default: 
            return state; 
    }
}
export default authReducer              

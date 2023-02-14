// REDUX ZONE !!!
import { createStore } from "redux"

const initCard = {data: []};
const cardReducer = (state:any = initCard, action:any) =>{
    console.log(action.payload, "action");
    console.log(state.data, "state");
    console.log();
    
            if(action.type.name === "addPECS"){
                return {...state, data: state.data.concat(action.payload)}
                
            }
    


    return state;
}
const store = createStore(cardReducer);

// App init --> run store --> action(none) --> card reducer --> {}

export default store;
// REDUX ZONE !!!
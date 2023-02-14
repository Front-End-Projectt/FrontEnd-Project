// REDUX ZONE !!!
import { createStore } from "redux"

const initCard = {data: []};
const cardReducer = (state:any = initCard, action:any) =>{
    console.log(action.payload, "action");
    console.log(state.data, "state");
    console.log();

    

    if(state.data.length){
       let poped = state.data.pop()
       state.data.push(poped)  
    //    let checked = poped == action.payload
       if(poped == action.payload){
        return state
       }else{
        return {...state, data: state.data.concat(action.payload)}
       }
       
    }

    if(action.type.name === "addPECS"){
        return {...state, data: state.data.concat(action.payload)}
                
    }

    

    
    


    return state;
}
const store = createStore(cardReducer);

// App init --> run store --> action(none) --> card reducer --> {}

export default store;
// REDUX ZONE !!!
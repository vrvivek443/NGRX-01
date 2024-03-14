import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { changechannelname, customdecrement, customincrement, decrement, increment, reset } from "./counter.action"

const _counterReducer=createReducer(initialState, 
    on(increment,(state)=>{
        return{
            ...state,
            counter:state.counter + 1,
            

        };
    }),
    on(decrement,(state)=>{
        return{
            ...state,
            counter:state.counter - 1,
            

        }
    }),
    on(reset, (state)=>{
        return{
            ...state,
            counter:0,
                    }
    
    }),
    on(customincrement, (state,action)=>{
        return{
            ...state,
            counter: state.counter + action.value,
            
        }
    }),
    on(customdecrement, (state,action)=>{
        return{
            ...state,
            counter: state.counter - action.value,
            
        }
    }),
    on(changechannelname, (state,action)=>{
        return{
            ...state,
            channelname:action.channel
        }
    })
)
export function counterReducer(state:any,action:any)
{
    return _counterReducer(state, action)
}

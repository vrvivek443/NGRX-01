import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { changechannelname, customdecrement, customincrement, decrement, increment, reset } from "./counter.action"

const _counterReducer=createReducer(initialState, 
    on(increment,(state)=>{
        return{
            ...state,
            counter:state.counter + 1,
            channelname:"Ice"

        };
    }),
    on(decrement,(state)=>{
        return{
            ...state,
            counter:state.counter - 1,
            channelname:"Fire"

        }
    }),
    on(reset, (state)=>{
        return{
            ...state,
            counter:0,
            channelname:"Water"
        }
    
    }),
    on(customincrement, (state,action)=>{
        return{
            ...state,
            counter: state.counter + action.value,
            channelname:"Mountain"
        }
    }),
    on(customdecrement, (state,action)=>{
        return{
            ...state,
            counter: state.counter - action.value,
            channelname:"Plateau"
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

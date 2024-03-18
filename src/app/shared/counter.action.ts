import { createAction, props } from "@ngrx/store";

export const increment = createAction("increment")
export const decrement = createAction("decrement")
export const reset = createAction("reset")
export const customincrement=createAction("customincrement",props<{value:number}>())
export const customdecrement=createAction("customdecrement",props<{value:number}>())
export const changechannelname=createAction("changechannelname",props<{channel:string}>())

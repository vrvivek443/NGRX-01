import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterModel } from "./counter.model";

const getcounterstate=createFeatureSelector<counterModel>('counter');
export const getcounter=createSelector(getcounterstate, (state)=>{
    return state.counter
})
export const getchannelname=createSelector(getcounterstate, (state)=>{
    return state.channelname
})
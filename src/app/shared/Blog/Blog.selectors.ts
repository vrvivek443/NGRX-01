import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blogmodel } from "./Blog.model";


const getBlogstate=createFeatureSelector<Blogmodel[]>('Blog');
export const getBlog=createSelector(getBlogstate, (state)=>{
    return state
})
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blogmodel, Blogs } from "./Blog.model";


const getBlogstate=createFeatureSelector<Blogs>('Blog');
export const getBlog=createSelector(getBlogstate, (state)=>{
    return state.bloglist
})
export const getBlogbyId=(blogid:number)=>createSelector(getBlogstate, (state)=>{
    return state.bloglist.find((blog:Blogmodel)=>blog.id===blogid) as Blogmodel;
})
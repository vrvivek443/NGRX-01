import { createAction, props } from "@ngrx/store";
import { Blogmodel } from "./Blog.model";

export const loadblog=createAction("loadblog")
export const addBlog=createAction("addBlog",props<{bloginput:Blogmodel}>())
export const updateBlog=createAction("updateBlog",props<{bloginput:Blogmodel}>())
export const deleteBlog=createAction("deleteBlog",props<{id:number}>())

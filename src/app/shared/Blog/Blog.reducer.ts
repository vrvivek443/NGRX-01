import { createReducer,on } from "@ngrx/store";
import { Blogstate } from "./Blog.state";
import { addBlog, deleteBlog, loadblog, updateBlog } from "./Blog.action";
import { Blogmodel } from "./Blog.model";

const _blogReducer = createReducer(Blogstate, 
    on(loadblog, (state) => {
    return {
        ...state, 
    };
}),
    on(addBlog, (state,action)=>{
        const _blog={...action.bloginput}
        _blog.id=state.bloglist.length+1
        return{
            ...state,
            bloglist:[...state.bloglist,_blog]

        }
    }),
    on(updateBlog, (state,action)=>{
        const _blog={...action.bloginput}
        const _updateblog=state.bloglist.map(blog=>{
            return _blog.id===blog.id?_blog:blog;
        })
        _blog.id=state.bloglist.length+1
        return{
            ...state,
            bloglist:_updateblog

        }
    }),
    on(deleteBlog, (state,action)=>{
        const _updateblog=state.bloglist.filter((data:Blogmodel)=>{
            return data.id !==action.id
        })
        
        return{
            ...state,
            bloglist:_updateblog


        }
    })
)

export function blogReducer(state:any, action:any)
{
    return _blogReducer(state,action)
}
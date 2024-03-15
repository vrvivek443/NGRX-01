import { createReducer,on } from "@ngrx/store";
import { Blogstate } from "./Blog.state";
import { addBlog, loadblog } from "./Blog.action";

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
    })
)

export function blogReducer(state:any, action:any)
{
    return _blogReducer(state,action)
}
import { blogReducer } from "../Blog/Blog.reducer";
import { counterReducer } from "../counter.reducer";

export const Appstate={
    counter:counterReducer,
    Blog: blogReducer
}
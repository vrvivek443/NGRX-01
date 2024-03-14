import { Blogmodel } from "../Blog/Blog.model";
import { counterModel } from "../counter.model";

export interface AppstateModel{
    counter:counterModel,
    Blog:Blogmodel[]
}
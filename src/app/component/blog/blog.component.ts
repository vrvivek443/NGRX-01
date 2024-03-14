import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Blogmodel } from 'src/app/shared/Blog/Blog.model';
import { getBlog } from 'src/app/shared/Blog/Blog.selectors';
import { AppstateModel } from 'src/app/shared/Global/Appstate.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private store:Store<AppstateModel>)
  {}
  bloglist!:Blogmodel[];
  ngOnInit(): void{
    this.store.select(getBlog).subscribe(item=>{
    this.bloglist = item;
    console.log(this.bloglist);
    })
  }

}

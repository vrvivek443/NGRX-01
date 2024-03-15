import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddblogComponent } from 'src/app/addblog/addblog.component';
import { Blogmodel } from 'src/app/shared/Blog/Blog.model';
import { getBlog } from 'src/app/shared/Blog/Blog.selectors';
import { AppstateModel } from 'src/app/shared/Global/Appstate.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private store:Store<AppstateModel>, private dialog:MatDialog)
  {}
  bloglist!:Blogmodel[];
  ngOnInit(): void{
    this.store.select(getBlog).subscribe(item=>{
    this.bloglist = item;
    console.log(this.bloglist);
    })
  }
  onAdd()
  {
    this.dialog.open(AddblogComponent,
      {
        width:'40%'
      })
  }
  

}

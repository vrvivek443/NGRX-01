import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddblogComponent } from 'src/app/addblog/addblog.component';
import { deleteBlog } from 'src/app/shared/Blog/Blog.action';
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
    this.onOpenPopup(0,'Add Blog');
  }

  onOpenPopup(id:any, title:any, isedit=false)
  {
    this.dialog.open(AddblogComponent,
      {
        width:'40%',
        data:{
          id:id,
          title:title,
          isedit:isedit
        }
      })
  }
  onEdit(id:any)
  {
    this.onOpenPopup(id,'Edit Blog', true);
  }
  onDelete(id:any)
  {
    if(confirm("Are you sure want to delete?")){
      this.store.dispatch(deleteBlog({id:id}))
    }
  }
}

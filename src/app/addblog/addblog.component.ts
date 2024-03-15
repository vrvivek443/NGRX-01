import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Blogmodel } from '../shared/Blog/Blog.model';
import { Store } from '@ngrx/store';
import { AppstateModel } from '../shared/Global/Appstate.model';
import { addBlog } from '../shared/Blog/Blog.action';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {
  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<AddblogComponent>, private store:Store<AppstateModel>){}

  closepopup()
  {
    this.dialogRef.close()
  }
  blogform=this.fb.group({
    id:this.fb.control(0),
    title:this.fb.control('', Validators.required),
    description:this.fb.control('', Validators.required)
  })
  saveblogs()
  {
    if(this.blogform.valid){
      const _bloginput:Blogmodel={
        id:0,
        title:this.blogform.value.title as string,
        description:this.blogform.value.description as string
      }
      this.store.dispatch(addBlog({bloginput:_bloginput}))
      this.closepopup()
    }


  }
 
}

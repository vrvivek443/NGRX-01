import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Blogmodel } from '../shared/Blog/Blog.model';
import { Store } from '@ngrx/store';
import { AppstateModel } from '../shared/Global/Appstate.model';
import { addBlog, updateBlog } from '../shared/Blog/Blog.action';
import { getBlogbyId } from '../shared/Blog/Blog.selectors';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<AddblogComponent>, 
    private store:Store<AppstateModel>, @Inject(MAT_DIALOG_DATA) public data:any){}

    pagetitle!:''
    editblogid=0
    editdata!:Blogmodel

    ngOnInit(): void {
      this.pagetitle=this.data.title
      if(this.data.isedit)
      {
        this.editblogid=this.data.id
        this.store.select(getBlogbyId(this.editblogid)).subscribe(_data=>{
          this.editdata=_data
          this.blogform.setValue({id:this.editdata.id,title:this.editdata.title,description:this.editdata.description});
        })
      }
    }
    

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
      if(this.data.isedit){
        _bloginput.id=this.blogform.value.id as number;
        this.store.dispatch(updateBlog({bloginput:_bloginput}))
      }else
      {
      this.store.dispatch(addBlog({bloginput:_bloginput}))
      }
      this.closepopup()
    }


  }
 
}

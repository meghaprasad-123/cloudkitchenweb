import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../sevices/order-details.service';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  uname:any
  mob:any
  add:any

  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private formbuilder:FormBuilder) { }

  // validation
  registerForm=this.formbuilder.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  mob:['',[Validators.required,Validators.pattern('[0-9]+')]],add:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]]})

  getMenuId:any
  menuData:any
  ngOnInit(): void {
    this.getMenuId=this.param.snapshot.paramMap.get('id')
    console.log(this.getMenuId,'getmenu');
   
    if(this.getMenuId){
      this.menuData=  this.service.foodDetails.filter((value)=>{
          return value.id==this.getMenuId
        }
        )
    }
  }

  register(){
    var uname=this.registerForm.value.uname
    var mob=this.registerForm.value.mob
    var add=this.registerForm.value.add

    if(this.registerForm.valid){
      alert('Your order has confirmed')
    }
    else{
      alert("Please check there was some error occured")
    }
  }

}

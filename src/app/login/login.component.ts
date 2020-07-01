import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedaService } from '../shareda.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {'class': 'login1'}
})
export class LoginComponent implements OnInit {
  
check=false;
verify=false;
number;
otp;
check1=false;
check2=false;
check1msg;
check2msg;
loader=false;
loader1=false;

  constructor(private router: Router,private http: HttpClient,private _sharedService: SharedaService) { }
  
  ngOnInit(): void {
  }
  log(x){
    if(String(x.value).length!=10){
      this.check=true;}
    else{
      this.check=false;
      this.number=String(x.value);
     this.loader=true;
     this._sharedService.number=this.number;
      this.http.post("https://api.diskoveroo.simplifii.xyz/api/v1/restaurant/get_otp",{"mobile":String(x.value)}).subscribe(data => {
        console.log(data);
        this.verify=!this.verify;
        this.check1msg=true;
    },error=>{
      this.check1=true;
      this.check1msg=error.error.msg;
      this.loader=false;
    })
    
  }}
  resend(){
    this.http.post("https://api.diskoveroo.simplifii.xyz/api/v1/restaurant/get_otp",{"mobile":this.number}).subscribe(data2 => {
      console.log(data2);
  })
}

verifyy(y){
  this.otp=String(y.value);
  this._sharedService.otp=this.otp;
  this.loader1=true;
this.http.post("https://api.diskoveroo.simplifii.xyz/api/v1/restaurant/verify",{"mobile":this.number,"otp":this.otp}).subscribe(data1 => {
  console.log(data1);
  this.check2=false;
  this.router.navigate(['/data']);
},error=>{
  this.check2=true;
  this.check2msg=error.error.msg;
  this.loader1=false;
})

}
    change(){
      this.verify=!this.verify;
    }
    show(){
      console.log("hello");
    }
  
goto(){
  this.router.navigate(['/login']);
}
}


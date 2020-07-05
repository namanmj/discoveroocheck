import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { SharedaService } from '../shareda.service';


@Component({
  selector: 'app-custinfo',
  templateUrl: './custinfo.component.html',
  styleUrls: ['./custinfo.component.css'],
  providers: [DatePipe]
  
})
export class CustinfoComponent implements OnInit {
  filterDate;
  ele;
filter=false;
otp;
otpcpy;
p;
p1;
alertmsg;
confirm=false;
decline=false;
comment=false;
number;
numbercpy;
arraysize;
arraysize1;
xyz=true;
z;
id;
showtodaydata=false;
name;
myDate;
i;
c:number =0;
e:number =1;
d;
username;nop;userdate;usertime;
myDateValue: Date; 
loader1=true;
  constructor(private router: Router,private http: HttpClient,private datePipe: DatePipe,private _sharedService: SharedaService) { }
showalldata=false;
  ngOnInit(): void {
    this.myDateValue = new Date();
    
   this.c=0;
    
    this.myDate = new Date();
this.otp=this._sharedService.otp;
this.number=this._sharedService.number;
this.numbercpy=this.number;
this.otpcpy=this.otp;
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
console.log(this.myDate);
    this.http.post("https://api.diskoveroo.simplifii.xyz/api/v1/restaurant/verify",{"mobile":"7993614041","otp":"123456"}).subscribe(data1 => {
      this.loader1=false;
  console.log(data1);
 
 this.arraysize=data1['response']['data'].length;
 console.log(this.arraysize)
 this.z=data1['response']['data'];
 this.name=data1['response']['data'][0]['user']['name'];
 for(this.i=0;this.i<(this.arraysize);this.i++){
  if(this.z[this.i]['date']==this.myDate){
    this.c=this.c+1
  }
  

  
   }
   
},error=>{
  console.log("error")
  this.loader1=false;
})


} 
showtoday(){
  this.xyz=false;
  this.showtodaydata=true;
  this.showalldata=false;
}
  back(){
this.xyz=true;
this.showalldata=false;
this.showtodaydata=false;
this.filter=false;
this.e=1
  }
show(){
  console.log("heeee")
  this.xyz=false;
  this.showtodaydata=false;
  this.showalldata=true;
}
 openNav() {
  document.getElementById("mySidenav").style.width = "100px";
  document.getElementById("datadiv1").style.marginRight = "100px";
  document.getElementById("datadiv2").style.marginRight = "100px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("datadiv1").style.marginRight= "0";
  document.getElementById("datadiv2").style.marginRight = "0px";
  document.body.style.backgroundColor = "white";
}
logout(){
  this.router.navigate(['']);
}
datepick(z){
  
  if(z.value==""){
    this.filter=false;
    
}
else{
  this.filter=true;
  this.filterDate=z.value;
  console.log(this.filterDate)
  this.loader1=true;
  this.http.post("https://api.diskoveroo.simplifii.xyz/api/v1/restaurant/verify",{"mobile":"7993614041","otp":"123456"}).subscribe(data2 => {
     
  console.log(data2);
 this.loader1=false;
this.e=0
 for(this.i=0;this.i<(this.arraysize);this.i++){
  if(data2['response']['data'][this.i]['date']==this.filterDate){
    this.e=this.e+1
  }
  

  
   }
  
   
},error=>{
  console.log("error")
  this.loader1=false;
})
}
}
confirmdiv(l,m,n,o,i){
  
  this.p=document.getElementById("myModal")
  this.p.style.display="block";
this.username=l;
this.nop=m;
this.userdate=n;
this.usertime=o;
this.confirm=true;
this.decline=false;
this.comment=false;
this.id=i;
}
closeconfirm(){
  this.p=document.getElementById("myModal")
  this.p.style.display="none";
}
closedecline(){
  this.p1=document.getElementById("myModal1")
  this.p1.style.display="none";
}
declinediv(l,m,n,o,i){
  console.log("ullll")
  this.p1=document.getElementById("myModal1")
  this.p1.style.display="block";
this.username=l;
this.nop=m;
this.userdate=n;
this.usertime=o;
this.id=i;
}
closecomment(){
  this.p1=document.getElementById("myModal2")
  this.p1.style.display="none";
}
commentdiv(l,m,n,o,i){
  console.log("ullll")
  this.p1=document.getElementById("myModal2")
  this.p1.style.display="block";
this.username=l;
this.nop=m;
this.userdate=n;
this.usertime=o;
this.id=i;
}
submitconfirm(aa,bb){
  this.ele=document.querySelector(".msg");
this.p1=document.getElementById("myModal")
this.p1.style.display="none";
  this.http.patch("https://api.diskoveroo.simplifii.xyz/api/v1/booking/approval_status",{"mobile":"7993614041","otp":"123456","booking_id":aa,"comment":String(bb),"approved":1}).subscribe(data3 => {
    this.alertmsg=data3['msg'];  
    this.ele.style.display="block";
    setTimeout(this.alertfunc, 2000);
    this.ngOnInit();
  },error=>{
    
    this.alertmsg=error['error']['msg']; 
    this.ele.style.display="block";
    setTimeout(this.alertfunc, 2000);
    console.log("error")
    this.ngOnInit();
  })
}
submitdecline(aa,bb){
  this.ele=document.querySelector(".msg");
this.p1=document.getElementById("myModal1")
this.p1.style.display="none";
  this.http.patch("https://api.diskoveroo.simplifii.xyz/api/v1/booking/approval_status",{"mobile":"7993614041","otp":"123456","booking_id":aa,"comment":String(bb),"approved":0}).subscribe(data3 => {
    this.alertmsg=data3['msg'];  
    this.ele.style.display="block";
      
      
      setTimeout(this.alertfunc, 2000);
      this.ngOnInit();
    
  },error=>{
    this.alertmsg=error['error']['msg']; 
    this.ele.style.display="block";
    
    
    setTimeout(this.alertfunc, 2000);
    console.log("error")
    this.ngOnInit();
  
  

  
  
  })
}
alertfunc(){
  this.ele=document.querySelector(".msg");
  this.ele.style.display="none";
  
}
submitcomment(aa,bb){
this.ele=document.querySelector(".msg");
this.p1=document.getElementById("myModal2")
this.p1.style.display="none";

  this.http.patch("https://api.diskoveroo.simplifii.xyz/api/v1/booking/comment",{"mobile":"7993614041","otp":"123456","booking_id":aa,"comment":String(bb)}).subscribe(data3 => {
  console.log(data3['msg']);
  this.alertmsg=data3['msg'];  
  
  this.ele.style.display="block";
  setTimeout(this.alertfunc, 2000);
    
  },error=>{
    this.alertmsg=error['error']['msg']; 
    this.ele.style.display="block";
    
    
    setTimeout(this.alertfunc, 2000);
  })
}
}
import { Component, OnInit } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-custinfo',
  templateUrl: './custinfo.component.html',
  styleUrls: ['./custinfo.component.css'],
  providers: [DatePipe]
})
export class CustinfoComponent implements OnInit {
arraysize;
xyz=true;
z;
showtodaydata=false;
name;
myDate;
i;
c=0;
d;
  constructor(private router: Router,private http: HttpClient,private datePipe: DatePipe) { }
showalldata=false;
  ngOnInit(): void {
    this.myDate = new Date();

    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
console.log(this.myDate);
    this.http.post("https://api.diskoveroo.simplifii.xyz/api/v1/restaurant/verify",{"mobile":"7993614041","otp":"123456"}).subscribe(data1 => {
  console.log(data1);
 
 this.arraysize=data1['response']['data'].length;
 this.z=data1['response']['data'];
 this.name=data1['response']['data'][0]['user']['name'];
 
 console.log(this.name);
},error=>{
  console.log("error")
})
for(this.i=0;this.i<this.arraysize;this.i++){
  if(this.z['date']==this.myDate)
  {
    this.c=this.c+1;
  }
   }
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
  }
show(){
  console.log("heeee")
  this.xyz=false;
  this.showtodaydata=false;
  this.showalldata=true;
}
}
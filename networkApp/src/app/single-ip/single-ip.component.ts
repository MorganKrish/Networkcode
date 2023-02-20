import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid';
import { SingleService } from './single-ip.service';

@Component({
  selector: 'app-single-ip',
  templateUrl: './single-ip.component.html',
  styleUrls: ['./single-ip.component.css']
})
export class SingleIpComponent implements OnInit {
  dat:any="";
  colDef1:any=[];
  rowDt:any=[];
  defaultColDef:any={

  }
  constructor(private singleIp:SingleService){

  }
  ngOnInit() {
      
  }
  showTab()
  {
    var js:any=
    {
    hostName:this.dat
    }
this.singleIp.getDetails(js).subscribe((res:any)=>{
  var hj:any=res["data1"];
  var hj2:any=res["data2"];
  var hj3:any=res["data3"];
  hj.map((jk:any)=>{
    jk.first=true;
  })
  hj2.map((io:any)=>{
    io.second=true;
    hj.push(io)

  })
  hj3.map((io:any)=>{
    io.third=true;
    hj.push(io)
  })
  var keys:any=Object.keys(hj);
  keys.map((h:any)=>{
  var j:any={
    field:h,
    width:150,
    cellStyle: function(params:any) {

     

      var goals = params.node.data.goalsScored;
      console.log({
        "params": params,
        "data": params.data,
        "goals": goals
      });
      return {color: 'red', backgroundColor: 'green'};

      // Some Logic to style your components

    
    }
  }
  })
})
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrl: './download-list.component.css'
})
export class DownloadListComponent implements OnInit{

  downloadList:any=[]
  p:number=1
  constructor(private api:ApiService) {
    
  }
  ngOnInit(): void {
    this.getDownloadList()
  }
  getDownloadList(){
    this.api.getAllDownloadListAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.downloadList=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
}

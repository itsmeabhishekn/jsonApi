import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-one-view',
  templateUrl: './user-one-view.component.html',
  styleUrls: ['./user-one-view.component.css']
})
export class UserOneViewComponent {
  constructor(private api:ApiService){
    api.userData().subscribe(
      (response)=>{
        this.data = response
      }
    )
  }
  data:any={}
}

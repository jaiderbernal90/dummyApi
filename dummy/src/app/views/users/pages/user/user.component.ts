import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: any;
  user!:User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crudServices: CrudService,
    private router: Router,
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'] ?? '';
      if(this.id){this.getUser(this.id)}
    });

  }

  ngOnInit(): void {
  }

  getUser(id:number){
    this.crudServices
    .getRequest(`/employee/${id}`)
    .subscribe((res: any) => {
      const {data} = res;      
      this.user = data;
    });
  }

}

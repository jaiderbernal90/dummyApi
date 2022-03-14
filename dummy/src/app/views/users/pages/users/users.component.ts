import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[] = [];

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser():void{
    this.crudService.getRequest(`/employees`)
    .subscribe((res: any) => {
      const { data } = res;
      this.users = data;
    })
  }
}

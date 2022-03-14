import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() user!:User;
  image:string = ''; 
  constructor() { }

  ngOnInit(): void {
    this.image = (this.user.employee_age > 30 ) ? 'photo-1.avif' : 'photo-2.avif';
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { BaseModule } from '../base/base.module';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UsersListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    BaseModule
  ]
})
export class UsersModule { }

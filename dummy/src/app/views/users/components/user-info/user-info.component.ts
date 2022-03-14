import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit,OnChanges {
  @Input() user!:User;
  image!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const {user} = changes;
    if(!user.firstChange){
      this.image = (this.user?.employee_age > 30 ) ? 'photo-1.avif' : 'photo-2.avif';
    }
  }

  ngOnInit(): void {    
  }

}

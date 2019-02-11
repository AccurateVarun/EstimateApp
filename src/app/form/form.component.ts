import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../services/userinfo.service';
import { UserInfoData} from '../shared/userinfo.data';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   userInfoData: UserInfoData[];

  constructor(private userInfoService: UserinfoService ) {}

  ngOnInit() {
    this.userInfoService.getUserInfoData().subscribe((userInfoData) => {
      this.userInfoData = userInfoData || [];
      console.log(this.userInfoData);
    });
  }
}

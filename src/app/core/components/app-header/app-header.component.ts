import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../auth/shared/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Input()
  user!: User | null;

  @Output()
  // tslint:disable-next-line:no-any
  logout = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  logoutUser(): void {
    this.logout.emit();
  }
}

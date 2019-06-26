import {Component, OnInit} from '@angular/core';
import {MenusService, IMenuItem} from '../../services/navigation/menus.service';
import {Logger} from '../../utils/Logger';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  menu: Array<IMenuItem>;

  constructor() {
  }

  ngOnInit() {
    MenusService.fetchMenuByLocation('footer').subscribe(response => {
        this.menu = response.response.items;
      },
      error => (Logger.log(error)));
  }
}

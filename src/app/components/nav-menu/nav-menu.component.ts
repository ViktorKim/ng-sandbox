import {Component, OnInit} from '@angular/core';
import {Menu, MenusService} from '../../services/navigation/menus.service';
import {Logger} from '../../utils/Logger';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  menus: Array<Menu>;

  constructor() {
  }

  ngOnInit() {
    (new MenusService()).getMenus().subscribe(response => {
      this.menus = response.response;
    },
      error => (Logger.log(error)));
  }
}

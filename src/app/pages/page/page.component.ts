import {Component, OnInit} from '@angular/core';
import {SiteIntoService, ISiteInfo} from '../../services/content/site-into.service';
import {Logger} from '../../utils/Logger';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  siteInfo: ISiteInfo;

  constructor() {
  }

  ngOnInit() {
    SiteIntoService.fetchSiteInfo().subscribe(res => {
      this.siteInfo = res.response;
    }, error => (Logger.log(error)));
  }

}

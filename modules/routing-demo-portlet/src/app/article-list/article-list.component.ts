import { Component, OnInit } from '@angular/core';
import {GlobalVariablesService} from "../../services/global-variables.service";

@Component({
  selector: 'app-article-list',
  template: `
    <p>
      We are in the ARTICLES view but still on {{globals.layoutURL}} in Liferay!!
    </p>
  `,
  styles: []
})
export class ArticleListComponent implements OnInit {

  constructor(public globals: GlobalVariablesService) { }

  ngOnInit() {
  }

}

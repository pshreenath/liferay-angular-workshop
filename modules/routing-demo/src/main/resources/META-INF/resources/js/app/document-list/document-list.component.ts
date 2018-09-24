import { Component, OnInit } from '@angular/core';
import {GlobalVariablesService} from "../services/global-variables.service";

@Component({
  selector: 'app-document-list',
  template: `
    <p>
      We are in the DOCUMENTS view but still on {{globals.layoutURL}} in Liferay!!
    </p>
  `,
  styles: []
})
export class DocumentListComponent implements OnInit {

	constructor(public globals: GlobalVariablesService) { }

	ngOnInit() {
  }

}

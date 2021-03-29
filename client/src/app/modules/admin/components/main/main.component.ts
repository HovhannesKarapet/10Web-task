import {Component, OnInit, ViewChild} from '@angular/core';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  ToolbarService
} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}

import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../../services/article.service";
import {SectionModel} from "../../../../models/Section.model";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  sections !: SectionModel[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.getSections();
  }

  getSections(): void {
    this.articleService.getSections().subscribe((data) => {
      this.sections = data;
    });
  }

}

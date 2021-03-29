import { Component, OnInit } from '@angular/core';
import {SectionModel} from "../../../../models/Section.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../../services/article.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  sections!: SectionModel[];
  disable: boolean = false;

  form: FormGroup = new FormGroup({
    section_id: new FormControl(null, Validators.required),
    title     : new FormControl(null, Validators.required),
    body      : new FormControl(null, Validators.required)
  });

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

  create(): void {
    this.disable = true;
    this.articleService.createArticle(this.form.value.section_id, this.form.value).subscribe(() => {
      this.form.reset();
      this.disable = false;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../../../services/article.service";
import {ArticleModel} from "../../../../models/Article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title !: string;
  articles !: ArticleModel[];

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getArticles(params.id);
    });
  }

  getArticles(id: string): void {
    this.articleService.getArticleList(id).subscribe((data) => {
      this.title = data.section_name;
      this.articles = data.articles;
    });
  }
}

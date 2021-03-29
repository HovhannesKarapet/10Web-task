import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {ArticleModel} from "../../../../models/Article.model";

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  article !: ArticleModel;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getArticle(params.id);
    });
  }

  getArticle(id: string): void {
    this.articleService.getArticle(id).subscribe((data) => {
      this.article = data;
    });
  }
}

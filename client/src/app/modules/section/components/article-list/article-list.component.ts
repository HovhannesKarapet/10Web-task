import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {ArticleModel} from "../../../../models/Article.model";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles !: {id: number, title: string}[];

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }
}

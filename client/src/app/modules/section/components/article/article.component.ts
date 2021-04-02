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

  article !: {id: number, title: string, body: string};

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getArticle(params.id);
    });
  }

  getArticle(id: number): void {
    this.articleService.getArticle(id).subscribe((data) => {
      this.article = data;
    });
  }
}

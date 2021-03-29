import { Component, OnInit } from '@angular/core';
import {ArticleModel} from "../../../../models/Article.model";
import {ArticleService} from "../../../../services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  articles !: ArticleModel[];
  msg !: string;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.msg = params.id;
      this.search(params.id);
    });
  }

  search(title: string): void {
    this.articleService.searchArticle(title).subscribe((res) => {
      this.articles = res;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../../services/article.service";
import {ArticleModel} from "../../../../models/Article.model";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles !: ArticleModel[];
  items: boolean[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getAllArticles().subscribe((res) => {
      this.articles = res;
    })
  }

  deleteArticle(index: number): void {
    this.articleService.deleteArticle(this.articles[index]._id).subscribe(() => {
      this.items[index] = false;
      this.articles.splice(index, 1);
    })
  }
}

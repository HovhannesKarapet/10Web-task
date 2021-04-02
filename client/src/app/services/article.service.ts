import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map, tap} from "rxjs/operators";
import {ArticleListModel} from "../models/ArticleList.model";
import {ArticleModel} from "../models/Article.model";
import {SearchResultModel} from "../models/SearchResult.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<{id: number, title: string}[]> {
    return  this.http.get<ArticleListModel>(`${environment.API_URL}/v2/help_center/articles`)
      .pipe(
        map((res) => {
          return res.articles.map(el => {
            return {id: el.id, title: el.title};
          });
        }),
        catchError(err => throwError(err))
      );
  }

  getArticle(article_id: number): Observable<{id: number, title: string, body: string}> {
    return  this.http.get<{article: ArticleModel}>(`${environment.API_URL}/v2/help_center/articles/${article_id}`)
      .pipe(
        map((res) => {
          return {id: res.article.id, title: res.article.title, body:res.article.body};
        }),
        catchError(err => throwError(err))
      );
  }

  searchArticle(title: string): Observable<{id: number, title: string, body: string}[]> {
    return  this.http.get<SearchResultModel>(`${environment.API_URL}/v2/help_center/articles/search`, {params: {query: title}} )
      .pipe(
        map((res) => {
          return res.results.map((el: any) => {
            return {id: el.id, title: el.title, body :el.body};
          });
        }),
        catchError(err => throwError(err))
      );
  }
}

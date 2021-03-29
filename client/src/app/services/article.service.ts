import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {SectionModel} from "../models/Section.model";
import {ArticleModel} from "../models/Article.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getSections(): Observable<SectionModel[]> {
    return this.http.get<SectionModel[]>(`${environment.API_URL}/section`)
      .pipe(
        tap(res => res),
        catchError(err => throwError(err))
      );
  }

  getAllArticles(): Observable<ArticleModel[]> {
    return  this.http.get<ArticleModel[]>(`${environment.API_URL}/article/`)
      .pipe(
        tap(res => res),
        catchError(err => throwError(err))
      );
  }

  getArticleList(section_id: string): Observable<{section_name: string, articles: ArticleModel[]}> {
    return  this.http.get<{section_name: string, articles: ArticleModel[]}>(`${environment.API_URL}/article/${section_id}`)
      .pipe(
        tap(res => res),
        catchError(err => throwError(err))
      );
  }

  getArticle(article_id: string): Observable<ArticleModel> {
    return  this.http.get<ArticleModel>(`${environment.API_URL}/article/article/${article_id}`)
      .pipe(
        tap(res => res),
        catchError(err => throwError(err))
      );
  }

  searchArticle(title: string): Observable<ArticleModel[]> {
    return  this.http.post<ArticleModel[]>(`${environment.API_URL}/article/search`, {title})
      .pipe(
        tap(res => res),
        catchError(err => throwError(err))
      );
  }


  createArticle(section_id: string, article: object): Observable<any> {
    return this.http.post(`${environment.API_URL}/article/${section_id}`, article)
      .pipe(
        tap(res => res),
        catchError(err => throwError(err))
      );
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${environment.API_URL}/article/${id}`)
      .pipe(
        tap(res => res),
        catchError(err => throwError(err))
      );
  }
}

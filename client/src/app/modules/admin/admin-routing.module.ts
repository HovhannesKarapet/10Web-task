import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AddArticleComponent} from "./components/add-article/add-article.component";
import {ArticlesComponent} from "./components/articles/articles.component";

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: 'add_article', component: AddArticleComponent},
      {path: 'articles', component: ArticlesComponent},
      {path: '**', redirectTo: 'articles'}
    ]},
  {path: '**', redirectTo: 'articles'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './components/article/article.component';
import {MainComponent} from './components/main/main.component';
import {SearchResultComponent} from "./components/search-result/search-result.component";
import {ArticleListComponent} from "./components/article-list/article-list.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: ArticleListComponent},
      {path: 'article/:id', component: ArticleComponent},
      {path: 'search_result/:id', component: SearchResultComponent},
      {path: '**', redirectTo: ''}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule {
}

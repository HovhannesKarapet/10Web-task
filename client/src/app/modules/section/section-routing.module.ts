import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SectionComponent} from './components/section/section.component';
import {ArticleComponent} from './components/article/article.component';
import {MainComponent} from './components/main/main.component';
import {ArticleItemComponent} from './components/article-item/article-item.component';
import {SearchResultComponent} from "./components/search-result/search-result.component";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: SectionComponent},
      {path: 'section/:id', component: ArticleComponent},
      {path: 'article/:id', component: ArticleItemComponent},
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

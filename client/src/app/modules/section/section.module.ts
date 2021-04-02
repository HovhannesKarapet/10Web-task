import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { MainComponent } from './components/main/main.component';
import {SharedModule} from "../../shared.module";
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ArticleListComponent } from './components/article-list/article-list.component';


@NgModule({
    declarations: [ ArticleComponent, MainComponent, SearchComponent, SearchResultComponent, ArticleListComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SectionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './components/section/section.component';
import { ArticleComponent } from './components/article/article.component';
import { MainComponent } from './components/main/main.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import {SharedModule} from "../../shared.module";
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SearchResultComponent } from './components/search-result/search-result.component';


@NgModule({
    declarations: [SectionComponent, ArticleComponent, MainComponent, ArticleItemComponent, SearchComponent, SearchResultComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SectionModule { }

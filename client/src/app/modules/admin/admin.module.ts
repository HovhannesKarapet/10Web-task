import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './components/main/main.component';
import {RichTextEditorAllModule} from '@syncfusion/ej2-angular-richtexteditor';
import {ReactiveFormsModule} from '@angular/forms';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticlesComponent } from './components/articles/articles.component';

@NgModule({
  declarations: [MainComponent, AddArticleComponent, ArticlesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RichTextEditorAllModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

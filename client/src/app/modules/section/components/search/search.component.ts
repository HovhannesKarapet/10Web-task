import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../../services/article.service";
import {ArticleModel} from "../../../../models/Article.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results !: {id: number, title: string, body: string}[];
  show: boolean = false;

  form: FormGroup = new FormGroup({
    search: new FormControl(null, [Validators.minLength(3), Validators.required])
  });

  @ViewChild('search_element', {static: true}) insideElement: any;
  @HostListener('document:click', ['$event.target'])

  public onClick(targetElement: any): void {
    const clickedInside = this.insideElement.nativeElement.contains(targetElement);
    clickedInside ? this.show = true : this.show = false;
  }

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.form.invalid) {
      this.results = [];
      return;
    }
    this.articleService.searchArticle(this.form.value.search).subscribe((res) => {
      this.results = res;
      if(this.results.length) this.show = true;
    });
  }

  redirect(): void {
    if(this.form.invalid) return;
    this.router.navigate([`/home/search_result/${this.form.value.search}`])
  }
}

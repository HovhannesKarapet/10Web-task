import {ArticleModel} from "./Article.model";

export interface SearchResultModel {
  results: ArticleModel[],
  count: number
  next_page: number
  page: number
  page_count: number
  per_page: number
  previous_page: number
}

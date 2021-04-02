import {ArticleModel} from "./Article.model";

export interface ArticleListModel {
  articles: ArticleModel[],
  count: number
  next_page: number
  page: number
  page_count: number
  per_page: number
  previous_page: number
  sort_by: string
  sort_order: string
}

export interface ArticleModel {
  id: number
  author_id: number
  body: string
  comments_disabled: boolean
  created_at: Date
  draft: boolean
  edited_at: Date
  html_url: string
  label_names: any[]
  locale: string
  name: string
  outdated: boolean
  outdated_locales: any[]
  permission_group_id: number
  position: number
  promoted: boolean
  section_id: number
  source_locale: string
  title: string
  updated_at: Date
  url: string
  user_segment_id: number
  vote_count: number
  vote_sum: number
}

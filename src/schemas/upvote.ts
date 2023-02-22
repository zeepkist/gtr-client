import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

export interface Upvote {
  id: number
  user: User
  level: Level
}

export interface UpvotesResponse extends PaginatedResponse {
  upvotes: Upvote[]
}

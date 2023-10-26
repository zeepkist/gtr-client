import { API } from '../api.js'
import {
  LevelsParameters,
  RandomLevelsParameters,
  SearchLevelsParameters
} from '../params/level.js'
import {
  Level,
  LevelsResponse,
  PopularLevelsResponse
} from '../schemas/level.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of levels
 * @category Level
 * @example
 * import { getLevels } from '@zeepkist/api'
 *
 * const levels = await getLevels({ Author: 'Yannic' })
 */
export const getLevels = async (parameters: LevelsParameters) =>
  handleGet<LevelsResponse>('levels', parameters, API.ZWORPSHOP)

/**
 * Get a level by id.
 * @category Level
 * @example
 * import { getLevel } from '@zeepkist/api'
 *
 * const level = await getLevel(1)
 */
export const getLevel = async (id: number) =>
  handleGet<Level>(`levels/${id}`, undefined, API.ZWORPSHOP)

/**
 * Get a list of levels that are popular today
 * @category Level
 * @example
 * import { getHotLevels } from '@zeepkist/api'
 *
 * const levels = await getHotLevels()
 */
export const getHotLevels = async () =>
  handleGet<PopularLevelsResponse>('levels/hot')

/**
 * Get a list of levels that are popular this month
 * @category Level
 * @example
 * import { getPopularLevels } from '@zeepkist/api'
 *
 * const levels = await getPopularLevels()
 */
export const getPopularLevels = async () =>
  handleGet<PopularLevelsResponse>('levels/popular')

/**
 * Get a list of randomly selected levels
 * @category Level
 * @example
 * import { getRandomLevels } from '@zeepkist/api'
 *
 * const levels = await getRandomLevels()
 */
export const getRandomLevels = async (parameters: RandomLevelsParameters) =>
  handleGet<LevelsResponse>('levels/random', parameters, API.ZWORPSHOP)

/**
 * Search for levels
 * @category Level
 * @example
 * import { searchLevels } from '@zeepkist/api'
 *
 * const levels = await searchLevels({ Query: 'Level 01' })
 */
export const searchLevels = async (parameters: SearchLevelsParameters) =>
  handleGet<LevelsResponse>('levels/search', parameters, API.ZWORPSHOP)

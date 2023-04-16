import { LevelsParameters, SearchLevelsParameters } from '../params/level.js'
import { Level, LevelsResponse } from '../schemas/level.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of levels
 * @category Level
 * @example
 * import { getLevels } from '@zeepkist/gtr-api'
 *
 * const levels = await getLevels({ Author: 'Yannic' })
 */
export const getLevels = async (parameters: LevelsParameters) =>
  handleGet<LevelsResponse>('levels', parameters)

/**
 * Get a level by id.
 * @category Level
 * @example
 * import { getLevel } from '@zeepkist/gtr-api'
 *
 * const level = await getLevel(1)
 */
export const getLevel = async (id: number) => handleGet<Level>(`levels/${id}`)

/**
 * Search for levels
 * @category Level
 * @example
 * import { searchLevels } from '@zeepkist/gtr-api'
 *
 * const levels = await searchLevels({ Query: 'Level 01' })
 */
export const searchLevels = async (parameters: SearchLevelsParameters) =>
  handleGet<LevelsResponse>('levels/search', parameters)

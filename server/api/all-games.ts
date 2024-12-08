import { eventHandler } from 'h3'
import games from '~/data/games.json'

export default eventHandler(() => {
  return games
})

import * as api from '../../api'

export const testGet = () => {
  console.log('testing')
  return api.get('/test/get')
}

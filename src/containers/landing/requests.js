import * as api from '../../api'

export const submitData = (data) => {
  return api.post('/output', { data: data })
}

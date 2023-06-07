import { Api } from '../ApiConfig'

const api = Api()

export const getArticle = async () => {
  const response = await api.get('/daily-article')
  const data = response.data
  const { content, articleName } = data

  return { articleName, content }
}

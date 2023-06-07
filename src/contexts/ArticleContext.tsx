import { createContext, useEffect, useState } from 'react'
import { getArticle } from '../services/api/artigos'
import { normalizeText } from '../utils/formatter'

type TArticleContentChunk = {
  title: { text: string; isVisible: boolean }[]
  content: { text: string; isVisible: boolean }[]
}

type TArticle = {
  articleName: { text: string; isVisible: boolean }[]
  content: TArticleContentChunk[]
}

interface IArticleData {
  articleName: string
  content: {
    title: string
    content: string
  }[]
}

interface IArticleContext {
  article: TArticle | null
  setArticle?: () => void
}

export const ArticleContext = createContext<IArticleContext>(
  {} as IArticleContext,
)

export const ArticleContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [article, setArticle] = useState<TArticle | null>(null)

  useEffect(() => {
    getArticle().then((article: IArticleData) => {
      const articleName = normalizeText(article.articleName)

      const content = article.content.map((chunk) => {
        const title = normalizeText(chunk.title)
        const content = normalizeText(chunk.content)

        return {
          title,
          content,
        }
      })

      setArticle({ articleName, content })
    })
  }, [])

  return (
    <ArticleContext.Provider value={{ article }}>
      {children}
    </ArticleContext.Provider>
  )
}

import { useContext } from 'react'
import { AppContainer, ArticleContainer, Header } from './app.styles'
import { Alpha } from './components/Alpha'
import { GameController } from './components/GameController'
import { ArticleContext } from './contexts/ArticleContext'

export function App() {
  const { article } = useContext(ArticleContext)
  const isLoading = !article

  return (
    <AppContainer>
      <Header>
        <h1>ArtigoClone</h1>
        <span>Aleatório</span>
      </Header>

      <main>
        {isLoading ? (
          'Ta carregando'
        ) : (
          <ArticleContainer>
            <h2>
              {article.articleName.map((alpha, index) => {
                return <Alpha alpha={alpha} key={alpha.text + index} />
              })}
            </h2>

            {article.content.map((chunk, i) => {
              return (
                <span key={i}>
                  <h2>
                    {chunk.title.map((alpha, index) => {
                      return <Alpha alpha={alpha} key={alpha.text + index} />
                    })}
                  </h2>
                  <p>
                    {chunk.content.map((alpha, index) => {
                      return <Alpha alpha={alpha} key={alpha.text + index} />
                    })}
                  </p>
                </span>
              )
            })}
          </ArticleContainer>
        )}

        <GameController />
      </main>
    </AppContainer>
  )
}

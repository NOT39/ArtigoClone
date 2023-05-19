import { AppContainer, ArticleContainer, Header } from './app.styles'
import { Alpha } from './components/Alpha'
import { GameController } from './components/GameController'

const titleMock = [{ text: 'Floresta', isVisible: false }]

const punctuationList = '{}()\\[\\]\\\\.…,;:!¡?¿/@#%\\^&*_—~+\\-=<>«»"\'’\\s'
const separatorRegex = new RegExp(`([${punctuationList}\\d]+)`, 'gim')

const paragraphMock =
  'Floresta é uma área com alta densidade de árvores. Segundo dados da Organização das Nações Unidas para a Alimentação e a Agricultura, as florestas ocupavam em 2006 cerca de 4 bilhões de hectares ou aproximadamente 30% da superfície terrestre. As florestas são vitais para a vida do ser humano, devido a muitos fatores principalmente de ordem climática. As florestas são o ecossistema terrestre dominante da Terra e são distribuídas ao redor do globo. De acordo com a definição amplamente utilizada, da Organização para a Alimentação e a Agricultura, as florestas cobriam 41 milhões de km² do globo em 1990 e 39,9 milhões de km² em 2016.A mais conhecida floresta é a floresta Amazônica, maior que muitos países. Erroneamente considerada o Pulmão do Mundo, não é, pois foi comprovado cientificamente que a floresta Amazônica consome cerca de 65% do oxigênio que produz (com a fotossíntese) com a respiração e transpiração das plantas. A taiga siberiana é a maior floresta do mundo, sendo que este bioma estende-se para além da Sibéria, nomeadamente, pelo Alasca, Canadá, Groenlândia, Norte da Europa e Japão.'
    .split(separatorRegex)
    .map((text) => {
      return {
        text,
        isVisible: !!text.match(separatorRegex),
      }
    })

export function App() {
  return (
    <AppContainer>
      <Header>
        <h1>ArtigoClone</h1>
        <span>Aleatório</span>
      </Header>

      <main>
        <ArticleContainer>
          <h2>
            <a href="#">
              {titleMock.map((alpha, index) => {
                return <Alpha alpha={alpha} key={index} />
              })}
            </a>
          </h2>
          <p style={{ position: 'relative' }}>
            {paragraphMock.map((alpha, index) => {
              return <Alpha alpha={alpha} key={index} />
            })}
          </p>
          <h3>
            {titleMock.map((word, index) => {
              return (
                <>
                  <span key={index}>{word.text}</span>
                </>
              )
            })}
          </h3>
          <p>
            <span>Não</span>
            <span>sei</span>
            <span>mais</span>
            <span>o</span>
            <span>que</span>
            <span>escrever</span>
          </p>
        </ArticleContainer>

        <GameController />
      </main>
    </AppContainer>
  )
}

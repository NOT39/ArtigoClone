import styled from 'styled-components'

export const AppContainer = styled.div`
  @media (min-width: 800px) and (orientation: landscape) {
    margin-right: 16rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  color: ${(props) => props.theme['gray-200']};

  h1 {
    font-weight: 400;
    margin-right: 0.5rem;
  }

  span {
    background-color: ${(props) => props.theme.blue};
    border-radius: 9999px;
    padding: 0 0.5rem;
  }
`

export const ArticleContainer = styled.section`
  padding: 1rem;

  h2 > a,
  h3 {
    color: ${(props) => props.theme['gray-200']};
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['gray-200']};
  }
`

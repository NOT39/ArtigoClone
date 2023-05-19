import styled from 'styled-components'

export const ControllerContainer = styled.section`
  position: sticky;
  bottom: 0;
  left: 0;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['gray-500']};
`

export const GuessFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['gray-400']};

    border: none;
    border-radius: 4px;
    outline: 1px solid ${(props) => props.theme['gray-300']};

    color: ${(props) => props.theme['gray-200']};

    &:hover {
      outline: 1px solid ${(props) => props.theme['gray-200']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  button {
    line-height: 0;

    background-color: transparent;
    border: 0;

    svg {
      color: ${(props) => props.theme['gray-200']};
    }
  }
`

export const GuessHistory = styled.div`
  height: 30vh;
  overflow-y: auto;
  margin-top: 0.5rem;

  border-radius: 4px;

  background-color: ${(props) => props.theme['gray-700']};

  h2 {
    color: ${(props) => props.theme['gray-200']};
    font-size: 1rem;
    font-weight: 400;
  }

  h2 {
    border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  }

  h2,
  ul li {
    padding: 0.5rem 1rem;
  }

  ul li {
    list-style: none;
  }

  @media (min-width: 800px) and (orientation: landscape) {
    position: fixed;
    top: 0;
    right: 0;

    height: 1280px;
    width: 16rem;
    margin-top: 0;
    border-radius: 0;

    background-color: ${(props) => props.theme['gray-550']};
  }
`

interface GuessProps {
  variant: 'wrong' | 'right'
}

export const Guess = styled.li<GuessProps>`
  display: flex;
  justify-content: space-between;

  color: ${(props) =>
    props.variant === 'right' ? props.theme.green : props.theme.danger};
`

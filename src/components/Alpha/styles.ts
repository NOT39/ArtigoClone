import styled from 'styled-components'

interface WordProps {
  lengthVisible?: boolean
  wordLength: number
}

export const Word = styled.span<WordProps>`
  cursor: pointer;

  &::before {
    content: ${(props) => (props.lengthVisible ? `"${props.wordLength}"` : '')};

    position: absolute;
    color: ${(props) => props.theme['gray-700']};
  }
`

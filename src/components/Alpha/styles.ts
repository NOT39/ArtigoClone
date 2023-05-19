import styled from 'styled-components'

interface WordProps {
  lengthVisible?: boolean
  wordLength: number
}

export const WordContainer = styled.span<WordProps>`
  cursor: pointer;
  user-select: none;
  position: relative;

  background-color: ${(props) => props.theme['gray-100']};

  &::after {
    content: ${(props) => (props.lengthVisible ? `"${props.wordLength}"` : '')};

    position: absolute;
    left: 0;

    color: ${(props) => props.theme['gray-600']};
  }
`

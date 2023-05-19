import { PaperPlaneRight } from 'phosphor-react'

import {
  ControllerContainer,
  Guess,
  GuessFormContainer,
  GuessHistory,
} from './styles'

export function GameController() {
  return (
    <ControllerContainer>
      <GuessFormContainer>
        <input type="text" placeholder="palpite uma palavra" />
        <button>
          <PaperPlaneRight size={32} weight="fill" />
        </button>
      </GuessFormContainer>

      <GuessHistory>
        <h2>5 palpites</h2>
        <ul>
          <Guess variant="wrong">
            <span>Sim</span>
            <span>0</span>
          </Guess>
          <Guess variant="wrong">
            <span>Não</span>
            <span>0</span>
          </Guess>
          <Guess variant="right">
            <span>Areia</span>
            <span>2</span>
          </Guess>
          <Guess variant="right">
            <span>Teclado</span>
            <span>1</span>
          </Guess>
        </ul>
      </GuessHistory>
    </ControllerContainer>
  )
}

import { useState } from 'react'

import { Word } from './styles'

interface AlphaProps {
  alpha: {
    text: string
    isVisible: boolean
  }
}

export function Alpha({ alpha }: AlphaProps) {
  const [lengthVisible, setLengthVisible] = useState(false)

  const punctuationList = '{}()\\[\\]\\\\.…,;:!¡?¿/@#%\\^&*_—~+\\-=<>«»"\'’\\s'
  const wordRegex = new RegExp(`^[^${punctuationList}]+$`, 'i')

  const isWord = alpha.text.match(wordRegex)

  function hideWord(text: string) {
    return '█'.repeat(text.length)
  }

  function handleShowLength() {
    setLengthVisible((prevLengthVisible) => !prevLengthVisible)
  }

  return isWord && !alpha.isVisible ? (
    <Word
      lengthVisible={lengthVisible}
      wordLength={alpha.text.length}
      onClick={handleShowLength}
    >
      {hideWord(alpha.text)}
    </Word>
  ) : (
    <>{alpha.text}</>
  )
}

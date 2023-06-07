const punctuationList = '{}()\\[\\]\\\\.…,;:!¡?¿/@#%\\^&*_—~+\\-=<>«»"\'’\\s'
const separatorRegex = new RegExp(`([${punctuationList}\\d]+)`, 'gim')

export const normalizeText = (text: string) => {
  return text.split(separatorRegex).map((text: string) => {
    return {
      text,
      isVisible: !!text.match(separatorRegex),
    }
  })
}

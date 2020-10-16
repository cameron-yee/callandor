export const formatClassList = (classList:string): string => {
  return classList
    .replace(/\n/g, '')
    .replace(/[\s]+/g, ' ')
    .trim()
}

export const joinStrings = (join: string, ...strings: string[]): string => {
  return strings.join(join)
}


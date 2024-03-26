export function getReadingTime(
  numeroPalavras: number,
  velocidadeLeituraPPM: number
) {
  return numeroPalavras / velocidadeLeituraPPM;
}

export function countWords(texto: string) {
  const textWithoutLineBreaks = texto.replace(/\n/g, " ");
  const words = textWithoutLineBreaks.split(" ");
  const filtredWords = words.filter((word) => word.trim() !== "");
  return filtredWords.length;
}

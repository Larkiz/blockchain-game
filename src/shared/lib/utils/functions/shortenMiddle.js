export function shortenMiddle(text, maxLength = 20) {
  if (!text) {
    return "Неизвестно";
  }
  if (text.length <= maxLength) return text;

  const ellipsis = "....";
  const charsEachSide = Math.floor((maxLength - ellipsis.length) / 2);

  const start = text.slice(0, charsEachSide);
  const end = text.slice(-charsEachSide);

  return `${start}${ellipsis}${end}`;
}

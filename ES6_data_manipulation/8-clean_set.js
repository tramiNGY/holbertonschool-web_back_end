export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const result = [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');

  return result || '';
}

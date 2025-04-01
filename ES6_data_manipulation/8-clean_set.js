export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filtereditems = [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  if (filtereditems.length === 0) {
    return '';
  }
  return filtereditems.join('-');
}

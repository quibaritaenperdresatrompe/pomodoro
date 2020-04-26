export default function pad2Digits(number) {
  const string = number.toString();
  return string.length === 1 ? "0" + number : string;
}

export const addLeadingZero = (num: number): string =>
  num >= 0 && num <= 9 ? `0${num}` : num.toString()

export const addLeadingZero = (relativeTime: number): string =>
  relativeTime >= 0 && relativeTime <= 9
    ? `0${relativeTime}`
    : relativeTime.toString()

export const addLeadingZero = (relativeTime: number) =>
  relativeTime >= 0 && relativeTime <= 9 ? `0${relativeTime}` : relativeTime

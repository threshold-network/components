import { useState, useEffect } from "react"
import {
  dateToUnixTimestamp,
  ONE_SEC_IN_MILISECONDS,
  unixTimestampToTimeUnits,
  addLeadingZero,
  TimeUnits,
} from "../utils"

const useCountdown = (
  targetDateInUnix: number,
  addLeadingZeroes?: boolean,
  onComplete?: (targetDateInUnix: number) => void
): TimeUnits => {
  const [diff, setDiff] = useState(targetDateInUnix - dateToUnixTimestamp())

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDateInUnix - dateToUnixTimestamp()
      if (diff === 0) {
        if (onComplete) {
          onComplete(targetDateInUnix)
        }
        clearInterval(interval)
      }

      setDiff(diff)
    }, ONE_SEC_IN_MILISECONDS)

    return () => clearInterval(interval)
  }, [targetDateInUnix, onComplete])
  let { days, hours, minutes, seconds } = unixTimestampToTimeUnits(diff)

  if (addLeadingZeroes) {
    days = addLeadingZero(Number(days))
    hours = addLeadingZero(Number(hours))
    minutes = addLeadingZero(Number(minutes))
    seconds = addLeadingZero(Number(seconds))
  }

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

export default useCountdown

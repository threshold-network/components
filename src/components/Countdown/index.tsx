import { FC, useEffect, useState } from "react"
import {
  dateToUnixTimestamp,
  ONE_SEC_IN_MILISECONDS,
  dateAs,
  addLeadingZero,
} from "../../utils"
import { H4 } from "../Typography"

export interface CountdownProps {
  targetDateInUnix: number
  onComplete?: (targetDateInUnix: number) => void
  withLeadingZeroes?: boolean
  children: (
    days: string,
    hours: string,
    minutes: string,
    seconds: string
  ) => JSX.Element
}

export const Countdown: FC<CountdownProps> = ({
  targetDateInUnix,
  onComplete,
  withLeadingZeroes = false,
  children,
}) => {
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
  }, [targetDateInUnix])
  let { days, hours, minutes, seconds } = dateAs(diff)

  if (withLeadingZeroes) {
    days = addLeadingZero(Number(days))
    hours = addLeadingZero(Number(hours))
    minutes = addLeadingZero(Number(minutes))
    seconds = addLeadingZero(Number(seconds))
  }

  return children(days, hours, minutes, seconds)
}

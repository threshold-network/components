import { FC, useEffect, useState } from "react"
import {
  dateToUnixTimestamp,
  ONE_SEC_IN_MILISECONDS,
  dateAs,
} from "../../utils"
import { H4 } from "../Typography"

export interface CountdownProps {
  targetDateInUnix: number
  children: (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => JSX.Element
}

export const Countdown: FC<CountdownProps> = ({
  targetDateInUnix,
  children,
}) => {
  const [diff, setDiff] = useState(targetDateInUnix - dateToUnixTimestamp())

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDateInUnix - dateToUnixTimestamp()
      if (diff === 0) {
        clearInterval(interval)
      }

      setDiff(diff)
    }, ONE_SEC_IN_MILISECONDS)

    return () => clearInterval(interval)
  }, [targetDateInUnix])
  const { days, hours, minutes, seconds } = dateAs(diff)

  return children(days, hours, minutes, seconds)
}

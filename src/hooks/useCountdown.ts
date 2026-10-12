import { useEffect, useState } from 'react'

export interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
  isFinished: boolean
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function getCountdown(targetTime: number): Countdown {
  const remaining = Math.max(0, targetTime - Date.now())

  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
    isFinished: remaining === 0,
  }
}

export function useCountdown(target: Date): Countdown {
  const targetTime = target.getTime()
  const [countdown, setCountdown] = useState(() => getCountdown(targetTime))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const next = getCountdown(targetTime)
      setCountdown(next)

      if (next.isFinished) {
        window.clearInterval(intervalId)
      }
    }, SECOND)

    return () => window.clearInterval(intervalId)
  }, [targetTime])

  return countdown
}

export class Clock {
    private time: number = 0
    private maxMinutesInDay = 60*24
    private minutesInHour = 60
    constructor(hour: number, minute?: number) {
      const minutesInADay = (hour*60 + (minute ?? 0)) % this.maxMinutesInDay
      this.time = minutesInADay > 0 ? minutesInADay : minutesInADay + this.maxMinutesInDay
    }
  
    public toString(): unknown {
      const hour = Math.floor(this.time / this.minutesInHour)
      let minutes = this.time
      if (hour > 0) {
        minutes = this.time % (hour*this.minutesInHour)
      }
      let hourFmt = hour < 10 ? '0' + String(hour) : String(hour)
      const minutesFmt = minutes < 10 ? '0' + String(minutes) : String(minutes)

      if (hour === 24) {
        hourFmt = '00'
      }
  
      
      return `${hourFmt}:${minutesFmt}`
    }
  
    public plus(minutes: number): Clock {
      this.time = (this.time + minutes)  % this.maxMinutesInDay
      return this
    }
  
    public minus(minutes: number): Clock {
      const minutesInADay = (this.time - minutes) % this.maxMinutesInDay
      this.time = minutesInADay > 0 ? minutesInADay : minutesInADay + this.maxMinutesInDay

      return this
    }
  
    public equals(other: Clock): boolean {
        return this.time === other.time
    }
  }

  console.log(new Clock(25, 0).toString())

  /*Instructions
Implement a clock that handles times without dates.

You should be able to add and subtract minutes to it.

Two clocks that represent the same time should be equal to each other.
*/
  
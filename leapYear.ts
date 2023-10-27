export function isLeap(year: number): boolean {
    const isDivisiblePer4 = year % 4 === 0
    const isDivisiblePer100 = year % 100 === 0
    const isDivisiblePer400 = year % 400 === 0

    return isDivisiblePer4 && (!isDivisiblePer100 || isDivisiblePer400)
  }
  
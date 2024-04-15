/*
Determine if a word or phrase is an isogram.

An isogram (also known as a "non-pattern word") is a word or 
phrase without a repeating letter, however spaces and hyphens are 
allowed to appear multiple times.

Examples of isograms:

lumberjacks
background
downstream
six-year-old
The word isograms, however, is not an isogram, because the s repeats.
*/
export function isIsogram(input: string): boolean {
    const charCounts: Map<string, number> = new Map()

    const phrase = input.replace(/[-\s]/g, '')
    for (const char of phrase) {
        const charLower = char.toLowerCase()
        const charCount = charCounts.get(charLower)
        if (charCount) {
            return false
        }
        charCounts.set(charLower, ( charCount|| 0) + 1)
      }
      return true
}
console.log(isIsogram('subdermatoglyphic'))

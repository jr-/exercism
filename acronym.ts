/*
Convert a phrase to its acronym.

Techies love their TLA (Three Letter Acronyms)!

Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).

Punctuation is handled as follows: hyphens are word separators (like whitespace); all other punctuation can be removed from the input.

For example:

Input	Output
As Soon As Possible	ASAP
Liquid-crystal display	LCD
Thank George It's Friday!	TGIF
*/

export function parse(phrase: string): string {
    const words = phrase.split(/(?<![A-Z])(?=[A-Z])|\s+|-/)
    let acronym = ''
    for (let word of words) {
        acronym = `${acronym}${word[0].toUpperCase()}`
    }

    return acronym
}

//console.log(parse('PHP: Hypertext Preprocessor'))
// npx jest acronym.spec.ts
  
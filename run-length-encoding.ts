/*

Instructions
Implement run-length encoding and decoding.

Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) 
are replaced by just one data value and count.

For example we can represent the original 53 characters with only 13.

"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
RLE allows the original data to be perfectly reconstructed from the compressed data, 
which makes it a lossless data compression.

"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
For simplicity, you can assume that the unencoded string will only contain the letters A through Z 
(either lower or upper case) and whitespace. 
This way data to be encoded will never contain any numbers and numbers inside data to be decoded always 
represent the count for the following character.
*/

export function encode(unencoded: string) : string {
    if (unencoded.length === 0) {
        return ''
    }

    let encoded = ''
    let lastChar = unencoded[0]
    let countRepetition = 1
    for (let i = 1; i < unencoded.length; i++) {
        const curChar = unencoded[i]
        if (lastChar === curChar) {
            countRepetition += 1
        } else {
            encoded = `${encoded}${countRepetition > 1 ? countRepetition : ''}${lastChar}`

            lastChar = curChar
            countRepetition = 1
        }
    }

    encoded = `${encoded}${countRepetition > 1 ? countRepetition : ''}${lastChar}`
    
    return encoded

}
  
export function decode(encoded: string) : string {
    let decoded = ''
    let amountChars = 0

    
    for (let i = 0; i < encoded.length; i++) {
        const char = encoded[i]

        if (isCharNumber(char)) {
            amountChars = amountChars === 0 ? parseInt(char, 10) : parseInt(`${amountChars}${char}`, 10)
        } else {
            amountChars = amountChars === 0 ? 1 : amountChars
            let repChars = ''
            for (let j = 0; j < amountChars; j++) {
                repChars = `${repChars}${char}`
            }
            decoded = `${decoded}${repChars}`
            amountChars = 0
        }
    }
 
    return decoded
}

function isCharNumber(c) {
    return c >= '0' && c <= '9';
  }

console.log(decode('XYZ'))
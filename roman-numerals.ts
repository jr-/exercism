/*
Introduction
Today, most people in the world use Arabic numerals (0–9). But if you travelled back two thousand years,
you'd find that most Europeans were using Roman numerals instead.

To write a Roman numeral we use the following Latin letters, each of which has a value:

M = 1000	
D = 500	
C = 100	
L = 50	
X = 10	
V = 5	
I = 1
A Roman numeral is a sequence of these letters, and its value is the sum of the letters' values. 
For example, XVIII has the value 18 (10 + 5 + 1 + 1 + 1 = 18).

There's one rule that makes things trickier though, and that's that the same letter cannot be used more than three times in succession. 
That means that we can't express numbers such as 4 with the seemingly natural IIII. Instead, for those numbers, 
we use a subtraction method between two letters. So we think of 4 not as 1 + 1 + 1 + 1 but instead as 5 - 1. 
And slightly confusingly to our modern thinking, we write the smaller number first. This applies only in the following cases: 
4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).

Order matters in Roman numerals! Letters (and the special compounds above) must be ordered by decreasing value from left to right.

Here are some examples:

 105 => CV
---- => --
 100 => C
+  5 =>  V
 106 => CVI
---- => --
 100 => C
+  5 =>  V
+  1 =>   I
 104 => CIV
---- => ---
 100 => C
+  4 =>  IV
And a final more complex example:

 1996 => MCMXCVI
----- => -------
 1000 => M
+ 900 =>  CM
+  90 =>    XC
+   5 =>      V
+   1 =>       I
Instructions
Your task is to convert a number from Arabic numerals to Roman numerals.

For this exercise, we are only concerned about traditional Roman numerals, in which the largest number is MMMCMXCIX (or 3,999).

Note
There are lots of different ways to convert between Arabic and Roman numerals. We recommend taking a naive approach first to familiarise yourself with the concept of Roman numerals and then search for more efficient methods.

Make sure to check out our Deep Dive video at the end to explore the different approaches you can take!
*/

const romansNumLetters = {
    1: 'I',
    5: 'V',
    9: 'IX',
    10: 'X',
    50: 'L',
    90: 'XC',
    100: 'C',
    500: 'D',
    900: 'CM',
    1000: 'M'
}

const romanByDecimalLength: RomanCipher = {
    4: {
        1: 'M'
    },
    3: {
        1: 'C',
        4: 'CD',
        5: 'D',
        9: 'CM'
    },
    2: { 
        1: 'X',
        4: 'XL',
        5: 'L',
        9: 'XC'
    },
    1: {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX'
    }
}

type RomanCombo = {
    [key: number]: string
}

type RomanCipher = {
    [key: number]: RomanCombo
}

// 3999 MMMCMXCIX
// 1996 => MCMXCVI
// 1024 => MXXIV
export const toRoman = (num: number): string => {
    if (num > 3999) {
        throw 'error'
    }

    let romanNumber = ''
    const algsStr = String(num)
    let length = algsStr.length

    for (let i = length + 1; length > 0; length--) {
        const alg = Number(algsStr[i-length-1])
        let numberOfOnes = alg
        if (alg === 9 || alg === 4) {
            romanNumber = `${romanNumber}${romanByDecimalLength[length][alg]}`
            numberOfOnes = 0
        } else if (alg > 4) {
            romanNumber = `${romanNumber}${romanByDecimalLength[length][5]}`
            numberOfOnes = alg - 5
        }

        for (let i = 0; i < numberOfOnes; i++) {
            romanNumber = `${romanNumber}${romanByDecimalLength[length][1]}`
        }

    }

    return romanNumber
  }

  console.log(toRoman(3999))
  
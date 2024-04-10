/*
Instructions
An anagram is a rearrangement of letters to form a new word: for example "owns" is an anagram of "snow". 
A word is not its own anagram: for example, "stop" is not an anagram of "stop".

Given a target word and a set of candidate words, this exercise requests the anagram set: 
the subset of the candidates that are anagrams of the target.

The target and candidates are words of one or more ASCII alphabetic characters (A-Z and a-z). 
Lowercase and uppercase characters are equivalent: for example, "PoTS" is an anagram of "sTOp", but StoP is not an anagram of sTOp. 
The anagram set is the subset of the candidate set that are anagrams of the target (in any order). 
Words in the anagram set should have the same letter case as in the candidate set.

Given the target "stone" and candidates "stone", "tones", "banana", "tons", "notes", "Seton", 
the anagram set is "tones", "notes", "Seton".
*/
export class Anagram {
    target: string
    charCounts: Map<string, number>
  
    constructor(target: string) {
      this.target = target.toLowerCase();
      this.charCounts = this.countCharacters(this.target)
    }
  
    private countCharacters(word: string): Map<string, number> {
      const charCounts = new Map<string, number>()
      for (const char of word) {
        const charLower = char.toLowerCase()
        charCounts.set(charLower, (charCounts.get(charLower) || 0) + 1)
      }
      return charCounts
    }
  
    private isAnagram(word: string): boolean {
      if (word.length !== this.target.length || this.target === word.toLowerCase()) {
        return false
      }
  
      const wordCounts = this.countCharacters(word)
  
      for (const [char, count] of this.charCounts) {
        if (wordCounts.get(char) !== count) {
          return false
        }
      }
  
      return true
    }
  
    public matches(...potentials: string[]): string[] {
      const anagrams: string[] = []
  
      potentials.forEach(word => {
        if (this.isAnagram(word)) {
          anagrams.push(word)
        }
      });
  
      return anagrams
    }
  }
  
  const anagram = new Anagram('banana')

/*
banana = abanan
*/
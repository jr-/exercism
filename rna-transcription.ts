export function toRna(DNASequence: string) {
    const charLenght = DNASequence.length
    let RNASequence = ''
    for (let i = 0; i < charLenght; i++) {
        let letter = DNASequence[i]
        if(DNASequence[i] === 'G') {
            letter = 'C'
        } else if (DNASequence[i] === 'C') {
            letter = 'G'
        } else if (DNASequence[i] === 'T') {
            letter = 'A'
        } else if (DNASequence[i] === 'A') {
            letter = 'U'
        } else {
            throw ('Invalid input DNA.')
        }
        RNASequence += letter  
    }
    return RNASequence
}

  /*
  nstructions
Your task is determine the RNA complement of a given DNA sequence.


Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U
Note
If you want to look at how the inputs and outputs are structured, take a look at the examples in the test suite.

*/
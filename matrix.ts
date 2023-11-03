export class Matrix {
    private matrix: number[][]
    private matrixTrans: number[][]

    constructor(input: string) {
        this.matrix = input.split('\n').map(row => row.split(' ').map(Number))
        this.matrixTrans = this.matrix[0].map((_, columnIndex) => this.matrix.map(row => row[columnIndex]))
    }
  
    get rows(): number[][] {
        return this.matrix
    }
  
    get columns(): number[][] {
        return this.matrixTrans
    }
  }

  console.log(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[2])
  
  /*
    Instructions
    Given a string representing a matrix of numbers, return the rows and columns of that matrix.

    So given a string with embedded newlines like:

    9 8 7
    5 3 2
    6 6 7
    representing this matrix:

        1  2  3
    |---------
    1 | 9  8  7
    2 | 5  3  2
    3 | 6  6  7
    your code should be able to spit out:

    A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
    A list of the columns, reading each column top-to-bottom while moving from left-to-right.
    The rows for our example matrix:

    9, 8, 7
    5, 3, 2
    6, 6, 7
    And its columns:

    9, 5, 6
    8, 3, 6
    7, 2, 7
  */
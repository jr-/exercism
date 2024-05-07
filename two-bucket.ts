/*
Instructions
Given two buckets of different size and which bucket to fill first, 
determine how many actions are required to measure an exact number of 
liters by strategically transferring fluid between the buckets.

There are some rules that your solution must follow:

You can only do one action at a time.
There are only 3 possible actions:
Pouring one bucket into the other bucket until either: 
a) the first bucket is empty b) the second bucket is full
Emptying a bucket and doing nothing to the other.
Filling a bucket and doing nothing to the other.
After an action, you may not arrive at a state where the starting 
bucket is empty and the other bucket is full.

Your program will take as input:

the size of bucket one
the size of bucket two
the desired number of liters to reach
which bucket to fill first, either bucket one or bucket two
Your program should determine:

the total number of actions it should take to reach the desired 
number of liters, including the first fill of the starting bucket
which bucket should end up with the desired number of liters - 
either bucket one or bucket two
how many liters are left in the other bucket
Note: any time a change is made to either or both buckets counts 
as one (1) action.

Example: Bucket one can hold up to 7 liters, and bucket 
two can hold up to 11 liters. Let's say at a given step, 
bucket one is holding 7 liters and bucket two is holding 8 liters (7,8). 
If you empty bucket one and make no change to bucket two, 
leaving you with 0 liters and 8 liters respectively (0,8), 
that counts as one action. Instead, if you had poured from bucket 
one into bucket two until bucket two was full, 
resulting in 4 liters in bucket one and 11 liters in bucket two (4,11), 
that would also only count as one action.

Another Example: Bucket one can hold 3 liters, and 
bucket two can hold up to 5 liters. 
You are told you must start with bucket one. 
So your first action is to fill bucket one. 
You choose to empty bucket one for your second action. 
For your third action, you may not fill bucket two, 
because this violates the third rule -- 
you may not end up in a state after any action where the starting bucket
is empty and the other bucket is full.

Written with <3 at Fullstack Academy by Lindsay Levine.


        fill buckTwo (0, 5)
        move buckTwo to buckOne (3, 2)
        empty buckOne (0, 2)
        pour two to one (2, 0)
        fill buckTwo (2, 5)
        pour two to one (3, 4)
        empty buckOne (0, 4)
        pour two to one (3, 1)
        [0, 3, 5], goal = 1, comecando em two
*/


export class TwoBucket {
    private bucketsSize: number[] = [0, 0]
    private buckets: number[] = [0, 0]
    private goal: number
    private startingBucket: number
    private secondBucket: number
    private _goalBucket: string = ''
    private _otherBucket: number = 0

    constructor(buckOne: number, buckTwo: number, goal: number, bucket: string) {
      this.bucketsSize = [buckOne, buckTwo]
      this.goal = goal
      this.startingBucket = bucket === 'one' ? 0 : 1
      this.secondBucket = bucket === 'one' ? 1 : 0
    }

    private pour(from: number, to: number) {
        const amountToPour = Math.min (this.buckets[from], this.bucketsSize[to] - this.buckets[to])
        this.buckets[from] -= amountToPour
        this.buckets[to] += amountToPour
    }

    private fill(bucket: number) {
        this.buckets[bucket] = this.bucketsSize[bucket]
    }

    private empty(bucket: number) {
        this.buckets[bucket] = 0
    }

    private gcd(a: number, b: number): number {
        if (a < 0) a = -a
        if (b < 0) b = -b
        if (b > a) {var temp = a; a = b; b = temp;}
        while (true) {
            if (b == 0) return a;
            a %= b;
            if (a == 0) return b;
            b %= a;
        }
    }
    
    private isNotDivisibleByGCD(): boolean {
        const gcdValue = this.gcd(this.bucketsSize[0], this.bucketsSize[1])
        return this.goal % gcdValue !== 0
    }
  
    moves() : number {
        if (this.goal > this.bucketsSize[0] && this.goal > this.bucketsSize[1]) {
            throw new Error('Goal larger than both buckets')
        }
        if (this.isNotDivisibleByGCD()) {
            throw new Error('Not respect GCD rule')
        }
        let moves = 0
        if (this.goal === this.bucketsSize[0]) {
            if (this.secondBucket === 0) {
                this.fill(this.startingBucket)
                this.fill(this.secondBucket)
                moves = 2
            } else {
                this.fill(this.startingBucket)
                moves = 1
            }
        } else if (this.goal === this.bucketsSize[1]) {
            if (this.secondBucket === 1) {
                this.fill(this.startingBucket)
                this.fill(this.secondBucket)
                moves = 2
            } else {
                this.fill(this.startingBucket)
                moves = 1
            }
        }
        if (this.startingBucket === 0) {
            while (!this.buckets.some(bucket => bucket === this.goal)) {
                if (this.buckets[1] === this.bucketsSize[1]) {
                    this.empty(1)
                }  else if (this.buckets[1] < this.bucketsSize[1] && this.buckets[0] > 0) {
                    this.pour(0, 1)
                } else if (this.buckets[0] < this.bucketsSize[0]) {
                    this.fill(0)
                }

                moves++
            }
        } else {
            while (!this.buckets.some(bucket => bucket === this.goal)) {
                if (this.buckets[0] === this.bucketsSize[0]) {
                    this.empty(0)
                }  else if (this.buckets[0] < this.bucketsSize[0] && this.buckets[1] > 0) {
                    this.pour(1, 0)
                } else if (this.buckets[1] < this.bucketsSize[1]) {
                    this.fill(1)
                }

                moves++
            }
        }
        const goalIndex = this.buckets.findIndex(bucket => bucket === this.goal)
        if (goalIndex === 0) {
            this._goalBucket = 'one'
            this._otherBucket = this.buckets[1]
        } else {
            this._goalBucket = 'two'
            this._otherBucket = this.buckets[0]
        }

        return moves
    }
  
    get goalBucket() {
        return this._goalBucket
    }
  
    get otherBucket() {
        return this._otherBucket
    }
  }

  const twoBucket = new TwoBucket(2, 3, 2, 'one')  
  console.log(twoBucket.moves())
  console.log(twoBucket.goalBucket)
  console.log(twoBucket.otherBucket)
  
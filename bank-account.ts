//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
Simulate a bank account supporting opening/closing, withdrawals, 
and deposits of money. Watch out for concurrent transactions!

A bank account can be accessed in multiple ways. 
Clients can make deposits and withdrawals using the internet, mobile phones, etc. 
Shops can charge against the account.

Create an account that can be accessed from multiple threads/processes 
(terminology depends on your programming language).

It should be possible to close an account; 
operations against a closed account must fail.
*/

export class ValueError extends Error {
    constructor() {
      super('Bank account error')
    }
  }
  
  export class BankAccount {
    private _balance: number = 0
    private isOpen: boolean = false
    constructor() {
    }
  
    open(): void {
        if (this.isOpen) {
            throw new ValueError()
        }
        this.isOpen = true
        this._balance = 0
    }
  
    close(): void {
        if (!this.isOpen) {
            throw new ValueError()
        }
        this.isOpen = false
    }
  
    deposit(amount: number): void {
        if (!this.isOpen || amount < 0) {
            throw new ValueError()
        }
        this._balance += amount
    }
  
    withdraw(amount: number): void {
        if (!this.isOpen || amount < 0 || amount > this._balance) {
            throw new ValueError()
        }
        this._balance -= amount
    }
  
    get balance(): number {
        if (!this.isOpen) {
            throw new ValueError()
        }
        return this._balance
    }
  }
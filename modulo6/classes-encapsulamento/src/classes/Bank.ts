import { UserAccount } from './UserAccount'

export class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }

    getAccounts(): UserAccount[] {
        return this.accounts
    }

    setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }
}
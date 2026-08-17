class Account {
  readonly id: number;
  public name: string;
  protected balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}

// same code easy way
class AccountNew {
  constructor(
    public readonly id: number,
    public name: string,
    protected balance: number,
  ) {}
}

interface BaseAccount {
  readonly id: number;
  name: string;
  //   balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  status(): void;
}

class AccountNewFnc implements BaseAccount {
  protected isLimited: boolean = false;
  protected limit: number = 0;

  constructor(
    public readonly id: number,
    public name: string,
    protected balance: number,
  ) {}

  deposit(amount: number): void {
    this.balance = amount;
  }

  withdraw(amount: number): void {
    if (this.isLimited && amount > this.limit) {
      throw new Error(`You cannot withdraw more than ${this.isLimited}`);
    }

    if (this.balance < amount) {
      throw new Error("Insufficient Balance");
    }
    this.balance -= amount;
  }

  status(): void {
    console.log(
      `Account ${this.id} ${this.name} has a balance of ${this.balance}`,
    );
  }
}

class StudentAccount extends AccountNewFnc {
  protected isLimited: boolean = true;
  protected limit: number = 10000;
}

class SavingsAccount extends AccountNewFnc {
  protected isLimited: boolean = true;
  protected limit: number = 50000;
}

class CurrentAccount extends AccountNewFnc {
  protected isLimited: boolean = true;
  protected limit: number = 50000;
}

const studentAccount = new StudentAccount(123, "Jawad", 25000);

// studentAccount.withdraw(5000);
// studentAccount.status()

studentAccount.withdraw(15000);

studentAccount.status()

import { defineStore } from 'pinia';

interface Loan {
  loanAmount: number;
  interestRate: number;
  termLength: number;
}

export const useLoanStore = defineStore('loanStore', {
  state: () => ({
    loans: [
      { loanAmount: 20000, interestRate: 5.5, termLength: 15 },
      { loanAmount: 35000, interestRate: 4.0, termLength: 10 },
      { loanAmount: 15000, interestRate: 6.5, termLength: 12 }
    ] as Loan[],
  }),
  getters: {
    getLoans: (state) => state.loans,
  },
  actions: {
    addLoan(loan: Loan) {
      this.loans.push(loan);
    },
  },
});

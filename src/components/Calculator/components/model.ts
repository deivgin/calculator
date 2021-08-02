export interface State {
  firstOperand: string;
  secondOperand: string;
  operation: Operator | null;
}

export const initialState: State = {
  firstOperand: "0",
  secondOperand: "0",
  operation: null,
};

export type Operand = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Operator = "+" | "-" | "÷" | "×";

export type Action = "=" | "C" | "." | "AC";

export interface State {
  prevOperand: string;
  currOperand: string;
  operation: Operator | null;
  isCalculated?: boolean;
}

export const initialState: State = {
  prevOperand: "",
  currOperand: "",
  operation: null,
  isCalculated: false,
};

export type Operand = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Operator = "+" | "-" | "÷" | "×";

export type Action = "=" | "C" | "." | "AC";

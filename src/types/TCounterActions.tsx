export type TCounterActions =
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom'; payload: number };

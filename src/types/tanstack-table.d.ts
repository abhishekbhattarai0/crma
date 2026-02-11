import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    label?: string;

    // prevents TS unused generic warning
    _?: TData | TValue;
  }
}

export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export type SortDirection = 'asc' | 'desc';

export interface SortOptions {
  field: string;
  direction: SortDirection;
}



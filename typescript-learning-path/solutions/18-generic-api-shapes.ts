export type Page<T> = {
  items: readonly T[];
  page: number;
  pageSize: number;
  total: number;
};
export function pageCount<T>(page: Page<T>): number {
  return Math.ceil(page.total / page.pageSize);
}

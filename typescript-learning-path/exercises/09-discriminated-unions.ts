export type LoadState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; count: number }
  | { status: 'error'; message: string };
export function stateLabel(state: LoadState): string {
  throw new Error('TODO');
}

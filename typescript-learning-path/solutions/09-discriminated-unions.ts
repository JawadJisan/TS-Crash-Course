export type LoadState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; count: number }
  | { status: 'error'; message: string };
export function stateLabel(state: LoadState): string {
  switch (state.status) {
    case 'idle':
      return 'Idle';
    case 'loading':
      return 'Loading';
    case 'success':
      return 'Loaded ' + state.count;
    case 'error':
      return state.message;
    default: {
      const impossible: never = state;
      return impossible;
    }
  }
}

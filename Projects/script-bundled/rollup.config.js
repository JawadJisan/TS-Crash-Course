import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: false,
    name: 'TaskManagerApp'
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: false
    })
  ]
};

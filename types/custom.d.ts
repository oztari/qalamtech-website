// types/custom.d.ts

// Allow importing JSON files
declare module '*.json' {
  const value: any;
  export default value;
}

// Allow importing lottie-react without type errors
declare module 'lottie-react';

// // ErrorHandle.js
// import React from 'react';
// import { useErrorBoundary } from 'react-error-boundary';

// const ErrorHandle = ({ FallbackComponent, children }) => {
//   const { ErrorBoundary } = useErrorBoundary();

//   return (
//     <ErrorBoundary FallbackComponent={FallbackComponent}>
//       {children}
//     </ErrorBoundary>
//   );
// };

// const ErrorFallback = ({ error }) => {
//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <p>Error: {error.message}</p>
//     </div>
//   );
// };

// export { ErrorHandle, ErrorFallback };

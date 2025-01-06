# Next.js 15 - Unexpected 'undefined' in child component props

This repository demonstrates a common issue in Next.js 15 applications where an object passed as props to a child component unexpectedly resolves as 'undefined' within the child component.  The issue seems to arise from how props are handled in the component's scope, and this repo provides a clear example and solution.  The error is reproducible in the browser's console.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open your browser and navigate to `http://localhost:3000`.
6. Inspect the browser's console; you will see that 'props' inside `MyComponent` logs as 'undefined'.

## Solution

The solution involves correctly destructuring the props in the child component. A detailed solution is provided in the `bugSolution.js` file. 
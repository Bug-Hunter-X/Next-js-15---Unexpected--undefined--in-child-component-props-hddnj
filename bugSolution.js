```javascript
// components/MyComponent.js
function MyComponent({ props }) {
  // Incorrect:  console.log(props); // Logs undefined
  const { someValue } = props; // Correct: Destructure props
  console.log(someValue); // Logs 'hello'
  return <p>This is a child component: {someValue}</p>;
}
```
```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This is where the error happens */}
      <MyComponent props={{ someValue: 'hello' }}/>
    </div>
  );
}

// components/MyComponent.js
function MyComponent({ props }) {
  console.log(props); // This will log undefined in the browser console
  return <p>This is a child component</p>;
}
```
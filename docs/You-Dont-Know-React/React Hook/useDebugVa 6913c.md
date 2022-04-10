# useDebugValue

自定义hook命名

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  // ...
  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
}
```

格式化显示hook命名

```jsx
useDebugValue(date, date => date.toDateString()
```
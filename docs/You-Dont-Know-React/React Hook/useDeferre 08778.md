# useDeferredValue

```jsx
const [deferredValue] = useDeferredValue(value);
```

频繁更新组件进行节流

### 缓存节流子组件

- useDeferredValue只会节流你传给它的值
- 使用React.memo或者React.useMemo阻止子组件频繁更新

```jsx
function Typeahead() {
  const query = useSearchQuery('');
  const deferredQuery = useDeferredValue(query);

  // Memoizing tells React to only re-render when deferredQuery changes,
  // not when query changes.
  const suggestions = useMemo(() =>
    <SearchSuggestions query={deferredQuery} />,
    [deferredQuery]
  );

  return (
    <>
      <SearchInput query={query} />
      <Suspense fallback="Loading results...">
        {suggestions}
      </Suspense>
    </>
  );
}
```
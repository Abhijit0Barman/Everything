#### Rules of hooks:-

✅ Hooks can be called at top level only 
✅ Don't call hooks from regular javascript functions.
✅ Hooks can be called from a react function/component only
✅ You can call a hook from a custom hook
✅ Name of a hook will always start with `use` keyword (usebounds, useTimeout)

#### When do we need to create a custom hook:-

✅ When you want to reuse the same logic in multiple components
✅ If the logic is using any hook
✅ When you want to share the same state between multiple components

#### How will I approach to create a custom hook?:-

✅ If your logic needs a hook then normal function won't work You need to create a custom hoopk
✅ Write a function starting with `use` keyword
✅ Figure out what to `return` from the hook
✅ Write a function that returns a hook
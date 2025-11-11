
![CI](https://github.com/msynk/use-global-state/actions/workflows/ci.yml/badge.svg)

# use-global-state

A lightweight, dependency-free global state manager for React, using named slices.


## How to use

```ts
function CompA() {
    const [globalState, setGlobalState, signalGlobal] = useGlobalState('my-global-state-name'); // shared global state
    const signalGlobalState = useGlobalSignal('my-global-state-name'); // global state signal
}


function CompB() {
    const [globalState] = useGlobalState('my-global-state-name'); // shared global state
}
```

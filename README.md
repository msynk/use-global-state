# use-global-state

A lightweight, dependency-free global state manager for React, using named slices.

![CI](https://github.com/msynk/use-global-state/actions/workflows/ci.yml/badge.svg)


## How to use

```bash
function CompA() {
    const [globalState, setGlobalState] = useGlobalState('my-global-state-name'); // shared global state
}


function CompB() {
    const [globalState, setGlobalState] = useGlobalState('my-global-state-name'); // shared global state
}
```

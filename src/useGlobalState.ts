import { useState, useEffect, Dispatch, SetStateAction } from "react";

type StateStore<T> = {
    value: T;
    stateSetters: Set<Dispatch<SetStateAction<T>>>;
};

const globalStore = new Map<string, StateStore<any>>();

export function useGlobalState<T>(
    key: string,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
    if (!globalStore.has(key)) {
        globalStore.set(key, { value: initialValue, stateSetters: new Set() });
    }

    const store = globalStore.get(key)!;
    const [state, setState] = useState<T>(store.value);

    useEffect(() => {
        store.stateSetters.add(setState);
        return () => { store.stateSetters.delete(setState); };
    }, [key]);

    const setGlobalState: Dispatch<SetStateAction<T>> = (value: unknown) => {
        const nextValue = typeof value === "function" ? (value as any)(store.value) : value;
        store.value = nextValue;
        for (const setter of store.stateSetters) setter(nextValue);
    };

    return [state, setGlobalState];
}

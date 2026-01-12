import { storage } from '@/utils/mmkv';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

function getItem<T>(key: string): T | null {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
}

function setItem<T>(key: string, value: T): void {
    storage.set(key, JSON.stringify(value));
}

function removeItem(key: string): void {
    storage.remove(key);
}

function clearAll(): void {
    storage.clearAll();
}

const atomWithMMKV = <T>(key: string, initialValue: T) =>
    atomWithStorage<T>(
        key,
        initialValue,
        createJSONStorage<T>(() => ({
            getItem,
            setItem,
            removeItem,
            clearAll,
        }))
    );

export const appStateAtom = atomWithMMKV<string>('app_state', '');
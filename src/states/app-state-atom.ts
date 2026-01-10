import {
    AUTH_TOKEN,
    DAHBOARD_DATA,
    SESSION_DATA
} from '../constants/mmkv-data-keys';

import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { ComponentType } from 'react';
import { DahsboardDataType, SessionDataType } from '../types/data-types';
import { storage } from '../utils/mmkv';

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

export const bottomSheetConfigAtom = atom<{
    content: ComponentType<Record<string, never>> | null;
    height?: number;
    visible: boolean;
    enablePanDownToClose?: boolean;
    enableClose?: boolean;
    enableDynamicSizing?: boolean;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
} | null>(null);

export const authTokenAtom = atomWithMMKV<string>(AUTH_TOKEN, '');
export const dashboardDataAtom = atomWithMMKV<DahsboardDataType | null>(DAHBOARD_DATA, null);
export const sessionDataAtom = atomWithMMKV<SessionDataType | null>(SESSION_DATA, null);
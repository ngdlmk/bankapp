import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV({
    id: `user-storage`,
    mode: 'multi-process',
    readOnly: false
})
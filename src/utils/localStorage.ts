import AsyncStorage from '@react-native-async-storage/async-storage';

export type Key = '@theme' | '@token' | '@userData';

export const setToLocal = async (
  key: Key,
  value: string | Object,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(`❌ ERR [(setToLocal${key})] =====> `, e);
  }
};

export const getFromLocal = async (
  key: Key,
): Promise<Object | string | null | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.log(`❌ ERR [getFromLocal(${key})] =====> `, e);
  }
};

export const removeFromLocal = async (key: Key): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(`❌ ERR [removeFromLocal(${key})] =====> `, e);
  }
};

export const removeAllFromLocal = async (): Promise<void> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const promise = keys.map(async key => await AsyncStorage.removeItem(key));
    await Promise.all(promise);
  } catch (e) {
    console.log('❌ ERR [removeAllFromLocal] =====> ', e);
  }
};

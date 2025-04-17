import Lodash from 'lodash';

export const apiErrors = (
  endpoint: string,
  errorCallback: (errMsg: {}) => void,
  errMsg: any,
) => {
  console.log(`❌ ERR ${[endpoint]} ====> `, errMsg);
  if (errMsg.message) {
    errorCallback(errMsg);
  }
};

export const apiResponses = (endpoint: string, resp: any) => {
  console.log(`✅ Response ${[endpoint]}`, resp);
};

export const getTime = (dateTime: string) => {
  return new Date(dateTime).toLocaleTimeString('en', {
    minute: '2-digit',
    hour: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  });
};

export const truncateText = (text: string, charLength: number = 50) => {
  if (text.length > charLength) {
    return `${text.slice(0, charLength - 3)}...`;
  }
  return text;
};

export const nFormatter = (num: number | string) => {
  num = Number(num);
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};

export const getCurrentTime = () => {
  return new Date().toLocaleString('en-US', {hour: '2-digit', hour12: true});
};

export const getCurrentDate = () => {
  return new Date().toDateString();
};

export const randomColorHex = () => {
  const randomNumber = Math.floor(Math.random() * 16777216);
  const hexValue = randomNumber.toString(16).padStart(6, '0');
  return `#${hexValue}`;
};

export const updateFormValues = (
  type: 'price' | 'quantity',
  text: string | undefined,
) => {
  const value = type === 'price' ? 0 : 1;

  if (!text) return value;

  if (Number.isNaN(Number(text))) {
    return value;
  }

  return Number(text);
};

export const getReadableDate = (isoDateString: string) => {
  if (isoDateString === '' || isoDateString === 'N/A') return 'N/A';
  return new Date(isoDateString).toDateString();
};

export const getExpireDateInDays = (oldDateIosString: string) => {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const diff = new Date(oldDateIosString).getTime() - new Date().getTime();
  if (diff > 0) return Math.round(diff / millisecondsPerDay);
  return 0;
};

export function findUpdatedKeyValues(
  oldObject: IDynamicObject,
  newObject: IDynamicObject,
) {
  const updatedKeyValues: IDynamicObject = {};

  Lodash.forEach(newObject, (newValue, key) => {
    if (!Lodash.isEqual(oldObject[key], newValue)) {
      updatedKeyValues[key] = newValue;
    }
  });

  if (!Object.keys(updatedKeyValues).length) return null;
  return updatedKeyValues;
}

export const trimObjectValues = (payload: IDynamicObject): IDynamicObject => {
  const obj: IDynamicObject = {};

  const keys = Object.keys(payload);

  if (!keys.length) return payload;

  keys.forEach(key => {
    if (typeof payload[key] === 'string') obj[key] = payload[key].trim();
    else obj[key] = payload[key];
  });

  return obj;
};

export const formattedZero = (value: number) => {
  if (value < 10) return `0${value}`;
  return value;
};

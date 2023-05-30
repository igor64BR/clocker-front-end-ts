class BaseStorageManager<T> {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  get = (): T | undefined => {
    try {
      const stringValue = localStorage.getItem(this.key);

      if (!stringValue) return undefined;

      const parsedValue = JSON.parse(stringValue) as T;

      return parsedValue;
    } catch (error: any) {
      console.log(error);
      return undefined;
    }
  };

  set = (value: T) => localStorage.setItem(this.key, JSON.stringify(value));
  clear = (): void => localStorage.removeItem(this.key);
}

class TokenStorageManager extends BaseStorageManager<string> {
  get = (): string | undefined => {
    try {
      const stringValue = localStorage.getItem(this.key);

      if (!stringValue) return undefined;

      const parts = stringValue.split('.');
      if (parts.length !== 3) {
        console.error('Invalid JWT string');
        return undefined;
      }

      const [, payloadBase64] = parts;
      const payloadString = atob(payloadBase64);
      const parsedValue = JSON.parse(payloadString) as string;

      return parsedValue;
    } catch (error: any) {
      return undefined;
    }
  };
}

export const Storager = {
  token: new TokenStorageManager('token'),
  rememberUser: new BaseStorageManager<boolean>('rememberUser'),
  user: new BaseStorageManager<{ email: string }>('user'),
};

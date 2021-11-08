export function storage() {
  const prefix = '@dash';

  function setStorage(key: string, value: string | object) {
    localStorage.setItem(
      `${prefix}:${key}`,
      typeof value === 'object' ? JSON.stringify(value) : value,
    );
  }

  function getStorage<T = string | null>(
    key: string,
    isParsed: boolean = false,
  ): T {
    const response = localStorage.getItem(`${prefix}:${key}`);

    if (isParsed && response) {
      return JSON.parse(response);
    }

    return response as unknown as T;
  }

  function removeKeyStorage(key: string) {
    localStorage.removeItem(`${prefix}:${key}`);
  }

  return {
    setStorage,
    getStorage,
    removeKeyStorage,
  };
}

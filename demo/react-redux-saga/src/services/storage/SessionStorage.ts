export default (() => {
  const setItem = (key: string, data: string): void => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, data);
    }
  };

  const getItem = (key: string): string | null => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(key);
    }

    return null;
  };

  const removeItem = (key: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(key);
    }
  };

  const removeAll = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.clear();
    }
  };

  return { setItem, getItem, removeItem, removeAll };
})();

import { parse } from 'cookie';

export default (() => {
  const getUserId = (): number | null => {
    const { userId } = parse(document.cookie || '');

    return userId ? +userId : null;
  };

  return {
    getUserId,
  };
})();

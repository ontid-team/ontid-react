export default (() => {
  const setInvited = (invitedId: string): void => {
    localStorage.setItem('invitedId', invitedId);
  };

  const getInvited = (): string | null => {
    return localStorage.getItem('invitedId');
  };

  const clearInvited = (): void => {
    localStorage.removeItem('invitedId');
  };

  return {
    setInvited,
    getInvited,
    clearInvited,
  };
})();

export default (() => {
  let service: undefined;

  const getService = () => {
    if (!service) {
      service = this;
      return service;
    }
    return service;
  };

  const setToken = (body: Token): void => {
    localStorage.setItem('accessToken', body.accessToken);
  };

  const setInvited = (invitedId: string): void => {
    localStorage.setItem('invitedId', invitedId);
  };

  const getAccessToken = (): string | null => {
    return localStorage.getItem('accessToken');
  };

  const getInvited = (): string | null => {
    return localStorage.getItem('invitedId');
  };

  const clearToken = (): void => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  const clearInvited = (): void => {
    localStorage.removeItem('invitedId');
  };

  return {
    getService,
    setToken,
    setInvited,
    getAccessToken,
    getInvited,
    clearToken,
    clearInvited,
  };
})();

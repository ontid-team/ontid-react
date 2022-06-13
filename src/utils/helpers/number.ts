export default (() => {
  const hourToMinute = (hour: number): number => {
    return Math.round(hour * 60);
  };

  const msToMin = (ms: number): number => {
    return Math.floor(ms / 60000);
  };

  return {
    hourToMinute,
    msToMin,
  };
})();

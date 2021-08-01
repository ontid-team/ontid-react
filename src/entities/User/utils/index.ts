export const trimEllipsis = (text: string, length = 100): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

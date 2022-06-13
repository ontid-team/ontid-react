/* eslint-disable import/no-duplicates */
import {
  format as fnsTzFormat,
  getTimezoneOffset,
  formatInTimeZone,
} from 'date-fns-tz';
import fnsAddHours from 'date-fns/addHours';
import fnsAddMinutes from 'date-fns/addMinutes';
import fnsAddYears from 'date-fns/addYears';
import endOfDay from 'date-fns/endOfDay';
import fnsEndOfHour from 'date-fns/endOfHour';
import endOfISOWeek from 'date-fns/endOfISOWeek';
import fnsIsSame from 'date-fns/isSameDay';
import fnsParse from 'date-fns/parse';
import fnsParseISO from 'date-fns/parseISO';
import startOfDay from 'date-fns/startOfDay';
import fnsStartOfHour from 'date-fns/startOfHour';
import startOfISOWeek from 'date-fns/startOfISOWeek';

export default (() => {
  const isSameDay = (
    dateLeft?: Date | number,
    dateRight?: Date | number,
  ): boolean => {
    if (dateLeft && dateRight) {
      return fnsIsSame(dateLeft, dateRight);
    }

    return false;
  };

  const parse = (date: DateCtx, formatString = 'yyyy-MM-dd') => {
    return typeof date === 'string'
      ? fnsParse(date, formatString, new Date())
      : date;
  };

  const parseISO = (date: DateCtx) => {
    return typeof date === 'string' ? fnsParseISO(date) : date;
  };

  const toFormat = (date?: DateCtx, fmt = 'dd/MM', tz?: string) => {
    return fnsTzFormat(parseISO(date ? new Date(date) : new Date()), fmt, {
      ...(tz && {
        timeZone: tz,
      }),
    });
  };

  const toFormatTimezone = (date: DateCtx, fmt: string, tz: string) => {
    return formatInTimeZone(date, tz, fmt);
  };

  const addMinutes = (date: DateCtx, amount: number) =>
    fnsAddMinutes(parseISO(date), amount);
  const addHours = (date: DateCtx, amount: number) =>
    fnsAddHours(parseISO(date), amount);
  const addYears = (date: DateCtx, amount: number) =>
    fnsAddYears(parseISO(date), amount);
  const startOfHour = (date: DateCtx) => fnsStartOfHour(parseISO(date));
  const endOfHour = (date: DateCtx) => fnsEndOfHour(parseISO(date));

  const startOfWeek = (date: DateCtx) => {
    return startOfISOWeek(
      typeof date !== 'string' ? date : new Date(date),
    ).toISOString();
  };

  const endOfWeek = (date: DateCtx) => {
    return endOfISOWeek(
      typeof date !== 'string' ? date : new Date(date),
    ).toISOString();
  };

  return {
    isSameDay,
    parse,
    toFormat,
    addHours,
    addMinutes,
    startOfWeek,
    endOfWeek,
    startOfHour,
    endOfHour,
    toFormatTimezone,
    addYears,
    getTimezoneOffset,
    startOfDay,
    endOfDay,
  };
})();

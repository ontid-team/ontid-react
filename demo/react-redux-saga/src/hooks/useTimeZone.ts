import { useCallback, useEffect, useState } from 'react';

import { DateHelper, NumberHelper, StringHelper } from '@utils/helpers';

const useTimeZone = () => {
  const [name, setName] = useState('');
  const [tz, setTz] = useState('');
  const [offsetMinute, setOffsetMinute] = useState(0);

  useEffect(() => {
    const utc = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const browserOffset = new Date().getTimezoneOffset();

    setTz(utc);
    setOffsetMinute(
      -(
        browserOffset + NumberHelper.msToMin(DateHelper.getTimezoneOffset(utc))
      ),
    );
    setName(
      `(${DateHelper.toFormatTimezone(
        new Date(),
        'OOOO',
        utc,
      )}) ${StringHelper.replaceSymbol(utc, '_', ' ')}`,
    );
  }, []);

  const dateToFormat = useCallback(
    (date: DateCtx, fmt: string) => DateHelper.toFormatTimezone(date, fmt, tz),
    [tz],
  );

  const startOfDay = useCallback(
    (date: Date) =>
      DateHelper.addMinutes(DateHelper.startOfDay(date), offsetMinute),
    [offsetMinute],
  );

  const endOfDay = useCallback(
    (date: Date) =>
      DateHelper.addMinutes(DateHelper.endOfDay(date), offsetMinute),
    [offsetMinute],
  );

  return {
    dateToFormat,
    startOfDay,
    endOfDay,
    tz,
    name,
    offsetMinute,
  };
};

export default useTimeZone;

import { useEffect, useCallback } from 'react';

import cn from 'classnames';
import { useSelector } from 'react-redux';

import { alertClear } from '@store/Alert';
import { RootState, useAppDispatch } from '@store/index';

import style from './style.module.scss';

const WidgetAlert = () => {
  const dispatch = useAppDispatch();
  const { message, type } = useSelector((state: RootState) => state.alert);

  const handlerClose = useCallback(() => {
    dispatch(alertClear());
  }, [dispatch]);

  useEffect(() => {
    if (type) {
      setTimeout(() => handlerClose(), 6000);
    }
  }, [type, handlerClose]);

  return type ? (
    <div
      className={cn(
        style.container,
        type === 'error' ? style.warning : style.info,
      )}
    >
      <strong>{message}</strong>
      <div className={style.alert_close} onClick={handlerClose}></div>
    </div>
  ) : null;
};

export default WidgetAlert;

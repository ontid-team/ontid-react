import { Props } from './index.type';

const UICheckBox = (props: Props) => {
  const {
    id,
    name,
    value,
    checked,
    readOnly = true,
    className,
    onChange,
    label,
  } = props;

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      <input
        name={name}
        readOnly={readOnly}
        checked={checked}
        value={value}
        id={id}
        type="checkbox"
        onChange={handlerChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default UICheckBox;

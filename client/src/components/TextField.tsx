import { ComponentPropsWithoutRef } from 'react';
import cx from 'classnames';

type TextFieldProps = ComponentPropsWithoutRef<'input'>;

const TextField = ({ className, type = 'text', ...props }: TextFieldProps) => {
  return (
    <input
      {...props}
      className={cx(
        className,
        'h-10 rounded bg-[#333] px-4 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50'
      )}
      type={type}
    />
  );
};

export default TextField;

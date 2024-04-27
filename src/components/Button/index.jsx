import PropTypes from "prop-types";
import { twMerge } from 'tailwind-merge';

export function Button({ children, dark, disabled, buttonClass }) {
  return (
    <button className={twMerge(
      "font-bold mt-8 rounded-2xl py-4 px-5 flex",
      dark ? 'bg-component-light text-dark-text' : 'bg-component-dark text-dark-green',
      disabled ? "hidden" : null,
      buttonClass
    )}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonClass: PropTypes.string,
};

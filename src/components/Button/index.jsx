import PropTypes from "prop-types";
import { twMerge } from 'tailwind-merge';

export function Button({ children, dark, disabled, buttonClass }) {
  return (
    <button className={twMerge(
      "font-bold mt-8 rounded-2xl py-4 px-5 flex md:py-2 md:px-3 md:text-lg",
      dark ? 'bg-component-light text-dark-text hover:bg-component-dark hover:text-component-light transform hover:scale-110 transition' : 'bg-component-dark text-component-light hover:bg-component-light hover:text-dark-text transform hover:scale-110 transition',
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

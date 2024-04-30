import PropTypes from "prop-types";
import { twMerge } from 'tailwind-merge';

export function Button({ children, dark, disabled, buttonClass }) {
  return (
    <button
      style={{
        fontSize: 'clamp(14px, 1.3vw, 1.5rem)'
      }}
      className={twMerge(
        "font-bold mt-8 rounded-2xl py-4 px-5 transform hover:scale-110 transition",
        dark ? 'bg-component-dark text-light-text hover:bg-component-light hover:text-component-dark' : 'bg-component-light text-component-dark hover:bg-component-dark hover:text-light-text',
        disabled ? "hidden" : null,
        buttonClass
      )}
    >
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

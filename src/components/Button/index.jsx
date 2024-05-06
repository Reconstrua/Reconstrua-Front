import PropTypes from "prop-types";
import { twMerge } from 'tailwind-merge';
import { Link } from "react-router-dom"

export function Button({ children, dark, disabled, onClick, buttonClass, link, buttonType }) {
  return (
    <Link to={link}>
    <button
    onClick={onClick}
    type={buttonType}
      style={{
        fontSize: 'clamp(14px, 1.3vw, 1.5rem)'
      }}
      className={twMerge(
        "font-bold mt-8 flex justify-center items-center rounded-2xl py-4 px-5 transform hover:scale-105 hover:-translate-y-1 transition ",
        dark ? 'bg-component-dark text-light-text hover:bg-component-light hover:text-component-dark' : 'bg-component-light text-component-dark hover:bg-component-dark hover:text-light-text',
        disabled ? "hidden" : null,
        buttonClass
      )}
    >
      {children}
    </button>
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonClass: PropTypes.string,
  link: PropTypes.string,
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
};

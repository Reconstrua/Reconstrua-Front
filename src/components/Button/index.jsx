import PropTypes from "prop-types"
import { twMerge } from 'tailwind-merge'

export function Button({ children, dark, ...props }) {
  return (
    <button {...props} className={twMerge(
      "font-semibold mt-8 rounded-2xl py-4 px-5 flex text-buttonClamp",
      dark ? 'bg-component-light text-light-green' : 'bg-component-dark text-dark-green'
    )}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string
}
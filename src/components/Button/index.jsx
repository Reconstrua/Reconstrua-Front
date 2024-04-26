import PropTypes from "prop-types"

export function Button({children, ...props}){
  return(
    <button {...props}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}
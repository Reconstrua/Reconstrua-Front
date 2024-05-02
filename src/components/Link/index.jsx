import PropTypes from "prop-types"

export function Link({path, children, ...props}){
  return(
    <a {...props} className="hover:text-component-light active:text-component-light z-50" href={path}>{children}</a>
  )
}

Link.propTypes = {
  path: PropTypes.string,
children:PropTypes.string
}
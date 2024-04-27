import PropTypes from "prop-types"

export function Link({path, children}){
  return(
    <a className="" href={path}>{children}</a>
  )
}

Link.propTypes = {
  path: PropTypes.string,
children:PropTypes.string
}
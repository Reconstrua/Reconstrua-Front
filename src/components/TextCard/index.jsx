import PropTypes from "prop-types"
import {Button} from "../Button"

export function TextCard({title, subtitle, titleClass, subtitleClass, buttonText, buttonClass, buttonLink, dark, disabled, ...props}){

  return(
    <div {...props}>
      <h1 className={titleClass} >{title}</h1>
      <h4 className={subtitleClass}>{subtitle}</h4>
      <Button link={buttonLink} disabled={disabled} dark={dark} buttonClass={buttonClass}>{buttonText}</Button>
    </div>
  )
}


TextCard.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonLink: PropTypes.string,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
}
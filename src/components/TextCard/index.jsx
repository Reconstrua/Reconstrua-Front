import PropTypes from "prop-types"
import {Button} from "../Button"

export function TextCard({title, subtitle, titleClass, subtitleClass, buttonText, buttonClass, dark, disabled, ...props}){

  return(
    <div {...props}>
      <h1 className={titleClass} >{title}</h1>
      <h4 className={subtitleClass}>{subtitle}</h4>
      <Button disabled={disabled} dark={dark} buttonClass={buttonClass} >{buttonText}</Button>
    </div>
  )
}


TextCard.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  dark: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
}
import PropTypes from "prop-types"
import {Button} from "../Button"
import { useEffect, useState } from "react"

export function TextCard({title, subtitle,titleClass , subtitleClass , buttonText, buttonColor, ...props}){
  const [showButton, setShowButton] = useState(false);
  const [buttonTheme, setButtonTheme] = useState()

  const buttonVisibility = () => {
    if (buttonText && !showButton) {
      setShowButton(true);
    }
  };

  useEffect(()=>{
    buttonVisibility()
  }, [])

  return(
    <div {...props}>
      <h1 className={titleClass} >{title}</h1>
      <h4 className={subtitleClass}>{subtitle}</h4>
      <Button dark={false} className={showButton ? '' : "hidden"}>{buttonText}</Button>
    </div>
  )
}

TextCard.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
}
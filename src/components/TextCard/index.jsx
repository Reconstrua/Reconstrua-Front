import PropTypes from "prop-types"
import {Button} from "../Button"

export function TextCard({title, subtitle,titleClass , subtitleClass , ...props}){
  return(
    <div {...props}>
      <h1 className={titleClass} >{title}</h1>
      <h4 className={subtitleClass}>{subtitle}</h4>
      <Button className="font-semibold bg-component-dark text-dark-green mt-8 rounded-2xl py-4 px-5 flex text-buttonClamp">Torne-se um Voluntário </Button>
    </div>
  )
}


TextCard.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
}
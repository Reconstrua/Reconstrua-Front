import PropTypes from "prop-types"

export function ProfileCard({ profileImg, name, position, profileLink, ...props }) {
  return (
    <div className="flex flex-col text-center md:items-center text-nowrap w-[20%] lg:w-[25%] sm:w-[30%] cursor-pointer hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out">
      <a href={profileLink} target="_blank">
        <img {...props} className="w-full h-full " src={profileImg} />
      </a>
      <h1 className="text-profileTitleClamp font-semibold text-component-dark">{name}</h1>
      <h1 className="text-subtitleClamp font-normal text-component-dark">{position}</h1>
    </div>
  )
}

ProfileCard.propTypes = {
  profileImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired
}
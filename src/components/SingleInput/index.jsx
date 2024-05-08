import PropTypes from "prop-types"

export function SingleInput({ text, placeholder, ...props }) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">{text}</label>
            <input {...props} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder={placeholder} required />
        </div>
    )
}

SingleInput.propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
}
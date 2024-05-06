import PropTypes from "prop-types"

export function LargeInput({ text }) {
    return (
        <div className="mb-6">
            <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">{text}</label>
            <input type="text" id="large-input" className="block w-full p-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" />
        </div>
    )
}

LargeInput.propTypes ={
    text: PropTypes.string
}
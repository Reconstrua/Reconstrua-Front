export function DoubleInput({ text1, placeholder1, text2, placeholder2 }) {
    return (
        <div className="flex flex-row w-full gap-8">
            <div className="w-1/2">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">{text1}</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder={placeholder1} required />
            </div>
            <div className="w-1/2">
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-component-light">{text2}</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:bg-light-green dark:border-gray-600 dark:placeholder-light-text dark:text-light-text" placeholder={placeholder2} required />
            </div>
        </div>
    )
}
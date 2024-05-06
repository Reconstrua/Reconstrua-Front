import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export function Table() {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-dark-green bg-light-text rounded-md mt-2">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nome
                    </th>
                    <th scope="col" className="px-6 py-3 flex justify-center">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    a2b29031-2bc6-4942-95d6-1535e85b22f1
                    </th>
                    <td className="px-6 py-4">
                        João
                    </td>
                    <td className="px-6 py-4 flex justify-center gap-8">
                        <a href="#" className="text-2xl "><FaEye /></a>
                        <a href="#" className="text-2xl "><MdEdit /></a>
                        <a href="#" className="text-2xl "><MdDeleteForever /></a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
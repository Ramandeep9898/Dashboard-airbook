import { DASHBOARD_CONFIG } from "./Dashboard.config"

import { useFilterContext } from "./useFilterContext";
import { CSVLink } from "react-csv"
import { TableHead } from "./components/Table/TableHead";
import { TableBody } from "./components/Table/TableBody";



export const Dashboard = () => {
    const { heading, title, subtitle, csvName, fileSize } = DASHBOARD_CONFIG
    const { filteredData, clearAll } = useFilterContext()

    return (
        <div className="overflow-x-scroll">
            <div className="m-16 mt-36">
                <h1 className="font-dmSans font-medium text-2xl mb-4 flex flex-row justify-center items-center w-fit">

                    <div className="bg-primary w-1 h-6  mr-3"></div>
                    {heading}</h1>
                <h2 className="font-dmSans font-medium text-5xl mb-2">{title}</h2>
                <h3 className="font-dmSans font-normal text-2xl text-gray-600 mb-12">{subtitle}</h3>
                <div className="flex justify-between mb-9">
                    <h4 className="font-dmSans font-medium text-3xl ">{csvName} <span className="text-gray-500 ">({fileSize})</span></h4>
                    <div className="">
                        <button className="underline" onClick={clearAll}>Clear all Filters</button>
                        <CSVLink data={filteredData}>
                            <button className="underline ml-3" onClick={() => console.log()}>Download csv</button>
                        </CSVLink>
                    </div>

                </div>
                <div className="border border-[border-grey] w-full h-[500px] overflow-scroll">
                    <TableHead />
                    <TableBody />
                </div>
            </div>
        </div >
    )
}









import { GrTable, GrHomeRounded } from "react-icons/gr";
import { FaRegChartBar } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export const Sidebar = () => {
    return (
        <nav className="border-[grey-border] border-r  h-screen w-fit sticky top-0 z-50">
            <ul className="h-screen flex justify-start mt-28 flex-col items-center gap-6">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-border-grey" : isActive ? "text-primary border-r-2 p-3 px-6 border-red-500" : "text-[#a5a6a7] p-3 px-6"
                    }
                >
                    <GrHomeRounded size={20} />
                </NavLink>
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-border-grey" : isActive ? "text-primary border-r-2 p-3 px-6 border-red-500" : "text-[#a5a6a7] p-3 px-6"
                    }
                >
                    <GrTable size={20} />
                </NavLink>
                <NavLink
                    to="/charts"
                    className={({ isActive, isPending }) =>
                        isPending ? "text-[border-grey]" : isActive ? "text-primary border-r-2 p-3 px-6 border-red-500" : "text-[#a5a6a7] p-3 px-6"
                    }
                >
                    <FaRegChartBar size={20} />
                </NavLink>

            </ul>
        </nav>
    )
}
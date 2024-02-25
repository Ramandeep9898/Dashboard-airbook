import { useFilterContext } from "../useFilterContext";
import { ReactElement } from "react";
import { JSXElementConstructor } from "react";
import { ReactNode } from "react";

export const Chips = ({ id, chips }: any) => {
    const { handleFilter } = useFilterContext()
    return (
        <div className="mt-4 flex gap-2 flex-wrap">
            {
                chips.map((element: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined) => (
                    //@ts-ignore
                    <button className="px-3 py-1 border border-[border-grey] rounded-lg text-sm" value={element} onClick={(e) => handleFilter(id, e.target.value, "filter")}>{element} </button>
                ))
            }
        </div >)
};

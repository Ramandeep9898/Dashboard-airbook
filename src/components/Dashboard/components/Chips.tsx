import { useFilterContext } from "../useFilterContext";

export const Chips = ({ id, chips }: any) => {
    const { handleFilter } = useFilterContext()
    return (
        <div className="mt-4 flex gap-2 flex-wrap">
            {
                chips.map(element => (
                    <button className="px-3 py-1 border border-[border-grey] rounded-lg text-sm" value={element} onClick={(e) => handleFilter(id, e.target.value, "filter")}>{element} </button>
                ))
            }
        </div >)
};

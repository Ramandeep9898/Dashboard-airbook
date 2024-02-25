import { useFilterContext } from "../useFilterContext";

export const SearchBar = ({ id }: any) => {
    const { handleFilter } = useFilterContext()

    return (
        <input type="text" className="border border-[border-grey] px-3 py-1 rounded-md text-sm mt-4" placeholder="search" onChange={(e) => handleFilter(id, e.target.value, "filter")} />
    )
};
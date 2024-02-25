import { SearchBar } from "./SearchBar";
import { Chips } from "./Chips";

export const Filter = ({ filterElement, id, chips }: any) => {

    const returnElement = {
        "search": <SearchBar id={id} />,
        "chips": <Chips id={id} chips={chips} />
    }
    return returnElement[filterElement as keyof typeof Filter]
};
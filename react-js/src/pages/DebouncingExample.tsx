import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const DebouncingExample = () => {
    const [searchedText, setSearchedText] = useState('');
    const debouncedText = useDebounce(searchedText, 1000);

    useEffect(() => {
        if (debouncedText) {
            console.log('api is called with a delay of 3000 second', debouncedText)
        }
    }, [debouncedText]);

    return (<>
        <div>
            <h2>Debouncing example</h2>
            <input type="text" value={searchedText} onChange={(e) => setSearchedText(e.target.value)} />
        </div>
    </>)
};

export default DebouncingExample
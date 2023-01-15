import { useEffect, useState } from "react";

const useDebbounceValue = (value:string, time = 250) => {
    const [debbounceValue, setDebbounceValue] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebbounceValue(value)
        },time);

        return () => {
            clearTimeout(timeout)
        }
    },[value,time])

    return debbounceValue
};

export default useDebbounceValue;
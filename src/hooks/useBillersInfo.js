import { useEffect, useState } from "react";

const useBillersInfo = () => {

    const [billersInfo, setBillersInfo] = useState([]);

    useEffect(() => {
        fetch('https://tragically-keener-49325.herokuapp.com/billing-list')
            .then(res => res.json())
            .then(setBillersInfo);
    }, []);

    return [billersInfo, setBillersInfo]
}

export default useBillersInfo;
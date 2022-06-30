import { useEffect, useState } from "react";

const useBillersInfo = () => {

    const [billersInfo, setBillersInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/billing-list')
            .then(res => res.json())
            .then(data => setBillersInfo(data));
    }, []);

    return [billersInfo, setBillersInfo]
}

export default useBillersInfo;
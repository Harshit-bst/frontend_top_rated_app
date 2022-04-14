import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosInstance from "./axios";
import bluestacksLogo from "./assets/img.png";

export default function AppDetails(){
    const {pkg_name} = useParams();
    const [apiData, setData] = useState([]);
    const [isBusy, setBusy] = useState(true)
    useEffect(() => {
        axiosInstance(`/apps/details?id=${pkg_name}`).then((response) => {
            console.log(response.data.data)
            setData(response.data.data);
            if(isBusy===true)
                setBusy(false);
        }).catch((err) => console.log("Related Posts Error: ", err))
    }, [isBusy]);
    if (isBusy)
        return <div>Loading....</div>
    return (
        <div>
            <div className={"div-bluestacks"}>
                <img src={bluestacksLogo} alt={"Bluestacks Logo"}/>
            </div>
            <div dangerouslySetInnerHTML={{ __html: apiData }}></div>
        </div>
    );
}
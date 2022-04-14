import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosInstance from "../api/axios";
import bluestacksLogo from "../assets/img.png";

export default function AppDetails(){
    const {pkg_name} = useParams();
    const [apiData, setData] = useState([]);
    const [isBusy, setBusy] = useState(true)
    useEffect(() => {
        axiosInstance(`/apps/details?id=${pkg_name}`).then((response) => {
            setData(response.data.data);
            if(isBusy===true)
                setBusy(false);
        }).catch((err) => console.log("Error: ", err))
    }, []);
    if (isBusy)
        return <div>Loading....</div>
    return (
        <div>
            <div className={"div-bluestacks"}>
                <a href={"/"}><img src={bluestacksLogo} alt={"Bluestacks Logo"} className={"bluestacks-logo"}/></a>
            </div>
            <div>{apiData}</div>
        </div>
    );
}
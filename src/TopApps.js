import './TopApps.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import axiosInstance from "./axios";
import bluestacksLogo from "./assets/img.png"
import refresh from "./assets/img_1.png"
function MediaCard({data}) {
    return (
        <Card sx={{ width: 350, display: 'flex', height: 128, justifyContent:"left", alignItems:"center" }}>
            <CardMedia
                component="img"
                height={80}
                sx={{width: 80}}
                image={data.image_url}
                alt="green iguana"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                <CardContent sx={{justifyContent: "space-between"}}>
                    <Typography gutterBottom variant="body1" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.corporation}
                    </Typography>
                </CardContent>
            </Box>
            <Box className={"right-arrow-div"}>
                <i className="right arrow"></i>
            </Box>
        </Card>
    );
}

function CardView({data}) {
    return (
        <div className={"card-view-playstore"}>{
            data.map((dataItem, i) => {return (i<3? <a href={`/appdetails/${dataItem.pkg}`}><MediaCard data={dataItem}/></a> : null);})
        }
        </div>
    );
}

function handleRefresh() {
    axiosInstance('/save-new-apps').then(
        (response) => {
            alert('New Apps synced from playstore, refreshing the page');
        }
    )
}

function TopApps() {
    const [apiData, setCards] = useState([]);
    const [isBusy, setBusy] = useState(true)
    useEffect(() => {
                axiosInstance(`/get-all-apps`).then((response) => {
                    console.log(response.data.data)
                    setCards(response.data.data);
                    if(isBusy===true)
                        setBusy(false);
                })
                .catch((err) => console.log("Related Posts Error: ", err))
    }, [isBusy]);
    if (isBusy)
        return <div>Loading....</div>
    return (
        <div>
            <header className="App-header">
                <div className={"div-bluestacks"}>
                    <img src={bluestacksLogo} alt={"Bluestacks Logo"}/>
                    <span className={"reload"} onClick={() => handleRefresh()}>↻</span>
                </div>
                <h1>Top Charts</h1>
            </header>
            <div className={"apps-div"}>
                <div className={"top-free-apps"}>
                    <h2>Top Free Apps</h2>
                    <CardView data={apiData.top_free_apps}/>
                </div>
                <div className={"top-free-apps"}>
                    <h2>Top Grossing Apps</h2>
                    <CardView data={apiData?.top_grossing_apps}/>
                </div>
                <div className={"top-free-apps"}>
                    <h2>Top Paid Apps</h2>
                    <CardView data={apiData?.top_paid_apps}/>
                </div>
                <div className={"top-free-apps"}>
                    <h2>Top Free Games</h2>
                    <CardView data={apiData?.top_free_games}/>
                </div>
                <div className={"top-free-apps"}>
                    <h2>Top Grossing Games</h2>
                    <CardView data={apiData?.top_grossing_games}/>
                </div>
                <div className={"top-free-apps"}>
                    <h2>Top Paid Games</h2>
                    <CardView data={apiData?.top_paid_games}/>
                </div>
            </div>
        </div>
    );
}
export default TopApps;
import './TopApps.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import axiosInstance from "./axios";

function MediaCard({data}) {
    return (
        <Card sx={{ maxWidth: 345, display: 'flex' }}>
            <CardMedia
                component="img"
                height="80"
                image={data.image_url}
                alt="green iguana"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.corporation}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

function CardView({data}) {
    return (
        <div>{
            data.map((dataItem, i) => {
            return (
                i<3? <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 350,
                            height: 128,
                        },
                    }}>
                    <Paper elevation={2} >
                        <MediaCard data={dataItem}/>
                    </Paper>
                </Box> : null
            );
        })
        }
        </div>
    );
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
                <h1>Top Charts</h1>
            </header>
            <div className={"top-free-apps"}>
                <h2>Top Free Apps</h2>
                <CardView data={apiData.top_free_apps}/>
            </div>
            {/*<div className={"top-free-apps"}>*/}
            {/*    <h2>Top Grossing Apps</h2>*/}
            {/*    <CardView data={apiData?.top_grossing_apps}/>*/}
            {/*</div>*/}
            {/*<div className={"top-free-apps"}>*/}
            {/*    <h2>Top Paid Apps</h2>*/}
            {/*    <CardView data={apiData?.top_paid_apps}/>*/}
            {/*</div>*/}
            {/*<div className={"top-free-apps"}>*/}
            {/*    <h2>Top Free Games</h2>*/}
            {/*    <CardView data={apiData?.top_free_games}/>*/}
            {/*</div>*/}
            {/*<div className={"top-free-apps"}>*/}
            {/*    <h2>Top Grossing Games</h2>*/}
            {/*    <CardView data={apiData?.top_grossing_games}/>*/}
            {/*</div>*/}
            {/*<div className={"top-free-apps"}>*/}
            {/*    <h2>Top Paid Games</h2>*/}
            {/*    <CardView data={apiData?.top_paid_games}/>*/}
            {/*</div>*/}
        </div>
    );
}
export default TopApps;
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function MediaCard({data}) {
    return (
        <Card sx={{width: 350, display: 'flex', height: 128, justifyContent: "left", alignItems: "center"}}>
            <CardMedia
                component="img"
                height={80}
                sx={{width: 80}}
                image={data.image_url}
                alt="green iguana"
            />
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
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
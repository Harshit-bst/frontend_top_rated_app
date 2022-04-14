import "../static/css/ReadMore.css"
import * as PropTypes from "prop-types";
import {useState} from "react";
import {Button} from "@mui/material";

function ReadMore(props) {
    let {children} = props;
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 500) : text}
            <div className={"read-or-hide"}>
                <Button variant={"text"} color={"success"} onClick={toggleReadMore}>
                    {isReadMore ? "read more" : "show less"}
                </Button>
            </div>
        </p>
    );
}

ReadMore.propTypes = {children: PropTypes.any}
export default ReadMore;
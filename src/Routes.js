import TopApps from "./TopApps";
import {Route, Routes} from "react-router-dom";
import AppDetails from "./AppDetails";

export default function AppRoutes(props){
    return (
        <Routes>
            <Route path={'/'} element={<TopApps/>} exact>
            </Route>
            <Route path={`/appdetails/:pkg_name`} element={<AppDetails/>} exact>
            </Route>
        </Routes>
    );
}
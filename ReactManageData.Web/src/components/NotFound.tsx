import { ApiOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return ( 
        < div style={{width : "30%"  , textAlign : "center"}} className="p-2 m-2">
            <h1 className="p-2">
                <ApiOutlined style={{verticalAlign : "inherit"}} className="p-2"/>
                404</h1>
            <h2 className="p-2">
                Page Not Found !
            </h2>
            <Button onClick={() => navigate(-1)} type="primary" className="m-3">Back</Button>
        </ div>
     );
}

export default NotFound;
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import { PhotoProps } from "domain/PhotoProps";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";

function PhotoDetail() {
    const params= useParams();
    const location = useLocation();
    const [photoDetail, setPhotoDetail] = useState<PhotoProps>();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(location.state){
            setPhotoDetail(location.state);
        } 
    } , [params, location]);
    
    return ( 
       <>
            <Card
                    hoverable className="m-2"
                    style={{ width: 240, position: "relative", textAlign: "center"}}
                    title={photoDetail?.title.substring(0, 20)}
                    cover={<Image alt="example" src={photoDetail?.url} />}
                >
                    <Button onClick={() => navigate("/photos")} icon={<CloseOutlined />} style={{position:"absolute", top: 1, right: 1, paddingTop: 0}} danger type="primary"></Button>
                    <Meta title={photoDetail?.title} description={photoDetail?.id} />
            </Card>
            {/* <Button onClick={() => navigate(-1)} className="m-2 "><ArrowLeftOutlined />Back</Button> */}
            
        </>
     );
}

export default PhotoDetail;
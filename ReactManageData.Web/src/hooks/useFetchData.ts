import axios from "axios";
import { useEffect, useState } from "react";
import { publicApi } from "utils/publicApi";

const useFetchData = <T>(endPoint : string) => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState<T[]>();
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        (async() => {
            try {
                setLoading(true);
                const url = publicApi({endPoint , currentPage , pageSize});
                const resp = await axios.get<T[]>(url);
                setTotalCount(+resp.headers["x-total-count"]!);
                setPosts(resp.data);
                setLoading(false);
            } catch (error) {
                console.log("oops ! " , error);
            }
        })()
    }, [currentPage , pageSize , endPoint]);
   
    return ( 
        {currentPage , totalCount , setPageSize , setCurrentPage , posts , loading }
     );
}
 
export default useFetchData;
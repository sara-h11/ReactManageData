interface PublicDataProps {
    endPoint : string,
    currentPage : number,
    pageSize :  number
}
export const publicApi = ({endPoint , currentPage , pageSize} : PublicDataProps ) =>{
    const url = `https://jsonplaceholder.typicode.com/${endPoint}?_page=${currentPage}&_limit=${pageSize}`;
    return url;
}
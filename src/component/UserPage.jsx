import { useParams } from 'react-router-dom'

// Router 方法 - useParams 獲取 router URL 參數


const UserPage = () =>{

    //  URL 接收參數值
    const {id,name} = useParams()
    return(

        <>
            <h2>目前使用者 ID 為 {id}</h2>
            <h2>目前使用者名稱為 {name}</h2>
        </>

    )
}

export default UserPage
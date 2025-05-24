import { useEffect, useState } from "react";
import axios from "axios"
import '../assets/CSS/Api.css'

const Api = () => {

 const [userList,newUserList] = useState([])

 const getUserData = () =>{


    // fetch 寫法
        
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if (!response.ok) {
                throw new Error(`HTTP 錯誤：${response.status}`)
            }
            return response.json()
        })
        .then((data)=>{

        //    console.log(handleData(data));
           newUserList(handleData(data));
           
            
        })

        // fetch 404 錯誤狀態碼不會判定為 error ，所以這邊其實不會 log
        .catch((error)=>{
            console.error(error);
        })
        
    
    
    // axios 寫法

        /*
        axios.get('https://jsonplaceholder.typicode.com/user')
             .then((response)=>{
                console.log(response);
             })
             .catch((error)=>{
                console.log(error);
                
             })
        */

    // 常見的 回應狀態碼

    /*
    1XX ： 代表表示請求已送出，伺服器正在處理中 ※通常由瀏覽器自動處理，前端開發者不需特別處理
    2XX ： 代表請求成功，伺服器也回應相對應的訊息 
    3XX ： 代表請求位址需要重新定位，可能舊位址已移轉到新位址 ※通常也會自動被瀏覽器處理，前端開發者不需特別處理
    4XX ： 代表客戶端請求失敗 (請求格式有誤、未授權、沒有權限、找不到資源等問題)
    5XX ： 代表伺服器端錯誤 (通常是後端程式發生錯誤、崩潰、或資源不足)
    */
     
  

    // handle Respond
    // 整理篩選資料

    const handleData = (data) => {
        console.log(data);    
        return(
            data.map((user)=>{
                return (
                    {
                        'name':user.name,
                        'username':user.username,
                        'phone':user.phone,
                        'email':user.email,
                    }
                )
            })
        )
    }




    


 }

 useEffect(getUserData,[])

 return(
    <>
        <h1> This is API Testing</h1>
        <h1> 回顧 fetch / axios API 用法，與 useEffect </h1>
        

        <table className="userDataTable" border={1}>

        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Phone</th>
                <th>E-mail</th>
            </tr>

        </thead>
        <tbody>
            {
                userList.map((item)=>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                        </tr>

                    )
                })


            }
                

        </tbody>

        </table>
        
    </>
 )
}

export default Api


// React 的生命週期 useEffect 
// useEffect (()=>{},[])
// 若後方為空陣列，代表組件掛載時會執行一次 (等於 VUE onMounted)
// 若後方為陣列裡放偵測的資料，組件掛載時會執行一次，資料變動時會再次執行  
// (類似 VUE watch，但 watch 預設組件掛載時不會執行一次)
// ex:  useEffect(() => {function}, [value1,value2])，只要其中一筆資料變動就會執行

// useEffect(()=>{
//   console.log(taskList);

// },[taskList])


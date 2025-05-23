import { useEffect } from "react";
import axios from "axios"

const Api = () => {

 const getUserData = () =>{

    // fetch 寫法
    /*
        fetch("https://jsonplaceholder.typicode.com/user")
        .then((response)=>{
            if (!response.ok) {
                throw new Error(`HTTP 錯誤：${response.status}`)
            }
            return response.json()
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.error(error);
        })
    */


        
 }

 useEffect(getUserData,[])

 return(
    <>
        <h1> This is API Testing</h1>
        
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



import { useState } from "react";
import { useNavigate } from "react-router-dom"



const LoginPage = () =>{

    // 輸入帳號值
    const [AccountVal,newAccountVal] = useState('')
    
    
    // 輸入密碼值
    const [PasswordVal,newPasswordVal] = useState('')

    // 引入 router push 方法
    const navigate = useNavigate()

    const UpDateAccountVal = (e) =>{
        newAccountVal(e.target.value)
    }
        const UpDatePasswordVal = (e) =>{
        newPasswordVal(e.target.value)
    }

    const handleSubmit = (e) =>{
         e.preventDefault()
        if (!AccountVal || !PasswordVal) {
            alert('請輸入帳號及密碼')
        }else if( AccountVal == 'AAA' && PasswordVal == 'BBB' ){
            alert('登入成功!')
            navigate('/')

        }else{
            console.log(AccountVal,PasswordVal);
            alert('帳號密碼輸入錯誤')
        }
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>登入頁面</h1>        

                <h2>登入帳號：</h2>
                <input type="text" placeholder="輸入帳號"  onChange={UpDateAccountVal}/>
                <h2>登入密碼：</h2>
                <input type="password" placeholder="輸入密碼"  onChange={UpDatePasswordVal}/>
                <br/>
                <br/>
                <button type="submit">登入</button>
            </form>
        </>

    )

}

export default LoginPage
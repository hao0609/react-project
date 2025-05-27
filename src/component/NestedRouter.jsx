


const NestedRouter = ()=>{
    return(
        <>
            
            <Route path="/">
            <Route path="ToDoList" element={<ToDoList/>} />
            <Route path="Api" element={<Api/>} />
            {/* :id :name 為添加 URL 參數 */}
            <Route path="UserPage/:id/:name" element={<UserPage/>}/>
            <Route path='*' element={<NoMatch />} />  對應無路由 fallback
            </Route> 
        
        </>

    )
}
export default NestedRouter
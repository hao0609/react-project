import '../assets/CSS/tasklist.css'

// props 接收全部父組件提供的資料
// 可用 props.項目 取得獨立項目

const TaskList = (props) => {

  return(

        <ol className="taskList">
          {
            //  利用 map 回傳新的 <li> 陣列
            //  透過 onclick 點擊呼叫父組件的 delete_task方法，且帶index值參數過去 
             props.taskList.map((item,index)=><li className="task" key={index} onClick={()=>props.delete_task(index)}>{item}</li>)
          }
        </ol> 
  )
  
}



export default TaskList


import '../assets/CSS/tasklist.css'

const TaskList = (props) => {

  // const deleteTask = (index)=>{
  // console.log(index);
    
  // props.taskList.filter((item)=>{item.index !== index})
  
  // }

  return(

        <ol className="taskList">
          {
             props.taskList.map((item,index)=><li className="task" key={index} onClick={()=>props.delete_task(index)}>{item}</li>)
          }
        </ol> 
  )
  
}



export default TaskList


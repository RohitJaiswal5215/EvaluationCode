const TaskManager = (function (){
    let tasks = []
    let id1 = 1
    
    return {
    addTask : function(title){
    let addTask = {id : id1++ , title , completed : false}
    tasks.push(addTask)
    console.log(title)
    },
    
    getAllTask : function(){
    return JSON.stringify(tasks)
    },
    
    markComplete : function(taskId){
    let task = tasks.find(task => task.id == taskId)
    if(tasks){
    console.log(taskId , "completed")
    }
    else{
    console.log("Not Completed")
    }
    },
    
    removeTask : function(taskId){
      let index = tasks.findIndex(task => task.id == taskId)
    if(tasks.splice(index ,1 ){
    console.log(taskId , "removed")
    }
    else{
    console.log("Not removed")
        }
    },
    
    getPendingTasks : function(){
    let tasks 
    .filter((taskId,status) => status == "pending"
      console.log("not completed")
    },
    
    getCompletedTasks : function(){
    let tasks 
    .filter((taskId,status) => status == "completed"
      console.log("task is completed")
    },
    
        sortTasks : function(title){
            title.sort(tasks)
          }
        }
        
      }
    })()
    
    TaskManager .addTask("doing english")
    TaskManager .removeTask(3)
    TaskManager .markCompleted(1)
    TaskManager.getAllTasks ()
    TaskManager.getpendingTasks ()
    TaskManager.getCompletedTasks ()
    
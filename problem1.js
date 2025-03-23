function createStudentManager(){
    let students = {}
    
    return {
          addStudent : function(id,name){
        if(!students[id]){
        student[id] = {name, subject : {} }
        console.log(`student ${name} added`}
    }
      else{
       console.log("student id already exists")
    }
    },
    
    updateScore : function(score){
      if(students[id]){
        student[id].student[subejct] = score
      console.log(`${students[id].name} score of ${subject} is ${score}`)
    }
    else{
    console.log("Student Not Found")
    }
    },
    
    getStudentDetails : function(id){
      if(student[id]){
    console.log(`${students[id].name} score of ${subject} is ${score}`)
    }
    else{
      console.log("Student Not Found")
    }
    },
    
    addSubject : function(id,subject , score){
      if(student[id]){
      student[id].student[subject] = score
      console.log(`${subject} is added with ${score} of ${students[id].name}
    }
    else{
    console.log("Student Not Found")
      }
      }
     
    averageScore : function(){
      if (student[id]{
    if(score.length == 0)
    return 0
    let avg = score.reduce((a,b) => a+b , 0)/score.length
    return avg
    }
    else{
    console.log("Student Not Found")
    return
    }
    },
    
    topPerformers : function(score){
    return students
    .filter(([id,student]) => averageScore  > 85
    .map(([id,student]) => student.name)
    },
    
    scoredBelow : function(score){ 
    return students
    .filter(([id,student]) => score  < 40
    .map(([id,student]) => student.name)
    },
    
    failedStudent : function(score){
    return students
    .filter(([id,student]) => score  < 35
    .map(([id,student]) => student.name)
    },
    
    getSortedStudents : function(sortBy){
     
    let arr = []
    
    if(sortBy == "name"){
    return arr.sort((a,b) => a.name.localeCompare(b.name)
    }
    else if(sortBy == "averageScore"){
    return arr.sort((a,b) => b.avg - b.avg
    }
    else{
    console.log("Invalid")
    return arr
    }
    
    
    const stu = createStudentManager()
    
    stu.addStudent(1,"ram")
    stu.addStudent(2, "shyam")
    
    stu.updateScore(34)
    stu.updateScore(45)
    
    stu.addSubject(1,"english",67)
    stu.addSubject(2,"hindi",97)
    
    console.log(stu.getStudentDetails())
    console.log(stu.getSortedStudents(sortBy))
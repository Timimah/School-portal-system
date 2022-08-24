let score_details
let new_score = []
if (localStorage.student_score_details){
    new_score = JSON.parse(localStorage.getItem("student_score_details"))
}
checkGrade = () =>{ 
    if (courseTitle.value == "" || courseCode.value == "" || score.value == ""){
        document.getElementById("warning").style.visibility = "visible"
        user_name.focus()
    }
    else if (score.value >= 0 && score.value < 40) {
        alert("F - Fail🥴")
    }
    else if (score.value >= 40 && score.value < 45){
        alert("E - Pass😔")
    }
    else if (score.value >= 45 && score.value < 50){
        alert("D - Average😬")
        songaverage.play()
    }
    else if (score.value >= 50 && score.value < 60){
        alert("C - Credit🤔")
    }
    else if (score.value >= 60 && score.value < 70){
        alert("B - Good🙂")
    }
    
    else if (score.value >= 70 && score.value <= 100){
        alert("A - Excellent😀")
    }
    else{
        score.placeholder = "Please Enter a valid value"
        score.value = ""
        score.focus()
    }
    if (user_name.value == "") {
        user_name.focus()
    }
    else if (courseTitle.value == ""){
        courseTitle.focus()
    }
    else if (courseCode.value == ""){
        courseCode.focus()
    }
    else if (score.value == ""){
        score.focus()
    }
    else{
        score_details = {
            UserName: user_name.value,
            course_title: courseTitle.value,
            course_code: courseCode.value,
            user_score: score.value,
            }
    }
    new_score.push(score_details)
    console.log(new_score)
    console.log(score_details)
    localStorage.setItem("student_score_details", JSON.stringify(new_score))
    
    courseTitle.value = ""
    courseCode.value = ""
    score.value = ""
    
}
closeDiv = () =>{
    document.getElementById("warning").style.visibility = "hidden"
}
// getList = () =>{
//     // alert()

// }
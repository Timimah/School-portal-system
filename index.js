let gotoCheck = () =>{
    let userchoice =  prompt("Have you Registered?")
    let result = userchoice.toLowerCase()
    console.log(result);
    if(result == "no"){
        showLogin()
    }
    else{
        home_page.style.display = "none"
        check_grade.style.display = "block"
        login_page.style.display = "none"
        register_page.style.display = "none"
    }
}
let gotoCourse = () =>{
    home_page.style.display = "none"
    window.location.href = "course_list.html"
}
let gotoStudents = () =>{
    home_page.style.display = "none"
    window.location.href = "student_list.html"
}
let showLogin = () => {
    home_page.style.display = "none"
    login_page.style.display = "block"
    register_page.style.display = "none"
    check_grade.style.display = "none"
}
let showRegister = () =>{
    home_page.style.display = "none"
    login_page.style.display = "none"
    register_page.style.display = "block"
    check_grade.style.display = "none"
}
let closeDiv = () =>{
    warning.style.display = "none"
}
let newStudent
let allStudents = []
if (localStorage.student_details){
    allStudents = JSON.parse(localStorage.getItem("student_details"))
}

//registerfunction
let addStudent = () =>{
    if (firstName.value == "" || middleName.value == "" || lastName.value == "" || emailAddress.value == "" || userPassword.value == ""){
        if (firstName.value == ""){
            fname_not.style.display = "block"
            firstName.focus()
        }
        else if (middleName.value == ""){
            mname_not.style.display = "block"
            middleName.focus()
        }
        else if (lastName.value == ""){
            lname_not.style.display = "block"
            lastName.focus()
        }
        else if (emailAddress.value == ""){
            emaill_not.style.display = "block"
            emailAddress.focus()
        }
        else if (userPassword.value == ""){
            pwordd_not.style.display = "block"
            userPassword.focus()
        }
    }
   else{
        newStudent = {
            FirstName: firstName.value,
            MiddleName: middleName.value,
            LastName: lastName.value,
            EmailAddress: emailAddress.value,
            password: userPassword.value
            }
    
        allStudents.push(newStudent)
        console.log(allStudents)
        console.log(newStudent)
        var timeReg = new Date()
        timeReg = timeReg.toDateString()
        alert("Student has been succesfully added. Your matric number is IC" + Math.round(Math.random() * 20000) + " Date : " + timeReg)
        localStorage.setItem("student_details", JSON.stringify(allStudents))
        firstName.value = ""
        middleName.value = ""
        lastName.value = ""
        emailAddress.value = ""
        userPassword.value = ""
        showLogin()
    }
}
 
//validation check
let hideValidationMssg = () =>{
    email_not.style.display = "none"
    pword_not.style.display = "none"
    fname_not.style.display = "none"
    mname_not.style.display = "none"
    lname_not.style.display = "none"
    emaill_not.style.display = "none"
    pwordd_not.style.display = "none"
}

// login function
let logIn = () =>{
    if(email_Address.value == ""){
        email_not.style.display = "block"
        // alert("email not found")
    }
    else if(user_Password.value == ""){
        pword_not.style.display = "block"
        // alert("Password not found")
    }
    let found = false
    //alert("li")
    if(email_Address.value != "" && user_Password.value != ""){
        // alert("Not empty")
        allStudents.forEach(element => {
            if (element.EmailAddress == email_Address.value && element.password == user_Password.value) {
                found = true
                console.log(found)
            }
        })  
    }
    if (found == true) {
        //alert("logged in")
        window.location.href = "index.html"
        // cg_page.style.display = "block"     
    } 
    else if (found == false) {
            // console.log("Not found")
            // alert("Invalid Email Address or Password")
        email_not.style.display = "block"
        pword_not.style.display = "block"
        email_Address.value = ""
        user_Password.value = ""
        // email_Address.focus()
    } 
} 

//checkgrade function
let score_details
let new_score = []
if (localStorage.student_score_details){
    new_score = JSON.parse(localStorage.getItem("student_score_details"))
}
let checkGrade = () =>{
    grade_alpha.innerText = "GRADE B"
    g_course.innerHTML = `ITS <span class="text-dark">302</span>`
    grade_bar.innerHTML = `<div class="p-1 rounded-pill w-50" style="background-color: #010566;></div>`
    if (c_title.value == "" || c_code.value == "" || score.value == ""){
        // document.getElementById("warning").style.visibility = "visible"
        f_name.focus()
    }
    else if (score.value >= 0 && score.value < 40) {
        // alert("F - Fail????")
        grade_alpha.innerText = "GRADE F : FAIL ????"
        g_course.innerHTML = `${c_code.value}`
        g_title.innerHTML = `${c_title.value}`
        g_score.innerHTML = `${score.value}%`
        g_name.innerHTML = `${f_name.value} ${m_name.value} ${l_name.value}`
        grade_bar.innerHTML = `<div class="p-1 rounded-pill" style="background-color: #010566; width: ${score.value}%"></div>`
    }
    else if (score.value >= 40 && score.value < 45){
        // alert("E - Pass????")
        grade_alpha.innerText = "GRADE E : PASS ????"
        g_course.innerHTML = `${c_code.value}`
        g_title.innerHTML = `${c_title.value}`
        g_score.innerHTML = `${score.value}%`
        g_name.innerHTML = `${f_name.value} ${m_name.value} ${l_name.value}`
        grade_bar.innerHTML = `<div class="p-1 rounded-pill" style="background-color: #010566; width: ${score.value}%"></div>`
    }
    else if (score.value >= 45 && score.value < 50){
        // alert("D - Average????")
        grade_alpha.innerText = "GRADE D : AVERAGE ????"
        g_course.innerHTML = `${c_code.value}`
        g_title.innerHTML = `${c_title.value}`
        g_score.innerHTML = `${score.value}%`
        g_name.innerHTML = `${f_name.value} ${m_name.value} ${l_name.value}`
        grade_bar.innerHTML = `<div class="p-1 rounded-pill" style="background-color: #010566; width: ${score.value}%"></div>`
    }
    else if (score.value >= 50 && score.value < 60){
        // alert("C - Credit????")
        grade_alpha.innerText = "GRADE C : CREDIT ????"
        g_course.innerHTML = `${c_code.value}`
        g_title.innerHTML = `${c_title.value}`
        g_score.innerHTML = `${score.value}%`
        g_name.innerHTML = `${f_name.value} ${m_name.value} ${l_name.value}`
        grade_bar.innerHTML = `<div class="p-1 rounded-pill" style="background-color: #010566; width: ${score.value}%"></div>`
    }
    else if (score.value >= 60 && score.value < 70){
        // alert("B - Good????")
        grade_alpha.innerText = "GRADE B : GOOD ????"
        g_course.innerHTML = `${c_code.value}`
        g_title.innerHTML = `${c_title.value}`
        g_score.innerHTML = `${score.value}%`
        g_name.innerHTML = `${f_name.value} ${m_name.value} ${l_name.value}`
        grade_bar.innerHTML = `<div class="p-1 rounded-pill" style="background-color: #010566; width: ${score.value}%"></div>`
    }
    
    else if (score.value >= 70 && score.value <= 100){
        // alert("A - Excellent????")
        grade_alpha.innerText = "GRADE A : EXCELLENT ????"
        g_course.innerHTML = `${c_code.value}`
        g_title.innerHTML = `${c_title.value}`
        g_score.innerHTML = `${score.value}%`
        g_name.innerHTML = `${f_name.value} ${m_name.value} ${l_name.value}`
        grade_bar.innerHTML = `<div class="p-1 rounded-pill" style="background-color: #010566; width: ${score.value}%"></div>`
    }
    else{
        score.placeholder = "Please Enter a valid value"
        score.value = ""
        score.focus()
    }
    if (f_name.value == "") {
        f_name.focus()
    }
    else if (m_name.value == "") {
        m_name.focus()
    }
    else if (l_name.value == "") {
        l_name.focus()
    }
    else if (c_title.value == ""){
        c_title.focus()
    }
    else if (c_code.value == ""){
        c_code.focus()
    }
    else if (score.value == ""){
        score.focus()
    }
    else{
        score_details = {
            firstName: f_name.value,
            middleName: m_name.value,
            lastName: l_name.value,
            course_title: c_title.value,
            course_code: c_code.value,
            user_score: score.value,
            }
    }
    new_score.push(score_details)
    console.log(new_score)
    console.log(score_details)
    localStorage.setItem("student_score_details", JSON.stringify(new_score))
    
    f_name.value = ""
    m_name.value = ""
    l_name.value = ""
    c_title.value = ""
    c_code.value = ""
    score.value = ""
    
}

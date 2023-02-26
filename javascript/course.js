function toMain(){
    window.location.href='main.html';
 }
 var courseName = document.getElementById("courseName");
 var university = document.getElementById("university");
 var year = document.getElementById("year");
 var instructor = document.getElementById("instructor");

 var submit = document.getElementById("submit")

 class Course {
    constructor(name, university, year, instructor) {
      this.name = name;
      this.university = university;
      this.year = year;
      this.instructor = instructor;
    }
 }
var course;
 submit.addEventListener("click", function(){

    course = new Course(courseName.value, university.value,year.value,instructor.value);


 })


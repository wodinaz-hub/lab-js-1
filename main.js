function showTeachers() {
  document.getElementById("teachers").style.display = "block";
  document.getElementById("students").style.display = "none";
  document.getElementById("lessons").style.display = "none";
  document.getElementById("st").classList.add("active");
  document.getElementById("sl").classList.remove("active");
  document.getElementById("ss").classList.remove("active");
}

function showStudents() {
  document.getElementById("teachers").style.display = "none";
  document.getElementById("students").style.display = "block";
  document.getElementById("lessons").style.display = "none";
  document.getElementById("st").classList.remove("active");
  document.getElementById("sl").classList.remove("active");
  document.getElementById("ss").classList.add("active");
}

function showLessons() {
  document.getElementById("teachers").style.display = "none";
  document.getElementById("students").style.display = "none";
  document.getElementById("lessons").style.display = "block";
  document.getElementById("st").classList.remove("active");
  document.getElementById("sl").classList.add("active");
  document.getElementById("ss").classList.remove("active");
}

showTeachers();

var students = [];
var num = 0;

function get(x) {
  return document.getElementById(x);
}

function getC(x) {
  return document.querySelector(x);
}

window.onload = function () {
    
  if (JSON.parse(localStorage.getItem("students"))) {
    students = JSON.parse(localStorage.getItem("students"));
  }

};

function addmarks() {
  if (get("math").value == "" ||get("science").value == "" ||get("english").value == "" ||get("name").value == "") {
    get("info").innerText = "Please Enter All The Details";
  } else {
    if (get("math").value > 100 ||get("english").value > 100 ||get("science").value > 100 ||get("math").value < 0 ||get("science").value < 0 ||get("english").value < 0
    ) {
      get("info").innerText = "Please Enter All The Details Correctly";
    } else {
      window["student" + num] = {
        name: get("name").value.trim().toLowerCase(),
        math: get("math").value.trim(),
        english: get("english").value.trim(),
        science: get("science").value.trim(),
      };

      students.push(window["student" + num]);
      localStorage.setItem("students", JSON.stringify(students));
        num++;
      var childrenNum = JSON.parse(localStorage.getItem("students"));
      get("info").innerHTML = `Marks Of ${childrenNum.length} Student/s have Been added`;
      get("name").value = "";
      get("math").value = "";
      get("english").value = "";
      get("science").value = "";
    }
  }
}

function result() {
    getC(".container").style.height = "500px";
    var input = get("stuname").value.toLowerCase();
    
    var output = get("output");
    var tempArr = JSON.parse(localStorage.getItem("students"));
    for (var i = 0; i < tempArr.length; i++) {
              
        if (tempArr[i].name == input) {
        
            var average = Math.round((Number(tempArr[i].math) + Number(tempArr[i].science) + Number(tempArr[i].english)) / 3);
            output.innerHTML = `<h3>Name: ${tempArr[i].name}</h3>
            <h3>Maths Marks: ${tempArr[i].math}</h3>
            <h3>Science Marks: ${tempArr[i].science}</h3>
            <h3>English Marks: ${tempArr[i].english}</h3>
            <h3 id='averageMrks'>Average: ${average}</h3>`;
      break;
    } else {
      output.innerHTML = "<h3>No Such Student Found</h3>";
    }
  }
}

//

function deleteStu() {
  var input = get("studel").value.toLowerCase();
  var deloutput = get("deloutput");
  
    var tempArr = JSON.parse(localStorage.getItem("students"));
    
    for (var i = 0; i < tempArr.length; i++) {

    if (tempArr[i].name === input) {
        tempArr.splice(i, 1);
        localStorage.setItem("students", JSON.stringify(tempArr));
        deloutput.innerHTML = "<h3>Student's Data Deleted</h3>";
        get("studel").value = "";
      break;
    } else {
      deloutput.innerHTML = "<h3>No Such Student Found</h3>";
    }
  }
}


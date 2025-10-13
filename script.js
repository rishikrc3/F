$(document).ready(function () {
    console.log("Script loaded!");
  $("#studentForm").on("submit", function (e) {
    e.preventDefault();


    const studentData = {
      FirstName: $("#firstName").val(),
      LastName: $("#lastName").val(),
      Email: $("#email").val(),
    };
    console.log(studentData)


    $.ajax({
      url: "http://localhost:5019/api/Student/addNewStudent",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(studentData),
      success: function (response) {
        alert("Student added successfully!");
        $("#studentForm")[0].reset();
      },
      error: function (xhr, status, error) {
        alert("Error: " + error);
        console.log(xhr.responseText);
      },
    });
  });
});


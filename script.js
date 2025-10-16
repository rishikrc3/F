$(document).ready(function()
{
    console.log("hhelo");
    $("#studentForm").submit(function(e){
        e.preventDefault();

        console.log("Hi");
        const studentData = {
          firstName: $("#firstName").val(),
          lastName:$("#lastName").val(),
          email:$("#email").val()
        };

        $("#buttons").addClass("d-none");
         $("#spinner").removeClass("d-none");
        
        $.ajax({
          url: "http://localhost:5019/api/Test/postData",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(studentData),
          success: function () {
            $("#buttons").removeClass("d-none");
            $("#spinner").addClass("d-none");
            $("#successToast").removeClass("d-none");
            setTimeout(function () {
              $("#successToast").addClass("d-none");
            }, 3000);
          },
          error: function () {
            $("#buttons").removeClass("d-none");
            $("#spinner").addClass("d-none");
            $("#errorToast").removeClass("d-none");
            setTimeout(function () {
              $("#errorToast").addClass("d-none");
            }, 3000);
          },
        });
        
    }
);
    
})
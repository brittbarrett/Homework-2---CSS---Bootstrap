$("#send").click(function () {
  //   alert("something happens");
  var name = $(".form-control").val();
  var email = $("#exampleFormControlInput1").val();
  var message = $("#exampleFormControlTextarea1").val();

  var userArray = [name, email, message];
  console.log(userArray);

  //   $.ajax({
  //     type: "POST",
  //     url: "email.php",
  //     data: userArray,
  //     success: function () {
  //       var confirmURL = "./confirm.html";
  //       $("#send").attr("href", confirmURL);
  //     },
  //   });
});

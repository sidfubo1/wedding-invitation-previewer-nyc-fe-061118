$(document).ready(function(){
  /*giving event listener to buttons to change themes*/
  $("#btn-theme-1").click(function(){
    $(".preview").css("background-image", "url('./theme-1.png')");
    //$(".preview").css("background-repeat", "no-repeat");
    //the repeater css was not needed to be modified here
  });

  $("#btn-theme-2").click(function(){
    $(".preview").css("background-image", "url('./theme-2.png')");
  });

  $("#btn-theme-3").click(function(){
    $(".preview").css("background-image", "url('./theme-3.png')");
  });

  /*giving event listener to inputs*/
  $("input").on("input", function(e){
    let idName = e.target.name;
    let inputValue = e.target.value;
    $(`#${idName}`).html(inputValue);
  })
})

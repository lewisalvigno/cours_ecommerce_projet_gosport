const navList = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () => {
  navList.classList.add("show");
};

document.querySelector(".close").onclick = () => {
  navList.classList.remove("show");
};

$("#cart_icon").mouseout(function(){

  $("#bucket_preview").hide();

});

$("#cart_icon").mouseover(function(){

  $("#bucket_preview").show();

});

$("#bucket_preview").mouseover(function(){

  $("#bucket_preview").show();

});
$("#bucket_preview").mouseout(function(){

  $("#bucket_preview").hide();

});


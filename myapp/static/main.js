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


// effet hover sur l'icone user pour afficher le boutton de connexion lorsque l'utilisateur n'est pas connnecté

$("#user_acc_icon").mouseout(function(){

  $("#user_acc").hide();

});

$("#user_acc_icon").mouseover(function(){

  $("#user_acc").show();
  $("#user_acc").css('display', 'flex');
  $("#user_acc").css('justify-content', 'center');

});

$("#user_acc").mouseover(function(){

  $("#user_acc").show();
  $("#user_acc").css('display', 'flex');
  $("#user_acc").css('justify-content', 'center');

});
$("#user_acc").mouseout(function(){

  $("#user_acc").hide();


});

// effet hover sur l'icone user pour afficher le compte lorsque l'utilisateur est connnecté


// $("#user_acc_icon").mouseout(function(){

//     $("#user_info").hide();
  
//   });
  
//   $("#user_acc_icon").mouseover(function(){
  
//     $("#user_info").show();
//     $("#user_info").css('display', 'flex');
//     $("#user_info").css('justify-content', 'center');
  
//   });
  
//   $("#user_info").mouseover(function(){
  
//     $("#user_info").show();
//     $("#user_info").css('display', 'flex');
//     $("#user_info").css('justify-content', 'center');
  
//   });
//   $("#user_info").mouseout(function(){
  
//     $("#user_info").hide();
  
  
//   });


const navList = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () => {
  navList.classList.add("show");
};

document.querySelector(".close").onclick = () => {
  navList.classList.remove("show");
};

// $("#cart_icon").mouseout(function(){

//   $("#bucket_preview").hide();

// });

// $("#cart_icon").mouseover(function(){

//   $("#bucket_preview").show();

// });

// $("#bucket_preview").mouseover(function(){

//   $("#bucket_preview").show();

// });
// $("#bucket_preview").mouseout(function(){

//   $("#bucket_preview").hide();

// });


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


$("#user_acc_icon").mouseout(function(){

    $("#user_info").hide();
  
  });
  
  $("#user_acc_icon").mouseover(function(){
  
    $("#user_info").show();
    $("#user_info").css('display', 'flex');
    $("#user_info").css('justify-content', 'center');
  
  });
  
  $("#user_info").mouseover(function(){
  
    $("#user_info").show();
    $("#user_info").css('display', 'flex');
    $("#user_info").css('justify-content', 'center');
  
  });
  $("#user_info").mouseout(function(){
  
    $("#user_info").hide();
  
  
  });


// from here we'll handle bucket add or remove stuff


// let cart_counter =  parseInt($("#cart_counter").html()) 
let cart_counter = localStorage.getItem("cart_counter")? parseInt(localStorage.getItem("cart_counter")):0;
let prods = localStorage.getItem("prods")? parseInt(localStorage.getItem("prods")):0;
$("#cart_counter").html(cart_counter)
$('#cart_bucket_counter').html(cart_counter)
let bucket_total_count = localStorage.getItem("bucket_total_count")? parseInt(localStorage.getItem("bucket_total_count")):0;

// let prods = 0
$('.prod_container').on('click', '.cart-btn', function (e){

  e.preventDefault();
  // alert("test")



  let prt = $(this).closest(".product")
  let prod_title = prt.find(".bucket_prod_title").html()
  let prod_img = prt.find(".bucket_prod_img").attr('src')
  let prod_price = prt.find(".bucket_prod_price").html()
  let add_btn = prt.find(".cart-btn")

  let exist = false

if(!localStorage.length == 0){

  for (var i = 0; i < localStorage.length; i++){
    curr_cart = localStorage.getItem(localStorage.key(i));

    if(curr_cart.split(",")[1] == prod_title){
      //  alert("prod already added to cart")
      exist= true
    }


}

}

if(exist){

toastr.options.closeButton = false;
toastr.options.timeOut = "500";
toastr.options.extendedTimeOut = "500";
toastr.warning('Produit dejà dans le panier')

}else {

  let prt = $(this).closest(".product")
  let prod_title = prt.find(".bucket_prod_title").html()
  let prod_img = prt.find(".bucket_prod_img").attr('src')
  let prod_price = prt.find(".bucket_prod_price").html()
  let add_btn = prt.find(".cart-btn")
 
  let qt = 1;
  
  let cart = [];

  if(localStorage.getItem("prods")) {
    prods = parseInt(localStorage.getItem("prods")) + 1
  }

    cart[prods]  = [qt,prod_title, prod_img, prod_price];
localStorage.setItem("cart"+[prods], cart[prods]);

  cart_counter = cart_counter + 1
localStorage.setItem("cart_counter",cart_counter);
localStorage.setItem("prods",prods);
  $("#cart_counter").html(cart_counter)
  prods ++;

  if(localStorage.getItem("bucket_total_count")) {
    bucket_total_count = parseInt(localStorage.getItem("bucket_total_count"))

}else {

    bucket_total_count = 0;

}

bucket_total_count = bucket_total_count + parseInt(prod_price);
     localStorage.setItem("bucket_total_count", bucket_total_count);
    $('#bucket_total_count').html(bucket_total_count);

  add_btn.css('background-color','black')
  add_btn.attr('disabled',true)

toastr.options.closeButton = false;
toastr.options.timeOut = "500";
toastr.options.extendedTimeOut = "500";
toastr.success('Produit ajouté')

}

})

$('#bucket_total_count').html(bucket_total_count);



for (var i = 0; i < localStorage.length; i++){
  curr_cart = localStorage.getItem(localStorage.key(i));



  if( curr_cart.length >= 10 && localStorage.key(i) != 'pusherTransportTLS'){


    //    alert(curr_cart[0]);
       let prod_tot_qty = curr_cart.split(',')[3] * curr_cart.split(',')[0]
       let new_prod = `

<div class="cart_prod">
<div class="prod_details">
  <img id="cart_prod_img" src="${curr_cart.split(',')[2]}" alt=""> &nbsp;&nbsp;
  <span id="cart_prod_title" >${curr_cart.split(',')[1]}</span>
</div>
<div class="prod_qty">
  <i class="bx bx-plus"></i>
  <div><b id="cart_prod_qty" >${curr_cart.split(',')[0]}</b></div>
  <i class="bx bx-minus"></i>
</div>
<div  class="prod_unit_price"> <b id="cart_prod_price" >${curr_cart.split(',')[3]}</b> &nbsp; FCFA</div>
<div  class="prod_tot_price"> <b id="cart_prod_tot_price" >${prod_tot_qty}</b> &nbsp;FCFA </div>
</div>

`; 

$("#cart_bucket_prod").append(new_prod);

} 


}


$('#cart_bucket_prod').on('click', '.bx-plus', function (e){

  // alert('test')

  let prt = $(this).closest(".cart_prod")
  let prod_qty = prt.find("#cart_prod_qty")
  let prod_title = prt.find("#cart_prod_title").html()
  let prod_price = prt.find("#cart_prod_price").html()
  let prod_tot_price = prt.find("#cart_prod_tot_price")
  
  let prod_img = prt.find("#cart_prod_img").html()
  let qt = parseInt(prod_qty.html())
  qt++;
  prod_qty.html(qt)
  let tot = parseInt(prod_price)*qt
  prod_tot_price.html(tot)
  // alert(prod_qty)

  if (!localStorage.length == 0) {

    for (var i = 0; i < localStorage.length; i++){
        curr_cart = localStorage.getItem(localStorage.key(i));
        // alert(curr_cart);
        if(  curr_cart.split(',')[1] == prod_title){
          

            // let cart0 = localStorage.getItem("cart");
            let prod_title = curr_cart.split(",")[1];
            let prod_img = curr_cart.split(",")[2];
            let prod_price = curr_cart.split(",")[3];
            let cartx = [qt,prod_title, prod_img, prod_price];
    
            localStorage.setItem(localStorage.key(i), cartx);

            if(localStorage.getItem("bucket_total_count")) {
              bucket_total_count = parseInt(localStorage.getItem("bucket_total_count"))
          
          }else {
          
              bucket_total_count = 0;
          
          }
          
          bucket_total_count = bucket_total_count + parseInt(prod_price);
               localStorage.setItem("bucket_total_count", bucket_total_count);
              $('#bucket_total_count').html(bucket_total_count);

        }
    
    }
    
  }


})


$('#cart_bucket_prod').on('click', '.bx-minus', function (e){

  // alert('test')

  let prt = $(this).closest(".cart_prod")
  let prod_qty = prt.find("#cart_prod_qty")
  let prod_title = prt.find("#cart_prod_title").html()
  let prod_price = prt.find("#cart_prod_price").html()
  let prod_tot_price = prt.find("#cart_prod_tot_price")
  
  let prod_img = prt.find("#cart_prod_img").html()
  let qt = parseInt(prod_qty.html())
  // qt++;
  // prod_qty.html(qt)
  // prod_tot_price.html(tot)
  // alert(prod_qty)

  if( parseInt(prod_qty.html())==1) {

    cart_counter = cart_counter -1
    localStorage.setItem("cart_counter",cart_counter);
    $("#cart_bucket_counter").html(cart_counter)
    $("#cart_counter").html(cart_counter)

    prt.css('display', 'none')

    for (var i = 0; i < localStorage.length; i++){
      curr_cart = localStorage.getItem(localStorage.key(i));
      // alert(curr_cart);
      if(  curr_cart.length >= 2 && curr_cart.split(',')[1] == prod_title){
          localStorage.removeItem(localStorage.key(i));

          if(localStorage.getItem("bucket_total_count")) {
            bucket_total_count = parseInt(localStorage.getItem("bucket_total_count"))
        
        }else {
        
            bucket_total_count = 0;
        
        }
        
        bucket_total_count = bucket_total_count - parseInt(prod_price);
             localStorage.setItem("bucket_total_count", bucket_total_count);
            $('#bucket_total_count').html(bucket_total_count);

          break;
      }
  
  }
 
  }

  qt--;
  prod_qty.html(qt)
  let tot = parseInt(prod_price)*qt
  prod_tot_price.html(tot);

  if (!localStorage.length == 0) {

    for (var i = 0; i < localStorage.length; i++){
        curr_cart = localStorage.getItem(localStorage.key(i));
        // alert(curr_cart);
        if(  curr_cart.split(',')[1] == prod_title){
          

            // let cart0 = localStorage.getItem("cart");
            let prod_title = curr_cart.split(",")[1];
            let prod_img = curr_cart.split(",")[2];
            let prod_price = curr_cart.split(",")[3];
            let cartx = [qt,prod_title, prod_img, prod_price];
    
            localStorage.setItem(localStorage.key(i), cartx);

            if(localStorage.getItem("bucket_total_count")) {
              bucket_total_count = parseInt(localStorage.getItem("bucket_total_count"))
          
          }else {
          
              bucket_total_count = 0;
          
          }
          
          bucket_total_count = bucket_total_count - parseInt(prod_price);
               localStorage.setItem("bucket_total_count", bucket_total_count);
              $('#bucket_total_count').html(bucket_total_count);

        }
    
    }
    
  }


})

// $(document).ready(function () {

//   if(!localStorage.length == 0){

//     $('#prod_container').children()
//     .each(function (){
  
//       let prt   =  $(this).find(".bucket_prod_title").html();

//       console.log(prt)
  
//   })
  
  
//   }else {

//     alert("still error")
//   }


// })


$('#cart_empty_bucket').click(function(e) {
  // e.preventDefault();

  cart_counter = 0
  $("#cart_bucket_counter").html(cart_counter)
  $("#cart_counter").html(cart_counter)
  localStorage.clear();


})
$(document).ready(function(){
   

    let container = $('#pagination');
    //data source jelosh [] dare. hammon arayas vali araye ist az object ha
    //inja arayte i az object ha sakhte!
    container.pagination({
        dataSource: [
            //mitooni be jaye hello tage html bezari! masalan<img>
            //age az img estefade mikoni hatman '\' ro tabdil be '/' kon vagarna axo nemishnase!
            {name: `<div class="col-md-3 col-sm-6">
            <div class="model">
            <div>
              <img class="small-image" src="img/italian-maple-3d-model-obj-mtl-3ds-fbx-3dm-dwg.jpg">
            </div>
            <div class="large-image">
              <img src="img/italian-maple-3d-model-obj-mtl-3ds-fbx-3dm-dwg.jpg">
              <div class="model-title">
                <span>مدل سه بعدی درخت</span>
              </div>
              <div class="model-volume">
                <span>حجم فایل با متریال 21 مگابایت</span>
              </div>
            </div>
            <div class="model-title">
              <span>مدل سه بعدی درخت</span>
            </div>
            <div class="model-volume">
              <span>حجم فایل با متریال 21 مگابایت</span>
            </div>
          </div>
          </div>`},
          {name: `<div class="col-md-3 col-sm-6">
          <div class="model">
          <div>
            <img class="small-image" src="img/italian-maple-3d-model-obj-mtl-3ds-fbx-3dm-dwg.jpg">
          </div>
          <div class="large-image">
            <img src="img/italian-maple-3d-model-obj-mtl-3ds-fbx-3dm-dwg.jpg">
            <div class="model-title">
              <span>مدل سه بعدی درخت</span>
            </div>
            <div class="model-volume">
              <span>حجم فایل با متریال 21 مگابایت</span>
            </div>
          </div>
          <div class="model-title">
            <span>مدل سه بعدی درخت</span>
          </div>
          <div class="model-volume">
            <span>حجم فایل با متریال 21 مگابایت</span>
          </div>
        </div>
        </div>`},
        {name: `<div class="col-md-3 col-sm-6">
        <div class="model">
        <div>
          <img class="small-image" src="img/italian-maple-3d-model-obj-mtl-3ds-fbx-3dm-dwg.jpg">
        </div>
        <div class="large-image-2">
          <img src="img/italian-maple-3d-model-obj-mtl-3ds-fbx-3dm-dwg.jpg">
          <div class="model-title">
            <span>مدل سه بعدی درخت</span>
          </div>
          <div class="model-volume">
            <span>حجم فایل با متریال 21 مگابایت</span>
          </div>
        </div>
        <div class="model-title">
          <span>مدل سه بعدی درخت</span>
        </div>
        <div class="model-volume">
          <span>حجم فایل با متریال 21 مگابایت</span>
        </div>
      </div>
      </div>`},
      {name: `<div class="col-md-3 col-sm-6">
      <div class="model">
      <div>
        <img class="small-image" src="img/italian-maple-3d-model-obj-mtl-3ds-fbx-3dm-dwg.jpg">
      </div>
      <div class="large-image-2">
        <img src="img/italian-maple-3d-model-obj-mtl-3ds-fbx-3dm-dwg.jpg">
        <div class="model-title">
          <span>مدل سه بعدی درخت</span>
        </div>
        <div class="model-volume">
          <span>حجم فایل با متریال 21 مگابایت</span>
        </div>
      </div>
      <div class="model-title">
        <span>مدل سه بعدی درخت</span>
      </div>
      <div class="model-volume">
        <span>حجم فایل با متریال 21 مگابایت</span>
      </div>
    </div>
    </div>`},
    {name: `<div class="col-md-3 col-sm-6">
    <div class="model">
    <div>
      <img class="small-image" src="img/view 01.jpg">
    </div>
    <div class="large-image">
      <img src="img/view 01.jpg">
      <div class="model-title">
        <span>مدل سه بعدی درخت</span>
      </div>
      <div class="model-volume">
        <span>حجم فایل با متریال 21 مگابایت</span>
      </div>
    </div>
    <div class="model-title">
      <span>مدل سه بعدی درخت</span>
    </div>
    <div class="model-volume">
      <span>حجم فایل با متریال 21 مگابایت</span>
    </div>
  </div>
  </div>`},
  {name: `<div class="col-md-3 col-sm-6">
  <div class="model">
  <div>
    <img class="small-image" src="img/view 01.jpg">
  </div>
  <div class="large-image">
    <img src="img/view 01.jpg">
    <div class="model-title">
      <span>مدل سه بعدی درخت</span>
    </div>
    <div class="model-volume">
      <span>حجم فایل با متریال 21 مگابایت</span>
    </div>
  </div>
  <div class="model-title">
    <span>مدل سه بعدی درخت</span>
  </div>
  <div class="model-volume">
    <span>حجم فایل با متریال 21 مگابایت</span>
  </div>
</div>
</div>`},
{name: `<div class="col-md-3 col-sm-6">
<div class="model">
<div>
  <img class="small-image" src="img/view 01.jpg">
</div>
<div class="large-image-2">
  <img src="img/view 01.jpg">
  <div class="model-title">
    <span>مدل سه بعدی درخت</span>
  </div>
  <div class="model-volume">
    <span>حجم فایل با متریال 21 مگابایت</span>
  </div>
</div>
<div class="model-title">
  <span>مدل سه بعدی درخت</span>
</div>
<div class="model-volume">
  <span>حجم فایل با متریال 21 مگابایت</span>
</div>
</div>
</div>`},
{name: `<div class="col-md-3 col-sm-6">
<div class="model">
<div>
  <img class="small-image" src="img/view 01.jpg">
</div>
<div class="large-image-2">
  <img src="img/view 01.jpg">
  <div class="model-title">
    <span>مدل سه بعدی درخت</span>
  </div>
  <div class="model-volume">
    <span>حجم فایل با متریال 21 مگابایت</span>
  </div>
</div>
<div class="model-title">
  <span>مدل سه بعدی درخت</span>
</div>
<div class="model-volume">
  <span>حجم فایل با متریال 21 مگابایت</span>
</div>
</div>
</div>`}
          
         
        ], pageSize:4, //in dataye payeen fek konam be hamoon data source barmigarde
        callback: function (data, pagination) {
            var dataHtml=" " ;
               // in yani be ezaye har kodoom az azaye data in function ro anjam bede ye chizi shabih foreach! 
            $.each(data, function (index, item) {
                dataHtml += item.name ;
            });

            // dataHtml += '</ul>';

            $(".models").html(dataHtml);
            $(".small-image").mouseover(function(){
                $(this).parent().parent().find(".large-image").css("display","block")
                $(this).parent().parent().find(".large-image-2").css("display","block")
              })
              $(".small-image").mouseout(function(){
                  $(this).parent().parent().find(".large-image").css("display","none")
                  $(this).parent().parent().find(".large-image-2").css("display","none")
              })
        }
        
        
    });
    //range-slider

    /* init widget */
$("#slider").slider({
  range: true,
  max:1000000 ,
  min:100000,
  
  values: [100000, 1000000],
  slide: function(event, ui) {
    var min = "از"+ui.values[0]+"تومان";
    var max = "تا"+ui.values[1]+"تومان";
    $("#min").text(min);
    $("#max").text(max);
  }
});

// minV=
// maxV=
/* show initial values */
var min = $("#slider").slider("values", 0);
var max = $("#slider").slider("values", 1);
min="از"+min+"تومان"
max="تا"+max+"تومان"
$("#min").text(min);
$("#max").text(max);

//active navbar
$(".nav-link").click(function()
  {
 $(".nav-link").removeClass("active");
 $(this).addClass("active");
  
})
//modal
$(".login").click(function(){
  $("html,body,.model").css({ "background-color": "rgba(0,0,0,0.1)"})
  $(".wrapper").css("display","flex")
  $(".wrapper-forget").css("display","none")
  $(".wrapper-register").css("display","none")
})
$(".login-title .fa-window-close").click(function(){
  $(this).parent().parent().parent().css("display","none")
  $("html,body").css({"background-color":"#f5f7fb"})
  $(".model").css({"background-color":"#fff"})
})
$(".register-link").click(function(e){
e.preventDefault();
$(".wrapper-register").css("display","flex")
$(".wrapper").css("display","none")
$(".vali").css("display","none")
})
$(".login-link").click(function(e){
  e.preventDefault();
  $(".wrapper").css("display","flex")
  $(".wrapper-register").css("display","none")
})

$(".mobile-tab-col").click(function(){
   
  $(".second,.fourth").removeClass("fadeIn")
$(this).css("background-color","#ffff00")
  $(".mail-div").css("display","none")
  $(".mail-tab-col").css("background-color","unset")
  $(".mobile-div").css("display","block")
  $("#vali-mail").css("display","none")
})
$(".mail-tab-col").click(function(){
  
  $(".second,.fourth").removeClass("fadeIn")
  $(this).css("background-color","#ffff00")
  $(".mobile-div").css("display","none")
  $(".mobile-tab-col").css("background-color","unset")
  $(".mail-div").css("display","block")
  $("#vali-mobile").css("display","none")
})

$(".forget-password-link").click(function(){
  $(".wrapper").css("display","none")
  $(".wrapper-forget").css("display","flex")
})
//end of modal
$(".blur").blur(function(){
  if(!$(this).val()){
  $(this).next().removeClass("blurLabel");
}
else{
   $(this).next().addClass("blurLabel");
}

})
//validation
  //login-validation
$('.buttonLoc').click(function(e){
  
  var reMobile=/^0{1}(?:[0-9] ?){6,14}[0-9]$/;
  var mobile=$("#mobile").val();
  // var userName=$("#userName").val();
  // var reName = /^([^0-9]*)$/;
  if(!$("#mobile").val()||!$("#password").val()){
      e.preventDefault();
      $(".vali").css("display","block")
      $(".valiWhole").text("لطفا فیلد های ستاره دار را پر کنید")
  }
  else if(reMobile.test(mobile)==false||mobile.length!=11){
      
      e.preventDefault();
      $(".vali").css("display","block")
      $(".valiWhole").text("شماره تلفن همراه صحیح نیست")
      $("html,body").animate({scrollTop:0})
    }
   else if($("#password").val().length<8){
      e.preventDefault();
      $(".vali").css("display","block")
      $(".valiWhole").text("رمز عبور حداقل باید 8 رقم باشد")
      $("html,body").animate({scrollTop:0})
   }
  
})
 //register-validation
 $(".buttonLoc-register").click(function(e){
  var name=$("#name").val();
  var family=$("#family").val();
  var password=$("#password2").val();
  var reName = /^([^0-9]*)$/;
  var mail=$("#email").val();
  var reMobile=/^0{1}(?:[0-9] ?){6,14}[0-9]$/;
  var mobile=$("#mobile2").val();
  var reMail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var rePass = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|(?=.*[a-z])(?=.*[!@#\$%\^&\*])|(?=.*[A-Z])(?=.*[!@#\$%\^&\*]))(?=.{8,})");
   if(!$("#name").val()||!$("#family").val()||!$("#mobile2").val()||!$("#email").val()||!$("#password2").val()||!$("#password-repeat").val()){
    e.preventDefault();
    $(".vali-register").css("display","block")
    $(".valiWhole-register").text("لطفا فیلد های ستاره دار را پر کنید")
    $("html,body").animate({scrollTop:0})
    $(".vali-register").removeClass("vali-password")
   }
   else if(reName.test(name)==false||reName.test(family)==false){
    e.preventDefault();
   $(".vali-register").css("display","block")
   $(".valiWhole-register").text("نام و نام خانوادگی نمیتواند شامل عدد باشد")
   $("html,body").animate({scrollTop:0})
   $(".vali-register").removeClass("vali-password")
}
else if (rePass.test(password)==false){
  e.preventDefault();
  $(".vali-register").css("display","block")
  $(".valiWhole-register").text("رمز عبور باید حداقل 8 حرف شامل حداقل 1 حرف بزرگ و یا 1 عدد و یا 1 کاراکتر خاص مانند !@#$%^& باشد")
  $(".vali-register").addClass("vali-password")
  $("html,body").animate({scrollTop:0})
}
else if(reMail.test(mail)==false)
{
  e.preventDefault();
  $(".vali-register").css("display","block")
  $(".valiWhole-register").text("ایمیل وارد شده صحیح نیست")
  $("html,body").animate({scrollTop:0})
  $(".vali-register").removeClass("vali-password")
}
else if(reMobile.test(mobile)==false||mobile.length!=11){
  e.preventDefault();
  $(".vali-register").css("display","block")
  $(".valiWhole-register").text("شماره تلفن همراه صحیح نیست")
  $("html,body").animate({scrollTop:0})
  $(".vali-register").removeClass("vali-password")
}
else if($("#password2").val()!=$("#password-repeat").val()){
  e.preventDefault();
  $(".vali-register").css("display","block")
  $(".valiWhole-register").text("رمز عبور با تکرار رمز عبور مصابقت ندارد")
  $("html,body").animate({scrollTop:0})
  $(".vali-register").removeClass("vali-password")
 }
 else if($(".check-reg").is(":checked")==false){
  e.preventDefault();
  $(".vali-register").css("display","block")
  $(".valiWhole-register").text("لطفاً تیک موافقت با قوانین را بزنید")
  $("html,body").animate({scrollTop:0})
  $(".vali-register").removeClass("vali-password")
 }
 })
 //forget-password validation
$(".buttonLoc-forget-mail").click(function(e){
  var mail=$("#email-forget").val();
  var reMail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if(!$("#email-forget").val()){
  e.preventDefault();
    $("#vali-mail").css("display","block")
    $("#valiWhole-mail").text("لطفاً فیلد ستاره دار را پر کنید")
    $("html,body").animate({scrollTop:0})
}
 else if(reMail.test(mail)==false)
  {
 
    e.preventDefault();
    $("#vali-mail").css("display","block")
    $("#valiWhole-mail").text("ایمیل وارد شده صحیح نیست")
    $("html,body").animate({scrollTop:0})
   
  }
  // else{
  //   alert("y")
  // }
})
$(".buttonLoc-forget-mobile").click(function(e){
 
  var mobile=$("#mobile-forget").val();
    var reMobile=/^0{1}(?:[0-9] ?){6,14}[0-9]$/;
if(!$("#mobile-forget").val()){
  e.preventDefault();
    $("#vali-mobile").css("display","block")
    $("#valiWhole-mobile").text("لطفاً فیلد ستاره دار را پر کنید")
    $("html,body").animate({scrollTop:0})
}
 else if(reMobile.test(mobile)==false)
  {
    
  
    e.preventDefault();
    $("#vali-mobile").css("display","block")
    $("#valiWhole-mobile").text("موبایل وارد شده صحیح نیست")
    $("html,body").animate({scrollTop:0})
   
  }
  // else{
  //   alert("y")
  // }
})
})


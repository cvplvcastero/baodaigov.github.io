$(function(){
    var $htmlRedirect = $("a.imgTOP");
    $htmlRedirect.click(function(e){
        e.preventDefault();
        window.history.pushState({}, "Đăng nhập | Cổng Thông tin Chính phủ Bảo Đại", "/login");
        $(".iframe-si-bg").show();
        setTimeout(function(){
            $(".iframe-si-container").show();
        },200)
    })
})
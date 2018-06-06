

$(function(){
    $(".header").append(
            '<ul class="nav">'+
                '<li>首页<p>·</p></li>'+
                '<li>关于协通<p>·</p></li>'+
               ' <li>最新动态<p>·</p></li>'+
                '<li>业务板块<p>·</p></li>'+
                '<li>诚聘英才<p>·</p></li>'+
                '<li>联系我们<p>·</p></li>'+
            '</ul>'
    )

    $(window).load(function() { 
        $(".serial").html(0)
        change()
    }); 
    
    $(window).resize(function(){
        change()
    })
    change = function(){
        var  width=document.documentElement.clientWidth;  
        var height=document.documentElement.clientHeight; 
        $(".header").css({width:width,height:height})
    }
    let n = $(".serial").html()
    $("li").each(function(index,element){
        if(index == n){
            $(this).css("color","#ff9801")
        }
        
    })
})
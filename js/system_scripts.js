$(function() {
    // list页面不显示赞的数量
    $(".posts-item-vote-state").remove();
    $(".posts-item-content").css("padding-left", "0px");

    // section页面，当文章全部显示时，不显示更多按钮。
    $(".section-tree").children().each(function(){
        var list = $(this).find(".article-list").children();
        var total = $(this).find(".more");
        var totalText = total.text();
        var num = parseInt(totalText.slice(4,5));

        if (list.length == num)
        {
            total.hide();
        }
    });
})// JavaScript Document
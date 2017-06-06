$(function() {

    "use strict";

    function isIE678() {
        var ua = window.navigator.userAgent.toLowerCase();
        var ver = window.navigator.appVersion.toLowerCase();

        if (ua.indexOf("msie") !== -1) {
            if (ver.indexOf("msie 6.") !== -1 || ver.indexOf("msie 7.") !== -1 || ver.indexOf("msie 8.") !== -1) {
                return true;
            }
        }
        return false;
    }

    function loadImageViewer() {
        if (isIE678()) { return; }

        // 图像弹出显示
        $(".article-content").find("img").on("click", function(e) {
            $(this).colorbox({
                scalePhotos: true,
                maxWidth: "95%",
                height: "auto",
                photo: true,
                href: this.src
            });
        });
    }

    $(document).ready(function() {
        if ($('.article-content')) {
            loadImageViewer();
        }
    });
});

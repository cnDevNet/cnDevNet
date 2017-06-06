(function(){
    $(document).ready(function(){
        $(".banner").each(function(){
            var banner = this,
                imageBanner = $(banner).children(".imageBanner")[0],
                icoBanner = $(banner).children(".btt")[0],
                imageArr = $(imageBanner).children(),
                icoArr = $(icoBanner).children(),
                activeID = parseInt($($(icoBanner).children(".active")[0]).attr("rel")),
                nextID = 0,
                setIntervalID,
                intervalTime = 4000,
                imageSpeed = 500;

            var rotate = function(clickID){
                if (clickID) {
                    nextID = clickID;
                }
                else {
                    nextID = activeID <= 2 ? activeID + 1 : 1;
                }

                $(icoArr[activeID - 1]).css("background","#3d3d3d");
                $(icoArr[nextID - 1]).css("background","#ffffff");

                imageArr.eq(activeID - 1).fadeOut(imageSpeed);
                imageArr.eq(nextID - 1).fadeIn(imageSpeed);

                activeID = nextID;
            }
            setIntervalID = setInterval(rotate, intervalTime);
            $(imageBanner).hover(
                function(){
                    clearInterval(setIntervalID);
                },
                function(){
                    setIntervalID = setInterval(rotate, intervalTime);
                }
            );
            $(icoArr).click(function(){
                clearInterval(setIntervalID);
                var clickID = parseInt($(this).attr("rel"));
                rotate(clickID);
                setIntervalID = setInterval(rotate, intervalTime);
            });
        });
    });
})();// JavaScript Document
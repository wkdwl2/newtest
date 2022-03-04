var boardMenu = document.querySelectorAll('.board-menu');
var sidemenuName = document.querySelectorAll('.sidemenu-name');
var mainColumn;
var mainColumnExists;
window.onload = function(){    
    clickSideMenu();
    changeSize();
    changeScroll();    
}
window.addEventListener('scroll',function(){
    changeScroll();
})
window.addEventListener('resize', function resizefunc(){
    changeSize()
})
function clickSideMenu(){
    mainColumn = document.querySelector('.main-column');
    mainColumnExists = !!mainColumn
    var url = window.location.href;
    var menus = document.querySelectorAll('.board-menu');
    var sidemenus = document.querySelectorAll('.sidemenu-name')
    if(String(menus.classList).indexOf('bm-active')>0){
        menus.classList.remove('bm-active');
        sidemenus.classList.remove('sn-active');
    }
    if(url.indexOf('free-board') >0 ){
        document.querySelectorAll(".board-menu")[0].classList.add('bm-active');
        document.querySelectorAll(".sidemenu-name")[0].classList.add('sn-active');
    }else if(url.indexOf('question-board') >0 ){
        document.querySelectorAll(".board-menu")[1].classList.add('bm-active');
        document.querySelectorAll(".sidemenu-name")[1].classList.add('sn-active');
    }else if(url.indexOf('data-board') >0 ){
        document.querySelectorAll(".board-menu")[2].classList.add('bm-active');
        document.querySelectorAll(".sidemenu-name")[2].classList.add('sn-active');
    }else if(url.indexOf('news-board') >0 ){
        document.querySelectorAll(".board-menu")[3].classList.add('bm-active');
        document.querySelectorAll(".sidemenu-name")[3].classList.add('sn-active');
    }else if(url.indexOf('resume-board') >0 ){
        document.querySelectorAll(".board-menu")[4].classList.add('bm-active');
        document.querySelectorAll(".sidemenu-name")[4].classList.add('sn-active');
    }
}
function changeSize(){
    boardMenu = document.querySelectorAll('.board-menu');
    sidemenuName = document.querySelectorAll('.sidemenu-name');
    mainColumn = document.querySelector('.main-column');
    mainColumnExists = !!mainColumn
        if(window.innerWidth<=1080){
            if(!mainColumnExists){
                document.querySelector(".main-row").classList.add('main-column');
                document.querySelector(".right-section").classList.add('right-section-column');
                document.querySelector(".left-section").classList.add('left-section-column');
                document.querySelector(".background").classList.add('background-column')
                document.querySelector(".board-menus").classList.add('board-menus-column');
                document.querySelector(".category").classList.add("category-column");
                for(var i=0;i<boardMenu.length;i++){
                    boardMenu[i].classList.add('board-menu-column')
                }
                for(var i=0;i< sidemenuName.length;i++){
                    sidemenuName[i].classList.add('sidemenu-name-column');
                } 
            }
        }else if(window.innerWidth>1080){
            if(mainColumnExists){
                document.querySelector(".main-row").classList.remove('main-column');
                document.querySelector(".right-section").classList.remove('right-section-column');
                document.querySelector(".left-section").classList.remove('left-section-column');
                document.querySelector(".background").classList.remove('background-column')
                document.querySelector(".board-menus").classList.remove('board-menus-column');
                document.querySelector(".category").classList.remove("category-column");
                for(var i=0;i<boardMenu.length;i++){
                    boardMenu[i].classList.remove('board-menu-column')
                }
                for(var i=0;i< sidemenuName.length;i++){
                    sidemenuName[i].classList.remove('sidemenu-name-column');
                }
        }
    }
    changeScroll();
}
function changeScroll(){
    mainColumn = document.querySelector('.main-column');
    mainColumnExists = !!mainColumn;
    if(!mainColumnExists){
        if(window.scrollY >=400){
            document.querySelector(".select-form").classList.remove('select-fixed-2');
            document.querySelector(".board-menus").classList.remove('board-menus-fixed')
            document.querySelector(".board-menus").classList.remove('board-menus-col')
            document.querySelector(".select-form").classList.add('select-fixed-1');
            document.querySelector(".select-bg").classList.add('select-bg-col');
        }else if(window.scrollY<=120){
            document.querySelector(".select-form").classList.remove('select-fixed-2');
            document.querySelector(".board-menus").classList.remove('board-menus-fixed')
            document.querySelector(".board-menus").classList.remove('board-menus-col')
            document.querySelector(".select-form").classList.remove('select-fixed-1');
            document.querySelector(".select-bg").classList.remove('select-bg-col');
        }
    }else if(mainColumnExists){
        if(window.scrollY >=600){
            document.querySelector(".board-menus").classList.add('board-menus-fixed')
            document.querySelector(".board-menus").classList.add('board-menus-col')
            document.querySelector(".select-form").classList.add('select-fixed-2');
            document.querySelector(".select-bg").classList.add('select-bg-col');
        }else if(window.scrollY<=300){
            document.querySelector(".select-form").classList.remove('select-fixed-1');
            document.querySelector(".board-menus").classList.remove('board-menus-fixed')
            document.querySelector(".board-menus").classList.remove('board-menus-col')
            document.querySelector(".select-form").classList.remove('select-fixed-2');
            document.querySelector(".select-bg").classList.remove('select-bg-col');
        } 
    }
}
// function resize(obj) {
    // var hei = window.getComputedStyle(document.querySelector('.content-line')).height;
    // var heiR = hei.substring(-1,3);
    // console.log(heiR)
    // if(Number(heiR)<700){
        // obj.style.height = "1px";
        // obj.style.height = (12+obj.scrollHeight)+"px";
        // document.querySelector('.content-line-box').style.height = (12+obj.scrollHeight)+"px"
        // window.scrollY = (12+obj.scrollHeight)

        // console.log(obj.scrollHeight)
    // } onkeydown="resize(this)" onkeyup="resize(this)"
// }
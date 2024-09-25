// fullPage.js의 afterLoad 이벤트에서 origin은 이전 섹션을 나타내며,
// destination은 새로 로드된 섹션을 나타냅니다.

$(document).ready(function() {
     $('#fc-fullpage').fullpage({
   autoScrolling: true,
   slidesNavigation: false,
   easing: 'easeInOutCubic',
   easingcss3: 'ease',
   scrollingSpeed: 1000,
   // responsiveWidth: 920,
   // responsiveHeight:900,
     // Loop 설정
     loopTop: true,
     loopBottom: true,
     // Optional
     anchors: ['firstPage', 'secondPage', '3rdPage'],
     menu: '#menu',
     navigation: true,
     navigationTooltips: ['', '', ''],

       
       // 섹션이 로드될 때마다 실행
       afterLoad: function(anchorLink, index){
         console.log('anchorLink.index:', anchorLink);
         console.log('index:', index);
         const section1IMG = $('#fc-section1 img');
         const section2H1 = $('#fc-section2 h1');
         const section2P = $('#fc-section2 p');
         const section3BT = $('#fc-section3 button');

           // section1 도착 시
           if (index === 1) {
               section1IMG.addClass('active');       
           }

           // section2 도착 시
           else if (index === 2) {
            section2H1.addClass('active');
               // 각 p 태그에 순차적으로 active 클래스 추가
               section2P.each(function(index, p){
                   setTimeout(function(){
                       $(p).addClass('active');
                   }, index * 100); // 100ms 간격으로 active 클래스 추가
               });

               section3BT.addClass('active');
           }

           // 원래 상태로 돌아가기
           if (anchorLink === 'firstPage') {
               section1IMG.removeClass('active');
           }

           else if (anchorLink === 'secondPage') {
            console.log('anchorLink.index:', anchorLink.index);
               section2H1.removeClass('active');
               section2P.removeClass('active');
               section3BT.removeClass('active');
           }
       },
   });
});

$(".why-item").each(function(){
   let text = this;
   text.innerHTML = text.textContent.replace(/\S/g, "<i>$&</i>")
   $(this).find("i").each(function(index, item){
     $(this).addClass("num" + index);
     let i = index / 14;
     $(this).css("animation-delay", (i + 0.8) + "s")
   })
 })


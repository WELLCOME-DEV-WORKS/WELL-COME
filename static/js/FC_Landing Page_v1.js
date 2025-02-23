// fullPage.js의 afterLoad 이벤트에서 origin은 이전 섹션을 나타내며,

$(document).ready(function() {
     $('#fc-fullpage').fullpage({
   autoScrolling: true,
   slidesNavigation: false,
   easing: 'easeInOutCubic',
   easingcss3: 'ease',
   scrollingSpeed: 1000,
   // responsiveWidth: 920,
   responsiveWidth: 1000, // 너비가 1000일때 수동 원페이지 -> 스크롤
     // Loop 설정
     loopTop: true,
     loopBottom: true,
     // Optional
     anchors: ['firstPage', 'secondPage', '3rdPage'],
     menu: '#menu',
     navigation: true,
     navigationTooltips: ['', '', ''],

       
       // afterLoad: 섹션이 로드될 때마다 실행
       afterLoad: function(anchorLink, index){
         const section1IMG = $('#fc-section1 img');
         const section2H1 = $('#fc-section2 h1');
         const section2P = $('#fc-section2 p');
         const section3BT = $('#fc-section3 button');

           // section1 도착!
           if (index === 1) {
               section1IMG.addClass('active');              
           }

           // section2 도착!
           else if (index === 2) {
            section2H1.addClass('active');
            section2P.addClass('active');
            section3BT.addClass('active');
           }

           // 원래 상태로 돌아가기
           if (anchorLink === 'firstPage') {
               section1IMG.removeClass('active');
           }

           else if (anchorLink === 'secondPage') {
               section2H1.removeClass('active');
               section2P.removeClass('active');
               section3BT.removeClass('active');
           }
       },
   });
});


$(".fc-item").each(function(){
   let text = this;
   // 각 문자에 <i> 태그 추가
   text.innerHTML = text.textContent.replace(/\S/g, "<a>$&</a>")
   $(this).find("a").each(function(index, item){
     $(this).addClass("num" + index);
     let a = index / 14;
     // 각 문자에 애니메이션 딜레이 추가
     $(this).css("animation-delay", (a + 0.8) + "s")
   })
 })


 
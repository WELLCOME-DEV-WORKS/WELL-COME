
 // fullPage.js cdn 
  var myFullpage = new fullpage('#fullpage', {
   
   afterLoad: function(origin, destination){
    const section1IMG = document.querySelector('#section1 img')
       const section2H1 = document.querySelector('#section2 h1');
       const section2P = document.querySelectorAll('#section2 p');
       const section3BT = document.querySelector('#section3 button');
       // reaching section 2?
       if(destination.index == 1){
        section1IMG.classList.add('active');
           section2H1.classList.add('active');
           // section2P.forEach(p => p.classList.add('active'));
            // 각 p 태그에 순차적으로 active 클래스를 추가
            section2P.forEach((p, index) => {
               setTimeout(() => {
                   p.classList.add('active');
               }, index * 0.1); // 500ms 간격으로 active 클래스 추가
           });
           section3BT.classList.add('active'); 
           
       }

       // back to original state
       else if(origin && origin.index == 1){
        section1IMG.classList.remove('active');
           section2H1.classList.remove('active');
           section2P.forEach(p => p.classList.remove('active'));
           section3BT.classList.remove('active');
       }


   },

  // Loop vertical options
  loopTop: true,
  loopBottom: true,


   // Optional
   anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
   menu: '#menu',

   navigation: true,
navigationTooltips: ['', '', ''],
});

// made with fullpage.js 제거
new fullpage('#fullpage', {
	licenseKey:'license here',
	scrollingSpeed: 1000,   
	verticalCentered: false,
         credits: { 
              enabled: false, 
              label: 'Made with fullPage.js',
              position: 'right'
        },
});
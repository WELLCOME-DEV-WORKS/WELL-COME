
 // fullPage.js cdn 
  var myFullpage = new fullpage('#fullpage', {
   
   afterLoad: function(origin, destination){
    const section1IMG = document.querySelector('#section1').querySelector('img');
       const section2H1 = document.querySelector('#section2').querySelector('h1');
       const section2P = document.querySelector('#section2').querySelector('p');
       const section3BT = document.querySelector('#section3').querySelector('button');
       // reaching section 2?
       if(destination.index == 1){
        section1IMG.classList.add('active');
           section2H1.classList.add('active');
           section2P.classList.add('active');
           section3BT.classList.add('active');
       }

       // back to original state
       else if(origin && origin.index == 1){
        section1IMG.classList.remove('active');
           section2H1.classList.remove('active');
           section2P.classList.remove('active');
           section3BT.classList.remove('active');
       }

       // The section 3 is using the state classes to fire the animation
       // See the CSS code on the styles
   },

   // Optional
   anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
   menu: '#menu',

   navigation: true,
navigationTooltips: ['First Section', 'Second Section', 'Third Section'],
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
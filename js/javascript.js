var hamburger = document.getElementsByClassName('hamburger-menu');
var hamburgerList = document.getElementsByClassName('hamburger-menu__list');
var hamburgerItem = document.getElementsByClassName('hamburger-menu__item')
function checkHamburgerList()
{	
	if(hamburgerList[0].classList.contains('hamburger-menu__list--show'))
	{
		hamburgerList[0].classList.remove('hamburger-menu__list--show');
	}
	else { hamburgerList[0].classList.add('hamburger-menu__list--show');}
	if (hamburger[0].classList.contains('fa-bars'))
	{
		hamburger[0].classList.remove('fa-bars');
		hamburger[0].classList.add('fa-times');
	}
	else 
	{
		hamburger[0].classList.remove('fa-times');
		hamburger[0].classList.add('fa-bars');
	}
}

function checkHamburgerItem()
{
	hamburgerList[0].classList.remove('hamburger-menu__list--show');
	hamburger[0].classList.remove('fa-times');
	hamburger[0].classList.add('fa-bars');
}

hamburger[0].addEventListener('click', checkHamburgerList, false);

for (var i=0; i<5; i++)
{
	hamburgerItem[i].addEventListener('click', checkHamburgerItem, false);
}


(function() {

     'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration) {

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            
            else {
                
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            
            var runAnimation = setInterval(animateScroll, 16);
       
        };

        
		if (window.innerWidth>620) {var scrollToggle = document.querySelectorAll('.menu__link');}
        else {var scrollToggle = document.querySelectorAll('.hamburger-menu__link');}
        //
        [].forEach.call(scrollToggle, function (toggle) {

           
            toggle.addEventListener('click', function(e) {

               
                e.preventDefault();

                
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

               
                if (dataTarget) {
                    
                    smoothScroll(dataTarget, dataSpeed || 750);
                }

            }, false);

        });

    }

 })();
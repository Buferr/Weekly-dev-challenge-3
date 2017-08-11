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
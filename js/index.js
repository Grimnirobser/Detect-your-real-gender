function getValue()
	{ 
		var radio = document.getElementsByName("gender");
		for (i=0; i<radio.length; i++) 
		{
			if (radio[i].checked) 
			{
				return radio[i].value;
			}
		}
	}



	function calculate()
	{
	    var checkbox = document.getElementsByName('temper');
	    var user_gender = getValue();

	    for(var i = 0; i < checkbox.length; i++)
	    {
	    	if(checkbox[i].checked)
	    	{
	    		user_gender=user_gender.concat((checkbox[i].value));
	    	}
	    }
	    var bigImg = document.createElement("img");		//创建一个img元素
		bigImg.src='final/shun.png';
		bigImg.height = "300";
		bigImg.width = "250";

	    var myDiv = document.getElementById("myDiv");
	    myDiv.appendChild(bigImg);

	    switch(user_gender)
	    {
	    	//gender=man
	    	case '1': bigImg.src='image/man.gif';alert('should choose at least one temper');break;
	    	case '15': bigImg.src='final/man/Cis_male15.png';break;
	    	case '16': bigImg.src='final/man/transfe16.png';break;
	    	case '17': bigImg.src='final/man/nonbin17.png';break;
	    	case '18': bigImg.src='final/man/agender18.png';break;
	    	case '156': bigImg.src='final/man/bigen156.png';break;
	    	case '157': bigImg.src='final/man/bigender157.png';break;
	    	case '158': bigImg.src='final/man/cismale158.png';break;
	    	case '167': bigImg.src='final/man/bigender167.png';break;
	    	case '168': bigImg.src='final/man/transfe168.png';break;
	    	case '178': bigImg.src='final/man/neither178.png';break;
	    	case '1567': bigImg.src='final/man/genflu1567.png';break;
	    	case '1568': bigImg.src='final/man/agender1568.png';break;
	    	case '1578': bigImg.src='final/man/bigender1578.png';break;
	    	case '1678': bigImg.src='final/man/bigender1678.png';break;
	    	case '15678': bigImg.src='final/man/pangen15678.png';break;

	    	//gender=woman
	    	case '2': bigImg.src='image/woman.gif';alert('should choose at least one temper');break;
	    	case '25': bigImg.src='final/woman/transmale25.png';break;
	    	case '26': bigImg.src='final/woman/cisfemale26.png';break;
	    	case '28': bigImg.src='final/woman/agender28.png';break;
	    	case '256': bigImg.src='final/woman/bigender256.png';break;
	    	case '257': bigImg.src='final/woman/genflu257.png';break;
	    	case '258': bigImg.src='final/woman/transmale258.png';break;
	    	case '267': bigImg.src='final/woman/genflu267.png';break;
	    	case '268': bigImg.src='final/woman/cisfemale268.png';break;
	    	case '278': bigImg.src='final/woman/neither278.png';break;
	    	case '2567': bigImg.src='final/woman/bigender2567.png';break;
	    	case '2568': bigImg.src='final/woman/agender2568.png';break;
	    	case '2578': bigImg.src='final/woman/bigender2578.png';break;
	    	case '2678': bigImg.src='final/woman/bigender2678.png';break;
	    	case '25678': bigImg.src='final/woman/pangen25678.png';break;

	    	//gender=bigender
	    	case '3': bigImg.src='image/bisexual.gif';alert('should choose at least one temper');break;
	    	case '35': bigImg.src='final/bisexual/transmale35.png';break;
	    	case '36': bigImg.src='final/bisexual/transfemale36.png';break;
	    	case '37': bigImg.src='final/bisexual/androg37.png';break;
	    	case '38': bigImg.src='final/bisexual/nonbin38.png';break;
	    	case '356': bigImg.src='final/bisexual/androg356.png';break;
	    	case '357': bigImg.src='final/bisexual/bigender357.png';break;
	    	case '358': bigImg.src='final/bisexual/transmale358.png';break;
	    	case '367': bigImg.src='final/bisexual/bigender367.png';break;
	    	case '368': bigImg.src='final/bisexual/transfemale368.png';break;
	    	case '378': bigImg.src='final/bisexual/neither378.png';break;
	    	case '3567': bigImg.src='final/bisexual/androg3567.png';break;
	    	case '3568': bigImg.src='final/bisexual/androg3568.png';break;
	    	case '3578': bigImg.src='final/bisexual/bigender3578.png';break;
	    	case '3678': bigImg.src='final/bisexual/bigender3678.png';break;
	    	case '35678': bigImg.src='final/bisexual/pangen35678.png';break;

	    	//gender=agender
	    	case '4': bigImg.src='image/agender.gif';alert('should choose at least one temper');break;
	    	case '45': bigImg.src='final/agender/transmale45.png';break;
	    	case '46': bigImg.src='final/agender/transfemale46.png';break;
	    	case '47': bigImg.src='final/agender/bigender47.png';break;
	    	case '48': bigImg.src='final/agender/neutro48.png';break;
	    	case '456': bigImg.src='final/agender/bigender456.png';break;
	    	case '457': bigImg.src='final/agender/genflu457.png';break;
	    	case '458': bigImg.src='final/agender/transmale458.png';break;
	    	case '467': bigImg.src='final/agender/genflu467.png';break;
	    	case '468': bigImg.src='final/agender/bigender468.png';break;
	    	case '478': bigImg.src='final/agender/neither478.png';break;
	    	case '4567': bigImg.src='final/agender/intersex4567.png';break;
	    	case '4568': bigImg.src='final/agender/intersex4568.png';break;
	    	case '4578': bigImg.src='final/agender/bigender4578.png';break;
	    	case '4678': bigImg.src='final/agender/bigender4678.png';break;
	    	case '45678': bigImg.src='final/agender/pangen45678.png';break;
	    	default:
	    		bigImg.src='final/nochoice/nochoice.jpeg';
	    		alert('沒有符合的條件');
	    }
	    myDiv.replaceChild(bigImg, myDiv.childNodes[0]);

	}
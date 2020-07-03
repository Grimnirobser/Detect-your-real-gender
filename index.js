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

	    switch(user_gender)
	    {
	    	//gender=man
	    	case '15': document.getElementById('result').value = "顺男";break;
	    	case '16': document.getElementById('result').value = "跨性女";break;
	    	case '17': document.getElementById('result').value = "non-binary";break;
	    	case '18': document.getElementById('result').value = "Agender";break;
	    	case '156': document.getElementById('result').value = "Bigender";break;
	    	case '157': document.getElementById('result').value = "Bigender偏男性";break;
	    	case '158': document.getElementById('result').value = "顺男";break;
	    	case '167': document.getElementById('result').value = "Bigender偏女性";break;
	    	case '168': document.getElementById('result').value = "跨性女";break;
	    	case '178': document.getElementById('result').value = "neither";break;
	    	case '1567': document.getElementById('result').value = "gender";break;
	    	case '1568': document.getElementById('result').value = "Agender";break;
	    	case '1578': document.getElementById('result').value = "Bigender偏男性";break;
	    	case '1678': document.getElementById('result').value = "Bigender偏女性";break;
	    	case '15678': document.getElementById('result').value = "Pangender";break;

	    	//gender=woman
	    	case '25': document.getElementById('result').value = "跨性男";break;
	    	case '26': document.getElementById('result').value = "顺女";break;
	    	case '27': document.getElementById('result').value = "non-binary";break;
	    	case '28': document.getElementById('result').value = "Agender";break;
	    	case '256': document.getElementById('result').value = "Bigender";break;
	    	case '257': document.getElementById('result').value = "gender fluid";break;
	    	case '258': document.getElementById('result').value = "跨性男";break;
	    	case '267': document.getElementById('result').value = "gender fluid";break;
	    	case '268': document.getElementById('result').value = "顺女";break;
	    	case '278': document.getElementById('result').value = "neither";break;
	    	case '2567': document.getElementById('result').value = "Bigender";break;
	    	case '2568': document.getElementById('result').value = "Agender";break;
	    	case '2578': document.getElementById('result').value = "Bigender偏男性";break;
	    	case '2678': document.getElementById('result').value = "Bigender偏女性";break;
	    	case '25678': document.getElementById('result').value = "Pangender";break;

	    	//gender=bigender
	    	case '35': document.getElementById('result').value = "跨性男";break;
	    	case '36': document.getElementById('result').value = "跨性女";break;
	    	case '37': document.getElementById('result').value = "Androgyne";break;
	    	case '38': document.getElementById('result').value = "non-binary";break;
	    	case '356': document.getElementById('result').value = "Androgynous";break;
	    	case '357': document.getElementById('result').value = "Bigender";break;
	    	case '358': document.getElementById('result').value = "跨性男";break;
	    	case '367': document.getElementById('result').value = "Bigender";break;
	    	case '368': document.getElementById('result').value = "跨性女";break;
	    	case '378': document.getElementById('result').value = "neither";break;
	    	case '3567': document.getElementById('result').value = "Androgyne";break;
	    	case '3568': document.getElementById('result').value = "Androgynous";break;
	    	case '3578': document.getElementById('result').value = "Bigender偏男性";break;
	    	case '3678': document.getElementById('result').value = "Bigender偏女性";break;
	    	case '35678': document.getElementById('result').value = "Pangender";break;

	    	//gender=agender
	    	case '45': document.getElementById('result').value = "跨性男";break;
	    	case '46': document.getElementById('result').value = "跨性女";break;
	    	case '47': document.getElementById('result').value = "Bigender";break;
	    	case '48': document.getElementById('result').value = "Neutrons";break;
	    	case '456': document.getElementById('result').value = "Bigender";break;
	    	case '457': document.getElementById('result').value = "gender fluid";break;
	    	case '458': document.getElementById('result').value = "跨性男";break;
	    	case '467': document.getElementById('result').value = "gender fluid";break;
	    	case '468': document.getElementById('result').value = "跨性女";break;
	    	case '478': document.getElementById('result').value = "neither";break;
	    	case '4567': document.getElementById('result').value = "intersex";break;
	    	case '4568': document.getElementById('result').value = "intersex";break;
	    	case '4578': document.getElementById('result').value = "Bigender偏男性";break;
	    	case '4678': document.getElementById('result').value = "Bigender";break;
	    	case '45678': document.getElementById('result').value = "Pangender";break;
	    	default:
	    		document.getElementById('result').value = ""；
	    		alert('沒有符合的條件');
	    }

	}
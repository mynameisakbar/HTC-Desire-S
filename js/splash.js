
function initSplash(){
	
	var logoFontLeft;
	var logoFontTop;
	var htcSenseHandLeft;
	var htcSenseHandTop;
	var globeHandLeft;
	var globeHandTop;
	var cameraHandLeft;
	var cameraHandTop;
	
	if (isIpad()) 
	{
		logoFontLeft = "295px";
		logoFontTop = "410px";
		htcSenseHandLeft = "50px";
		htcSenseHandTop = "50px";
		globeHandLeft = "550px";
		globeHandTop = "50px";
		cameraHandLeft = "550px";
		cameraHandTop = "700px";
	}
    else  
    {
		logoFontLeft = "115px";
		logoFontTop = "290px";
	 	htcSenseHandLeft = "-130px";
		htcSenseHandTop = "-80px";
		globeHandLeft = "370px";
		globeHandTop = "-80px";
		cameraHandLeft = "370px";
		cameraHandTop = "590px";
    }
    	
	//Asset
	$("#logoFont").css({position: "absolute",left: logoFontLeft,top: logoFontTop});
	$("#htcSenseHand").css({position: "absolute",left: htcSenseHandLeft,top: htcSenseHandTop});
	$("#globeHand").css({position: "absolute",left: globeHandLeft,top: globeHandTop});
	$("#cameraHand").css({position: "absolute",left: cameraHandLeft,top: cameraHandTop});
	
	//Animation
	$("#logoFont").animate({'opacity': '1'} ,2000, function() 
	{ 
		$("#logoFont").animate({left: '+=0px',  top : '+=180px'}, 1000, function() 
		{ 
			$("#blankPhone").animate({'opacity': '1'}, 2000, function() 
			{ 
				//HTC Sense Hand
				$("#htcSenseHand").css({'-webkit-transition': 'opacity 0.5s linear'});
				$("#htcSenseHand").css({'opacity': '1'});
				$("#htcSenseHand").animate({left: '+=105px',  top : '+=115px'}, 800, function() 
				{
					//Globe Hand
					$("#globeHand").css({'-webkit-transition': 'opacity 0.5s linear'});
					$("#globeHand").css({'opacity': '1'});
					$("#globeHand").animate({left: '-=120px',  top : '+=150px'}, 800, function()
					{
						//Camera Hand
						$("#cameraHand").css({'-webkit-transition': 'opacity 0.5s linear'});
						$("#cameraHand").css({'opacity': '1'});
						$("#cameraHand").animate({left: '-=120px',  top : '-=220px'}, 800, function() 
						{ 
							$("#phoneWithContent").animate({'opacity': '1'}, 1500, function() 
							{
								//Fade out objects
								$("#htcSenseHand").css({'opacity': '0'});
								$("#globeHand").css({'opacity': '0'});
								$("#cameraHand").css({'opacity': '0'});
								$("#logoFont").animate({'opacity' : '0'}, 1000);
								//Remove object
								$("#blankPhone").css({'display': 'none'});
								
								if (isIpad())
								{
									//Rotate phone
									$("#phoneWithContent").css({'-webkit-transform': 'rotate(-90deg)'});
									$("#phoneWithContent").css({'-webkit-transition': '-webkit-transform 1s ease-in'});
									//Move phone up
									$("#phoneWithContent").animate({left: '-=33px',  top : '-=200px'}, 1000, function() 
									{
										//Fade out phone
										$("#phoneWithContent").animate({'opacity' : '0'}, 3000);
										//Fade out white block
										$("#fullScreenWhiteBlock").animate({'opacity' : '0'}, 3000, function() 
										{
											//Remove objects
											$("#logoFont").css({'display': 'none'});
											$("#htcSenseHand").css({'display': 'none'});
											$("#globeHand").css({'display': 'none'});
											$("#phoneWithContent").css({'display': 'none'});
											$("#fullScreenWhiteBlock").css({'display': 'none'});
										});
									});
								}
								else
								{
									//Fade out phone
									$("#phoneWithContent").animate({'opacity' : '0'}, 3000);
									//Fade out white block
									$("#fullScreenWhiteBlock").animate({'opacity' : '0'}, 3000, function() 
									{
										//Remove objects
										$("#logoFont").css({'display': 'none'});
										$("#htcSenseHand").css({'display': 'none'});
										$("#globeHand").css({'display': 'none'});
										$("#phoneWithContent").css({'display': 'none'});
										$("#fullScreenWhiteBlock").css({'display': 'none'});
									});
								}
							});
						});
					});
				});
			});
		});
	});
};
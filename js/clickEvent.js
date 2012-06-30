$(function() 
{
	// OnCameraClickEvent
	$(".camera a").click( function() 
	{
		//Tracking
		var event = 'Camera';
		trackEventDuration(event);
		trackClicked(event);
		
		var angle = 0;
		onItemClick(angle);
		$("#camera a").css({'opacity': '1'});
		$("#web a").css({'opacity': '0.1'});
		$("#gift a").css({'opacity': '0.1'});
		$("#cameraDescription").css({'opacity': '1'});
	 	$("#webDescription").css({'opacity': '0'});
	 	$("#giftDescription").css({'opacity': '0'});
	 	$("#video a").css({'display': 'block'});
	});
	
	// OnWebClickEvent
	$(".web a").click( function() 
	{
		//Tracking
		var event = 'Web';
		trackEventDuration(event);
		trackClicked(event);
		
		var angle = 120;
		onItemClick(angle);
		$("#camera a").css({'opacity': '0.1'});
		$("#web a").css({'opacity': '1'});
		$("#gift a").css({'opacity': '0.1'});
		$("#cameraDescription").css({'opacity': '0'});
	 	$("#webDescription").css({'opacity': '1'});
	 	$("#giftDescription").css({'opacity': '0'});
	 	$("#video a").css({'display': 'none'});
	});
	
	// OnGiftClickEvent
	$(".gift a").click( function() 
	{
		//Tracking
		var event = 'Winner';
		trackEventDuration(event);
		trackClicked(event);
		
		var angle = 240;
		onItemClick(angle);
		$("#camera a").css({'opacity': '0.1'});
		$("#web a").css({'opacity': '0.1'});
		$("#gift a").css({'opacity': '1'});
		$("#cameraDescription").css({'opacity': '0'});
	 	$("#webDescription").css({'opacity': '0'});
	 	$("#giftDescription").css({'opacity': '1'});
	 	$("#video a").css({'display': 'none'});
	});
	
	// OnCloseClickEvent
	$(".close a").click( function() 
	{
		var ifr = parent.document.getElementById("youTubeframe");
		ifr.parentNode.removeChild(ifr);
	});
	
	function onItemClick(angle)
	{
		if (isIpad()) 
    	{
    		rotate(angle);
    	}
    	else  
    	{
    		fade(angle);
    	}
	 }
	 
	 function rotate(angle)
	 {
		$("#circleOfFeatures").css({'-webkit-transform': 'rotate('+ angle +'deg)'});
	 	$("#circleOfFeatures").css({'-webkit-transition': '-webkit-transform 0.5s ease-in'});	
	 }
	 
	 function fade(angle)
	 {
	 	if (angle == 0)
		{
			$("#feature1").css({'opacity' : '1'});
			$("#feature2").css({'opacity' : '0'});
			$("#feature3").css({'opacity' : '0'});
		}
		if (angle == 120)
		{
			$("#feature1").css({'opacity' : '0'});
			$("#feature2").css({'opacity' : '1'});
			$("#feature3").css({'opacity' : '0'});
		}
		if (angle == 240)
		{
			$("#feature1").css({'opacity' : '0'});
			$("#feature2").css({'opacity' : '0'});
			$("#feature3").css({'opacity' : '1'});
		}
	 }
	 
	 $(".video a").click( function() 
	 {
	 	stopTrackEventDuration();
	 	var width;
	 	var height;
	 	
	 	loadYouTubePlayer();
	 	
	 	if (isIpad())
	 	{
	 		width = 690;
	 		height = 760;
	 	}
	 	else
	 	{
	 		width = 350;
	 		height = 400;
	 	}

	 	this.popup = new Ext.Panel({
	 		floating: true,
	 		modal: true,
	 		centered: true,
	 		width: width,
	 		height: height,
	 		styleHtmlContent: true,
	 		scroll: 'vertical',
	 		contentEl: 'player',
	 		listeners: 
	 		{
	 			hide: 
	 			{
	 				fn: function()
	 				{ 	
	 					stopVideo();	
	 				}
	 			}
	 		}
                });
                 
            this.popup.show('pop');
           });
});
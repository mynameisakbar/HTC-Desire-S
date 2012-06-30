Ext.setup({
    onReady: function() {
    	
    	var topScreenHeight;
    	if (isIpad()) 
    	{
    		//screen size > 1024 x 768 
    		topScreenHeight = 650;
    	}
    	else  
    	{
    		//screen size < 1024 x 768
    		topScreenHeight = 410;
    		//Able fading effect
    		$("#circleOfFeatures").css({'display': 'none'});
    		$("#feature1").css({'opacity' : '1' , '-webkit-transition' : 'opacity 1s linear'});
    		$("#feature2").css({'opacity' : '0' , '-webkit-transition' : 'opacity 1s linear', 'display': 'block'});
    		$("#feature3").css({'opacity' : '0' , '-webkit-transition' : 'opacity 1s linear', 'display': 'block'});
    	}

    	//Top Screen
        var card = new Ext.Panel({
        	height: topScreenHeight,
        	styleHtmlContent: true,
        	contentEl: 'content',
        	cls: 'baseCss',
                });
        
        //Bottom Screen
        var entries = Ext.select('.entry');
        var cards = [];
        
        entries.each(function(entry) {
            cards.push({
            	cls: 'baseCss',
                contentEl: entry.dom
            });
        });
        
        var carousel1 = new Ext.Carousel({
        	cls: 'baseCss',
        	flex: 2,
            items: cards,
            listeners: 
	 		{
	 			cardswitch: 
	 			{
	 				fn: function()
	 				{ 		
	 					var currentCard = getCurrentCard(carousel1.getActiveIndex());
	 					trackSwipe(currentCard);
	 					trackEventDuration(currentCard);
	 				}
	 			}
	 		}
        });
        
        //Combine screen
        new Ext.Container({
        	fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            items: [card, carousel1]
        });
    }
});

function getCurrentCard(index)
{
	var nameOfCard;
	switch (index)
	{
		case 0:
		nameOfCard = 'WeatherAndClock';
		break;
		case 1:
		nameOfCard = 'People-Centric';
		break;
		case 2:
		nameOfCard = 'Homescreen';
		break;
		case 3:
		nameOfCard = 'Scenes';
		break;
		case 4:
		nameOfCard = 'FriendStream';
		break;
		case 5:
		nameOfCard = 'EasyReading';
		break;
		case 6:
		nameOfCard = 'FeedYourBrain';
		break;
		case 7:
		nameOfCard = 'AwkwardMoments';
		break;
		case 8:
		nameOfCard = 'MissedCalls';
		break;
		default: 
		nameOfCard = 'Unknow';
		break;
		}
		return nameOfCard;
}
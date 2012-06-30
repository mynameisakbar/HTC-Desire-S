var player;
var videoId = 'vtp4A5rVy_c';
var divTag = 'player';

function onYouTubePlayerAPIReady() 
{
	var height;
	var width;
	if (isIpad())
	{
		height = '390';
		width = '640';
	}
	else
	{
		height = '350';
		width = '300';
	}
	
	player = new YT.Player(divTag, 
	{
		height: height,
		width: width,
		videoId: videoId,
		events: 
        {
        	'onStateChange': onPlayerStateChange
        }
     });
}
      
	 
function onPlayerStateChange(event) 
{
	//Implementation
}

function getCurrentTime() 
{
	if (player) 
	{
		return player.getCurrentTime();
    }
}
	 
function stopVideo() 
{
	player.stopVideo();
	trackVideoDuration('HTC-Desire-S-Video',getCurrentTime());
}
      
function loadYouTubePlayer()
{
	var node = document.getElementById(divTag);
	if (node)
	{
		var ifr = parent.document.getElementById("script");
		var tag = document.createElement('script');
		tag.src = "lib/youTube/youTube.js";
	 	var firstScriptTag = document.getElementsByTagName('script')[0];
	 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	 }
}


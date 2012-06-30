var iPad;

function initStyleSheet()
{
	if (isIpad()) 
	{
		$("link[rel=stylesheet]:not(:first)").attr({href : "css/detectiPad.css"});
	}
	else  
	{
		$("link[rel=stylesheet]:not(:first)").attr({href : "css/detectGalaxy.css"});
	}
};

function isIpad()
{
	return iPad;
}

function detectDevice()
{
	iPad = ((screen.width>=768) && (screen.height>=1024)) || ((screen.height>=768) && (screen.width>=1024));
}
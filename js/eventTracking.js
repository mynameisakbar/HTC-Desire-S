var timeTracker;
var lastEvent;

/******** PUBLIC *******/
function trackEventDuration(event)
{
	if (!timeTracker)
	{
		recordStartTime(event);
	}
	else
	{
		recordEndTime(lastEvent);
		recordStartTime(event);
	}
}

function stopTrackEventDuration()
{
	if (timeTracker)
	{
		recordEndTime(lastEvent);	
		timeTracker = null;
	}
}

function trackVideoDuration(videoName, timeSpent)
{
	_gaq.push(['_trackEvent', 'Duration', 'Video', videoName, parseInt(timeSpent)]);
}


function trackClicked(event)
{
	_gaq.push(['_trackEvent', 'Elements', 'Clicked', event]);
}

function trackSwipe(event)
{
	_gaq.push(['_trackEvent', 'Elements', 'Swiped', event]);
}

/******** PRIVATE *******/
function recordStartTime(event)
{
	timeTracker = new TimeTracker();
	timeTracker._recordStartTime();
	lastEvent = event;
}

function recordEndTime(lastEvent)
{
	timeTracker._recordEndTime();
	var timeSpent = timeTracker._getTimeDiff() / 1000;
	_gaq.push(['_trackEvent', 'Duration', 'Event', lastEvent, parseInt(timeSpent)]);
}

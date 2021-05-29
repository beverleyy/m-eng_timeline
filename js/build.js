// Get the start and end dates, calculate time difference
var startDate = new Date("15 May 2021"),
	endDate = new Date("15 June 2022"),
	totalDiff = convertDays(endDate.getTime()-startDate.getTime());

// Get the current date, calculate time since start date
var currentDate = new Date();
var timeElapsed = convertDays(currentDate.getTime()-startDate.getTime());

// Calculate fraction of program time elapsed
// If fraction > 1, return 1
var frac = timeElapsed/totalDiff;
frac = (frac > 1) ? 1 : frac;

// Fill up the progress bar accordingly
document.querySelectorAll(".fill")[0].style.width=frac*100+"%";

// Highlight months that have started
var mths = document.querySelectorAll(".fill ~ li");
for (var i=1; i<=mths.length; i++){
	if (frac >= (2*i-1)/26)
		mths[i-1].style.color = "#fff";
}

// Convert seconds to days for simplicity
function convertDays(time){
	return time/(1000*3600*24);
}

// Tooltip
tippy('[title]',{
	arrow: true,
	followCursor: false,
	content(reference) {
		const title = reference.getAttribute('title');
		reference.removeAttribute('title');
		return title;
	},
	maxWidth: 300
});

// Horizontal scroll
var item = document.getElementsByTagName('main')[0];
window.addEventListener('wheel', function(e) {
	if (e.deltaY > 0) item.scrollLeft += 100;
	else item.scrollLeft -= 100;
});
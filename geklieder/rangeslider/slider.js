/* **********************************
This is the ONLY javascript you are
allowed to use in the CSSttR course.
For each input[type="range"] it adds
one or two data attributes to the 
<head> of the page. This way you can
change the style of anything on your
page when the slider changes.
attribute naming is as follows:
[data-s1-value] shows the actual 
value of the slider with [id="s1"]
[data-s1-X] divides the slider into
ten steps.
********************************** */

// const ranges = document.querySelectorAll('input[type=range]');
// const head = document.querySelector('head');

// ranges.forEach((range) => {
// 	range.addEventListener('input', () => {
// 		range.setAttribute('data-value', range.value);
// 		if (head) head.setAttribute(`data-value-${range.id}`, range.value);
// 	});
// 	range.dispatchEvent(new Event('input'));
// });

var ranges = document.querySelectorAll('[type=range]');
var head = document.querySelector('head');

var i = 0;
while (i < ranges.length) {
	ranges[i].addEventListener('input',function(){
		slide(this);
	});
	// also set attributes onload of page
	slide(ranges[i]);
	i++;
}

function slide(s){
	var sValue = s.value;
	var sId = s.id;

	head.setAttribute('data-'+sId+'-value',sValue);

	// Add an extra data-attr to divide the slider into 10 steps when there are 20 steps or more
	var sMax = s.max;
	if(sMax > 19) {
		var sDec = sMax/10;
		head.setAttribute('data-'+sId+'-X', Math.floor(sValue/sDec));
	}
}
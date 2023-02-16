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

const ranges = document.querySelectorAll('input[type=range]');
const head = document.querySelector('head');

ranges.forEach((range) => {
    range.addEventListener('input', () => {
        head.setAttribute(`data-value-${range.id}`, range.value);
    });
    range.dispatchEvent(new Event('input'));
});
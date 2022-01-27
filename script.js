// JQuery

// First step is to include it - 
// https://code.jquery.com 

//Typing jquery in the console will check if it's enabled - no error, no problem.

// The most common thing to do with jquery is selecting elements. 
// Using the function $:
// $("ul") acts like querySelectorAll: selects all ul elements - the function uses css selectors
// ("#todo-container") - querySelector id of todo-container
//$(".carousel-image") - querySelectorAll classname carousel-image
//The $ is an alias for a function called jQuery()
// It returns a collection of matched elements either found in the DOM based on passed arguemnts(s) or created by passing an HTML string.

// $('h1') - does not return a nodelist of h1, it returns a jQuery object;
//this is not the same as a DOM element.
//To turn a jQuery object into a DOM object, use .get():
// $('h1').get()
// $('h1').get(0) Would return the 0th instance of h1 as a DOM object.

// $('ul li') selects all lis inside of uls
// $('img') selects all images
// $('*') selects everything
// $('img:odd') would return the odd indices of imgs
// $('img:even') would return the odd indices of imgs

//jQuery has a ton of methods; some of most common:
// .val()
// .text()
// .attr()
// .html()

// Vanilla JS: .getAtribute(attrname) and .setAttribute(attrName, newValue)
// jQuery: .attr(attrName, newValue) (second param is optional)
// $('h1') selects h1
// $('h1').text() gets the text of the h1 (not the HTML)
// $('h1').text('VOLCANOOOO') sets h1 accordingly
// $('li').text() returns list of all li
// $('li').text('I AM LI') sets text of all li to I AM LI

// .html() gets innerHTML OR updates all matched
// $('li').html() gets innerhtml of *first match*
// $('li').html('<b>BOLD<b>') sets *all* li to BOLD in <b>

// .attr () get value of first el or set value of one or more el matching

// $('a') selects all anchor tags on page 
// $('a').attr('href', 'http://www.chickennuggets.com'); sets all a to new href
// You can update more than one attribute at the same time using an object

// const newAttrs = {src: 'https etc', alt: 'lava flow'}
// $('img').attr(newAttrs) //passes in the object
//There is no way to bulk set attributes in vanilla js

// .val() works on value property of inputs 
// $('input') selects all inputs
// $('input').eq(0) gets 0th input val 
// $('input').eq(1).val() chain
// $('input').eq(1).val('') sets to zero
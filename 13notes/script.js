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

//Styling
//$('a).css('color') retrieves value, even in a case like this where we are 
//retrieving a "computed style" - ie, a default that is not easily retrievable normally.
//Adding a second argument sets the style:
//$('a').css('font-size', '30px')

// const bigTealStyles = {'color': 'black', 'font-size': '40px'}

// $('a').css(bigTealStyles);

// Classes: 

// .highlight {
//     color: yellowgreen;
//     border: 2px solid salmon;
//     font-size: 20px;
// }

// $('h1').addClass('highlight')
// $('h1').removeClass('highlight')
// $('h1').toggleClass('highlight') //all on or all off

// Chaining: 
// Most jQuery methods return a jQuery object, which means you can continue to chain methods.

// const $h1 $('h1') //it's common to name jQuery variables with a dollar sign; not mandatory, but helpful
// $h1.addClass('highlight')
// $h1.css('background-color', 'teal');

// $('h1').css('background-color', 'purple').addClass('highlight').text('CHANING IS FUN!');

// Traversal:
// Given an element, finding target element. 
// .find() / .closest() / .parent() / .next() / .prev()

// const $specialLI $('li').eq(3) //single element
// $spcialLI.next() finds the next li
// $spcialLI.prev() finds the prev li
// next() and prev() can be used on a collection

// $spacielLI.parent() would give the UL

// $('ul').children() gives direct children (in this case li(s))
// $('ul').find() would search all the way down to see if something matches. 

// Creating elements: 
// VJS: document.createElement('h1') etc. 
// jQuery: $('ul').append('<li class="highlight">I AM NEW!!!</li>')
// $('li').append('<input type="checkbox">') appends a checkbox to *every* li
//Prepend is similar to append but puts -pended element at the beginning of the parent.

// $('<h1>') creates a new h1
// $('<h1>Hello!</h1>').css('color', 'orange') //creates appended h1 and styles it
// $('<h1>Hello!</h1>').css('color', 'orange').appendTo('p') appends h1 to every p

// $('li').after('<bold>HI</bold>') //Appends h1 after every li - which is a bad idea, but it's an example
// $('h1').remove() does exactly what you think

// Event delegation:

// $('img').click(function) {
//     alert('HELLO!')
// }

//Any clicked image will fire alert. No loops.

// .on(arg1, arg2)

// $('img').on('mouseleave', function(){
//     console.log('Leaving an image!')
// }) //logs when mouse leaves image area

// $('img').on('mouseleave', function(){
//     console.log(this.src)
// }) //logs source of image once left

// $('img').on('mouseenter', function(){
//     this.css('border, '5px solid red')
// }) //console: " this.css is not a function"
// //The problem above is "this" gives us a DOM node, not a jQuery object

// If we want a jQuery "this":
// $('img').on('mouseenter', function(){
//     $(this).css('border, '10px solid purple')
// })  

// $('img').on('click', function(){
//     $(this).remove();
// })  //would remove clicked image

// So why use on()?

// //First, if elements are dynamically added to a page, they don't have eventListeners
// //other similar elements already existing on the page have.

// $('#add-input').on('click', function(){
//     $('form').append('<input type="text"/>');
// })

// $('input').on('focus', function(){
//     $(this).val('BAMBOOZLED')
// })//This would not appear on the forms appended from the previous code above.

// // For example:
// //deletes a meme when it is clicked
// //even if it doesn't exist on page load

// document.getElementById("meme-container").addEventListener("click", function(evt) {
//     let target - evt.target;

// //checking for "meme" class on target
// //this logic would need to change a bit
// //if we were searching by something
// //else (eg tag name)

// if (target.classList.contains("meme")) {
//     deleteMeme(target);
// }
// });

// jQuery version:
// //deletes a meme when it is clicked
// //even if it doesn't exist on page load
// $("#meme-container").on("clcik", ".meme", function(evt) {
//     deleteMeme(evt.target);
// })

// $('form').on('focus', 'input', function(){
//     $(this).val('BAMBOOZLED');
// }) //here, 'this' refers to the actual input

// // jQuery animations:
// $('img').on('click', function(){
    
//     $(this).fadeOut();
    
//     //the img would still exist; you could not do:
//     $(this).fadeOut().remove(); because the remove would happen immediately
    
//     //but, we could do it as a callback to run after the fadeOut:
//     $(this).fadeOut(function(){
//         $(this).remove()
//     })
// })

// .animate() allows to pass in a list or object of properties

// Why you may not need jQuery:
// Nowadays the DOM API is much more standardized
// It doesn't do anything you can't do, though it does it SpeechRecognitionAlternative.

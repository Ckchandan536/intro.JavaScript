//accessing the second paragraph and adding text to the paragraph
document.getElementById("p1").innerHTML = "Hello JavaScript";
/* The innerHTML property sets or returns the HTML content (inner HTML) of an element */
// Example
/* let text = "Hello Dolly.";
document.getElementById("myP").innerHTML = text;
document.getElementById("myDIV").innerHTML = text;  */

//accessing the second paragraph and adding text color to it
document.getElementById("p1").style.color="red";

/* both single ('') quotes and double ("") quotes 
 are used to represent a string in javascript. 
 Choosing a quoting style is up to you and there is 
no special semantics for one style over the other. Nevertheless, 
it is important to note that there is no type for a single character
 in javascript, everything is always a string!

/*Note:- Whichever quoting style you open a string with, close it with the same style.
"apple' -> incorrect

Choosing the right quoting style
Wise selection of quoting can help you from escaping single (') or double(") quotes 
within a string. For example, if you wish to store a HTML snippet in a variable, 
you can use double quotes (") for HTML attribute values and use single quotes (') 
for enclosing the JavaScript string:

/*Pros
                      Single Quotes	                                  Double Quotes
 Better readability for empty strings (' ') looks     better than ("" "")	 In JSON the only quoting style allowed is double quotes (" ")
 Easier if you wish to write html within javascript	   Eliminates the need to escape apostrophes when writing   sentences in english

 *\
 /* Cons
    Single Quotes	                                  Double Quotes
  Not supported by JSON	            Must press an extra key (Shift)  when wanting to use double quotes */

  // accessing the first paragraph and modifying the font size of it
  document.getElementById("intro").style.fontSize="45px";
  // accessing the whole body elements of the HTML and adding thebackground color to it 
document.body.style.backgroundColor  = 'lightyellow';

// here no matter what we use [single (') or double ("") there is no change in desired output in the page]


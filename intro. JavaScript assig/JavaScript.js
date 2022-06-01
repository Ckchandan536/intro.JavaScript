/* HTML: Elements with unique id and no content.
    ●CSS: no styles.
    ●JS:
        ○ Access the HTML elements by using the getElementById()method and add content to the elements.
        ○ Add basic styles to the element either by using getElementById() method or by accessing the HTML body element.
*/


// accessing the whole body elements of the HTML and adding thebackground color to it
document.body.style.backgroundColor = "lightyellow";
// accessing the Heading and adding text to the paragraph
document.getElementById("heading").innerHTML = "JavaScript";

/* The innerHTML property sets or returns the HTML content (inner HTML) of an element */
// Example
/* let text = "Hello Dolly.";
document.getElementById("myP").innerHTML = text;
document.getElementById("myDIV").innerHTML = text;  */

//accessing the Heading and modifying the font size of it
document.getElementById("heading").style.fontSize = '35px';
// fontSize [S of Size must be in capital]

// accessing the 1st. paragraph and adding text to the paragraph
document.getElementById("p1").innerHTML = "JavaScript is a powerful, flexible, and fast programming language.";

// accessing the 2nd. paragraph and adding text to the paragraph
document.getElementById("p2").innerHTML = "JavaScript powers the dynamic behavior on websites.";

// accessing the 3rd. paragraph and adding text to the paragraph
document.getElementById("p3").innerHTML = "JavaScript remains at the core of web development.";

// accessing the 1st. paragraph and adding text color to it
document.getElementById('p1').style.color='red';
// accessing the 2nd. paragraph and adding text color to it
document.getElementById('p2').style.color='blue';
// accessing the 3rd. paragraph and adding text color to it 
document.getElementById('p3').style.color='green';
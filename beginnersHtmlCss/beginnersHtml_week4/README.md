Week 3 HTML Course - CoderDojoGirls @ DCU
Aim
This week we targeted the following areas

Introduce classes versus ID.
Introduce padding.
Introduce position

How do you add the following, and what are they for?

html
head
body
link
Add a header
Add an image
Add a paragraph with text
Color the background
An ID
div
margin
border

The ID and Class allow us to select distinct elements.
An ID is used to specify a style for a single unique element, in CSS it uses #.

The class is used to specify a style for a group of elements. 
Unlike the id selector, the class selector is most often used on several elements.
In css it uses a .

Example:
.videoSize{
width:300px;
height:300px;
}

Padding
The padding clears a space between the border and the content.

Example
padding:50px;

Position
Position can be tricky! Position allows you to position an element.
There are 4 settings:
fixed //is positioned relative to the browser, it never moves 
static
relative //is positioned relative to its normal position
absolute //is positioned elative to the parent, if no parent the <html> is parent

iframe#videoOnePosition{
position:relative;
left:200px;
top:200px;
}

h1#logoHeader{
text-align:center;
position:relative; // this -70 pixels from its normal position
top:-70;
color:white;
}
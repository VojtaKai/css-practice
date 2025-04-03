Grid is used for tabular-like layouts.

HTML basic revision
nav 
aside - for side bar
main - all your content
footer

## Grid Properties
display: grid

grid-template-columns: size size size ..., Width of each column. How many sizes you specify, that many columns you will get. Width of each column
- fr - units - strech and squeeze as necessary

grid-template-areas: array of string, used to specify which column and row will be filled by which element. each string represents a row and the area names of the elements you want in that row and a specific column.
    to the actual elements you have to set property grid-area: name-you-want

grid-template-columns: size size size, height of each row.
- fr - unit - strech and squeeze as necessary

Video inspiration:
- [Grid](https://youtu.be/S9OiWe5iBYo?si=hkDFzExqH70tTL2D)
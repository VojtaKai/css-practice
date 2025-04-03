Flexbox is a container that aligns and orders elements inside.
Flexbox is particularily useful for responsive design.

main axis - in a way of flex direction
cross axis - perpendicular to main axis

justify-content - always tethered to the main axis - to move the elements along the main axis
align-items - always tethered to the cross axis - to move the elements along the cross axis

flex-direction - very important, other properties are affected by the change of this property because it sets the main and cross axes. Default value: row 

gap 
- create a gap between your items in the direction of both axis
- replaces margins inside the flexbox layout
- column-gap - for main axis
- row-gap - for cross axis

flex-wrap
- "wrap" or "no wrap"
- wrap moves elements to the next line if viewport gets too small
- no wrap - all elements with be smooshed if viewport gets too small

align-content
- when you have multiple lines of elements, each line has its own main axis
- use to adjust spacing between the rows
- default value: space around


-----

Flexbox element's properties
flex-shrink - default is 1, meaning, shrink is enabled, switch to 0 to disable shrink which might lead to overflow - use flex wrap or hide overflow. You can give higher number for an element, e.g. 3 1 1, the first element will shrink 3 times faster than the other two though it is not very common.
    - works well with min-width

flex-grow - default is 0, meaning, they are not allowed to grow. Switch to an integer to allow growth. The strech is equally divided between the elements if all set to 1, if the proportions go like this 2 1 1, the first element takes twice as much from the gap as the rest
    - works well with max-width

align-self - works like align-items but instead on the container (parent) element, it is specified on the child element

margin-right: auto - separates the element from other elements in a row | same for margin-left



Video inspiration:
- [Flexbox](https://youtu.be/wsTv9y931o8?si=MMpjie5qsP5q9iZj)
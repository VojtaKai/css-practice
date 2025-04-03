# Queries
Media and container queries apply different styling when certain conditions are met.

## Media queries
@media () { ... }

Media query usecases
- if dark mode on
- min- / maxwidth
- modes: screen, print, orientation: landscape | portrait or all (screen is default)
- for and use "and" to chain conditions
- for or use ", " (a comma) between the conditions
[DOCS](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features)

## Container queries
@container () { ... }
- you don't specify any name, it will pick up on all containers automatically
- allows you to specify behavior in a component subview. Media queries always work with the viewport but if you are trying to style a component that is stacked in the right column of two column grid, you want to use container. If you don't understand what I mean, play the second video.
- you have to select the new viewport - the component you are interested in
    - add property: container-type: inline-size (width only, typically want you need) | size (look into height and width)

# Video inspiration:
- [Media queries - width, print, orientation](https://youtu.be/yU7jJ3NbPdA?si=R8ztnDPJZpvGTgFQ)
- [Container queries](https://youtu.be/2rlWBZ17Wes?si=T1KAlJZCACMncfmL&t=728)
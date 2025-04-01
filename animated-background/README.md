Animations vs. Transitions
- if you need a simple transition between two states, use transition. 
- Transitions are typically used with hover or active pseudo classes.
- Animations are used for more complex transitions. More granual control.

Animations are used for:
- transitions with more than 2 states
- something continually repeating
- something continually running in the background

Define Animations
@keyframes <animation-name> {
    animation-name: spin
    animation-duration: number in s
    animation-timing-function: linear, ease, ease-in, ease-out, ease-in-out
    animation-delay: number is s
    animation-direction: 
        - normal - from start to end, from 0% to 100%
        - reverse - from end to start, from 100% to 0%
        - alternate - it goes from start to end and end back to start, 0% -> 100% -> 0%
    animation-iteration-count: number, infinite
    animation-fill-mode: 
        - forwards - this will STOP the animation at the last keyframe (lasting effect on the element, otherwise the elements will return back to its inital state like the animation never happened)
        - backwards - stops at the first keyframe
        - none
        - both - start with the exactly defined properties in the 0 keyframe, end with the exactly defined properties in the last keyframe
    animation-play-state: (allows user to interact with the element in animation, you can add the animation-play-state to a hover for example)
        - running 
        - paused
}

Video inspiration:
- [Animated background](https://youtu.be/qx7pSLjLNQA?si=0-YhZMUUCrCqPU5U)
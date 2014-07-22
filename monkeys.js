ddgdsgdsgs



displaying content
positioning elements
creating animations
handling events


build custom views
structure a famo.us app using nested views
use the lightbox
emit and listen for events



AppView - the app view is the top level view and contains the camera surface
and the slideshow view.

SlideshowView - The slideshow view will control the display our our slides.
It will contain a lightbox which will animate the slide views in and out.

SlideView - The slide view will contain the surfaces that make up the polaroid
photographs. When a slide is clicked, the event will be passed to the slideshow
view to trigger the lightbox transition.

// dealing with issues from xcode / swift set up
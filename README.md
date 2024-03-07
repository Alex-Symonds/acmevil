# Acmevil Home Page
Small, quick project to design and make a homepage for a fictional company.

## Project goals
- Design and develop a company homepage, for portfolio purposes
- Use some [AI art](https://creator.nightcafe.studio/) in a project
- Gain more experience with vector art for icons
- Dip my toes in Angular

## Why I made it like this
- Subtitle Saga
  - The subtitle is an SVG to keep the text decorations (i.e. the halo and demon bits) correctly positioned relative to the text
  - It's broken into two SVGs because responsiveness required wrapping [[SVG 1](https://github.com/Alex-Symonds/acmevil/blob/main/src/assets/images/subtitle-with-decorations-white-pt1.svg)] [[SVG 2](https://github.com/Alex-Symonds/acmevil/blob/main/src/assets/images/subtitle-with-decorations-white-pt2.svg)]
  - The text is converted to paths because otherwise Safari starts getting "clever ideas" about the font
- Used AI art for the images in the "Other Services" sections and for part of the hero image (the laptop's display)
- Created my own vector icons for [death ray](https://github.com/Alex-Symonds/acmevil/blob/main/src/assets/images/deathray.svg), [computer virus](https://github.com/Alex-Symonds/acmevil/blob/main/src/assets/images/virus.svg) and [magical](https://github.com/Alex-Symonds/acmevil/blob/main/src/assets/images/magic.svg)


## Things I'd do differently with more time
- Learn and implement better ways of handling content in Angular (I suspect real Angular devs would look at this and cry)
- Make a second page, so the links have something to link to. The second page would contain a message chastising the user for expressing interest in supervillainy, with a customised message depending on which link you clicked
- Go further still: design and build an entire fake website for this fake company. Product pages, a catalogue page, customer testimonials, etc. etc.
- Go even further still: add a backend with a fake shop connected to a fake database




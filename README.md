#Cartos

A web-application to create data-visualizations on an SVG map of India both
programmatically and manually. 

*Sample use case*: Say you want to show a visualization of literacy rates of
different states in the country. You enter the literacy percentages in 
text-fields and (optionally) provide color-coded spectrum ranges and cartos will
compute the colors and will it in accordingly.

## The map

The map is essentially an SVG image which needs to be loaded onto an HTML 
app. At the moment, only a few states have been outlined. For the proof of
concept, we needn't add any more states.

For referring to states, use this [reference][1].

## The application

The application will be a simple HTML file with associated javascript programs
and stylesheets. For deployment, we will use gh-pages. Once we are comfortable
with a release, we will merge the master branch onto gh-pages and that shall 
serve as our 'prod' server.

## Vendor libraries

I am open to use any library. I haven't yet tried out backbone.js and would like
to try that out, but if you have better suggestions, keep them coming.

[1]: http://en.wikipedia.org/wiki/List_of_Indian_States_and_Union_Territories_by_two-letter_codes

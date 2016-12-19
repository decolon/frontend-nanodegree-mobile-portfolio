# Mobile Portfolio

## How to install
* Clone the repo you are currently looking at
* If you don't have it, download chrome [here](https://www.google.com/chrome/browser/desktop/index.html?brand=CHBD&gclid=CjwKEAiA94nCBRDxismumrL83icSJAAeeETQ-d3MxlvL5DJA8Li-ICOASrywx0w7ySeUCc8Mz8kp_BoCmpvw_wcB)
* Install [node.js](https://nodejs.org/en/download/) if you dont have it already
* Install grunt-cli if you dont have it already `sudo npm install -g grunt-cli`
* Install [Imagemagick](https://www.imagemagick.org/script/binary-releases.php) and [Graphicsmagick](http://www.graphicsmagick.org/download.html) if you dont have them already
* Use the Terminal to go into the cloned repos root directory
* Execute `npm install` in the repos root directory
* Execute `grunt onChange` in the repos root directory
* Cd to the newly created /dist folder.
* Execute `python -m SimpleHTTPServer`
* Use another tab of the Terminal to go into the cloned repos /dist folder and execute `./ngrok http 8000`
* Copy the link from the ngrok window
* Go to [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/) and paste the link from the previous step
* Press 'Analyze' to see how the site does
* Open a new tab in chrome and go to localhost:8000
* Navigate around the site

## Optimizations

### Index.html
* Inlined all top of page styles
* Marked print style with media tag
* Minified everything I could (.css, .js. images, etc.)
* Made image sizes more reasonable

### views/js/main.js
* Got rid of Layout Thrashing code
* Only did calculations the number of times required

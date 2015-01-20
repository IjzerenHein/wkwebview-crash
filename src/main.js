define(function(require) {

    //<webpack>
    require('famous-polyfills');
    require('famous/core/famous.css');
    require('./index.html');
    //</webpack>

    // import dependencies
    var Engine = require('famous/core/Engine');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Timer = require('famous/utilities/Timer');

    // create the main context
    var mainContext = Engine.createContext();

    // The following code creates an ImageSurface every second
    // with the intend of crashing the WkWebView.WebContent process.
    Timer.setInterval(function() {
      console.log('creating surface...');
      var surface = new ImageSurface({
        content: require('./oldmap.jpg')
      });
      var mod = new Modifier({
        transform: Transform.translate(0, 0, 0)
      });
      mainContext.add(mod).add(surface);
    }, 1000);
});

/**
 * WallTransition
 * --------
 *
 * WallTransition is a method of transitioning between two values (numbers,
 * or arrays of numbers) with a bounce. Unlike a SpringTransition
 * The transition will not overshoot the target, but bounce back against it.
 * The behavior of the bounce is specified by the transition options.
 *
 * In this example, there is a surface attached to a WallTransition.
 */
define(function(require, exports, module) {
    var Engine         = require("famous/core/Engine");
    var Surface        = require("famous/core/Surface");
    var Modifier       = require("famous/core/Modifier");
    var Transform      = require("famous/core/Transform");
    var Transitionable = require("famous/transitions/Transitionable");
    var WallTransition = require("famous/transitions/WallTransition");


    // create the main context
    var mainContext = Engine.createContext();

    var surface = new Surface({
        size:[100,100],
        content: 'Click Me',
        classes: ['red-bg'],
        properties: {
            textAlign: 'center',
            lineHeight: '100px'
        }
    });

    var modifier = new Modifier({
        origin: [.5,.5],
        transform: Transform.translate(0,-240,0)
    });

    Transitionable.registerMethod('wall', WallTransition);

    var transition = {
        method: 'wall',
        period: 1000,
        dampingRatio : 0,
        velocity: 0,
        restitution : .5 //how bouncy the wall is
    };

    surface.on("click", function(){
        modifier.setTransform(Transform.translate(0,0,0),transition);
    });

    mainContext.add(modifier).add(surface);
});


//umd pattern

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        //commonjs
        module.exports = factory(require('./css-elements'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['./css-elements'], factory);
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.elliptical.cssElements);
    }
}(this, function (css) {

    document.addEventListener('WebComponentsReady', function () {
       css.register();
    });

}));
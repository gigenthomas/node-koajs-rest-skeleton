"use strict";

(function () {

    /**
     * @module controllers/langController
     */
    module.exports = {
        index : function* (options) {
            console.log('Hello world defaultController & index action with options: ' +JSON.stringify(options));
        }
    };
}());
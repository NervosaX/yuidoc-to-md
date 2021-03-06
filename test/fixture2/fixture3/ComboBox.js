/**
@module ian
*/

/**
The description for SindBox
@class SindBox
@extends Object
@uses clive.txt
@uses hater.txt
@constructor
@param arg1 {String} arg1 description
@param arg2 {Number} arg2 description
*/
function SindBox(arg1, arg2){
    
    /**
    @property someProp
    @type String
    @default "whatever"
    @example this.someProp = "val";
    */
    this.someProp = "whatever";
}

/**
@method methodA
@param {String} str A string
@param {Number} num A number
@return {Number} return val
@chainable
*/
SindBox.prototype.methodA = function(){};

/**
@method methodB
@param {Object} options An options hash
    @param {String} options.one First thing
    @param {Number} options.two Second thing
@return {Boolean} return val
*/
SindBox.prototype.methodB = function(){};

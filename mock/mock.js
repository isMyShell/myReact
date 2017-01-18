var list = require('./list.json');
var  way=require('./way.json');
module.exports = function() {
    return {
        "list": list,
        "way":way
    };
};

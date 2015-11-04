var streamWhen = require("stream-when");

exports = module.exports = function (child, streamName){
  var stream = child[streamName || "stdout"];

  return function(tester, answer){
    return streamWhen(stream, tester).then(function(){
      child.stdin.write(answer);
    });
  };
};

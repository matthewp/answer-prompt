var answerPrompt = require("../answer-prompt");
var spawn = require("child_process").spawn;
var promisify = require("promise-child");
var test = require("tape");

test("Can answer prompts", function(t){
  t.plan(2);

  var child = spawn("node", [__dirname + "/tests/name.js"]);

  child.stdout.setEncoding("utf8");
  child.stdout.on("data", function(data){
    if(data.indexOf("first_name: 'Matthew'") >= 0) {
      t.pass("Answers finished");
    }
  });

  var answer = answerPrompt(child);

  answer(/first name/, "Matthew\n");

  promisify(child).then(function(){
    t.pass("All done");
  });
});

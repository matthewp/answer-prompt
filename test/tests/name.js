var inquirer = require("inquirer");

var questions = [{
  type: "input",
  name: "first_name",
  message: "What's your first name"
}];

inquirer.prompt(questions, function(answers){
  console.log("answers are", answers);
  process.exit(0);
});

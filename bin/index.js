#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log("................................... Well Come to the Word Counter ...................................\n");
startAgain();
async function start() {
    await inquirer.prompt([{
            type: "input",
            name: "strings",
            message: "Please Enter any Paragraph"
        }]).then((answers) => {
        //console.log(`You Enter the Following String : ${answers.string.replace(/\s/g, "")}`)
        console.log(chalk.greenBright(`Total words in the Paragraph are : ${chalk.yellowBright(WordCount(answers.strings))}`));
        console.log(chalk.greenBright(`Total Character in this paragraph are : ${chalk.yellowBright(answers.strings.replace(/\s/g, "").length)}`));
    });
}
async function startAgain() {
    do {
        await start();
        console.log("\n");
        var option = await inquirer.prompt([{
                type: "input",
                message: chalk.green("Press Y to Continue .........."),
                name: "question",
            }]);
    } while (option.question == "y" || option.question == "Y" || option.question == "YES" || option.question == "yes" || option.question == "Yes");
}
;
function WordCount(str) {
    return str.split(" ").length;
}

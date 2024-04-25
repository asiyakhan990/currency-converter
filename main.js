//CLI Currency converter by Asiya Khan with inquirer & chalk.
import inquirer from 'inquirer';
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to Asiya Khan - Currency Converter\n"));
// Define the list of currencies and their exchange rates.
const currency = {
    USD: 1,
    EUR: 0.91,
    JYP: 0.76,
    CAD: 74.57,
    PKR: 280,
    AUD: 1.65, // Austaralian Dollar
};
// Prompt the user to select currencies to convert from and to 
let userAnswer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.yellow("Enter from Currency:"),
        type: 'list',
        choices: ['USD', 'EUR', 'JYP', 'CAD', 'PKR', 'AUD']
    },
    {
        name: 'to',
        message: chalk.yellow("Enter To Currency:"),
        type: 'list',
        choices: ['USD', 'EUR', 'JYP', 'CAD', 'PKR', 'AUD']
    },
    {
        name: 'amount',
        message: chalk.yellow("Enter Your Amount:"),
        type: 'number'
    }
]);
// Perfom currency conversion by using formula
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
// Formula of conversion.
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
// Display the converted amount
console.log(chalk.yellow(`Your converted Amount is: = ${chalk.green.bold(convertedAmount.toFixed(0))}`));

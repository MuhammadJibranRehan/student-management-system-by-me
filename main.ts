#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let mybalance=0;
console.log(chalk.cyanBright("                -----------------------------------            "));
console.log(chalk.cyanBright("                | WELCOME TO INSTITUTE OF M.jibran |           "));
console.log(chalk.cyanBright("                -----------------------------------            "));

const studentId:number= Math.floor(10000 + Math.random() * 90000);
let question=await inquirer.prompt(
    {
        name:"q1",
        message:chalk.italic.cyanBright("ASALAMUALIKUM SIR!\n ARE YOUR HERE TO BE ENROLL"),
        type:"confirm",
        default:true
    }
);
console.log(chalk.green(question.q1));
console.log(chalk.italic.cyanBright("\n STUDENT ID:"),chalk.underline.yellowBright(studentId));


let answer= await inquirer.prompt(
    [
        {
            name:"student",
            message:chalk.italic.cyanBright("ENTER STUDENT NAME"),
            type:"input",
            validate: function(value){
                if(value.trim()!=="")
                    return true;
                return chalk.underline.red("PLEASE ENTER VALID NAME!!")

            },
        },
        {
            name:"courses",
            message:chalk.italic.cyanBright("SELECT THE COURSE YOU WANT TO ENROLL."),
            type:"list",
            choices:["Typescript","Python","Php","Html","Css","GraphicDesigner"]  
        }
    ]   
)
console.log(chalk.italic.cyanBright("\nSTUDENT NAME:"),chalk.underline.yellowBright(answer.student));
console.log(chalk.italic.cyanBright("\nYOUR SELECTED COURSE IS:"),chalk.underline.yellowBright(answer.courses));

const tutionFee:{[key:string]:number}={
    "Typescript":20000,
    "Python":25500,
    "Php":25000,
    "Html":15000,
    "Css":8000,
    "GraphicDesigner":27500
}
console.log(chalk.italic.cyanBright("\n TUTION FEES:"),`${tutionFee[answer.courses]}`);
;

console.log(chalk.italic.cyanBright("BALANCE:"),chalk.underline.yellowBright(mybalance));

let paymentMethod=await inquirer.prompt(
    [
        {
            name:"payment",
            message:chalk.italic.cyanBright("\nWHICH PAYMENT METHOD YOU WOULD LIKE TO SELECT.\n"),
            type:"list",
            choices:[chalk.underline("Meezan Bank"),chalk.underline("AL-Habib"),chalk.underline("Islamic Bank"),chalk.underline("NBP"),chalk.underline("Alied Bank")]
        },
        {
            name:"amount",
            message:chalk.italic.cyanBright("\n TRANSFER THE SELECTED COURSE FEES.\n"),
            type:"input",
            validate:function(value){
                if((value)!="")
                    return true;
                return chalk.underline.red("PLEASE ENTER VALID AMOUNT")
            }
        }
    ]
);
console.log(chalk.italic.cyanBright("\nYOUR SELECTED PAYMENT MEHTOD IS:"),chalk.underline.yellowBright(paymentMethod.payment),chalk.italic.cyanBright("\n FEES COLLECTED:"),chalk.underline.yellowBright(paymentMethod.amount));
const tutionFees=tutionFee[answer.courses]
const paymentAmount=parseFloat(paymentMethod.amount);

if(tutionFees===paymentAmount){
    console.log(chalk.italic.cyanBright(` CONGRATULATIONS! YOUR ARE ENROLLED TO OUR ${chalk.underline.yellowBright(answer.courses)} COURSE.`));
}
else{
    console.log(chalk.underline.red("\n INVALID AMOUNT DUE TO COURSE "));   
};
    let studentAns=await inquirer.prompt(
        [
            {
                name:"operation",
                message:chalk.italic.cyanBright("\n WHAT WOULD YOU LIKE TO DO NOW? "),
                type:"list",
                choices:[chalk.underline("View Status"),chalk.underline("Exit")]
            }
        ]
    )
    if(studentAns.operation=== chalk.underline("View Status")){
        console.log(chalk.underline.magentaBright("\n   | STATUS |    "))
        console.log(chalk.italic.cyan(`STUDENT NAME:${chalk.underline.yellowBright(answer.student)}`));
        console.log(chalk.italic.cyan(`STUDENT ID:${chalk.underline.yellowBright(studentId)}`));
        console.log(chalk.italic.cyan(`COURSE NAME:${chalk.underline.yellowBright(answer.courses)}`));        
        console.log(chalk.italic.cyan(`FEES PAID:${chalk.underline.yellowBright(tutionFees)}`));
        console.log(chalk.italic.cyan(`BALANCE:${chalk.underline.yellowBright(mybalance+=paymentAmount)}`));
    }
    else{
console.log(chalk.italic.magentaBright("\n      |  EXITING THE STUDENT MANAGEMENT SYSTEM. |       "));
    };
        console.log(chalk.cyanBright("         ---------------------------------------------           "));
        console.log(chalk.cyanBright("         |THANK YOU FOR COMING TO M.jibran's INSTITUTE|           "));
        console.log(chalk.cyanBright("         ---------------------------------------------            "));







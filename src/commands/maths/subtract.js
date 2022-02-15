module.exports = {
    name: 'subtract' ,
    commands: ['subtract' , 'sub'] ,
    // aliases: ['sub'] ,
    // minArgs: 2 ,
    // maxArgs: 2 ,
    description: 'Subtracts two numbers' ,
    callback: (message , arguments , text) => {
        const num1 = +arguments[0];
        const num2 = +arguments[1];

        message.reply(`${num1} - ${num2} = ${num1 - num2}`);
    }
}
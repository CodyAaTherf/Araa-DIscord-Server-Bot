module.exports = {
    name: 'divide' ,
    commands: ['divide' , 'div'] ,
    // minArgs: 2 ,
    // maxArgs: 2 ,
    description: 'Divides two numbers' ,
    callback:(message , arguments , text) => {
        const num1 = +arguments[0];
        const num2 = +arguments[1];

        message.reply(`${num1} / ${num2} = ${num1 / num2}`);
    }
}
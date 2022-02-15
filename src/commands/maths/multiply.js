module.exports = {
    name: 'multiply' ,
    commands: ['multiply' , 'multi'] ,
    // minArgs: 2 ,
    // maxArgs: 2 ,
    description: 'Multiplies two numbers' ,
    callback:(message , arguments , text) => {
        const num1 = +arguments[0];
        const num2 = +arguments[1];

        message.reply(`${num1} x ${num2} = ${num1 * num2}`);
    }
}
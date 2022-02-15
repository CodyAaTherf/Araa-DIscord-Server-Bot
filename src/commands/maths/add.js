module.exports = {
    name: 'add' ,
    commands: ['add' , 'addition'] ,
    // minArgs: 2 ,
    // maxArgs: 2 ,
    description: 'Add two numbers' ,
    callback:(message , arguments , text) => {
        const num1 = +arguments[0];
        const num2 = +arguments[1];

        message.reply(`${num1} + ${num2} = ${num1 + num2}`);
    }
}
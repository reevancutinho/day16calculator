//get result id and store it in display
let display = document.getElementById('result');

//get class button and store it in variable buttons
let buttons = Array.from(document.getElementsByClassName('button'));

//On click of every button below events will get triggered
buttons.map(button => {
    button.addEventListener('click', (e) => {
        //swicth condition for different type of buttons, like when C is pressed first case will get satisfied 
        //and result will get cleared from the result
        switch (e.target.innerText) {
            //When below case is matched it will clear the result.
            case 'C':
                display.innerText = '';
                break;
                //When below = case is matched it will evaluate the expression
            case '=':
                try {
                    //eval() is a inbuilt function which is used to evaluate expression
                    display.innerText = eval(display.innerText);
                } catch {
                    //If the expression is not correct then error message will be displayed
                    display
                    .innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            //below default case will get executed if none of the above cases will get satisfied
            default:
                display.innerText += e.target.innerText;
        }
    });
});
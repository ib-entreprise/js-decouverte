let form = document.querySelector('form'); 
let op = form.querySelector('#operation');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let val1 = parseInt(e.target.val1.value);
    let val2 = parseInt(e.target.val2.value);
    let operation = op.value; 
    let result;
    switch (operation) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            if (val2 !== 0) {
                result = val1 / val2;
            } else {
                alert("Division par zéro impossible!");
                return; 
            }
            break;
        default:
            alert("Opération non valide");
            return;
    }

    alert(val1 + " " + operation + " " + val2 + " = " + result);
});

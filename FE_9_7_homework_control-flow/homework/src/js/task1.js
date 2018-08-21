let login = prompt(`Login`, ``);
let password;
const date = new Date().getHours();
if (login === null) {
    alert(`Canceled`);
    } else if (login.length < 4){
    alert(`I don't know any users having name length less then 4 symbols`);
    } else if (login !== `User`) {
        alert(`I don't know you`);
    } else if (login === `User`) {
        password = prompt(`Password`, ``);
    }

    if (password === null || password.length === 0) {
        alert(`Canceled`);
    } else if (password === `SuperUser` && date < 20){
        alert(`Good day!`);
    } else {
        alert(`Good evening!`)
}
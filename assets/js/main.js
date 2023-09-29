let result = document.getElementById('input');

function DeleletElement() {
    result.value= result.value.slice(0,-1);
}
function ClearAll() {
    result.value= ''
}
function Display(n) {
    result.value += n;
}
function Equal() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value= "Wrong input"
    }
}
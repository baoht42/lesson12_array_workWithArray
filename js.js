let x = 0;
let array = Array();
function add(){
    array[x]= document.getElementById("txtValue").value;
    alert(`Element: ${array[x]} Added ${x} `);
    x++;
    document.getElementById("txtValue").value="";
}
function display(){
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;

}
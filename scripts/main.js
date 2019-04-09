


// document.querySelector("html").onclick = function () {
//
//     alert("别碰我，我怕疼！");
//
// }
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/xiaoke.jpg'){
        myImage.setAttribute("src","images/prettygirl.png");
    } else {
        myImage.setAttribute('src','images/xiaoke.jpg');
    }

}

function setHeading(name) {
    let myHeading = document.querySelector("h1");
    myHeading.textContent = '唐小可小猫咪欢迎' + name + '!'

}

function setUsername() {
    let myName = prompt('请输入你的名字！');
    localStorage.setItem('name',myName);
    setHeading(myName);

}

let storedName = localStorage.getItem('name');
if (!storedName){
    setUsername();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUsername();


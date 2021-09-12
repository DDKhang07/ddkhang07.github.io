let bmodalv1 = document.getElementById("myModalv1");
let bmodalv2 = document.getElementById("myModalv2");
let bclose = document.getElementsByClassName("close")[0];
let blogin = document.getElementById("lg");
let flogin = document.querySelector("#myModalv1 > form > div:nth-child(1) > button");
let bcancel = document.querySelector("#cancel > button");
let ava2 = document.querySelector("body > header > div.login-area > img:nth-child(2)");
let ava1 = document.querySelector("body > header > div.login-area > img:nth-child(1)");
let bcancelv2 = document.querySelector("#myModalv2 > form > div.sign-cancel > button:nth-child(2)");
let bsignup = document.querySelector("#sg");
let bclosev2 = document.querySelector("#myModalv2 > form > div.containerv1 > span");
let bsubsign = document.querySelector("#sign");

ava2.style.display = "none";
bmodalv1.style.display = "none";
bmodalv2.style.display = "none";


bclose.onclick = function (el) {
    bmodalv1.style.display = "none";
}
bcancel.onclick = function (el) {
    bmodalv1.style.display = "none";
}
blogin.onclick = function (el) {
    bmodalv1.style.display = "block";
}
bcancelv2.onclick = function (el) {
    bmodalv2.style.display = "none";
}
bsignup.onclick = function (el) {
    bmodalv2.style.display = "block";
}
bclosev2.onclick = function (el) {
    bmodalv2.style.display = "none";

}

let join = { username: "abcde", pass: 12345 };
// var user_data= [
//     join
// ];
var v = [0];
flogin.onclick = function (v) {
    let u = document.getElementById("user-name").value;
    let p = document.getElementById("user-pass").value;
    if (u != join.username || p != join.pass) {
        alert("TÊN ĐĂNG NHẬP HOẶC MẬT KHÂU KHÔNG ĐÚNG");
    }
    else if( u == join.username && p == join.pass){
        v[0]=1;
        alert("ĐĂNG NHẬP THÀNH CÔNG");
    }
}
// alert(v);
if (v[0]==1){
    ava2.style.display = "block";
    ava1.style.display = "none";
}
bsubsign.onclick = function () {
    let u = document.getElementById("user-name2").value;
    let p = document.getElementById("user-pass2").value;
    let rp = document.getElementById("repeat-pass").value;
    if (u == join.username) {
        alert("TÊN TÀI KHOẢN ĐÃ ĐƯỢC SỬ DỤNG");
    }
    else if (u != join.username && u != undefined) {
        if (p == rp && p != undefined) {
            alert("TẠO TÀI KHOẢN THÀNH CÔNG");
            ava2.style.display = "block";
            ava1.style.display = "none";
        }
        else {
            alert("MẬT KHẨU XÁC NHẬN KHÔNG TRÙNG KHỚP");
        }
    }
}










console.log("Hello Cybersoft");

/**
 * Biến
 */
// string
var username = "Dinh Phuc Nguyen";
var address = "112 Cao Thang";

// number
var age = 18;

// boolean
var status = false;

var numberStudent = null;

// undefined
var people;
console.log(people);

var firstName = "Dinh";
var last__Name = "Nguyen"

var lop = "FE56";
// console.log("Ten la: " + username);
// console.log("Dia chi: " + address);
// console.log(username, address);

//hoisting
console.log("fullname: " + fullName);
var fullName = "Nguyen Van A";

isLogin = true;
console.log("isLogin", isLogin);

const PI = 3.14;
/**
 * câu lệnh điều kiện
 */
// == so sánh giá trị
if (1 == "1") {
    console.log("Dieu kien dung");
} else {
    console.log("Dieu kien sai");
}

// === so sánh giá trị và kiểu dữ liệu
if (1 === "1") {
    console.log("Dieu kien dung");
} else {
    console.log("Dieu kien sai");
}

// toán tử 3 ngôi: DK ? "đúng" : "sai"
console.log(1 == "1" ? true : false);
console.log(1 === "1" ? true : false);
1 === "1" ? console.log("DK dung") : console.log("DK sai");
var btA = true;
var btB = false;
console.log("Ket qua &&: ", btA && btB);
console.log("Ket qua ||:", btA || btB);
console.log("Phu dinh cua btA", !btA);
switch (0) {
    case 0:
        console.log("Day la so 0");
        break;
    case 1:
        console.log("Day la so 1");
        break;
    case 2:
        console.log("Day la so 2");
        break;
    default:
        console.log("Khong xac dinh");
        break;
}

var list = ["Nguyen", "Tay", "Long", "Nam"];
console.log(list[0]);
// vòng lập
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;

var total = number_1 + number_2;
console.log("tong la: ", total);
var total2 = number_3 + number_4;
console.log("tong la: ", total2);

/**
 * Hàm
 */
// function tinhTong() {
//     var sum = number_1 + number_2;
//     console.log("sum là: ", sum);
// }

// function tinhTong34(number_3, number_4) {
//     var sum = number_3 + number_4;
//     console.log("sum là: ", sum);
// }
// tinhTong();
// tinhTong34(number_1, number_2);

/**
 * hàm ko có giá trị trả về
 */
// function tinhTong(a, b) {
//     var sum = a + b;
//     console.log("sum la: ", sum);
// }
// tinhTong(number_1, number_2);
// tinhTong(number_3, number_4);
/**
 *  hàm có giá trị trả về
 */
function tinhTong(a, b) {
    var sum = a + b;
    return sum;
}
var total = tinhTong(tinhTong(50, 50), 100);
console.log("tong la:", tinhTong(50, 50));



/**
 * (Bài tập tính điểm trung bình): toan ly hoa
 * dtb= (toan+ly+hoa) /3
 * xep loai
 * + 9->10 => xuất sắc
 * + 8->9  => Giỏi
 * + 7->8  => khá
 * + 5->6  => TB
 * + Yeu
 * => tinhDTB; Xep_loai
 */
function tinhDTB(a, b, c) {
    return (a + b + c) / 3;
}

function xepLoai(dtb) {
    var loai = "";
    if (9 <= dtb && dtb <= 10)
        loai = "Xuat sac";
    else if (8 <= dtb && dtb < 9)
        loai = "gioi";
    else if (7 <= dtb && dtb < 8)
        loai = "khá";
    else if (5 <= dtb && dtb < 6)
        loai = "TB";
    else {
        loai = "Yeu";
    }
    console.log("Loai la:", loai);
}
xepLoai(tinhDTB(8, 9, 8));

/**
 * DOM
 */
/**
 * cách 1
 */
// var txtInput = document.getElementById("txtInput").value;
// console.log(txtInput);
// var _pText = document.getElementById("pText");
// console.log(_pText.innerHTML);

// function eventClick() {
//     console.log("eventClick");
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }
/** 
 * cách 2
 */
// document.getElementById("btnClick").onclick = function() {
//     var txtInput = document.getElementById("txtInput").value;
//     console.log(txtInput);
// }

/**
 * Cach 3 - callback function
 */
// document.getElementById("btnClick").addEventListener("click", function() {
//     var txtInput = document.getElementById("txtInput").value;
//     console.log(txtInput);
// })

function demoClick() {
    var txtInput = document.getElementById("txtInput").value;
    console.log(txtInput);
}
document.getElementById("btnClick").addEventListener("click", demoClick);

document.getElementById("btnNhanEmdi").addEventListener("click", function() {
    document.getElementById("divContent").innerHTML = "Thay đổi rồi nhé";
    document.getElementById("divContent").style.backgroundColor = "aqua";
    document.getElementById("divContent").style.fontSize = "40px";
})
document.getElementById("btHide").addEventListener("click", function() {
    document.getElementById("divContent").style.display = "none";
})
document.getElementById("btnShow").addEventListener("click", function() {
    document.getElementById("divContent").style.display = "block";
})
document.getElementById("btnDisable").addEventListener("click", function() {
    if (document.getElementById("btnNhanEmdi").disabled == true)
        document.getElementById("btnNhanEmdi").disabled = false;
    else
        document.getElementById("btnNhanEmdi").disabled = true;
})
document.getElementById("btnBullon").addEventListener("click", function() {
    document.getElementById("imgBulb").src = "./imgs/pic_bulbon.gif";
})
document.getElementById("btnBulloff").addEventListener("click", function() {
    document.getElementById("imgBulb").src = "./imgs/pic_bulboff.gif";
})
document.getElementById("login").addEventListener("click", function() {
    /**
     * Lấy thông tin usernam & password từ người dùng nhập vap2
     */
    var user = document.getElementById("textUser").value;
    var pass = document.getElementById("textPass").value;
    if (user === "cybersoft" && pass === "cybersoft") {
        console.log("login thanh cong");
        changeColor2("login thanh cong", "alert alert-success");
    } else {
        console.log("login that bai");
        changeColor2("login that bai", "alert alert-danger");
    }
})

function changeColor(mess, bg) {
    document.getElementById("textNoun").innerHTML = mess;
    document.getElementById("textNoun").style.display = "block";
    document.getElementById("textNoun").style.backgroundColor = bg;
    document.getElementById("textNoun").style.color = "white";
}

function changeColor2(mess, classes) {
    document.getElementById("textNoun").innerHTML = mess;
    document.getElementById("textNoun").className = classes;
    document.getElementById("textNoun").style.display = "block";
}

var tagName = document.getElementsByTagName("button")[0];
console.log(tagName);

var _className = document.getElementsByClassName("btn")[0];
console.log(_className);

/**
 * DOM querySelector
 */
var _querySelector = document.querySelector(".container #textNoun");
console.log = _querySelector;
/**
 * DOM querySelectorALL
 */
var _querySelectorALL = document.querySelectorAll(".container .form-group");





document
    .querySelector("#btnTinhTienTip")
    .addEventListener("click", function() {
        var txtTongTien = document.getElementById("txtTongTien").value;
        var txtPhanTramTip = document.getElementById("slPhanTramTip").value;
        var txtSoNguoi = document.getElementById("txtSoNguoi").value;
        /**
         * CT = txtTongTien * txtPhanTramTip / 100 / txtSoNguoi
         */
        var total = txtTongTien * txtPhanTramTip / 100 / txtSoNguoi;

        document.getElementById("txtThongBaoTienTip").innerHTML = total + "$mỗi người";
        document.getElementById("txtThongBaoTienTip").className = "alert alert-danger d-block";
    })
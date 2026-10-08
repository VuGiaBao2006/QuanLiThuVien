// TÌM KIẾM SÁCH
function timKiemSach() {

    let tuKhoa = document.getElementById("timKiem").value.toLowerCase();

    let bang = document.getElementById("bangSach");

    let dong = bang.getElementsByTagName("tr");

    for (let i = 1; i < dong.length; i++) {

        let tenSach = dong[i].getElementsByTagName("td")[1];

        if (tenSach.innerText.toLowerCase().includes(tuKhoa)) {
            dong[i].style.display = "";
        } else {
            dong[i].style.display = "none";
        }
    }
}


// THÊM SÁCH
function themSach() {

    document.getElementById("formSach").style.display = "block";
}


// LƯU SÁCH
function luuSach() {

    let ma = document.getElementById("maSach").value;
    let ten = document.getElementById("tenSach").value;
    let tacGia = document.getElementById("tacGia").value;
    let theLoai = document.getElementById("theLoai").value;
    let soLuong = document.getElementById("soLuong").value;

    // Kiểm tra bỏ trống
    if (ma == "" || ten == "" || tacGia == "" || theLoai == "" || soLuong == "") {

        alert("Vui lòng nhập đầy đủ thông tin!");

        return;
    }

    // Kiểm tra số lượng âm
    if (soLuong < 0) {

        alert("Số lượng không được âm!");

        return;
    }

    // Kiểm tra mã sách trùng
    let bang = document.getElementById("bangSach");

    let dong = bang.getElementsByTagName("tr");

    for (let i = 1; i < dong.length; i++) {

        let maCu = dong[i].getElementsByTagName("td")[0].innerText;

        if (maCu == ma) {

            alert("Mã sách đã tồn tại!");

            return;
        }
    }

    // Thêm dòng mới
    let dongMoi = bang.insertRow();

    dongMoi.insertCell(0).innerText = ma;
    dongMoi.insertCell(1).innerText = ten;
    dongMoi.insertCell(2).innerText = tacGia;
    dongMoi.insertCell(3).innerText = theLoai;
    dongMoi.insertCell(4).innerText = soLuong;

    // Trạng thái
    if (soLuong > 0) {
        dongMoi.insertCell(5).innerText = "Còn sách";
    } else {
        dongMoi.insertCell(5).innerText = "Hết sách";
    }

    // Nút Sửa và Xóa
    dongMoi.insertCell(6).innerHTML =
        '<button onclick="suaSach(this)">Sửa</button> ' +
        '<button onclick="xoaSach(this)">Xóa</button>';

    alert("Thêm sách thành công!");

    // Xóa dữ liệu trong ô nhập
    document.getElementById("maSach").value = "";
    document.getElementById("tenSach").value = "";
    document.getElementById("tacGia").value = "";
    document.getElementById("theLoai").value = "";
    document.getElementById("soLuong").value = "";
}


// SỬA SÁCH
function suaSach(nut) {

    let dong = nut.parentElement.parentElement;

    let tenMoi = prompt("Nhập tên sách mới:");

    if (tenMoi != null && tenMoi != "") {

        dong.cells[1].innerText = tenMoi;

        alert("Sửa sách thành công!");
    }
}


// XÓA SÁCH
function xoaSach(nut) {

    let xacNhan = confirm("Bạn có chắc muốn xóa sách này không?");

    if (xacNhan == true) {

        let dong = nut.parentElement.parentElement;

        dong.remove();

        alert("Xóa sách thành công!");
    }
}
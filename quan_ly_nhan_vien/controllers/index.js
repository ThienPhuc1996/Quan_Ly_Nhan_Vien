
var mangNhanVien = [];
var kiemTra = new Validation();
document.querySelector("#btnXacNhan").onclick = function () {
  //Khi người dùng click vào xác nhận thì tạo đối tượng lấy thông tin người dùng nhập
  var nv = new NhanVien();
  nv.maNhanVien = document.querySelector("#maNhanVien").value;
  nv.tenNhanVien = document.querySelector("#tenNhanVien").value;
  nv.chucVu = document.querySelector("#chucVu").value;
  nv.luongCanBan = document.querySelector("#luongCanBan").value;
  nv.soGioLam = document.querySelector("#soGioLam").value;

  console.log("nv", nv);
  var valid = true;
  //Kiểm tra rỗng
  valid = valid &
    kiemTra.kiemTraRong(nv.maNhanVien, "#error_required_maNhanVien") &
    kiemTra.kiemTraRong(nv.tenNhanVien, "#error_required_tenNhanVien") &
    kiemTra.kiemTraRong(nv.luongCanBan, "#error_required_luongCanBan") &
    kiemTra.kiemTraRong(nv.soGioLam, "#error_required_soGioLam");
  //Kiểm tra ký tự
  valid &= kiemTra.kiemTraKyTu(nv.tenNhanVien, "#error_all_letter_tenNhanVien");
  //Kiểm tra tất cả là số
  valid &=
    kiemTra.kiemTraTatCaSo(nv.luongCanBan, "#error_all_number_luongCanBan") &
    kiemTra.kiemTraTatCaSo(nv.soGioLam, "#error_all_number_soGioLam");
  //Kiểm tra độ dài
  valid &= kiemTra.kiemTraDoDai(nv.maNhanVien,"#error_min_max_length_maNhanVien",4,6);
  // Kiểm tra lương
  valid &= kiemTra.kiemTraLuong(nv.luongCanBan,"#error_min_max_length_luongCanBan",1_000_000,20_000_000);
  //Kiểm tra giá trị
  valid &= kiemTra.kiemTraGiaTri(
    nv.soGioLam,
    "#error_min_max_value_soGioLam",50,150);

  if (valid != true) {
    return;
  }

  //Đưa đối tượng sinh viên vào mảng
  mangNhanVien.push(nv);
  console.log("mangNhanVien", mangNhanVien);
  renderTableNhanVien(mangNhanVien);
}


// Xếp loại nhân viên
function xepLoaiNhanVien(){
  var gioLam = document.querySelector('#soGioLam').value;
    if(gioLam >= 150){
        return 'Nhân viên xuất sắc';
    }
    else if(gioLam <= 150, soGioLam >= 100){
        return 'Nhân viên khá';
    }
    else if(gioLam <= 100, soGioLam >= 50){
        return  'Nhân viên trung bình';
    }
    else{
        return 'Nhân viên tệ';
    }
}
xepLoaiNhanVien();
renderTableNhanVien(mangNhanVien);

function renderTableNhanVien(mangNhanVien) {
  var sHTML = "";
  for (var index = 0; index < mangNhanVien.length; index++) {
    //Mỗi lần duyệt lấy ra 1 sinh viên
    var nhanVien = mangNhanVien[index];
    sHTML += `
            <tr>
                <td>${nhanVien.maNhanVien}</td>
                <td>${nhanVien.tenNhanVien}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.luongCanBan}</td>
                <td>${nhanVien.soGioLam}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVien.maNhanVien}')" > Xoá </button>
                    <button class="btn btn-primary ml-2" onclick="suaNhanVien('${nhanVien.maNhanVien}')"> Chỉnh sửa</button>
                </td>
            </tr>
        `;
  }
  document.querySelector("#tbNhanVien").innerHTML = sHTML;

  // Tính lương
  var Nv = new NhanVien();
  Nv.maNhanVien = NhanVien.maNhanVien;
  Nv.tenNhanVien = NhanVien.tenNhanVien;
  Nv.chucVu = NhanVien.chucVu;
  Nv.luongCanBan = NhanVien.luongCanBan;
  Nv.soGioLam = NhanVien.soGioLam;
   function tinhTongLuong  () {
    var total = Nv.luongCanBan * Nv.soGioLam;
    document.querySelector("#tongLuong").innerHTML = total;
  };
  tinhTongLuong();

  // Tạo table
  var trNhanVien = document.createElement("tr");

  var tdMaNhanVien = document.createElement("td");
  tdMaNhanVien.innerHTML = Nv.maNhanVien;

  var tdTenNhanVien = document.createElement("td");
  tdTenNhanVien.innerHTML = Nv.tenNhanVien;

  var tdChucVu = document.createElement("td");
  tdChucVu.innerHTML = Nv.chucVu;

  var tdLuongCanBan = document.createElement("td");
  tdLuongCanBan.innerHTML = Nv.luongCanBan;

  var tdTongLuong = document.createElement("td");
  tdTongLuong.innerHTML = Nv.tongLuong;

  var tdSoGioLam = document.createElement("td");
  tdSoGioLam.innerHTML = Nv.soGioLam;

  trNhanVien.appendChild(tdMaNhanVien);
  trNhanVien.appendChild(tdTenNhanVien);
  trNhanVien.appendChild(tdChucVu);
  trNhanVien.appendChild(tdLuongCanBan);
  trNhanVien.appendChild(tdTongLuong);
  trNhanVien.appendChild(tdSoGioLam);

  document.querySelector("#tbNhanVien").appendChild(trNhanVien);
}
renderTableNhanVien(mangNhanVien)

//Lưu nhân viên vào localstorage
function luuNhanVienStorage() {
  //Chuyển đổi mảng nhân viên thành string => lưu vào localstorage
  var sMangNhanVien = JSON.stringify(mangNhanVien);
  var sTenNhanVien = JSON.stringify(sTenNhanVien);
  var sChucVu = JSON.stringify(sChucVu);
  var sLuongCanBan = JSON.stringify(sLuongCanBan);
  var sSoGioLam = JSON.stringify(sSoGioLam);

  //Lưu storage
  localStorage.setItem("mangNhanVien", sMangNhanVien);
  localStorage.setItem("tenNhanVien", sTenNhanVien);
  localStorage.setItem("chucVu", sChucVu);
  localStorage.setItem("luongCanBan", sLuongCanBan);
  localStorage.setItem("soGioLam", sSoGioLam);
}

//Lấy localstorage
function layNhanVienStorage() {
  //Kiểm tra xem có storage đó không
  if (localStorage.getItem("mangNhanVien")) {
    var sMaNhanVien = localStorage.getItem("mangNhanVien",sMaNhanVien);
    var sTenNhanVien = localStorage.getItem("mangNhanVien");
    var sChucVu = localStorage.getItem("mangNhanVien");;
    var sLuongCanBan = localStorage.getItem("mangNhanVien");;
    var sSoGioLam = localStorage.getItem("mangNhanVien");;
    //Biến đổi chuỗi thành object
    mangNhanVien = JSON.parse(sMaNhanVien);
    mangNhanVien = JSON.parse(sTenNhanVien);
    mangNhanVien = JSON.parse(sChucVu);
    mangNhanVien = JSON.parse(sLuongCanBan);
    mangNhanVien = JSON.parse(sSoGioLam);
    //Từ mảng tạo ra table
    renderTableNhanVien(mangNhanVien);
  }
 
}
layNhanVienStorage();
renderTableNhanVien(mangNhanVien);
luuNhanVienStorage();

function suaNhanVien(maNhanVienClick) {
  //Duyệt mảng tìm ra sinh viên bấm nút sửa
  for (var index = 0; index < mangNhanVien.length; index++) {
    //Mỗi lần duyệt lấy ra 1 object kiểm tra mã sinh viên
    var nhanVien = mangNhanVien[index];
    if (nhanVien.maNhanVien === maNhanVienClick) {
      //Tìm thấy => gán dữ liệu của sinh viên đó lên các thẻ input
      document.querySelector("#maNhanVien").value = nhanVien.maNhanVien;
      document.querySelector("#tenNhanVien").value = nhanVien.tenNhanVien;
      document.querySelector("#chucVu").value = nhanVien.chucVu;
      document.querySelector("#luongCanBan").value = nhanVien.luongCanBan;
      document.querySelector("#soGioLam").value = nhanVien.soGioLam;
    }
  }
}
suaNhanVien();
renderTableNhanVien(mangNhanVien);
luuNhanVienStorage();

// button tìm kiếm
document.querySelector("#btnTimKiem").onclick = function () {
  //Lấy ra từ khoá người dùng nhập vào
  var tuKhoa = document.querySelector("#tuKhoa").value;
  //.trim(): Loại bỏ khoảng trống đầu và cuối của chuỗi
  //.toLowerCase(): Biến đổi tất cả các chữ cái in hoá của chuỗi thành chữ thường
  //.toUpperCase(): Biến đổi tất cả các chữ cái thường thành hoa
  tuKhoa = tuKhoa.trim().toLowerCase();
  //output là 1 mảng nhân viên tên có chứa từ khoá
  var mangNVTimKiem = [];
  for (var index = 0; index < mangNhanVien.length; index++) {
    var nhanVien = mangNhanVien[index];
    if (nhanVien.tenNhanVien.trim().toLowerCase().search(tuKhoa) !== -1) {
      mangNVTimKiem.push(nhanVien);
    }
  }
  renderTableNhanVien(mangNVTimKiem);
};

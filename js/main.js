// bài 1
var ten = document.getElementById('hoTen')
var tongThu = document.getElementById('tongNam')
var nguoiPT = document.getElementById('soPT')

var kq1 = document.getElementById('ketQua1')



function tinh1() {
    var a = ten.value
    var b = tongThu.value
    var c = nguoiPT.value
    var tongChiuThue = b - 4e+6 - c * 1.6e+6
    var thueTra = 0
    function tinhThueTra(x, y, z) {
        if (tongChiuThue > x) {
            if (tongChiuThue <= y) {
                thueTra += parseFloat(tongChiuThue - x) * z / 100
            } else {
                thueTra += parseFloat(y - x) * z / 100
            }
        }
    }
    tinhThueTra(0, 60e+6, 5); // 3tr
    tinhThueTra(60e+6, 120e+6, 10); // 6tr
    tinhThueTra(120e+6, 210e+6, 15); // 13,5tr
    tinhThueTra(210e+6, 384e+6, 20); // 34,8 tr
    tinhThueTra(384e+6, 624e+6, 25); // 60 tr
    tinhThueTra(624e+6, 960e+6, 30); // 100,8 tr
    tinhThueTra(960e+6, 2 / 0, 35);
    console.log(thueTra.toLocaleString('vi-VN'));
    kq1.innerHTML = "-Họ và Tên : " + a + "<br>-Tổng thu nhập chịu thuế : " + tongChiuThue.toLocaleString('vi-VN') + " VNĐ" + "<br>-Tiền Thuế phải Trả : " + thueTra.toLocaleString('vi-VN') + " VNĐ"
}
// bài 2
var maKH = document.getElementById('maKH')
var soKN = document.getElementById('soKN')
var soKenh = document.getElementById('soKenh')
var doanhNghiep = document.getElementById('checkDoanhNghiep')
var nhaDan = document.getElementById('checkNhaDan')
function tinh2() {
    var loaiKH
    var tongHoaDon = 0;
    if (doanhNghiep.checked) {
        loaiKH = "Doanh Nghiệp"
    } else if (nhaDan.checked) {
        loaiKH = "Nhà Dân"
    }
    switch (loaiKH) {
        case "Doanh Nghiệp":
            var phiKN = 0;
            if(soKN.value>0){
                if(soKN.value<=10){
                    phiKN = soKN.value * 7.5
                }else{
                    phiKN = 75 + (soKN.value - 10)*5
                }
            }
            tongHoaDon = 15 + phiKN + soKenh.value*50
            break;
        case "Nhà Dân":
            tongHoaDon = 4.5 + 20.5 + soKenh.value*7.5
            break;
        default:
            break;
    }
    document.getElementById('ketQua2').innerHTML = "Mã : "+maKH.value+"<br>Loại Khách Hàng : "+loaiKH+"<br>Tổng Thanh Toán : "+tongHoaDon.toLocaleString('en-IN')+" $ "
}
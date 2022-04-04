function kiemtra() {
  var loi = "";
  // kiểm tra tên  truy cập
  var tentc = document.getElementById("tentruycap");
  if (tentc.value == "") {
    tentc.className = "loi";
    loi += "Tên truy cập không được bỏ trống";
  } else if (tentc.value.length > 30) {
    tentc.className = "loi";
    loi += "Tên truy cập không được quá 30 kí tự";
  } else {
    tentc.className = "txt";
  }
  //kiểm tra  mật khẩu
  var loi1 = "";
  var password = document.getElementById("matkhau");
  if (password.value == "") {
    password.className = "loi";
    loi1 += "Mật  khẩu không được bỏ trống";
  } else if (password.value.length > 30) {
    password.className = "loi";
    loi1 += "Mật không được quá 30 kí tự";
  } else {
    password.className = "txt";
  }
  //kiểm tra  mật khẩu nhập lại
  var loi2 = "";
  var password_again = document.getElementById("password_again");
  if (password_again.value != password.value) {
    password_again.className = "loi";
    loi2 += "Mật  khẩu nhập không trùng khớp";
  } else if ((password_again.value = "")) {
    password_again.className = "loi";
    loi2 += "Mật khẩu không được bỏ trống";
  } else {
    password_again.className = "txt";
  }
  // kiểm tra email
  var loi3 = "";
  var email = document.getElementById("email");
  if (email.value == "") {
    email.className = "loi";
    loi3 += "Email không được bỏ trống";
  } else {
    email.className = "txt";
  }

  // kiểm tra số điện thoại
  var loi4 = "";
  var number_phone = document.getElementById("number_phone");
  if (number_phone.value == "") {
    number_phone.className = "loi";
    loi4 += "Số điện thoại không được bỏ trống";
  } else if (!validatePhoneNumber(number_phone.value)) {
    number_phone.className = "loi";
    loi4 += "Số điện thoại không hợp lệ";
  } else {
    number_phone.className = "txt";
  }
  // điểu  khoản sử dụng
  var loi5 = "";
  var check_box = document.getElementById("check_box");
  if (check_box.checked == false) {
    check_box.className = "loi";
    loi5 += "Đọc kĩ và đồng ý với điều khoản dịch vụ";
  } else {
    check_box.className = "txt";
  }
  //   check
  if (loi.length > 0) {
    document.getElementById("baoloi").innerHTML = loi;
  }
  if (loi1.length > 0) {
    document.getElementById("baoloi1").innerHTML = loi1;
  }
  if (loi2.length > 0) {
    document.getElementById("baoloi2").innerHTML = loi2;
  }
  if (loi3.length > 0) {
    document.getElementById("baoloi3").innerHTML = loi3;
  }
  if (loi4.length > 0) {
    document.getElementById("baoloi4").innerHTML = loi4;
  }
  if (loi5.length > 0) {
    document.getElementById("baoloi5").innerHTML = loi5;
  }
  var accept_account = document.getElementById("accept_account");
  var login = "login.html";
  var total_loi = loi + loi1 + loi2 + loi3 + loi4 + loi5;
  if (total_loi.length == 0) {
    accept_account.href = login;
    var result = confirm("Tạo tài khoản thành công.Quay lại đăng nhập");
    if (result == false) {
      Event.preventDefault();
    }
  } else if(total_loi.length > 0){
    // Event.stopPropagation();
    accept_account.href = "#";
  }
}
function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return re.test(input_str);
}

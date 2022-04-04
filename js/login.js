function kiemtra() {
  var loi = "";
  // kiểm tra tên  truy cập
  var tentc = document.getElementById("tentruycap");
  if (tentc.value == "") {
    tentc.className = "loi";
    loi += "Nhập tên truy cập";
  } else {
    tentc.className = "txt";
  }
  //   kiểm tra mật khẩu
  var loi1 = "";
  var matkhau = document.getElementById("matkhau");
  if (matkhau.value == "") {
    matkhau.className = "loi";
    loi1 += "Nhập mật khẩu";
  } else {
    matkhau.className = "txt";
  }
  //   check
  if (loi.length > 0) {
    document.getElementById("baoloi").innerHTML = loi;
  }
  if (loi.length > 0) {
    document.getElementById("baoloi1").innerHTML = loi1;
  }
  var accept_account = document.getElementById("accept_login");
  var account = matkhau.value + tentc.value;
  if (tentc.value === "admin" && matkhau.value === "admin") {
    alert("Đăng nhập thành công");
  } else if (
    account > 0 &&
    tentc.value !== "admin" &&
    matkhau.value !== "admin"
  ) {
    document.getElementById("baoloi2").innerHTML =
      "Mật khẩu hoặc tài khoản không chính xác";
    // accept_account.href = "#";
  }else if(account.length==0)
  {
    accept_account.href = "#";
  }
}

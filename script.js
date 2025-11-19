function goTo(page) {
  window.location.href = page;
}

// عکس پروفایل
function selectProfile() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("profileImg").src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  input.click();
}

// رفتن به صفحه ۳ فقط اگر پر باشد
function goToPage3() {
  let name = document.getElementById("name").value.trim();
  let family = document.getElementById("family").value.trim();

  if (!name || !family) {
    alert("لطفاً نام و نام خانوادگی را کامل کنید.");
    return;
  }

  goTo("page3.html");
}

// تبدیل شرط صفحه ۳
function makeExpression() {
  let set = document.getElementById("knownSet").value;
  let cond = document.getElementById("condition").value.trim();

  if (!set || !cond) {
    alert("کامل کنید");
    return;
  }

  cond = cond.replace(/بزرگتر مساوی/g, "≥")
             .replace(/کوچکتر مساوی/g, "≤")
             .replace(/بزرگتر/g, ">")
             .replace(/کوچکتر/g, "<")
             .replace(/مساوی/g, "=");

  document.getElementById("mathResult").innerText = `{ x ∈ ${set} | ${cond} }`;
}

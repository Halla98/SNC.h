const userNameInput = document.getElementById("userName");
const addNameBtn = document.getElementById("addNameBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const downloadBtn = document.getElementById("downloadBtn");

const img = new Image();
img.src = "design.png";  // تأكد من أن هذه الصورة موجودة في نفس المجلد

img.onload = function () {
    // ضبط حجم الـ canvas بناءً على حجم الصورة الأصلية
    canvas.width = img.width * 0.85;  // تكبير بسيط
    canvas.height = img.height * 0.85;

    // رسم الصورة داخل الـ canvas بعد تحميلها
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function drawCanvas(name = "") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0); // رسم التصميم في الخلفية

    if (name) {
        ctx.font = "27.88px 'Tajawal', sans-serif"; // استخدام خط تجوال
        ctx.fillStyle = "#2BB673";
        ctx.textAlign = "center";
        
        // تعديل قيمة y لرفع النص
        ctx.fillText(name, canvas.width / 2, canvas.height - 250); // رفع النص درجتين
    }
}

addNameBtn.addEventListener("click", function () {
    const name = userNameInput.value.trim();
    if (!name) {
        alert("الرجاء إدخال اسمك!");
        return;
    }
    drawCanvas(name);
});

// تحميل الصورة
downloadBtn.addEventListener("click", function () {
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "EidCard.png";
    link.click();
});

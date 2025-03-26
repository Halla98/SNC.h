const userNameInput = document.getElementById("userName");
const addNameBtn = document.getElementById("addNameBtn");
const downloadBtn = document.getElementById("downloadBtn");

const canvas = document.getElementById("certificateCanvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "design.png"; // استخدم اسم الصورة الصحيح

img.onload = function () {
    // ضبط حجم الـ canvas بناءً على حجم الصورة الأصلية
    canvas.width = img.width * 0.85;  // تكبير بسيط
    canvas.height = img.height * 0.85;

    // رسم الصورة داخل الـ canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function drawCanvas(name = "") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // رسم التصميم في الخلفية

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

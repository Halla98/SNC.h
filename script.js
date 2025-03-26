const userNameInput = document.getElementById("userName");
const addNameBtn = document.getElementById("addNameBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const downloadBtn = document.getElementById("downloadBtn");

const img = new Image();
img.src = "design.png"; // تأكد من المسار الصحيح للصورة

img.onload = function () {
    // ضبط حجم الـ canvas بناءً على حجم الصورة الأصلية
    canvas.width = img.width * 0.85;  // تكبير بسيط
    canvas.height = img.height * 0.85;

    // رسم الصورة داخل الـ canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

    if (name) {
        ctx.font = "30px 'Tajawal', sans-serif";  // تكبير الخط إلى 30px
        ctx.fillStyle = "#2BB673";  // اللون الأخضر للاسم
        ctx.textAlign = "center";
        
        // تعديل قيمة y لرفع النص قليلاً
        ctx.fillText(name, canvas.width / 2, canvas.height - 230);  // رفع النص عن مكانه
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

// تحميل الصورة بعد إضافة الاسم
downloadBtn.addEventListener("click", function () {
    const link = document.createElement('a');
    link.download = 'eidcardsnc';  // اسم الصورة عند تحميلها
    link.href = canvas.toDataURL("png");
    link.click();
});

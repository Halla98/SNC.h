const userNameInput = document.getElementById("userName");
const addNameBtn = document.getElementById("addNameBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const downloadBtn = document.getElementById("downloadBtn");

const img = new Image();
img.src = "design.png"; // تأكد من صحة المسار

img.onload = function () {
    console.log("الصورة تم تحميلها بنجاح");
    canvas.width = img.width;  
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function drawCanvas(name = "") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // التأكد من بقاء الحجم كما هو

    if (name) {
        ctx.font = "40px 'Tajawal', sans-serif";  // زيادة حجم الخط
        ctx.fillStyle = "#2BB673";  // اللون الأخضر للاسم
        ctx.textAlign = "center";
        
        // إنزال النص قليلاً للأسفل
        ctx.fillText(name, canvas.width / 2, canvas.height - 200);  
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
    link.download = 'eidcardsnc.png';  
    link.href = canvas.toDataURL("image/png");
    link.click();
});

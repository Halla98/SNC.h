
const userNameInput = document.getElementById("userName");
const addNameBtn = document.getElementById("addNameBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const downloadBtn = document.getElementById("downloadBtn");

const img = new Image();
img.src = "design.png";  
img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    drawCanvas(); 
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

downloadBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.download = "تصميمي.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});
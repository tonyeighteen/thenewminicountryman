
const scriptURL = 'https://script.google.com/macros/s/AKfycbyJWanztllobeFnd3cCdmFobPNzuBC0C44LGL0o5Ll2dFZpsBrTUxdBL78VLusZn93mbw/exec'; // Replace with your Web App URL

document.getElementById("eventForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        showroom: document.getElementById("showroom").value,
        time: document.getElementById("time").value,
    };

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();

        if (result.status === 'success') {
            document.getElementById("successPopup").style.display = "flex";
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
});

    function closePopup() {
        document.getElementById("successPopup").style.display = "none";
    }

    function scrollToForm() {
        document.getElementById("registration-form").scrollIntoView({ behavior: "smooth" });
    }



const translations = {
    en: {
        "header-title": "Experience the New MINI Countryman U25",
        "header-desc": "Join our exclusive launch event at one of our 6 showrooms across Vietnam.",
        "cta": "Reserve Your Spot Now",
        "features-title": "What Awaits You at the Event",
        "feature1-title": "Live Demonstrations",
        "feature1-desc": "See the MINI Countryman U25 in action and discover its dynamic performance.",
        "feature2-title": "Exclusive Test Drive",
        "feature2-desc": "Be among the first to get behind the wheel and feel the thrill.",
        "feature3-title": "Meet Our Experts",
        "feature3-desc": "Learn about the car's features directly from our specialists.",
        "form-title": "Secure Your Spot Today!",
        "form-name-label": "Full Name",
        "form-email-label": "Email Address",
        "form-phone-label": "Phone Number",
        "form-showroom-label": "Select Showroom",
        "form-time-label": "Preferred Event Time",
        "form-submit": "Register Now",
        "success-message": "Thank you for registering! See you at the event!",
        "success-close": "Close",
        "showroom1": "Showroom 1",
        "showroom2": "Showroom 2",
        "time-morning": "Morning",
        "time-afternoon": "Afternoon"
    },
    vi: {
        "header-title": "Trải nghiệm MINI Countryman U25 mới",
        "header-desc": "Tham gia sự kiện ra mắt độc quyền tại 6 showroom trên khắp Việt Nam.",
        "cta": "Đặt chỗ ngay",
        "features-title": "Những điều đặc biệt tại sự kiện",
        "feature1-title": "Biểu diễn trực tiếp",
        "feature1-desc": "Xem MINI Countryman U25 hoạt động và khám phá hiệu suất ấn tượng.",
        "feature2-title": "Lái thử độc quyền",
        "feature2-desc": "Là người đầu tiên cầm lái và cảm nhận sự phấn khích.",
        "feature3-title": "Gặp gỡ chuyên gia",
        "feature3-desc": "Tìm hiểu về các tính năng của xe từ các chuyên gia của chúng tôi.",
        "form-title": "Đăng ký ngay hôm nay!",
        "form-name-label": "Họ và tên",
        "form-email-label": "Địa chỉ email",
        "form-phone-label": "Số điện thoại",
        "form-showroom-label": "Chọn showroom",
        "form-time-label": "Thời gian yêu thích",
        "form-submit": "Đăng ký ngay",
        "success-message": "Cảm ơn bạn đã đăng ký! Hẹn gặp bạn tại sự kiện!",
        "success-close": "Đóng",
        "showroom1": "Showroom 1",
        "showroom2": "Showroom 2",
        "time-morning": "Buổi sáng",
        "time-afternoon": "Buổi chiều"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

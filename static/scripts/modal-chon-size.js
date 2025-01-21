document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("modalSizeGuide").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modalSizeGuide").style.display = "none";
});

// Đóng modal khi nhấn ra ngoài
window.addEventListener("click", function (event) {
    const modal = document.getElementById("modalSizeGuide");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


document.getElementById("openModal1").addEventListener("click", function () {
    document.getElementById("modalSizeGuide1").style.display = "block";
});

document.getElementById("closeModal1").addEventListener("click", function () {
    document.getElementById("modalSizeGuide1").style.display = "none";
});

// Đóng modal khi nhấn ra ngoài
window.addEventListener("click", function (event) {
    const modal1 = document.getElementById("modalSizeGuide1");
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
});

// Load dữ liệu vào thẻ select tỉnh thành 
const districts = {
    hanoi: ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Cầu Giấy", "Đống Đa"],
    hcm: ["Quận 1", "Quận 2", "Quận 3", "Bình Thạnh", "Tân Bình"],
    danang: ["Hải Châu", "Thanh Khê", "Ngũ Hành Sơn", "Cẩm Lệ"],
    // Thêm dữ liệu quận/huyện của các tỉnh khác
};

function loadDistricts() {
    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");
    const selectedProvince = provinceSelect.value;

    // Xóa các quận/huyện cũ
    districtSelect.innerHTML = `<option value="" selected disabled>Chọn quận/huyện</option>`;

    if (districts[selectedProvince]) {
        districts[selectedProvince].forEach(district => {
            const option = document.createElement("option");
            option.value = district.toLowerCase().replace(/\s+/g, "-");
            option.textContent = district;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    } else {
        districtSelect.disabled = true;
    }
}


// Modal giỏ hàng


document.getElementById("addToCartBtn").addEventListener("click", function () {
    document.getElementById("modalSizeGuide2").style.display = "block";
});

document.getElementById("closeModal2").addEventListener("click", function () {
    document.getElementById("modalSizeGuide2").style.display = "none";
});

// Đóng modal khi nhấn ra ngoài
window.addEventListener("click", function (event) {
    const modal2 = document.getElementById("modalSizeGuide2");
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});

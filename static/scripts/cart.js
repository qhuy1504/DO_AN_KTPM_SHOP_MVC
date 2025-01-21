// Tăng số lượng
document.querySelector(".plus-btn").addEventListener("click", function () {
    const quantityInput = document.getElementById("quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Giảm số lượng
document.querySelector(".minus-btn").addEventListener("click", function () {
    const quantityInput = document.getElementById("quantity");
    if (parseInt(quantityInput.value) > parseInt(quantityInput.min)) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// Dữ liệu tỉnh/thành phố, quận/huyện và phường/xã
const districts = {
    hanoi: {
        "Ba Đình": ["Phường Cống Vị", "Phường Đội Cấn", "Phường Ngọc Hà"],
        "Hoàn Kiếm": ["Phường Hàng Bạc", "Phường Tràng Tiền", "Phường Hàng Đào"],
        // Các quận khác...
    },
    hcm: {
        "Quận 1": ["Phường Bến Nghé", "Phường Đa Kao", "Phường Tân Định"],
        "Quận 2": ["Phường An Phú", "Phường Thạnh Mỹ Lợi", "Phường Bình Trưng Tây"],
        // Các quận khác...
    },
    danang: {
        "Hải Châu": ["Phường Bình Hiên", "Phường Hòa Cường Bắc", "Phường Thanh Bình"],
        // Các quận khác...
    },
};

// Hàm load quận huyện dựa trên tỉnh/thành phố
function loadDistricts() {
    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");
    const selectedProvince = provinceSelect.value;

    // Xóa các quận/huyện và phường/xã cũ
    districtSelect.innerHTML = `<option value="" selected disabled>Chọn quận/huyện</option>`;
    wardSelect.innerHTML = `<option value="" selected disabled>Chọn phường/xã</option>`;

    wardSelect.disabled = true; // Vô hiệu hóa phường/xã khi chưa chọn quận/huyện

    if (districts[selectedProvince]) {
        Object.keys(districts[selectedProvince]).forEach(district => {
            const option = document.createElement("option");
            option.value = district.toLowerCase().replace(/\s+/g, "-");
            option.textContent = district;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false; // Bật lại quận/huyện khi có dữ liệu
    } else {
        districtSelect.disabled = true; // Vô hiệu hóa quận/huyện nếu không có dữ liệu
    }
}

// Hàm load phường/xã khi quận/huyện được chọn
document.getElementById("district").addEventListener("change", function () {
    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");
    const selectedProvince = provinceSelect.value;
    const selectedDistrict = districtSelect.value;

    // Xóa các phường/xã cũ
    wardSelect.innerHTML = `<option value="" selected disabled>Chọn phường/xã</option>`;

    if (districts[selectedProvince] && districts[selectedProvince][selectedDistrict]) {
        districts[selectedProvince][selectedDistrict].forEach(ward => {
            const option = document.createElement("option");
            option.value = ward.toLowerCase().replace(/\s+/g, "-");
            option.textContent = ward;
            wardSelect.appendChild(option);
        });
        wardSelect.disabled = false; // Bật lại phường/xã
    } else {
        wardSelect.disabled = true; // Vô hiệu hóa phường/xã nếu không có dữ liệu
    }
});

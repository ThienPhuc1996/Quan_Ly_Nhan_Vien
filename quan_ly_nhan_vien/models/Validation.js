function Validation () {
    this.kiemTraRong = function (value,selectorError) {
        if(value.trim() === '') {
            document.querySelector(selectorError).innerHTML = 'Không được bỏ trống !';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    this.kiemTraKyTu = function (value,selectorError) {
        var regexLetter = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
        if(regexLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML ='Tên nhân viên phải là chữ!';
        return false;
    }
    
    this.kiemTraTatCaSo = function (value,selectorError) {
        var regexNumber = /^[0-9]+$/;
        if(regexNumber.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Tất cả phải là số';
        return false;
    }

    this.kiemTraDoDai = function(value,selectorError,minLength,maxLength) {
        if(value.length > maxLength || value.length <minLength) {
            document.querySelector(selectorError).innerHTML = 'Mã nhân viên tối đa ' + minLength + ' - ' + maxLength + ' ký số';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

 
    this.kiemTraLuong = function(value,selectorError,minValue,maxValue) {
        if(value > maxValue || value < minValue) {
            document.querySelector(selectorError).innerHTML = 'Lương căn bản ' + minValue + ' - ' + maxValue;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }



    this.kiemTraGiaTri = function(value,selectorError,minValue,maxValue) {
        if(value > maxValue || value < minValue) {
            document.querySelector(selectorError).innerHTML = 'Số giờ làm trong tháng phải từ ' + minValue + ' - ' + maxValue + ' giờ';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

}


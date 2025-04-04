function ConvertToFarsi(str) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    // اعداد رو به استرینگ تبدیل میکنه
    return str.toString().replace(/\d/g, d => persianDigits[d]);
}


// سه رقم سه رقم جدا میکنه
function SeparateNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

//  ترکیب دو فانکشن بالا
function formatNumberFa(number) {
    const separated = SeparateNumber(number);
    return ConvertToFarsi(separated);
}

module.exports = {
    ConvertToFarsi,
    SeparateNumber,
    formatNumberFa
};
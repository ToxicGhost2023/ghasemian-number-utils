const { ConvertToFarsi, SeparateNumber, formatNumberFa } = require('./index.js');

console.log('🔢 toPersianDigits:', ConvertToFarsi(25600145));
// خروجی: ۱۲۳۴۵۶۷۸۹

console.log('🔢 separateThousands:', SeparateNumber(75412356));
// خروجی: 123,456,789

console.log('🔢 formatNumberFa:', formatNumberFa(89654123578));
// خروجی: ۱۲۳,۴۵۶,۷۸۹

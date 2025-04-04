# ghasemian-number-utils

ابزاری ساده برای تبدیل اعداد انگلیسی به فارسی و جداسازی سه‌رقمی آن‌ها 🇮🇷

## نصب

```bash
npm install ghasemian-number-utils

## نحوه استفاده

برای استفاده از پکیج، ابتدا باید آن را وارد کنید:

```js
const { toPersianDigits, separateThousands, formatNumberFa } = require('ghasemian-number-utils');

### توابع:

#### 1. `toPersianDigits(str)`
این تابع اعداد انگلیسی را به اعداد فارسی تبدیل می‌کند.

**ورودی**: یک رشته (string) از اعداد انگلیسی.
**خروجی**: همان رشته با اعداد فارسی.

**مثال:**

```js
toPersianDigits("123456789");  // خروجی: ۱۲۳۴۵۶۷۸۹

## ویژگی‌ها:
- تبدیل اعداد انگلیسی به اعداد فارسی.
- اضافه کردن کاما برای جداکننده هزارگان.
- پشتیبانی از اعداد بزرگ و کوچک.
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

#Usage
const { toPersianDigits, separateThousands, formatNumberFa } = require('ghasemian-number-utils');

#Functions
1. toPersianDigits(str)
Converts English digits to Persian digits.

Example:
toPersianDigits("123456789");  // Output: ۱۲۳۴۵۶۷۸۹

2. separateThousands(number)
Adds thousand separators (commas) to the number.

Example:

2. separateThousands(number)
Adds thousand separators (commas) to the number.

Example:
separateThousands(123456789);  // Output: "123,456,789"

3. formatNumberFa(number)
Formats the number with thousand separators and Persian digits.

Example:
formatNumberFa(123456789);  // Output: "۱۲۳,۴۵۶,۷۸۹"


#Features
Convert English digits to Persian digits.
Add thousand separators (commas).
Supports both large and small numbers.
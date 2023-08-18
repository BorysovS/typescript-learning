/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Weekend;
(function (Weekend) {
    Weekend["Monday"] = "MONDAY";
    Weekend["Tuessday"] = "TUESDAY";
    Weekend["Wednesday"] = "WEDNESDAY";
    Weekend["Thursday"] = "THURSDAY";
    Weekend["Friday"] = "FRIDAY";
    Weekend["Saturday"] = "SATURDAY";
    Weekend["Sunday"] = "SUNDAY";
})(Weekend || (Weekend = {}));
function isWeekend(day) {
    if (day.toLowerCase() === Weekend.Sunday.toLowerCase() ||
        day.toLowerCase() === Weekend.Saturday.toLowerCase()) {
        return true;
    }
    return false;
}
var today = "sunday";
var wekDay = isWeekend(today);
console.log(wekDay);



var token = /([yYmdHhis.])/g;

function pad(n){
    return n < 10 ? '0' + n : '' + n;
}

/**
 * 日期格式化函数
 *
 * @param date {Date Object}
 * @param mask {String}  Date string format
 *
 *      d 月份中的第几天，有前导零的 2 位数字
 *      m 数字表示的月份，有前导零
 *      Y 4 位数字完整表示的年份
 *      y 2 位数字表示的年份
 *
 *      h 小时，12 小时格式，有前导零
 *      H 小时，24 小时格式，有前导零
 *      i 有前导零的分钟数
 *      s 秒数，有前导零
 *
 * @return
 *      The date string
 *
 */

function format(date, mask){
    mask = mask || 'Y-m-d H:i:s';

    var hour = date.getHours();
    var date_hash = {
        Y: date.getFullYear(),
        y: date.getYear(),
        m: pad(date.getMonth() + 1),
        d: pad(date.getDate()),
        H: pad(hour),
        h: hour > 12 ? hour - 12 : hour,
        i: pad(date.getMinutes()),
        s: pad(date.getSeconds())
    }

    return mask.replace(token, function(a,b){
        return date_hash[b] || b;
    });
}

export default format;


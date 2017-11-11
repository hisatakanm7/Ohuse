const moment = require("moment");
require('moment/locale/ja');
// require('moment/locale/zh-tw');

// material-uiのDatePickerコンポーネントの表示を国際化する
function MomentFormat(locale, options) {
    this.format = function(date) {
        var format1 = "ddd, MMM DD";
        var format2 = "MMMM YYYY";
        var format3 = "MMM/DD/YYYY";
        if(locale && locale.startsWith("ja")) {
          format1 = "M月D日, dddd";
          format2 = "YYYY年 M月";
          format3 = "D";
        }
        let m = moment(date);
        m.locale(locale);
        // 将来への意欲は感じるが、現時点は無意味なmaterial-uiのoptions！
        if(!options) {
            return m.format(format3);
        } else if (options.month === 'short' &&
            options.weekday === 'short' &&
            options.day === '2-digit') {
            return m.format(format1);
        } else if (options.day === 'numeric') {
            return m.format(format3);
        } else if (options.weekday === 'narrow') {
            return m.format("dd");
        }
        return m.format(format2);
    };
}

export default MomentFormat;

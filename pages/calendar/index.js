const lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0];
const dayMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
//天干
var Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
//地支
var Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
//生肖
const zodiac = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
//星座
const zodiacCn = ["魔羯座(12/22 - 1/19)", "水瓶座(1/20 - 2/18)", "双鱼座(2/19 - 3/20)", "白羊座(3/21 - 4/20)", "金牛座(4/21 - 5/20)", "双子座(5/21 - 6/21)", "巨蟹座(6/22 - 7/22)", "狮子座(7/23 - 8/22)", "处女座(8/23 - 9/22)", "天秤座(9/23 - 10/22)", "天蝎座(10/23 - 11/21)", "射手座(11/22 - 12/21)"];
const zodiacEn = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
const zodiacColor = ["#00008B", "#FF00FF", "#F5F5DC", "#FFFFE0", "#87CEEB", "#FFA500", "#FFF", "#000", "#008000", "#0FF", "#800080", "#e50065"];
//节气
const sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
const solarTerm = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
const mons = "正二三四五六七八九十冬腊";
//节假日
const lFtv = ["0101*春节", "0115*元宵节", "0505*端午节", "0707*七夕情人节", "0715*中元节", "0815*中秋节", "0909*重阳节", "1208*腊八节", "1224*小年", "0100*除夕"];
const sFtv = ["0101*元旦", "0131*作者生日", "0214*情人节", "0308*妇女节", "0312*植树节", "0315*消费者权益日",
    "0401*愚人节", "0501*劳动节", "0504*青年节", "0512*护士节", "0601 儿童节", "0701*建党节 香港回归纪念",
    "0801*建军节", "0808*父亲节", "0908*茂生日", "0909*毛泽东逝世纪念", "0910 教师节", "0928*孔子诞辰", "1001*国庆节",
    "1006*老人节", "1024*联合国日", "1112*孙中山诞辰", "1220*澳门回归纪念", "1225*圣诞节", "1226*毛泽东诞辰"];
const Cal = [0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95];

const monthTit = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
const poemData = require('../../data/poems.js');

for (var i = 0; i < 12; i++) {
    console.log(poemData.poemList[i].length);
}

//传入 offset 传回干支, 0=甲子
function cyclical(num) {
    return (Gan[num % 10] + Zhi[num % 12])
}

function showPoem(i) {
    let myPoem = poemData.poemList[i];
    let random = parseInt(Math.random() * myPoem.length, 10);
    return {
        title: monthTit[i] + "月诗句",
        poem: myPoem[random].poem,
        from: myPoem[random].from
    }
}

function CalConvert(date) {
    let func = function (d) {
        function getBit(m, n) {
            return (m >> n) & 1;
        }

        let total, m, n, k, isEnd = false, t = d.getYear();
        if (t < 1900) t += 1900;
        total = (t - 2001) * 365 + Math.floor((t - 2001) / 4) + [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][d.getMonth()] + d.getDate() - 23;
        if (d.getYear() % 4 === 0 && d.getMonth() > 1) total++;
        for (m = 0; m < 1000; m++) {
            k = (Cal[m] < 0xfff) ? 11 : 12;
            for (n = k; n >= 0; n--) {
                if (total <= 29 + getBit(Cal[m], n)) {
                    isEnd = true;
                    break;
                }
                total = total - 29 - getBit(Cal[m], n);
            }
            if (isEnd) break;
        }
        let cMonth = k - n + 1;
        if (k === 12) {
            if (cMonth === Math.floor(Cal[m] / 0x10000) + 1)
                cMonth = 1 - cMonth;
            if (cMonth > Math.floor(Cal[m] / 0x10000) + 1)
                cMonth--;
        }
        let lunarStr = "";
        if (cMonth < 1) {
            lunarStr += "闰";
            lunarStr += mons.charAt(-cMonth - 1);
        } else lunarStr += mons.charAt(cMonth - 1);
        lunarStr += "月";

        let solarStr = "";
        solarStr += (total < 11) ? "初" : ((total < 20) ? "十" : ((total < 30) ? "廿" : "卅"));
        solarStr += "一二三四五六七八九十".charAt((total - 1) % 10);
        lunarStr += solarStr;

        let yyyy = d.getFullYear();
        let mm = d.getMonth();
        let dd = d.getDate();

        let i, temp = 0;
        let baseDate = new Date(1900, 0, 31);
        let offset = (d - baseDate) / 86400000;
        let dayCyl = offset + 40;
        let monCyl = 14;
        for (i = 1900; i < 2050 && offset > 0; i++) {
            //传回农历的总天数
            let j, sum = 348, days = 0;
            for (j = 0x8000; j > 0x8; j >>= 1) {
                sum += (lunarInfo[i - 1900] & j) ? 1 : 0;
            }
            //传回农历闰月的天数
            if (lunarInfo[i - 1900] & 0xf) {
                days = (lunarInfo[i - 1900] & 0x10000) ? 30 : 29;
            }
            temp = sum + days;
            offset -= temp;
            monCyl += 12;
        }
        if (offset < 0) {
            offset += temp;
            i--;
            monCyl -= 12
        }
        let year = i;
        let yearCyl = i - 1864;
        //传回农历闰哪个月 1-12 , 没闰传回 0
        let leap = lunarInfo[i - 1900] & 0xf;
        let isLeap = false;
        for (i = 1; i < 13 && offset > 0; i++) {
            //闰月
            if (leap > 0 && i === (leap + 1) && isLeap === false) {
                --i;
                isLeap = true;
                temp = 0;
                //传回农历闰月的天数
                if (lunarInfo[year - 1900] & 0xf) {
                    temp = (lunarInfo[year - 1900] & 0x10000) ? 30 : 29;
                }
            } else {
                //传回农历该月的总天数
                temp = (lunarInfo[year - 1900] & (0x10000 >> i)) ? 30 : 29;
            }
            //解除闰月
            if (isLeap === true && i === (leap + 1)) {
                isLeap = false
            }
            offset -= temp;
            if (isLeap === false) {
                monCyl++
            }
        }
        if (offset === 0 && leap > 0 && i === leap + 1) {
            if (isLeap) {
                isLeap = false;
            } else {
                isLeap = true;
                --i;
                --monCyl;
            }
        }
        if (offset < 0) {
            offset += temp;
            --i;
            --monCyl;
        }
        let month = i;
        let day = offset + 1;
        let lDObj = {
            yearCyl: yearCyl,
            monCyl: monCyl,
            dayCyl: dayCyl,
            year: year,
            mon: month,
            day: parseInt(day),
            isLeap: isLeap
        };

        let festival = '', solarFestival = '', lunarFestival = '', tmp1, tmp2;
        //农历节日 
        for (i in lFtv)
            if (lFtv[i].match(/^(\d{2})(.{2})([/s/*])(.+)$/)) {
                tmp1 = Number(RegExp.$1) - mm;
                tmp2 = Number(RegExp.$2) - dd;
                if (tmp1 === 0 && tmp2 === 0) lunarFestival = RegExp.$4
            }
        //国历节日
        for (i in sFtv)
            if (sFtv[i].match(/^(\d{2})(\d{2})([/s/*])(.+)$/)) {
                tmp1 = Number(RegExp.$1) - (mm + 1);
                tmp2 = Number(RegExp.$2) - dd;
                if (tmp1 === 0 && tmp2 === 0) solarFestival = RegExp.$4
            }
        if (solarFestival !== '') {
            festival += ' ' + solarFestival;
        }
        if (lunarFestival !== '') {
            festival += ' ' + lunarFestival;
        }
        festival += ' ';
        console.log(festival);

        let solarTerms = "";
        tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
        tmp2 = tmp1.getUTCDate();
        if (tmp2 === dd) solarTerms = solarTerm[mm * 2 + 1];
        tmp1 = new Date((31556925974.7 * (yyyy - 1900) + sTermInfo[mm * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
        tmp2 = tmp1.getUTCDate();
        if (tmp2 === dd) solarTerms = solarTerm[mm * 2];
        if (yyyy === 2016 && mm === 11) {
            if (dd === 7) {
                solarTerms = "大雪";
            }
            if (dd === 6) {
                solarTerms = "";
            }
        }
        if (solarTerms) {
            solarStr = solarTerms;
            lunarStr += ' ' + solarTerms;
        }
        let zodiacIndex = (mm + 1 - (dd < "102223444433".charAt(mm) - -19)) % 12;
        let lunarYearStr = Gan[(yyyy - 4) % 10] + Zhi[(yyyy - 4) % 12] + "年【" + zodiac[(yyyy - 4) % 12] + "年】";
        return {
            solar: solarStr,
            festival: festival,
            date: dayMap[d.getDay()],
            day: dd,
            lunar: lunarStr,
            lunarYear: lunarYearStr,
            lunarDay: cyclical(lDObj.monCyl) + '月 ' + cyclical(parseInt(lDObj.dayCyl++)) + '日',
            zodiacCn: zodiacCn[zodiacIndex],
            zodiacEn: zodiacEn[zodiacIndex],
            zodiacColor: zodiacColor[zodiacIndex]
        }
    };
    return func(date);
}

Page({
    data: {
        year: 0,
        month: 0,
        date: ['日', '一', '二', '三', '四', '五', '六'],
        dateArr: [],
        isToday: 0,
        isClicked: 0,
        isTodayWeek: false,
        todayIndex: 0,
        dayDetail: {
            solar: "",
            festival: "", //节假日
            date: "", //年-月-日 星期几
            day: "", //日
            lunar: "", //农历
            lunarYear: "", //农历年
            lunarDay: "", //农历年
            zodiacCn: "", //属相
            zodiacEn: "", //星座
            zodiacColor: "" //星座颜色
        },
        monthPoem: {
            title: "",
            poem: "",
            from: ""
        }
    },
    onLoad: function () {
        this.showToday()
    },
    dateInit: function (setYear, setMonth) {
        let dateArr = [];                        //需要遍历的日历数组数据
        let nowDate = new Date();
        let now = setYear ? new Date(setYear, setMonth) : nowDate;
        let year = setYear || now.getFullYear();
        let nextYear = 0;
        let month = setMonth || now.getMonth();                    //没有+1方便后面计算当月总天数
        let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
        let startDay = new Date(year, nextMonth - 1, 1).getDay();           //目标月1号对应星期几
        let monthDays = new Date(year, nextMonth, 0).getDate();             //获取目标月有多少天
        let obj = {};
        let num = 0;

        if (month + 1 > 11) {
            nextYear = year + 1;
            monthDays = new Date(nextYear, nextMonth, 0).getDate();
        }
        let dayLen = startDay + monthDays; //目标月天数加上前面空白格数
        let isWeekEnd = false;
        let weekEnd = 0;
        for (let i = 0; i < dayLen; i++) {
            weekEnd = i + 7;
            while (weekEnd > 7) {
                weekEnd -= 7
            }
            isWeekEnd = weekEnd === 6 || weekEnd === 7; //是否周末
            if (i >= startDay) {
                num = i - startDay + 1;
                obj = {
                    isToday: '' + year + (month + 1) + num,
                    dateNum: num,
                    isWeekEnd: isWeekEnd,
                    lunar: CalConvert(new Date(year, month, num)).solar
                }
            } else {
                obj = {
                    isToday: '',
                    dateNum: '',
                    isWeekEnd: isWeekEnd,
                    lunar: ''
                };
            }
            dateArr[i] = obj;
        }
        this.setData({
            dateArr: dateArr
        })

        let nowYear = nowDate.getFullYear();
        let nowMonth = nowDate.getMonth() + 1;
        let nowWeek = nowDate.getDay();
        let getYear = setYear || nowYear;
        let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;

        if (nowYear === getYear && nowMonth === getMonth) {
            this.setData({
                isTodayWeek: true,
                todayIndex: nowWeek,
                dayDetail: CalConvert(new Date(nowYear, nowMonth - 1, nowDate.getDate()))
            })
        } else {
            this.setData({
                isTodayWeek: false,
                todayIndex: -1
            })
        }
    },
    bindDateChange: function (e) {
        let day = e.detail.value;
        let year = parseInt(day.split('-')[0]);
        let month = parseInt(day.split('-')[1]);
        let date = new Date().getDate();
        this.setData({
            year: year,
            month: month,
            isClicked: date,
            dayDetail: CalConvert(new Date(year, month - 1, date)),
            monthPoem: showPoem(month - 1)
        });
        this.dateInit(year, month - 1);
    },
    onPullDownRefresh() {
        wx.stopPullDownRefresh()
    },
    showToday(){
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        this.dateInit();
        this.setData({
            year: year,
            month: month,
            isClicked: day,
            dayDetail: CalConvert(new Date(year, month - 1, day)),
            isToday: '' + year + month + day,
            monthPoem: showPoem(month - 1)
        })
    },
    prevMonth: function () {
        //上一月
        let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
        let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
        let date = new Date().getDate();
        this.setData({
            year: year,
            month: (month + 1),
            isClicked: date,
            dayDetail: CalConvert(new Date(year, month, date)),
            monthPoem: showPoem(month)
        });
        this.dateInit(year, month);
    },
    nextMonth: function () {
        //下一月
        let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
        let month = this.data.month > 11 ? 0 : this.data.month;
        let date = new Date().getDate();
        this.setData({
            year: year,
            month: (month + 1),
            isClicked: date,
            dayDetail: CalConvert(new Date(year, month, date)),
            monthPoem: showPoem(month)
        });
        this.dateInit(year, month);
    },
    returnToday: function () {
        //返回今日
        this.showToday()
    },
    showDetail: function (e) {
        //显示点击日详情
        let day = e.currentTarget.dataset.date;
        this.setData({
            isClicked: day,
            dayDetail: CalConvert(new Date(this.data.year, this.data.month - 1, day)),
            monthPoem: showPoem(this.data.month - 1)
        });
    }
});
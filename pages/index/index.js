const BMap = require('../../libs/bmap-wx.min.js')

const UNPROMPTED = 0
const UNAUTHORIZED = 1
const AUTHORIZED = 2

const dayMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

const AQIMap = { 
  '优': '#64c724', 
  '良': '#fbcb3a', 
  '轻度污染': '#fc7d21', 
  '中度污染': '#fc001a', 
  '重度污染': '#8d064c', 
  '严重污染': '#58001e'
}

function Trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "")
}

function CalConvert(date) {
  let func = function (d) {
    function getBit(m, n) {
      return (m >> n) & 1
    }

    let mons = "正二三四五六七八九十冬腊",
      Cal = [0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95]
    let total, m, n, k, isEnd = false, t = d.getYear()
    if (t < 1900) t += 1900
    total = (t - 2001) * 365 + Math.floor((t - 2001) / 4) + [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][d.getMonth()] + d.getDate() - 23
    if (d.getYear() % 4 === 0 && d.getMonth() > 1) total++
    for (m = 0; m < 1000; m++) {
      k = (Cal[m] < 0xfff) ? 11 : 12;
      for (n = k; n >= 0; n--) {
        if (total <= 29 + getBit(Cal[m], n)) {
          isEnd = true
          break
        }
        total = total - 29 - getBit(Cal[m], n)
      }
      if (isEnd) break
    }
    let cMonth = k - n + 1
    if (k === 12) {
      if (cMonth === Math.floor(Cal[m] / 0x10000) + 1)
        cMonth = 1 - cMonth
      if (cMonth > Math.floor(Cal[m] / 0x10000) + 1)
        cMonth--
    }
    t = ""
    if (cMonth < 1) {
      t += "闰"
      t += mons.charAt(-cMonth - 1)
    } else t += mons.charAt(cMonth - 1)
    t += "月"
    t += (total < 11) ? "初" : ((total < 20) ? "十" : ((total < 30) ? "廿" : "卅"))
    if (total % 10 !== 0 || total === 10) t += "一二三四五六七八九十".charAt((total - 1) % 10)
    return t
  }
  return func(date)
}

Page({
  data: {
    currentCity: "",
    pm25: "",
    aqiBg: "",
    date: "",
    lunar: "",
    temp: "",
    temperature: "",
    weatherDesc: "",
    wind: "",
    daylyWeather: [],
    indexList: [],
    locationAuthType: UNPROMPTED
  },
  onLoad: function () {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
    })

    wx.getSetting({
      success: res => {
        let auth = res.authSetting['scope.userLocation']
        this.setData({
          locationAuthType: auth ? AUTHORIZED
            : (auth === false) ? UNAUTHORIZED : UNPROMPTED
        })

        if (auth)
          this.getNow()
        else
          this.getNow()
      },
      fail: () => {
        this.getNow()
      }
    })

    this.bmap = new BMap.BMapWX({
      ak: 'Ygj6o0ERIEn7zHGziz6O2xUvu9iRClxa'
    });
  },
  onShareAppMessage: function () {
    return {
      title: '实时及未来三天天气预测',
      path: '/pages/index/index'
    }
  },
  onTapLocation() {
    if (this.data.locationAuthType === UNAUTHORIZED)
      wx.openSetting({
        success: res => {
          if (res.authSetting['scope.userLocation']) {
            this.getNow()
          }
        }
      })
  },
  onPullDownRefresh() {
    this.getNow(() => {
      wx.stopPullDownRefresh()
    })
  },
  getNow(callback) {
    wx.getLocation({
      success: res => {
        this.setData({
          locationAuthType: AUTHORIZED,
        })
        this.bmap.weather({
          fail: data => {
            console.log('fail!!!!' + JSON.stringify(data))
          },
          success: data => {
            let weatherData = data.currentWeather[0]
            let originalData = data.originalData.results[0].weather_data
            let indexData = data.originalData.results[0].index
            let daylyWeather = []
            let indexList = []
            let i = 0, l = 0
            for (i = 1, l = originalData.length; i < l; i++) {
              let temp = originalData[i].temperature.replace('℃', '')
              let date = new Date()
              date.setDate(date.getDate() + i)
              daylyWeather.push({
                date: (date.getMonth() + 1) + '月' + date.getDate() + '号',
                week: dayMap[date.getDay()],
                dayPictureUrl: originalData[i].dayPictureUrl.replace('http://api.map.baidu.com', ''),
                nightPictureUrl: originalData[i].nightPictureUrl.replace('http://api.map.baidu.com', ''),
                weather: originalData[i].weather,
                temperature: Trim(temp.split('~')[1]) + ' ~ ' + Trim(temp.split('~')[0]) + '°'
              })
            }
            for (i = 0, l = indexData.length; i < l; i++) {
              indexList.push({
                des: indexData[i].des,
                tipt: indexData[i].tipt.replace('强度', ''),
                title: indexData[i].title,
                zs: indexData[i].zs
              })
            }
            let temperature = weatherData.temperature.replace('℃', '')
            let pm25 = weatherData.pm25
            let aqi = ''
            switch (Math.ceil(pm25 / 50)){
              case 1:
                aqi = '优'
                break;
              case 2:
                aqi = '良'
                break;
              case 3:
                aqi = '轻度污染'
                break;
              case 4:
                aqi = '中度污染'
                break;
              case 5:
              case 6:
                aqi = '重度污染'
                break;
              default:
                aqi = '严重污染'
                break;
            }
            let today = new Date()
            this.setData({
              currentCity: weatherData.currentCity,
              pm25: pm25 + ' ' + aqi,
              aqiBg: AQIMap[aqi],
              date: today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日 (' + dayMap[today.getDay()] + ')',
              lunar: '农历' + CalConvert(today),
              temp: weatherData.date.split('：')[1].split(')')[0].replace('℃','°'),
              temperature: Trim(temperature.split('~')[1]) + ' ~ ' + Trim(temperature.split('~')[0]) + '°',
              weatherDesc: weatherData.weatherDesc,
              wind: weatherData.wind,
              daylyWeather: daylyWeather,
              indexList: indexList
            })
          }
        })
      },
      complete: () => {
        callback && callback()
      },
      fail: () => {
        this.setData({
          locationAuthType: UNAUTHORIZED,
        })
      }
    })
  }
})
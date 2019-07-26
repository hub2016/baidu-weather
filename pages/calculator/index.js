//四则运算
function fourOp(i, t, j) {
    let b, n1, n2, n3, n4, p, r;
    try {
        n1 = i.toString().split(".")[1].length;
    } catch (e) {
        n1 = 0;
    }
    try {
        n2 = j.toString().split(".")[1].length;
    } catch (e) {
        n2 = 0;
    }
    if (t === '+') {
        b = Math.pow(10, Math.max(n1 + 1, n2 + 1));
        r = (i * b + j * b) / b;
    } else if (t === '-') {
        b = Math.pow(10, Math.max(n1 + 1, n2 + 1));
        p = (n1 >= n2) ? n1 : n2;
        r = ((i * b - j * b) / b).toFixed(p);
    } else if (t === '*') {
        b = 0;
        try {
            b += i.toString().split(".")[1].length;
        } catch (e) {
        }
        try {
            b += j.toString().split(".")[1].length;
        } catch (e) {
        }
        r = Number(i.toString().replace(".", "")) * Number(j.toString().replace(".", "")) / Math.pow(10, b);
    } else if (t === '/') {
        n3 = Number(i.toString().replace(".", ""));
        n4 = Number(j.toString().replace(".", ""));
        r = (n3 / n4) * Math.pow(10, n2 - n1);
    }
    return r;
}

Page({
    data: {
        lastStep: '', // 上次计算的步骤
        value: null, // 上次计算后的结果，null表示没有上次计算的结果
        displayValue: '0', // 显示数值
        operator: null, // 上次计算符号，null表示没有未完成的计算
        waitingForOperand: false // 前一按键是否为计算符号
    },
    onLoad: function (options) {
        this.calculatorOperations = {
            '÷': (prevValue, nextValue) => fourOp(prevValue, '/', nextValue),
            '×': (prevValue, nextValue) => fourOp(prevValue, '*', nextValue),
            '＋': (prevValue, nextValue) => fourOp(prevValue, '+', nextValue),
            '－': (prevValue, nextValue) => fourOp(prevValue, '-', nextValue),
            '%': (prevValue, nextValue) => prevValue % nextValue,
            '＝': (prevValue, nextValue) => nextValue
        }
    },
    onShareAppMessage: function () {
        return {
            title: '简易计算器',
            path: '/pages/calculator/index',
            imageUrl: '/images/share/calculator.png'
        }
    },
    bindTap: function (event) {
        const k = event.target.dataset.key;
        let d = this.data.displayValue;
        let o = this.data.operator;
        let v = this.data.value;
        switch (k) {
            case 'AC':
                this.setData({
                    lastStep: '',
                    value: null,
                    displayValue: '0',
                    operator: null,
                    waitingForOperand: false
                });
                break;
            case 'C':
                if (d !== '0') {
                    d = d.substring(0, d.length - 1);
                    if (d === "" || d === "－") {
                        d = 0;
                    }
                    this.setData({
                        displayValue: String(d)
                    });
                }
                break;
            case '+/-':
                this.setData({
                    displayValue: String(parseFloat(d) * -1)
                });
                break;
            case '＋':
            case '－':
            case '×':
            case '÷':
            case '%':
            case '＝':
                const inputValue = parseFloat(d);
                if (v === null) {
                    this.setData({
                        value: inputValue,
                        lastStep: String(inputValue)
                    });
                } else if (o) {
                    const currentValue = v || 0;
                    const newValue = this.calculatorOperations[o](currentValue, inputValue);

                    this.setData({
                        value: newValue,
                        displayValue: String(newValue).substr(0, 11)
                    });

                    if (o !== '＝') {
                        this.setData({
                            lastStep: String(currentValue + o + inputValue)
                        });
                    }
                }
                this.setData({
                    waitingForOperand: true,
                    operator: k
                });
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                if (k === '.') {
                    // 按下点号
                    if (!(/\./).test(d)) {
                        this.setData({
                            displayValue: d + '.',
                            waitingForOperand: false
                        });
                    }
                } else {
                    // 按下数字键
                    const digit = k[k.length - 1];
                    if (this.data.waitingForOperand) {
                        this.setData({
                            displayValue: String(digit),
                            waitingForOperand: false
                        });
                    } else {
                        this.setData({
                            displayValue: d === '0' ? String(digit) : d + digit
                        });
                    }
                }
                break;
        }
    }
});
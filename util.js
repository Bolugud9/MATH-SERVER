async function addFormula(x, y) {
    return new Promise((resolve, reject) => {
        let add
        if (x != null && y == null) {
            add = x
        } else if (x == null && y == null) {
            add = "Error"
        } else if (x != null && y != null) {
            add = x + y
        }
        resolve(add)
    })
}

async function subtractFormula(x, y) {
    return new Promise((resolve, reject) => {
        let subtract
        if (x != null && y == null) {
            subtract = x
        } else if (x == null && y == null) {
            subtract = "Error"
        } else if (x != null && y != null) {
            subtract = x - y
        }
        resolve(subtract)
    })
}

async function divideFormula(x, y) {
    return new Promise((resolve, reject) => {
        let divide
        if (x != null && y == null) {
            divide = x
        } else if (x == null && y == null) {
            divide = "Error"
        } else if (x != null && y != null) {
            divide = x / y
        }

        resolve(divide)
    })
}

async function multiplyFormula(x = 0, y = 0) {
    return new Promise((resolve, reject) => {
        let multiply
        if (x != null && y == null) {
            multiply = x
        } else if (x == null && y == null) {
            multiply = "Error"
        } else if (x != null && y != null) {
            multiply = x * y
        }

        resolve(multiply)
    })
}

// Forex Calculation
//Position Size calculator
//USD
async function usdPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 10, 2),
            "Units": Math.round((riskAmount / stoploss) / 10 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100
        };
        resolve(results)
    })
}

async function jpyPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 7.62875, 2),
            "Units": Math.round((riskAmount / stoploss) / 7.62875 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function gbpPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 12.5764, 2),
            "Units": Math.round((riskAmount / stoploss) / 12.5764 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function chfPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 10.08644, 2),
            "Units": Math.round((riskAmount / stoploss) / 10.08644 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function cadPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 7.7235, 2),
            "Units": Math.round((riskAmount / stoploss) / 7.7235 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function nzdPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 6.3539, 2),
            "Units": Math.round((riskAmount / stoploss) / 6.3539 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function sgdPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 7.1837, 2),
            "Units": Math.round((riskAmount / stoploss) / 7.1837 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function audPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 7.0055, 2),
            "Units": Math.round((riskAmount / stoploss) / 7.0055 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function czkPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 0.42008, 2),
            "Units": Math.round((riskAmount / stoploss) / 0.42008 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function hufPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 2.75326, 2),
            "Units": Math.round((riskAmount / stoploss) / 2.75326 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function mxnPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 0.49152, 2),
            "Units": Math.round((riskAmount / stoploss) / 0.49152 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function nokPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1.05052, 2),
            "Units": Math.round((riskAmount / stoploss) / 1.05052 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function plnPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 2.23865, 2),
            "Units": Math.round((riskAmount / stoploss) / 2.23865 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function tryPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 0.66696, 2),
            "Units": Math.round((riskAmount / stoploss) / 0.66696 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function zarPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 0.61786, 2),
            "Units": Math.round((riskAmount / stoploss) / 0.61786 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function sekPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1.00075, 2),
            "Units": Math.round((riskAmount / stoploss) / 1.00075 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function cnhPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1.47696, 2),
            "Units": Math.round((riskAmount / stoploss) / 1.47696 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function rubPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 0.12009, 2),
            "Units": Math.round((riskAmount / stoploss) / 0.12009 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function thbPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 0.28892, 2),
            "Units": Math.round((riskAmount / stoploss) / 0.28892 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAGAUDPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 700.55), 2),
            "Units": Math.round((riskAmount / stoploss) / 700.55 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAGEURPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 1054.03), 2),
            "Units": Math.round((riskAmount / stoploss) / 1054.03 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAGUSDPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 1000), 2),
            "Units": Math.round((riskAmount / stoploss) / 1000 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUAUDPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 700.55), 2),
            "Units": Math.round((riskAmount / stoploss) / 700.55 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUCHFPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 1008.644), 2),
            "Units": Math.round((riskAmount / stoploss) / 1008.644 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUEURPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 1054.03), 2),
            "Units": Math.round((riskAmount / stoploss) / 1054.03 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUUSDPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {

        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((((riskAmount / stoploss) * 10000) * 10) / 100000, 2),
            "Units": Math.round((((riskAmount / stoploss) * 10000) * 10) / 1000),
            "Risk Percentage": (riskAmount / accountSize) * 100
        };
        resolve(results)
    })
}

async function XAUJPYPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {

        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 7.62875, 2),
            "Units": Math.round((riskAmount / stoploss) / 7.62875 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUGBPPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 1232.75) * 1000, 2),
            "Units": Math.round((riskAmount / stoploss) / 1232.75 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

function rounder(num, places, mode) {
    // (A1) MULTIPLIER
    var mult = parseInt("1" + "0".repeat(places));
    num = num * mult;

    // (A2) ROUND OFF
    if (mode === 1) { num = Math.ceil(num); } else if (mode === 0) { num = Math.floor(num); } else { num = Math.round(num); }

    // (A3) RETURN RESULTS
    return num / mult;
}



module.exports = { addFormula, subtractFormula, divideFormula, multiplyFormula, XAGAUDPositionSize, XAGUSDPositionSize, XAUAUDPositionSize, XAUCHFPositionSize, XAUEURPositionSize, thbPositionSize, XAGEURPositionSize, rubPositionSize, cnhPositionSize, sekPositionSize, zarPositionSize, plnPositionSize, tryPositionSize, nokPositionSize, mxnPositionSize, hufPositionSize, usdPositionSize, jpyPositionSize, chfPositionSize, cadPositionSize, nzdPositionSize, sgdPositionSize, audPositionSize, czkPositionSize, XAGAUDPositionSize, XAUUSDPositionSize, XAUJPYPositionSize, gbpPositionSize, XAUGBPPositionSize }
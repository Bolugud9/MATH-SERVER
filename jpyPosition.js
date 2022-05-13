//JPY
//USD
async function usdPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1307.55, 2),
            "Units": Math.round((riskAmount / stoploss) / 1307.55 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100
        };
        resolve(results)
    })
}

async function jpyPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1000, 2),
            "Units": Math.round((riskAmount / stoploss) / 1000 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function gbpPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1617.36, 2),
            "Units": Math.round((riskAmount / stoploss) / 1617.36 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function chfPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1319.98, 2),
            "Units": Math.round((riskAmount / stoploss) / 1319.98 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function cadPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1012.14, 2),
            "Units": Math.round((riskAmount / stoploss) / 1012.14 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function nzdPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 832.02, 2),
            "Units": Math.round((riskAmount / stoploss) / 832.02 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function sgdPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 940.81, 2),
            "Units": Math.round((riskAmount / stoploss) / 940.81 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function audPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 917.67, 2),
            "Units": Math.round((riskAmount / stoploss) / 917.67 * 100000),
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
            "Lot Size": rounder((riskAmount / stoploss) / 137.06, 2),
            "Units": Math.round((riskAmount / stoploss) / 137.06 * 100000),
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
            "Lot Size": rounder((riskAmount / stoploss) / 80.52, 2),
            "Units": Math.round((riskAmount / stoploss) / 80.52 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function sekPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 130.27, 2),
            "Units": Math.round((riskAmount / stoploss) / 130.27 * 100000),
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
            "Lot Size": rounder(((riskAmount / stoploss) / 91767), 2),
            "Units": Math.round((riskAmount / stoploss) / 91767 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAGEURPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 137861), 2),
            "Units": Math.round((riskAmount / stoploss) / 137861 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAGUSDPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 130755), 2),
            "Units": Math.round((riskAmount / stoploss) / 130755 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUAUDPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 91767), 2),
            "Units": Math.round((riskAmount / stoploss) / 91767 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUCHFPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 131998), 2),
            "Units": Math.round((riskAmount / stoploss) / 131998 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUEURPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 1772.65), 2),
            "Units": Math.round((riskAmount / stoploss) / 1772.65 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUUSDPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {

        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((((riskAmount / stoploss) * 130755) * 10) / 100000, 2),
            "Units": Math.round((((riskAmount / stoploss) * 130755) * 10) / 1000),
            "Risk Percentage": (riskAmount / accountSize) * 100
        };
        resolve(results)
    })
}

async function XAUJPYPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {

        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder((riskAmount / stoploss) / 1000, 2),
            "Units": Math.round((riskAmount / stoploss) / 1000 * 100000),
            "Risk Percentage": (riskAmount / accountSize) * 100,
        };
        resolve(results)
    })
}

async function XAUGBPPositionSize(accountSize = 10000, stoploss = 20, riskAmount = 100) {
    return new Promise((resolve, reject) => {
        let results = {
            "Risk Amount": riskAmount,
            "Lot Size": rounder(((riskAmount / stoploss) / 161736) * 1000, 2),
            "Units": Math.round((riskAmount / stoploss) / 161736 * 100000),
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

module.exports = { XAGAUDPositionSize, XAGUSDPositionSize, XAUAUDPositionSize, XAUCHFPositionSize, XAUEURPositionSize, thbPositionSize, XAGEURPositionSize, rubPositionSize, cnhPositionSize, sekPositionSize, zarPositionSize, plnPositionSize, tryPositionSize, nokPositionSize, mxnPositionSize, hufPositionSize, usdPositionSize, jpyPositionSize, chfPositionSize, cadPositionSize, nzdPositionSize, sgdPositionSize, audPositionSize, czkPositionSize, XAGAUDPositionSize, XAUUSDPositionSize, XAUJPYPositionSize, gbpPositionSize, XAUGBPPositionSize }
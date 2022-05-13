const express = require('express')
const bodyParser = require('body-parser')
const util = require('./util')
const jpyp = require('./jpyPosition')
const PORT = 5000


const app = new express()

//parse json
app.use(bodyParser.json())

//parse form data
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/add', (req, res) => {

    let x = parseFloat(req.query.x)
    let y = parseFloat(req.query.y)
    console.log(x, y);

    util.addFormula(x, y)
        .then((add) => {
            const response = add
            res.json({
                success: 1,
                result: response
            });
        })
        .catch((err) => {
            console.log(err)
            res.send('error')
        })
})

app.get('/subtract', (req, res) => {
    let x = parseFloat(req.query.x)
    let y = parseFloat(req.query.y)
    console.log(x, y);

    util.subtractFormula(x, y)
        .then((subtract) => {
            const response = subtract
            res.json({
                success: 1,
                result: response
            });
        })
        .catch((err) => {
            console.log(err)
            res.send('error')
        })
})

app.get('/divide', (req, res) => {
    let x = parseFloat(req.query.x)
    let y = parseFloat(req.query.y)
    console.log(x, y);

    util.divideFormula(x, y)
        .then((divide) => {
            const response = divide
            res.json({
                success: 1,
                result: response
            });
        })
        .catch((err) => {
            console.log(err)
            res.send('error')
        })
})

app.get('/multiply', (req, res) => {
    let x = parseFloat(req.query.x)
    let y = parseFloat(req.query.y)
    console.log(x, y);

    util.multiplyFormula(x, y)
        .then((multiply) => {
            const response = multiply
            res.json({
                success: 1,
                result: response
            });
        })
        .catch((err) => {
            console.log(err)
            res.send('error')
        })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

app.get('/positionsize', (req, res) => {

    const type = req.query.type
    const pair = req.query.pair
    const accountSize = req.query.accountSize
    const stoploss = req.query.stoploss
    const riskAmount = req.query.riskAmount

    console.log(type, pair, accountSize, stoploss, riskAmount);

    if (type == ('USD') || type == ('usd')) {
        if (pair == ('AUDCAD') || pair == ('audcad')) {
            util.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDCHF') || pair == ('audchf')) {
            util.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDJPY') || pair == ('audjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDNZD') || pair == ('audnzd')) {
            util.nzdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDSGD') || pair == ('audsgd')) {
            util.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDUSD') || pair == ('audusd')) {
            util.usdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('CADCHF') || pair == ('cadchf')) {
            util.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('CADJPY') || pair == ('cadjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('CADCHF') || pair == ('cadchf')) {
            util.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('CHFSGD') || pair == ('chfsgd')) {
            util.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURAUD') || pair == ('euraud')) {
            util.audPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURCAD') || pair == ('eurcad')) {
            util.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURCHF') || pair == ('eurchf')) {
            util.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURCZK') || pair == ('eurczk')) {
            util.czkPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURGBP') || pair == ('eurgbp')) {
            util.gbpPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURHUF') || pair == ('eurhuf')) {
            util.hufPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURJPY') || pair == ('eurjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURJPY') || pair == ('eurjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURMXN') || pair == ('eurmxn')) {
            util.mxnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURNOK') || pair == ('eurnok')) {
            util.nokPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURNZD') || pair == ('eurnzd')) {
            util.nzdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURPLN') || pair == ('eurpln')) {
            util.plnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURSEK') || pair == ('eursek')) {
            util.sekPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURSGD') || pair == ('eursgd')) {
            util.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURTRY') || pair == ('eurtry')) {
            util.tryPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURUSD') || pair == ('eurusd')) {
            util.usdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURZAR') || pair == ('eurzar')) {
            util.zarPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPAUD') || pair == ('gbpaud')) {
            util.audPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPCAD') || pair == ('gbpcad')) {
            util.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPCHF') || pair == ('gbpchf')) {
            util.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPJPY') || pair == ('gbpjpy')) {
            util.jpy(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPMXN') || pair == ('gbpmxn')) {
            util.mxnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPNOK') || pair == ('gbpnok')) {
            util.nokPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPNZD') || pair == ('gbpnzd')) {
            util.nzdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPSEK') || pair == ('gbpsek')) {
            util.sekPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPSGD') || pair == ('gbsgd')) {
            util.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPTRY') || pair == ('gbptry')) {
            util.tryPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPUSD') || pair == ('gbpusd')) {
            util.usdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NOKJPY') || pair == ('nokjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NOKSEK') || pair == ('noksek')) {
            util.sekPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NZDCAD') || pair == ('nzdcad')) {
            util.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NZDCHF') || pair == ('nzdchf')) {
            util.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NZDJPY') || pair == ('nzdjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NZDUSD') || pair == ('nzdusd')) {
            util.usdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('SEKJPY') || pair == ('sekjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('SGDJPY') || pair == ('sgdjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDCAD') || pair == ('usdcad')) {
            util.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDCHF') || pair == ('usdchf')) {
            util.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDCNH') || pair == ('usdcnh')) {
            util.cnhPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDCZK') || pair == ('usdczk')) {
            util.czkPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDHUF') || pair == ('usdhuf')) {
            util.hufPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDJPY') || pair == ('usdjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDMXN') || pair == ('usdmxn')) {
            util.mxnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDNOK') || pair == ('usdnok')) {
            util.nokPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDPLN') || pair == ('usdpln')) {
            util.plnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDRUB') || pair == ('usdrub')) {
            util.rubPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDSEK') || pair == ('usdsek')) {
            util.sekPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDSGD') || pair == ('usdsgd')) {
            util.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDTHB') || pair == ('usdthb')) {
            util.thbPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDTRY') || pair == ('usdtry')) {
            util.tryPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDZAR') || pair == ('usdzar')) {
            util.zarPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAGAUD') || pair == ('xagaud')) {
            util.XAGAUDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAGEUR') || pair == ('xageur')) {
            util.XAGEURPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAGUSD') || pair == ('xagusd')) {
            util.XAUUSDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUAUD') || pair == ('xauaud')) {
            util.XAUAUDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUCHF') || pair == ('xauchf')) {
            util.XAUCHFPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUEUR') || pair == ('xaueur')) {
            util.XAUEURPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUGBP') || pair == ('xaugbp')) {
            util.XAUGBPPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUJPY') || pair == ('xaujpy')) {
            util.XAUJPYPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUUSD') || pair == ('xauusd')) {
            util.XAUUSDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XPDUSD') || pair == ('xpdusd')) {
            util.XAUUSDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XPTUSD') || pair == ('xptusd')) {
            util.XAUUSDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('ZARJPY') || pair == ('zarjpy')) {
            util.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        }
    } else if (type == ('JPY') || type == ('jpy')) {
        if (pair == ('AUDCAD') || pair == ('audcad')) {
            jpyp.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDCHF') || pair == ('audchf')) {
            jpyp.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDJPY') || pair == ('audjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDNZD') || pair == ('audnzd')) {
            jpyp.nzdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDSGD') || pair == ('audsgd')) {
            jpyp.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('AUDUSD') || pair == ('audusd')) {
            jpyp.usdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('CADCHF') || pair == ('cadchf')) {
            jpyp.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('CADJPY') || pair == ('cadjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('CADCHF') || pair == ('cadchf')) {
            jpyp.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('CHFSGD') || pair == ('chfsgd')) {
            jpyp.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURAUD') || pair == ('euraud')) {
            jpyp.audPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURCAD') || pair == ('eurcad')) {
            jpyp.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURCHF') || pair == ('eurchf')) {
            jpyp.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURCZK') || pair == ('eurczk')) {
            jpyp.czkPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURGBP') || pair == ('eurgbp')) {
            jpyp.gbpPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURHUF') || pair == ('eurhuf')) {
            jpyp.hufPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURJPY') || pair == ('eurjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURJPY') || pair == ('eurjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURMXN') || pair == ('eurmxn')) {
            jpyp.mxnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURNOK') || pair == ('eurnok')) {
            jpyp.nokPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURNZD') || pair == ('eurnzd')) {
            jpyp.nzdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURPLN') || pair == ('eurpln')) {
            jpyp.plnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURSEK') || pair == ('eursek')) {
            jpyp.sekPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURSGD') || pair == ('eursgd')) {
            jpyp.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURTRY') || pair == ('eurtry')) {
            jpyp.tryPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURUSD') || pair == ('eurusd')) {
            jpyp.usdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('EURZAR') || pair == ('eurzar')) {
            jpyp.zarPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPAUD') || pair == ('gbpaud')) {
            jpyp.audPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPCAD') || pair == ('gbpcad')) {
            jpyp.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPCHF') || pair == ('gbpchf')) {
            jpyp.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPJPY') || pair == ('gbpjpy')) {
            jpyp.jpy(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPMXN') || pair == ('gbpmxn')) {
            jpyp.mxnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPNOK') || pair == ('gbpnok')) {
            jpyp.nokPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPNZD') || pair == ('gbpnzd')) {
            jpyp.nzdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPSEK') || pair == ('gbpsek')) {
            jpyp.sekPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPSGD') || pair == ('gbsgd')) {
            jpyp.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPTRY') || pair == ('gbptry')) {
            jpyp.tryPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('GBPUSD') || pair == ('gbpusd')) {
            jpyp.usdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NOKJPY') || pair == ('nokjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NOKSEK') || pair == ('noksek')) {
            jpyp.sekPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NZDCAD') || pair == ('nzdcad')) {
            jpyp.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NZDCHF') || pair == ('nzdchf')) {
            jpyp.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NZDJPY') || pair == ('nzdjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('NZDUSD') || pair == ('nzdusd')) {
            jpyp.usdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('SEKJPY') || pair == ('sekjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('SGDJPY') || pair == ('sgdjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDCAD') || pair == ('usdcad')) {
            jpyp.cadPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDCHF') || pair == ('usdchf')) {
            jpyp.chfPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDCNH') || pair == ('usdcnh')) {
            jpyp.cnhPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDCZK') || pair == ('usdczk')) {
            jpyp.czkPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDHUF') || pair == ('usdhuf')) {
            jpyp.hufPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDJPY') || pair == ('usdjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDMXN') || pair == ('usdmxn')) {
            jpyp.mxnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDNOK') || pair == ('usdnok')) {
            jpyp.nokPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDPLN') || pair == ('usdpln')) {
            jpyp.plnPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDRUB') || pair == ('usdrub')) {
            jpyp.rubPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDSEK') || pair == ('usdsek')) {
            jpyp.sekPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDSGD') || pair == ('usdsgd')) {
            jpyp.sgdPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDTHB') || pair == ('usdthb')) {
            jpyp.thbPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDTRY') || pair == ('usdtry')) {
            jpyp.tryPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('USDZAR') || pair == ('usdzar')) {
            jpyp.zarPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAGAUD') || pair == ('xagaud')) {
            jpyp.XAGAUDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAGEUR') || pair == ('xaueur')) {
            jpyp.XAGEURPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUAUD') || pair == ('xauaud')) {
            jpyp.XAUAUDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUCHF') || pair == ('xauchf')) {
            jpyp.XAUCHFPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUEUR') || pair == ('xaueur')) {
            jpyp.XAUEURPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUGBP') || pair == ('xaugbp')) {
            jpyp.XAUGBPPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUJPY') || pair == ('xaujpy')) {
            jpyp.XAUJPYPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XAUUSD') || pair == ('xauusd')) {
            jpyp.XAUUSDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XPDUSD') || pair == ('xpdusd')) {
            jpyp.XAUUSDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('XPTUSD') || pair == ('xptusd')) {
            jpyp.XAUUSDPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        } else if (pair == ('ZARJPY') || pair == ('zarjpy')) {
            jpyp.jpyPositionSize(accountSize, stoploss, riskAmount)
                .then((results) => {
                    const response = results
                    res.json({
                        success: 1,
                        result: response
                    });
                })
                .catch((err) => {
                    console.log(err)
                    res.json({
                        success: 0,
                        result: "error"
                    });
                })
        }
    }
})
const mongoose = require("mongoose");

const CoinScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true,
    },
    buy: {
        type: String,
        required: true,
    },
    sell: {
        type: String,
        required: true,
    },
    volume: {
        type: String,
        required: true,
    },
    baseu: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Coin = mongoose.model("Coin", CoinScheme);

module.exports = Coin; 
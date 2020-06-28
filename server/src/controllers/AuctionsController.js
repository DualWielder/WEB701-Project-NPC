const {Auction, Bid} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const auctions = await Auction.findAll({
                limit: 10
            })
            res.send(auctions)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the auctions'
            })
        }
    },

    async show (req, res) {
        try {
            const auction = await Auction.findByPk(req.params.auctionId)
            const bids = await Bid.findAll({
                where: {
                    AuctionId: req.params.auctionId
                }
            })
            auction.bids = bids
            console.log(auction)
            res.send(auction)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the auctions'
            })
        }
    },

    async post (req, res) {
        try {
            const auction = await Auction.create(req.body)
            res.send(auction)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the auction'
            })
        }
    }
}
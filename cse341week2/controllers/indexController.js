const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('cse341').find();
    result.toArray().then((lists) => {
        // console.log(lists[0])
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); // we just need the first one (the only one)
    });
};

module.exports = { getData };
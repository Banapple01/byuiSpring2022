const { response } = require("express");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getData = async (req, res, next) => {
	const result = await mongodb.getDb().db().collection("contacts").find();
	result.toArray().then((lists) => {
		// console.log(lists)
		res.setHeader("Content-Type", "application/json");
		res.status(200).json(lists);
	});
};

const getSingleData = async (req, res, next) => {
	const userId = new ObjectId(req.params.id);
	const result = await mongodb
		.getDb()
		.db()
		.collection("contacts")
		.find({ _id: userId });
	result.toArray().then((lists) => {
		// console.log(lists)
		res.setHeader("Content-Type", "application/json");
		res.status(200).json(lists[0]); // we just need the first one (the only one)
	});
};

const createData = async (req, res) => {
	const newContact = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		favoriteColor: req.body.favoriteColor,
		birthday: req.body.birthday,
	};
    // console.log(newContact)
	const response = await mongodb
		.getDb()
		.db()
		.collection("contacts")
		.insertOne(newContact);
    // console.log(response)
	if (response.acknowledged) {
		res.status(201).json(response);
	} else {
		res.status(500).json(
			response.error || "Some error occurred while creating the contact."
		);
	}
};

const updateData = async (req, res) => {
	const userId = new ObjectId(req.params.id);
	const upContact = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		favoriteColor: req.body.favoriteColor,
		birthday: req.body.birthday,
	};
	const result = await mongodb
		.getDb()
		.db()
		.collection("contacts")
		.find({ _id: userId }, upContact);
	if (response.modifiedCount > 0) {
		res.status(204).send();
	} else {
		res.status(500).json(
			response.error || "Something went wrong with the update."
		);
	}
};

const deleteData = async (req, res) => {
	const userId = new ObjectId(req.params.id);
	const result = await mongodb
		.getDb()
		.db()
		.collection("contacts")
		.remove({ _id: userId }, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(
            response.error || "Something went wrong while deleting the data."
        );
    }
};

module.exports = { getData, getSingleData, createData, updateData, deleteData };

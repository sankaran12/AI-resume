const asyncHandler = require("express-async-handler");
const userdatails = require("../Model/index");

const getalldata = asyncHandler(async (req, res) => {
  try {
    const data = await userdatails.find(req?.query);
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    throw new Error(error);
  }
});
const postdata = asyncHandler(async (req, res) => {
  try {
    const data = await userdatails.create(req?.body?.data);
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const getsingledata = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const data = await userdatails.findById(id);
    if (data) {
      res.status(200).json({
        status: "success",
        message: "data found",
        success: true,
        data: data,

      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

const deletedata = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const data = await userdatails.findByIdAndDelete(id);
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const updatedata = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const data = await userdatails.findByIdAndUpdate(id, req?.body?.data, {
      new: true,
    });
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getalldata,
  postdata,
  getsingledata,
  deletedata,
  updatedata,
};

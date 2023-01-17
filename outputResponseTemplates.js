const { outputMessages } = require("./outputMessages");

const success200 = (
  res,
  { data, total = null, message = outputMessages?.success } = {}
) =>
  res
    .status(200)
    .json({ statusCode: 200, isSuccess: true, message, data, total });

const serverError500 = (res, { message = outputMessages?.server_err } = {}) =>
  res
    .status(500)
    .json({ statusCode: 500, isSuccess: false, message, data: null });

const notFound404 = (res, { message = outputMessages?.error404 } = {}) =>
  res
    .status(404)
    .json({ statusCode: 404, isSuccess: false, message, data: null });

    const badRequest400 = (res, { message = outputMessages?.badRequest400 } = {}) =>
  res
    .status(404)
    .json({ statusCode: 404, isSuccess: false, message, data: null });


const unprocessable422 = (
  res,
  { message = outputMessages?.mandatory_field } = {}
) =>
  res
    .status(422)
    .json({ statusCode: 422, isSuccess: false, message, data: null });

module.exports = { success200, serverError500, notFound404, unprocessable422, badRequest400 };

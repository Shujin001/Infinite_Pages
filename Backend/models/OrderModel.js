// const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

// const BookCartSchema = new mongoose.Schema({
//   book: {
//     type: ObjectId,
//     ref: "Book"
//   },
//   name: String,
//   count: Number,
//   price: Number
// });

// const BookCart = mongoose.model("BookCart", BookCartSchema);

// const OrderSchema = new mongoose.Schema(
//   {
//     books: [BookCartSchema],
//     transaction_id: {},
//     amount: { type: Number },
//     address: String,
//     status: {
//       type: String,
//       default: "Recieved",
//       enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"]
//     },
//     updated: Date,
//     user: {
//       type: ObjectId,
//       ref: "User"
//     }
//   },
//   { timestamps: true }
// );

// const Order = mongoose.model("Order", OrderSchema);

// module.exports = { Order, BookCart };

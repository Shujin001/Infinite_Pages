// const { Order, BookCart } = require('../models/orderModel')


// //GET A individual order
// exports.getOrderById = (req, res, next, id) => {
//   Order.findById(id)
//     .populate("books.book", "name price")
//     .exec((err, order) => {
//       if (err) {
//         return res.status(400).json({
//           error: "NO order found in DB"
//         });
//       }
//       req.order = order;
//       next();
//     });
// };

// //Create Order
// exports.createOrder = (req, res) => {
//   req.body.order.user = req.profile;
//   const order = new Order(req.body.order);
//   order.save((err, order) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Failed to save your order in DB"
//       });
//     }
//     res.json(order);
//   });
// };

// exports.getAllOrders = (req, res) => {
//   Order.find()
//     .populate("user", "_id name")
//     .exec((err, order) => {
//       if (err) {
//         return res.status(400).json({
//           error: "No orders found in DB"
//         });
//       }
//       res.json(order);
//     });
// };

// exports.getBook = (req, res) => {
//   req.book.photo = undefined
//   return res.json(req.book)
// }


// //delete controllers
// exports.deleteOrder = (req, res) => {
//   let order = req.order;
//   order.remove((err, deletedOrder) => {
//       if(err) {
//           return res.status(400).json({
//               error: "Failed to delete the book"
//           })
//       }
//       res.json({
//           message: "Deletion was successful", deletedOrder
//       })
//   })
// }

// exports.getOrderStatus = (req, res) => {
//   res.json(Order.schema.path("status").enumValues);
// };

// exports.updateStatus = (req, res) => {
//   Order.update(
//     { _id: req.body.orderId },
//     { $set: { status: req.body.status } },
//     (err, order) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Cannot update order status"
//         });
//       }
//       res.json(order);
//     }
//   );
// };

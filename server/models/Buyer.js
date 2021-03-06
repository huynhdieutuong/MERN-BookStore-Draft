const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cart: [
    {
      book: {
        type: Schema.Types.ObjectId,
        ref: 'Book'
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

const Buyer = mongoose.model('Buyer', buyerSchema, 'buyers');

module.exports = Buyer;

module.exports = {
  // list
  mutipleMongooseToObject: function (mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
  },
  // one
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};

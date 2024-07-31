const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const userSchema=mongoose.Schema({
    name: { type: String, required: true },
  place: { type: String, required: false }, // Optional field
  age: { type: Number, required: false },   // Optional field
  email: { type: String, required: true, unique: true },
  education: { type: String, required: false }, // Optional field
  number: { type: Number, required: false },    // Optional field
  password: { type: String, required: true }
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };
  
const userData=mongoose.model('userdetail',userSchema);
module.exports=userData;
const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
const {Schema} = moongose;
const bcrypt = required('bcryptjs');

const UsersSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true}, 
    email: {type: String, required: true},
    password: {type: String, required: true}, 
    date: {type: date, default: Date.now}
});

UsersSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);   
    const hash = bcrypt.hash(password, salt);
    return hash; 
};

UsersSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password);
}
module.exports = mongoose.model('Users', UsersSchema);
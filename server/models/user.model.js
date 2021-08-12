const mongoose = require("mongoose");
require("./phot.model");
require("./comments.model");
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"]
	  },
	  
		photo:[{type:mongoose.Schema.Types.ObjectId, ref:'Phot'}],
		// comments:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}],
	  
	  email: {
		type: String,
		required: [true, "Email is required"],
		validate: {
			validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
			message: "Please enter a valid email"
		  }
	  },
	  password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [8, "Password must be 8 characters or longer"]
	  },
	 
	  address:{
		  type:String,
		  require:[true,"location is a required field"]
	  },
	}, {timestamps: true});
	UserSchema.virtual('confirmPassword')
	.get(() => this._confirmPassword)
	.set(value => this._confirmPassword = value);


UserSchema.pre('save', function (next) {
	bcrypt.hash(this.password, 10)
		.then(hash => {
			this.password = hash;
			next();
		});
});

UserSchema.pre('validate', function (next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate('confirmPassword', 'Password must match confirm password');
	}
	next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
// UserSchema.virtual('confirmPassword')

//   .get( () => this._confirmPassword )
//   .set( value => this._confirmPassword = value );
//   UserSchema.pre('validate', function(next) {
// 	if (this.password !== this.confirmPassword) {
// 	  this.invalidate('confirmPassword', 'Password must match confirm password');
// 	}
// 	next();
//   });



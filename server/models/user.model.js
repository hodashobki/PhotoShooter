const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"]
	  },
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

const User = mongoose.model("User", UserSchema);
UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );
  UserSchema.pre('validate', function(next) {
	if (this.password !== this.confirmPassword) {
	  this.invalidate('confirmPassword', 'Password must match confirm password');
	}
	next();
  });

module.exports = User;
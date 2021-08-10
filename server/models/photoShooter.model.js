// const mongoose=require("mongoose");

// const PhotoShooterSchema=new mongoose.Schema({
//      user : {
//         name: {
//             type: String,
//             required: [true, "Name is required"]
//           },
//          email: {
//             type: String,
//             required: [true, "Email is required"],
//             validate: {
//                 validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
//                 message: "Please enter a valid email"
//               }
//           },
//           password: {
//             type: String,
//             required: [true, "Password is required"],
//             minlength: [8, "Password must be 8 characters or longer"]
//           },
//         //   conPassword: {
//         //     type: String,
//         //     required: [true, "conPassword is required"],
         
//           address:{
//               type:String,
//               require:[true,"location is a required field"]
//           },

//         photo:[{
//             desc:{
//                 type:String,
//                 required:[true,"This field must not be Empty"]
//             },
//             img:{
//                 type:String,
//             },
//             title:{
//                 type:String,
//                 required:true
//             },
//             like:{type:Number},

//             comment:[{
//                 text:{
//                     type:String,
//                     required:[true,"you Must add a comment before submit"]
                
//                 },
//                 name:{

//                 }
//             }]
//         }]


//      }
// })
// const PhotoShooter=mongoose.model("PhotoShooter",PhotoShooterSchema);
// module.exports=PhotoShooter;
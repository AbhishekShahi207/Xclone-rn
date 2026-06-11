import mongoose from "mongoose";

const userSchmea = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastname:{
         type: String,
      required: true,
    },
    username:{
           type: String,
      required: true,
      unique: true,
    },
    profilePicture:{
        type:String,
        default:""
    },
    bannerImage:{
          type:String,
        default:""
    },
    bio:{
        type:Sting,
        default:"",
        maxLength:160
    },
    location:{
        type:String,
        default:""
    },
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    following:[
           {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
  },
  {
    timestamps: true,
  },
);

const  User = mongoose.model("User",userSchmea)
export default User;
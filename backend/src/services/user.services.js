import User from "../models/user.model.js";
export const createUser = async({
    email , password
})=>{
      if(!email || !password){
        throw new (` Email nad password required`);
      }

      const hashedPassword =  await User.hashpassword(password);
      
      const user = await User.create({
        email ,
        password:hashedPassword
      })
      return user;
}

export const getAllUsers = async ({ userId }) => {
  const users = await User.find({
      _id: { $ne: userId }
  });
  return users;
}
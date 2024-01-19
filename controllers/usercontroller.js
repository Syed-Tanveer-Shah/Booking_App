import newmodel from "../models/user.js";
class  usercontroller{
 

   // Create Documenet
  // no need already have rgister function.

 // Get All User

 static getAllUser = async(req,res) =>{
   try {
      const getalldoc = await newmodel.find(req.body)
      res.send(getalldoc);
   } catch (error) {
      console.log(error);
   }
 }

 // Update Documnet By Id

 static updateUser = async(req,res)=>{
   try {
      const updateUser = await newmodel.findByIdAndUpdate(req.params.id,{$set: req.body});
      res.send(updateUser);
   } catch (error) {
      console.log(error);
   }
 }

 // Delete Document by Id

 static deleteUser = async(req,res)=>{
   try {
      const deleteUser = await newmodel.findByIdAndDelete(req.params.id,{$set: req.body});
      res.send(deleteUser);
   } catch (error) {
      console.log(error);
   }
 }

}

export default usercontroller
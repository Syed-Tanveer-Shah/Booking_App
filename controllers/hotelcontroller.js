import newmodel from "../models/hotel.js";
class  hotelcontroller{
 

   // Create creat Hptel
   static createHotel = async(req,res)=>{
   const newhotel = new newmodel(req.body)
   try {
      const savedhotel = await newhotel.save() 
      res.send(savedhotel);
   } catch (error) {
      console.log(error);
   }
 }

 // Get All Hotel

 static getAllHotel = async(req,res) =>{
   try {
      const getalldoc = await newmodel.find(req.body)
      res.send(getalldoc);
   } catch (error) {
      console.log(error);
   }
 }

 // Update hotel By Id

 static updateHotel = async(req,res)=>{
   try {
      const updatehotel = await newmodel.findByIdAndUpdate(req.params.id,{$set: req.body});
      res.send(updatehotel);
   } catch (error) {
      console.log(error);
   }
 }

 // Delete hotel by Id

 static deleteHotel = async(req,res)=>{
   try {
      const deletehotel = await newmodel.findByIdAndDelete(req.params.id,{$set: req.body});
      res.send(deletehotel);
   } catch (error) {
      console.log(error);
   }
 }

}

export default hotelcontroller
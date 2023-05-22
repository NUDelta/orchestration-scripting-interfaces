import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/testModel';

export default async function modifyTest(req, res) {
  if (req.method === 'PUT') {
    // Handle PUT request logic
    try {
      const { id } = req.query; 
      const updatedData = req.body;

      // Connect to MongoDB
      await connectMongo();

      // Update the Test document by ID
      const updatedTest = await Test.findByIdAndUpdate(
        id,
        updatedData,
        { new: true }
      );

      if (updatedTest) {
        // If the document is updated successfully, send the updated document in the response
        res.status(200).json({ test: updatedTest });
      } else {
        // If the document is not found, send a 404 error response
        res.status(404).json({ error: 'Test not found' });
      }
    } catch (error) {
      console.log('Error updating test:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Return a 405 Method Not Allowed error if other HTTP methods are used
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
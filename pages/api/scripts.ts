import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../utils/connectMongo';
import Test from '../../models/testModel';

const scriptsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
      try {
        const { title } = req.body;
  
        // Connect to MongoDB
        let script = await connectMongo({find: "scripts", filter: {title: title}});
        console.log('SCRIPT HANDLER:', script)
  
        // // Search for the script by title
        // const script = await Test.findOne({ title });
  
        if (script) {
          // If the script is found, send the script ID in the response
          res.status(200).json({ scriptId: script[0]._id });
        } else {
          // If the script is not found, send a 404 error response
          res.status(404).json({ error: 'Script not found' });
        }
      } catch (error) {
        console.log('Error fetching script:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      // Return a 405 Method Not Allowed error if other HTTP methods are used
      res.status(405).json({ error: 'Method Not Allowed' });
    }
    if (req.method === 'PUT') {
      try {
        const { title } = req.body;
  
        // Connect to MongoDB
        let script = await connectMongo({find: "scripts", filter: {title: title}});
        console.log(script)
  
        // // Search for the script by title
        // const script = await Test.findOne({ title });
  
        if (script) {
          // If the script is found, send the script ID in the response
          res.status(200).json({ scriptId: script[0]._id });
        } else {
          // If the script is not found, send a 404 error response
          res.status(404).json({ error: 'Script not found' });
        }
      } catch (error) {
        console.log('Error fetching script:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      // Return a 405 Method Not Allowed error if other HTTP methods are used
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };

export default scriptsHandler;

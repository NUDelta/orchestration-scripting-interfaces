import connectMongo from '../../../utils/connectMongo';
import { ObjectId } from 'mongodb';

export default async function updateResponse(req, res) {
  if (req.method === 'PUT') {
    try {
      const { _id, gen_context, hypothesisList, description, initial_hunch, game_plan, p5Canvas } =
        req.body;
      const genContextObject = JSON.parse(gen_context);
      const hypothesisListObject = JSON.parse(hypothesisList);
      const canvasObject = JSON.parse(p5Canvas);
      // const rcListObject = JSON.parse(rcs);
      const updatedResponse = await connectMongo({
        findAndModify: 'responses',
        query: { _id: new ObjectId(_id) },
        update: {
          $set: {
            gen_context: genContextObject,
            hypothesisList: hypothesisListObject,
            description: description,
            initial_hunch: initial_hunch,
            game_plan: game_plan,
            p5Canvas: canvasObject,
            // rcs: rcListObject,
          },
        },
        new: true,
      });

      if (updatedResponse) {
        // If the document is updated successfully, send the updated document in the response
        res.status(200).json({ test: updatedResponse });
      } else {
        // If the document is not found, send a 404 error response
        res.status(404).json({ error: 'Response not found' });
      }
    } catch (error) {
      console.log('Error updating response:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Return a 405 Method Not Allowed error if other HTTP methods are used
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

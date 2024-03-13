import connectMongo from '../../../utils/connectMongo';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addResponse(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    const response = await connectMongo({insert: "responses", documents: [req.body] });
    console.log('CONNECTED TO MONGO');
    console.log('ADDING ', response)

    console.log('CREATING DOCUMENT');
    // const test = await Test.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ response });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
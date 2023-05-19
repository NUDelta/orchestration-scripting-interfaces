import dbConnect from '../../../lib/dbConnect';
import OSEScript from '../../../models/ScriptModel'; // Import the OSEScript model

const users = [
	{ id: 1, name: 'John Smith' },
	{ id: 2, name: 'Jane Doe' },
];

export default async function handler (req, res) {
  const { query: { id },
          method,} = req;

//   console.log('id', id);
  console.log('body', req.body);

  switch (method) {
    case 'GET':
      try {
        const script = await OSEScript.findById(id);;
        if (!script) {
          return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.status(200).json({ success: true, data: script });
      } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
      }
      break;
    // case 'POST':
    //     // try {
    //     //     const { name } = req.body.user;
    //     //     // Save the user to the database or perform any other necessary operations
    //     //     const newUser = { id: users.length + 1, name };
    //     //     users.push(newUser);
    //     //     res.status(200).json({ success: true, data: newUser });
    //     //   } catch (error) {
    //     //     console.error(error);
    //     //     res.status(500).json({ success: false, error: 'Server error' });
    //     //   }
    //     res.json({ method: 'POST', endpoint: 'Users' });
    //       break;
    default:
      res.setHeader('Allow', 'GET');
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
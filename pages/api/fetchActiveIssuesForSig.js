export default async (req, res) => {
    try {
    //   const { sigName } = req.query;
      const sigName = 'Human-AI Tools'

      const apiUrl = `${process.env.API_URL}/activeIssues/fetchActiveIssuesForSig?sigName=${sigName}`;
      console.log('apiUrl:', apiUrl)
      const response = await fetch(apiUrl);
  
      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        console.error(`Error fetching active issues for SIG: ${response.status}`);
        res.status(response.status).json({ error: `Error fetching active issues for SIG ${sigName}`});
      }
    } catch (error) {
      console.error(`Error when fetching active issues for SIG ${sigName}: ${error}`);
      res.status(500).json({ error: `Error fetching active issues for SIG ${sigName}` });
    }
  };
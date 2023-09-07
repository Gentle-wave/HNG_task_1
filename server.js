const express = require('express');
const app = express();
require ('dotenv').config()

app.use(express.json())

app.get('/api', (req, res) => {
    try {
      const { slack_name, track } = req.query;
  
      const currentDate = new Date();
      const currentUTC = currentDate.toISOString();
  
      const response = {
        slack_name,
        current_day: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),
        utc_time: currentUTC,
        track,
        github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
        github_repo_url: 'https://github.com/Gentle-wave/HNG_task_1',
        status_code: 200,
      };
  
      res.json(response);
    } catch (error) {
      console.error('An error occurred:', error || error.message);
      res.status(500).json({ error: 'Internal Server Error' || error.message });
    }
  });

app.get('/', (req, res)=> {
 res.json({
    message: 'homepage'
 })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

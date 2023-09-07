const express = require('express');
const app = express();
require ('dotenv').config()

app.use(express.json())

app.get('/api', (req, res) => {
    try {
      const { slack_name, track } = req.query;
  
      const currentDate = new Date();
      const year = currentDate.getUTCFullYear();
      const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getUTCDate().toString().padStart(2, '0');
      const hours = currentDate.getUTCHours().toString().padStart(2, '0');
      const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
      const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
  
      // Create the formatted UTC time string
      const currentUTC = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
  
      const response = {
        slack_name,
        current_day: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),
        utc_time: currentUTC,
        track,
        github_file_url: 'https://github.com/Gentle-wave/HNG_task_1/blob/tobi/index.js',
        github_repo_url: 'https://github.com/Gentle-wave/HNG_task_1',
        status_code: 200,
        message : "sucessful"
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

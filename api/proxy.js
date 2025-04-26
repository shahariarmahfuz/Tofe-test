const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://bldcmprod-cdn.toffeelive.com/cdn/live/sports_highlights/playlist.m3u8', {
      headers: {
        'User-Agent': 'Toffee (Linux;Android 14) AndroidXMedia3/1.1.1/64103898/4d2ec9b8c7534adc',
        'Cookie': 'Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9ibGRjbXByb2QtY2RuLnRvZmZlZWxpdmUuY29tLw:Expires=1745804479:KeyName=prod_linear:Signature=jE0jTDqBrlZFnAVX0vC8gwL9udh8ydNTgyEuKlOdIuOZp4O17vFRe_NO1nH8r8ySKF46RSfCBFdE_49OEZJoCg'
      }
    });
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

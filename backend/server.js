const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

require('dotenv').config();

app.use(cors({
    origin: ['https://devclash.dypdpu.edu.in', 'http://localhost:5173'],
    methods: ['GET'],
}));


const problemStatements = [
    {
      theme: "FinTech",
      title: "Financial Inclusion Platform",
      description: "Design a solution that bridges the gap for unbanked and underbanked populations. Create accessible, user-friendly financial tools that address barriers like limited tech access, financial literacy gaps, and identification requirements. Focus on security, privacy, and scalability while ensuring the product appeals to users with diverse financial knowledge levels.",
      icon: "💰"
    },
    {
      theme: "EduTech",
      title: "Personalized Learning Experience",
      description: "Build an adaptive educational platform that identifies individual learning styles, strengths, and weaknesses to deliver customized content. Incorporate features like progress tracking, interactive exercises, and accessibility options. The solution should work across various devices, including low-bandwidth scenarios, and provide meaningful metrics for both students and educators.",
      icon: "📚"
    },
    {
      theme: "Healthcare",
      title: "Remote Patient Monitoring System",
      description: "Develop a comprehensive system for monitoring patients with chronic conditions outside traditional healthcare settings. Integrate data collection from wearables or simple home devices, automated analysis to detect concerning patterns, and appropriate notification systems. Consider privacy regulations, ease of use for elderly patients, and integration with existing healthcare workflows.",
      icon: "🏥"
    },
    {
      theme: "Agriculture",
      title: "Sustainable Farming Assistant",
      description: "Create a solution to help small and medium-scale farmers implement sustainable practices that optimize resource usage and crop yields. Focus on areas like precision agriculture, weather prediction, soil health monitoring, or supply chain improvements. The tool should be accessible to farmers with varying levels of technical expertise and adaptable to different agricultural contexts.",
      icon: "🌱"
    }
  ];


app.get('/', (req, res) => {
    res.redirect('https://devclash.dypdpu.edu.in/')
});



app.get('/get-problems', (req, res) => {
    if(process.env.IS_ALLOWED) {
        res.json(problemStatements);
    } else {
        res.json([])
    }
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

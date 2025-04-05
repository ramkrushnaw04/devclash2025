const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

require('dotenv').config();
const filePath = path.join(__dirname, 'ProblemStatement.docx');
console.log(filePath);


app.use(cors({
    origin: ['https://devclash.dypdpu.edu.in', 'http://localhost:5173'],
    methods: ['GET'],
}));


const problemStatements = [
    {
        "theme": "EduTech",
        "title": "Adaptive STEM Learning Platform",
        "description": "Create an AI-powered web or mobile application that revolutionizes STEM education for students in grades 6-12 through personalized learning experiences. Build an intelligent assessment system using machine learning to identify learning gaps, develop adaptive content delivery, implement collaborative learning, and create visualization tools to track progress and mastery of concepts.",
        "icon": "📚"
    },
    {
        "theme": "FinTech",
        "title": "Micro-Entrepreneur Financial Empowerment App",
        "description": "Develop a mobile app that transforms financial access for micro-entrepreneurs in emerging markets through alternative credit scoring and business intelligence. Create an alternative credit scoring algorithm, build real-time expense tracking, implement predictive cash flow modeling, develop a simplified loan application system, and design interactive financial education modules.",
        "icon": "💰"
    },
    {
        "theme": "Agriculture",
        "title": "Smart Farming Intelligence Platform",
        "description": "Build a data-driven mobile application that helps small-scale farmers optimize crop management and productivity using predictive analytics. Integrate satellite imagery and weather data APIs, implement machine learning for crop health analysis, create resource optimization algorithms, develop a market intelligence system, and build a knowledge-sharing community feature.",
        "icon": "🌱"
    },
    {
        "theme": "Healthcare",
        "title": "Community Health Monitoring Platform",
        "description": "Create a telemedicine application connecting patients in underserved regions with healthcare support through AI-powered diagnostics and remote consultations. Develop an AI symptom checker, build secure patient record management, implement teleconsultation scheduling, create medication tracking, and design health trend visualization tools.",
        "icon": "🏥"
    }
];


app.get('/', (req, res) => {
    res.redirect('https://devclash.dypdpu.edu.in/')
});



app.get('/get-problems', (req, res) => {
    // if(process.env.IS_ALLOWED) {
    //     res.json(problemStatements);
    // } else {
    //     res.json([])
    // }
    res.json([])

});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
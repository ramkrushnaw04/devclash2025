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
        "description": "Create an AI-powered web or mobile application that revolutionizes STEM education for students in grades 6-12 through personalized learning experiences. Technical Requirements: Build an intelligent assessment system using machine learning to identify learning gaps, develop adaptive content delivery that adjusts difficulty based on student performance, implement a collaborative learning environment with peer-to-peer problem-solving, and create visualization tools to track progress. Core Deliverables: User authentication and profile system with learning style assessment, initial diagnostic test engine with real-time feedback, personal learning path generator with at least 3 STEM subjects, performance analytics dashboard, and collaborative challenge platform with gamification elements. Success Metrics: Accurate diagnosis of learning gaps, smooth difficulty progression adapted to individual pace, clear visualization of student progress, functional peer collaboration features, and intuitive UX/UI suitable for teenage students.",
        "icon": "📚"
    },
    {
        "theme": "FinTech",
        "title": "Micro-Entrepreneur Financial Empowerment",
        "description": "Develop a mobile app that transforms financial access for micro-entrepreneurs in emerging markets through alternative credit scoring and business intelligence. Technical Requirements: Create an alternative credit scoring algorithm using non-traditional data points, build real-time expense tracking and categorization features, implement predictive cash flow modeling with visualization, develop a simplified loan application and matching system, and design interactive financial education modules. Core Deliverables: User profile with financial behavior analysis, expense and income tracking dashboard with categorization, cash flow prediction tool with at least 30-day forecasting, business intelligence module with local market trends, and gamified financial literacy modules. Success Metrics: Accurate alternative credit score generation, intuitive expense tracking, practical business insights, engaging financial education modules with high completion rates, and secure data handling with user privacy protections.",
        "icon": "💰"
    },
    {
        "theme": "Agriculture",
        "title": "Smart Farming Intelligence Platform",
        "description": "Build a data-driven mobile application that helps small-scale farmers optimize crop management and productivity using predictive analytics. Technical Requirements: Integrate satellite imagery and weather data APIs, implement machine learning for crop health analysis and yield prediction, create resource optimization algorithms for water and fertilizer usage, develop a market intelligence system with price forecasting, and build a knowledge-sharing community feature. Core Deliverables: User profile with farm location and crop selection, weather and climate impact forecasting with 7-day predictions, crop health monitoring with disease early warning system, resource management dashboard with optimization recommendations, market price tracker, and community forum. Success Metrics: Accurate weather and climate predictions, practical resource optimization recommendations, reliable crop disease identification, up-to-date market pricing information, and intuitive interface accessible to farmers with limited technical expertise.",
        "icon": "🌱"
    },
    {
        "theme": "Healthcare",
        "title": "Community Health Monitoring Platform",
        "description": "Create a telemedicine application connecting patients in underserved regions with healthcare support through AI-powered diagnostics and remote consultations. Technical Requirements: Develop an AI symptom checker with preliminary diagnosis capabilities, build secure patient record management system, implement teleconsultation scheduling and video conferencing, create medication tracking and reminder system, and design health trend visualization tools. Core Deliverables: User authentication with secure health profile, symptom assessment tool with risk factor analysis, medication management with adherence tracking, teleconsultation booking system with calendar integration, health metrics dashboard, and local health resource directory. Success Metrics: Accurate preliminary health assessments, secure and HIPAA-compliant data handling, reliable teleconsultation connection, effective medication adherence tracking, intuitive interface for users of all technical abilities, and practical health insights.",
        "icon": "🏥"
    }
]

app.get('/', (req, res) => {
    res.redirect('https://devclash.dypdpu.edu.in/')
});



app.get('/get-problems', (req, res) => {

    res.json(problemStatements)

});


app.listen(PORT, () => {
    console.log(`Server running on production);
});

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Mainpage from './Components/Mainpage';
import InstructionPage from './Components/InstructionPage';
import SecurityPage  from './Components/SecurityPage';
import  SubscriptionPage  from './Components/SubscriptionPage';
import FeedbackPage from './Components/FeedbackPage';
import Footer from './Components/Footer';
import SubMainpage from './Components/SubMainpage';
function App() {
  return (
  <div>
 <Navbar />
 <Mainpage />
 <SubMainpage />
 <InstructionPage />
 <SecurityPage />
 <SubscriptionPage />
 <FeedbackPage />
 <Footer />
 </div>
  );
}

export default App;

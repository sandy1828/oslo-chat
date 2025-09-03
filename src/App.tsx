import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="avatar">
          <img src="https://i.pravatar.cc/50" alt="avatar" />
        </div>
        <div className="nav active">🏠</div>
        <div className="nav">🚀</div>
        <div className="nav">👥</div>
        <div className="nav">📊</div>
        <div className="nav">✉️</div>
        <div className="nav">⚙️</div>
      </aside>

      {/* Main */}
      <div className="main">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button className="back-btn">←</button>
            <input type="text" defaultValue="Untitled List" />
          </div>

          <div className="steps">
            {["Who", "What/Why", "Where", "When"].map((label, idx) => (
              <div key={idx} className="step">
                <div className={`bar ${step > idx ? "active" : ""}`}></div>
                <span className={step === idx + 1 ? "label active" : "label"}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="header-right">
            <button className="save">Save</button>
            <button className="campaign">Make Campaign</button>
          </div>
        </header>

        {/* Body */}
        <div className="body">
          {/* Chat Area */}
          <div className="chat">
            <h2>✨ Oslo chat</h2>
            <div className="messages">
              {/* Oslo message */}
              <div className="msg">Hello I’m Oslo. Tell me what’s on your mind</div>

              {/* User message */}
              <div className="msg user">Create leads on Tech targets</div>

              {/* Oslo reply */}
              <div className="msg">
                ICP updated to target Tech Companies. If you want to specify roles,
                locations, or other criteria for decision-makers, please let me know
              </div>
            </div>

            {/* Input */}
            <div className="chat-input">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Type here..." />
              <button className="mic-btn">🎤</button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="right-panel">
            <h3>
              Let’s define your <span>targets</span>
            </h3>
            <p>
              Focus on the most relevant fields to shape your ICP — all fields are
              optional
            </p>

            <div className="section">
              <h4>Company Profile</h4>
              <select>
                <option>Company Headcount</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
              </select>
              <select>
                <option>Company HQ Locations</option>
                <option>India</option>
                <option>USA</option>
                <option>Europe</option>
              </select>
              <select>
                <option>Revenue range</option>
                <option>50L - 1Cr</option>
                <option>1Cr - 10Cr</option>
              </select>
            </div>

            <div className="section">
              <h4>Prospect Profile</h4>
              <select>
                <option>Department</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Theory from './components/Theory';
import Practice from './components/Practice';
import Quiz from './components/Quiz';

function App() {
  const [activeSection, setActiveSection] = useState('theory');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Коллоквиум по тулзам</h1>
        <p>Подготовка к экзамену по системному администрированию Linux</p>
      </header>

      <nav className="app-nav">
        <button
          className={`nav-button ${activeSection === 'theory' ? 'active' : ''}`}
          onClick={() => setActiveSection('theory')}
        >
          Теория
        </button>
        <button
          className={`nav-button ${activeSection === 'practice' ? 'active' : ''}`}
          onClick={() => setActiveSection('practice')}
        >
          Практика
        </button>
        <button
          className={`nav-button ${activeSection === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveSection('quiz')}
        >
          Тестирование
        </button>
      </nav>

      <main className="app-content">
        {activeSection === 'theory' && <Theory />}
        {activeSection === 'practice' && <Practice />}
        {activeSection === 'quiz' && <Quiz />}
      </main>
    </div>
  );
}

export default App;

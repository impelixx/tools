import { useState } from 'react';
import { allQuestions } from '../data/questions';
import { theoryTopics } from '../data/topics';

export default function Quiz() {
  const [quizState, setQuizState] = useState('setup'); // setup, active, results
  const [quizMode, setQuizMode] = useState('normal'); // normal or exam
  const [settings, setSettings] = useState({
    category: 'all',
    questionCount: 10
  });
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const startQuiz = () => {
    let filtered = allQuestions;
    if (settings.category !== 'all') {
      filtered = allQuestions.filter(q => q.category === settings.category);
    }

    // Shuffle and select questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(settings.questionCount, shuffled.length));

    setCurrentQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(null));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setQuizMode('normal');
    setQuizState('active');
  };

  const startExam = () => {
    // Randomly select 2 tickets (topics) from 1 to 10
    const allTickets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = [...allTickets].sort(() => Math.random() - 0.5);
    const tickets = shuffled.slice(0, 2).sort((a, b) => a - b);

    setSelectedTickets(tickets);

    // Get questions only from selected tickets
    const filtered = allQuestions.filter(q =>
      q.topic && tickets.includes(q.topic)
    );

    // Shuffle and take all questions from these tickets (or limit to questionCount)
    const shuffledQuestions = [...filtered].sort(() => Math.random() - 0.5);
    const selected = shuffledQuestions.slice(0, Math.min(20, shuffledQuestions.length));

    setCurrentQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(null));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setQuizMode('exam');
    setQuizState('active');
  };

  const selectAnswer = (index) => {
    setSelectedAnswer(index);
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = index;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(userAnswers[currentIndex + 1]);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(userAnswers[currentIndex - 1]);
    }
  };

  const finishQuiz = () => {
    setQuizState('results');
  };

  const restartQuiz = () => {
    setQuizState('setup');
    setCurrentQuestions([]);
    setCurrentIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setSelectedTickets([]);
  };

  // Setup screen
  if (quizState === 'setup') {
    return (
      <div>
        <h1>Тестирование</h1>

        <div className="quiz-settings">
          <h2>Обычный режим</h2>

          <div className="setting-item">
            <label>Выберите категорию:</label>
            <select
              value={settings.category}
              onChange={(e) => setSettings({ ...settings, category: e.target.value })}
            >
              <option value="all">Все темы</option>
              <option value="theory">Только теория</option>
              <option value="practice">Только практика</option>
              <option value="commands">Базовые команды Linux</option>
            </select>
          </div>

          <div className="setting-item">
            <label>Количество вопросов:</label>
            <input
              type="number"
              min="5"
              max="50"
              value={settings.questionCount}
              onChange={(e) => setSettings({ ...settings, questionCount: parseInt(e.target.value) })}
            />
          </div>

          <button className="btn-primary btn-large" onClick={startQuiz}>
            Начать тестирование
          </button>
        </div>

        <div className="quiz-settings" style={{ marginTop: '30px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
          <h2 style={{ color: 'white' }}>🎓 Режим экзамена</h2>
          <p style={{ color: 'white', marginBottom: '20px' }}>
            Будут случайно выбраны 2 билета из 10. Вопросы только из этих билетов!
          </p>
          <button
            className="btn-large"
            onClick={startExam}
            style={{
              background: 'white',
              color: '#f5576c',
              border: 'none',
              fontWeight: 'bold'
            }}
          >
            Начать экзамен (2 случайных билета)
          </button>
        </div>

        <div className="info-box" style={{ marginTop: '30px' }}>
          <h3>Как это работает:</h3>
          <ul>
            <li><strong>Обычный режим:</strong> выберите категорию и количество вопросов</li>
            <li><strong>Режим экзамена:</strong> система случайно выберет 2 билета из 10, вопросы будут только по этим билетам</li>
            <li>Отвечайте на вопросы, выбирая правильный вариант</li>
            <li>В конце получите результаты с разбором ошибок</li>
          </ul>
        </div>

        <div className="info-box" style={{ marginTop: '20px', background: '#f0f9ff', borderColor: '#3b82f6' }}>
          <h3>📚 Билеты (темы):</h3>
          <ol style={{ marginLeft: '20px', marginTop: '10px' }}>
            {theoryTopics.map(topic => (
              <li key={topic.id} style={{ margin: '8px 0' }}>
                <strong>Билет {topic.id}:</strong> {topic.title}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  // Active quiz
  if (quizState === 'active') {
    const question = currentQuestions[currentIndex];

    return (
      <div>
        <div className="quiz-header">
          <div>
            <h1>
              {quizMode === 'exam' ? '🎓 Экзамен' : 'Тестирование'}
            </h1>
            {quizMode === 'exam' && selectedTickets.length > 0 && (
              <p style={{ fontSize: '0.9em', marginTop: '8px', opacity: 0.9 }}>
                Ваши билеты: <strong>#{selectedTickets[0]}</strong> и <strong>#{selectedTickets[1]}</strong>
              </p>
            )}
          </div>
          <div className="quiz-progress">
            <span className="current">{currentIndex + 1}</span>
            {' '}/{' '}
            <span className="total">{currentQuestions.length}</span>
          </div>
        </div>

        <div className="question-card">
          <h2 className="question-text">{question.question}</h2>

          <div className="options">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`option ${selectedAnswer === index ? 'selected' : ''}`}
                onClick={() => selectAnswer(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className="quiz-buttons">
          <button
            className="btn-secondary"
            onClick={previousQuestion}
            disabled={currentIndex === 0}
          >
            ← Назад
          </button>

          {currentIndex < currentQuestions.length - 1 ? (
            <button
              className="btn-primary"
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
            >
              Далее →
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={finishQuiz}
              disabled={selectedAnswer === null}
            >
              Завершить
            </button>
          )}
        </div>
      </div>
    );
  }

  // Results screen
  if (quizState === 'results') {
    const correctCount = currentQuestions.filter(
      (q, i) => userAnswers[i] === q.correct
    ).length;
    const percentage = Math.round((correctCount / currentQuestions.length) * 100);

    let message = '';
    let emoji = '';
    if (percentage >= 90) {
      message = 'Отлично! Вы готовы к коллоквиуму!';
      emoji = '🎉';
    } else if (percentage >= 70) {
      message = 'Хорошо! Но есть что подучить.';
      emoji = '👍';
    } else if (percentage >= 50) {
      message = 'Неплохо, но нужно больше практики.';
      emoji = '📚';
    } else {
      message = 'Нужно серьезно подготовиться!';
      emoji = '💪';
    }

    return (
      <div className="results-container">
        <h1>
          {quizMode === 'exam' ? '🎓 Результаты экзамена' : 'Результаты тестирования'}
        </h1>

        {quizMode === 'exam' && selectedTickets.length > 0 && (
          <div className="info-box" style={{ marginTop: '20px' }}>
            <strong>Ваши билеты были:</strong>
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li>Билет #{selectedTickets[0]}: {theoryTopics[selectedTickets[0] - 1]?.title}</li>
              <li>Билет #{selectedTickets[1]}: {theoryTopics[selectedTickets[1] - 1]?.title}</li>
            </ul>
          </div>
        )}

        <div className="score-display">{emoji} {percentage}%</div>

        <div className="results-message">{message}</div>

        <p className="results-summary">
          Правильных ответов: <strong>{correctCount}</strong> из <strong>{currentQuestions.length}</strong>
        </p>

        <div className="results-details">
          <h2>Разбор ответов:</h2>

          {currentQuestions.map((question, index) => {
            const isCorrect = userAnswers[index] === question.correct;
            const userAnswer = userAnswers[index];

            return (
              <div key={index} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="result-question">
                  <strong>Вопрос {index + 1}:</strong> {question.question}
                  {question.topic && (
                    <span style={{ marginLeft: '10px', opacity: 0.7, fontSize: '0.9em' }}>
                      [Билет #{question.topic}]
                    </span>
                  )}
                </div>

                <div className="result-answer">
                  <strong>Ваш ответ:</strong>{' '}
                  {userAnswer !== null ? question.options[userAnswer] : 'Не отвечено'}
                </div>

                {!isCorrect && (
                  <div className="result-correct">
                    <strong>Правильный ответ:</strong> {question.options[question.correct]}
                  </div>
                )}

                <div className={`result-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect ? '✓ Правильно' : '✗ Неправильно'}
                </div>
              </div>
            );
          })}
        </div>

        <div className="quiz-buttons">
          <button className="btn-primary" onClick={quizMode === 'exam' ? startExam : startQuiz}>
            {quizMode === 'exam' ? 'Новый экзамен (другие билеты)' : 'Пройти еще раз'}
          </button>
          <button className="btn-secondary" onClick={restartQuiz}>
            К настройкам
          </button>
        </div>
      </div>
    );
  }

  return null;
}

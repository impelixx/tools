import { useState } from 'react';
import { allQuestions } from '../data/questions';

export default function Quiz() {
  const [quizState, setQuizState] = useState('setup'); // setup, active, results
  const [quizMode, setQuizMode] = useState('normal'); // normal or marathon
  const [settings, setSettings] = useState({
    category: 'all',
    questionCount: 10
  });
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerRevealed, setAnswerRevealed] = useState(false);

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
    setAnswerRevealed(false);
    setQuizMode('normal');
    setQuizState('active');
  };

  const startMarathon = () => {
    // Use ALL questions in random order
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);

    setCurrentQuestions(shuffledQuestions);
    setUserAnswers(new Array(shuffledQuestions.length).fill(null));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerRevealed(false);
    setQuizMode('marathon');
    setQuizState('active');
  };

  const selectAnswer = (index) => {
    // In marathon mode, don't allow changing answer after it's revealed
    if (quizMode === 'marathon' && answerRevealed) {
      return;
    }

    setSelectedAnswer(index);
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = index;
    setUserAnswers(newAnswers);

    // In marathon mode, reveal answer immediately
    if (quizMode === 'marathon') {
      setAnswerRevealed(true);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(userAnswers[currentIndex + 1]);
      setAnswerRevealed(false);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(userAnswers[currentIndex - 1]);
      setAnswerRevealed(false);
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
    setAnswerRevealed(false);
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

        <div className="quiz-settings" style={{ marginTop: '30px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <h2 style={{ color: 'white' }}>🏃 Марафон</h2>
          <p style={{ color: 'white', marginBottom: '20px' }}>
            Все {allQuestions.length} вопросов в случайном порядке. Проверьте свои знания полностью!
          </p>
          <button
            className="btn-large"
            onClick={startMarathon}
            style={{
              background: 'white',
              color: '#764ba2',
              border: 'none',
              fontWeight: 'bold'
            }}
          >
            Начать марафон (все {allQuestions.length} вопросов)
          </button>
        </div>

        <div className="info-box" style={{ marginTop: '30px' }}>
          <h3>Как это работает:</h3>
          <ul>
            <li><strong>Обычный режим:</strong> выберите категорию и количество вопросов</li>
            <li><strong>Марафон:</strong> все {allQuestions.length} вопросов подряд для максимальной подготовки</li>
            <li>Отвечайте на вопросы, выбирая правильный вариант</li>
            <li>В конце получите результаты с разбором ошибок</li>
          </ul>
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
              {quizMode === 'marathon' ? '🏃 Марафон' : 'Тестирование'}
            </h1>
            {quizMode === 'marathon' && (
              <p style={{ fontSize: '0.9em', marginTop: '8px', opacity: 0.9 }}>
                Все вопросы подряд — проверьте свои знания!
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
            {question.options.map((option, index) => {
              let optionClass = 'option';

              // Add selected class
              if (selectedAnswer === index) {
                optionClass += ' selected';
              }

              // In marathon mode with revealed answer, show feedback
              if (quizMode === 'marathon' && answerRevealed) {
                if (index === question.correct) {
                  optionClass += ' option-correct';
                } else if (selectedAnswer === index) {
                  optionClass += ' option-incorrect';
                }
              }

              return (
                <div
                  key={index}
                  className={optionClass}
                  onClick={() => selectAnswer(index)}
                >
                  {option}
                  {quizMode === 'marathon' && answerRevealed && index === question.correct && (
                    <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>✓</span>
                  )}
                  {quizMode === 'marathon' && answerRevealed && selectedAnswer === index && index !== question.correct && (
                    <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>✗</span>
                  )}
                </div>
              );
            })}
          </div>

          {quizMode === 'marathon' && answerRevealed && (
            <div style={{
              marginTop: '20px',
              padding: '15px',
              borderRadius: '8px',
              background: selectedAnswer === question.correct ? '#d1fae5' : '#fee2e2',
              border: `2px solid ${selectedAnswer === question.correct ? '#10b981' : '#ef4444'}`,
              color: selectedAnswer === question.correct ? '#065f46' : '#991b1b'
            }}>
              <strong>
                {selectedAnswer === question.correct ? '✓ Правильно!' : '✗ Неправильно'}
              </strong>
            </div>
          )}
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
          {quizMode === 'marathon' ? '🏃 Результаты марафона' : 'Результаты тестирования'}
        </h1>

        {quizMode === 'marathon' && (
          <div className="info-box" style={{ marginTop: '20px', background: '#f3e8ff', borderColor: '#764ba2' }}>
            <strong>🎉 Вы прошли марафон!</strong>
            <p style={{ marginTop: '10px', marginBottom: 0 }}>
              Ответили на все {currentQuestions.length} вопросов. Отличная работа!
            </p>
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
          <button className="btn-primary" onClick={quizMode === 'marathon' ? startMarathon : startQuiz}>
            {quizMode === 'marathon' ? 'Новый марафон' : 'Пройти еще раз'}
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

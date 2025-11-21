import { useState } from 'react';
import { practiceTopics } from '../data/practice';

export default function Practice() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (selectedTopic) {
    const topic = practiceTopics.find(t => t.id === selectedTopic);

    return (
      <div className="practice-detail">
        <button
          className="back-button"
          onClick={() => setSelectedTopic(null)}
        >
          ← Назад к списку
        </button>

        <div className="topic-content">
          <h1>{topic.title}</h1>
          <p className="subtitle">{topic.subtitle}</p>

          {topic.tasks.map((task, idx) => (
            <div key={idx} className="task-block">
              <h2>{task.title}</h2>
              {task.text && <p className="section-text">{task.text}</p>}

              {task.code && (
                <pre className="code-block">
                  <code>{task.code}</code>
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Практические задания</h1>
      <p className="section-description">
        Выберите практическое задание для изучения команд и примеров
      </p>

      <div className="topics-grid">
        {practiceTopics.map(topic => (
          <div
            key={topic.id}
            className="topic-card"
            onClick={() => setSelectedTopic(topic.id)}
          >
            <h3>{topic.title}</h3>
            <p>{topic.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

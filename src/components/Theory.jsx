import { useState } from 'react';
import { theoryTopics } from '../data/topics';

export default function Theory() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (selectedTopic) {
    const topic = theoryTopics.find(t => t.id === selectedTopic);

    return (
      <div className="theory-detail">
        <button
          className="back-button"
          onClick={() => setSelectedTopic(null)}
        >
          ← Назад к списку
        </button>

        <div className="topic-content">
          <h1>{topic.title}</h1>
          <p className="subtitle">{topic.subtitle}</p>

          <div className="info-box">
            {topic.content.description}
          </div>

          {topic.content.sections.map((section, idx) => (
            <div key={idx} className="section-block">
              <h2>{section.title}</h2>
              {section.text && <p className="section-text">{section.text}</p>}

              {section.items && (
                <ul className="items-list">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.code && (
                <pre className="code-block">
                  <code>{section.code}</code>
                </pre>
              )}

              {section.warning && (
                <div className="warning-box">
                  <strong>⚠️ Важно:</strong> {section.warning}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Теоретические темы</h1>
      <p className="section-description">
        Выберите тему для изучения теоретического материала
      </p>

      <div className="topics-grid">
        {theoryTopics.map(topic => (
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

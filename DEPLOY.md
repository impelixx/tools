# Деплой на GitHub Pages

## Быстрый старт

### 1. Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Создайте новый репозиторий (например, `colloquium-app`)
3. **НЕ** инициализируйте репозиторий с README, .gitignore или лицензией

### 2. Инициализируйте git в проекте

```bash
cd /Users/antonazykov/cooloq_tools/colloquium-app
git init
git add .
git commit -m "Initial commit: Colloquium learning app"
```

### 3. Подключите удаленный репозиторий

Замените `YOUR_USERNAME` на ваш GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/colloquium-app.git
git branch -M main
git push -u origin main
```

### 4. Запустите деплой

Деплой запустится автоматически при push в main:

```bash
git push origin main
```

Workflow автоматически:
1. Соберет проект (`npm run build`)
2. Создаст ветку `gh-pages` (если её нет)
3. Запушит результаты сборки в эту ветку

### 5. Настройте GitHub Pages

**ВАЖНО:** После завершения workflow (проверьте в Actions):

1. Перейдите в Settings вашего репозитория
2. В меню слева выберите **Pages**
3. В разделе **Build and deployment** выберите:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** и **/ (root)**
4. Нажмите **Save**

### 6. Готово!

Через 1-2 минуты приложение будет доступно по адресу:
```
https://YOUR_USERNAME.github.io/colloquium-app/
```

## Важные замечания

### Изменение имени репозитория

Если ваш репозиторий называется по-другому, обновите `vite.config.js`:

```javascript
base: process.env.NODE_ENV === 'production' ? '/ВАШ_РЕПОЗИТОРИЙ/' : '/',
```

Например, если репозиторий называется `linux-exam`:
```javascript
base: process.env.NODE_ENV === 'production' ? '/linux-exam/' : '/',
```

### Кастомный домен

Если хотите использовать кастомный домен:

1. Создайте файл `public/CNAME` с вашим доменом:
   ```
   example.com
   ```

2. В настройках репозитория (Settings → Pages) укажите кастомный домен

3. Обновите `vite.config.js`:
   ```javascript
   base: '/',
   ```

## Структура файлов

```
colloquium-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/                        # Исходный код
├── dist/                       # Собранное приложение (генерируется)
├── vite.config.js             # Конфигурация Vite
├── package.json
└── DEPLOY.md                  # Этот файл
```

## Workflow деплоя

Файл `.github/workflows/deploy.yml` настроен для:

1. **Триггеры:**
   - Автоматический деплой при push в `main` или `master`
   - Ручной запуск через Actions UI

2. **Процесс:**
   - Установка Node.js 20
   - Установка зависимостей (`npm ci`)
   - Сборка проекта (`npm run build`)
   - Пуш результатов в ветку `gh-pages`

3. **Разрешения:**
   - Запись в репозиторий для создания ветки `gh-pages`

**Ветка gh-pages:**
- Создается автоматически при первом деплое
- Содержит только результаты сборки из папки `dist`
- GitHub Pages публикует сайт из этой ветки

## Локальная сборка для проверки

Перед деплоем можно проверить production сборку локально:

```bash
# Собрать проект
npm run build

# Просмотреть результат
npm run preview
```

Приложение будет доступно на http://localhost:4173

## Отладка

### Workflow не запускается

1. Проверьте, что в Settings → Actions → General включены workflows
2. Убедитесь, что у репозитория есть разрешения для GitHub Pages
3. Проверьте логи в Actions

### 404 ошибка после деплоя

1. Убедитесь, что `base` в `vite.config.js` соответствует имени репозитория
2. Проверьте, что GitHub Pages настроен на **Deploy from a branch: gh-pages**
3. Убедитесь, что workflow успешно завершился в Actions
4. Подождите 1-2 минуты - деплой может занять время

### Белый экран

1. Откройте консоль браузера (F12)
2. Проверьте ошибки загрузки ресурсов
3. Убедитесь, что `base` настроен правильно
4. Проверьте, что все файлы загружаются с правильного пути

## Обновление приложения

Просто сделайте изменения и запушьте в main:

```bash
git add .
git commit -m "Update app"
git push origin main
```

Деплой произойдет автоматически!

## Удаление деплоя

Чтобы удалить приложение с GitHub Pages:

1. Settings → Pages
2. Выберите Source: **None**
3. Удалите репозиторий (если нужно)

---

**Примечание:** После первого деплоя может потребоваться несколько минут для активации GitHub Pages.

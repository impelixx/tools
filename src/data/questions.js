export const questions = [
  // Theory questions
  {
    category: 'theory',
    question: 'Что такое процесс в Linux?',
    options: [
      'Запущенная программа с уникальным идентификатором (PID)',
      'Файл на диске, готовый к запуску',
      'Команда в терминале',
      'Системный вызов ядра'
    ],
    correct: 0
  },
  {
    category: 'theory',
    question: 'Какая команда показывает все процессы всех пользователей?',
    options: [
      'ps',
      'ps -e',
      'ps aux',
      'top -a'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Какой сигнал используется для принудительного завершения процесса?',
    options: [
      'TERM (15)',
      'KILL (9)',
      'STOP (19)',
      'HUP (1)'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что такое зависимость в контексте пакетов Linux?',
    options: [
      'Файл конфигурации пакета',
      'Другой пакет, который необходим для работы данного пакета',
      'Репозиторий, где хранится пакет',
      'Версия пакета'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой формат пакетов используется в Debian и Ubuntu?',
    options: [
      '.rpm',
      '.apk',
      '.deb',
      '.pkg'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что такое MBR и каков его размер?',
    options: [
      'Главная загрузочная запись, 1024 байта',
      'Главная загрузочная запись, 512 байт',
      'Таблица разделов, 256 байт',
      'Загрузчик GRUB, 2048 байт'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Сколько первичных разделов максимум поддерживает MBR?',
    options: [
      '2',
      '4',
      '8',
      '16'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какое преимущество GPT над MBR?',
    options: [
      'Быстрее загружается',
      'Поддерживает до 128 разделов по умолчанию',
      'Занимает меньше места',
      'Проще в настройке'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что содержит файл /etc/fstab?',
    options: [
      'Список установленных пакетов',
      'Информацию о пользователях',
      'Описание монтируемых файловых систем',
      'Конфигурацию сети'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что позволяет делать команда sudo?',
    options: [
      'Переключаться между пользователями',
      'Выполнять команды с правами другого пользователя (обычно root)',
      'Создавать новых пользователей',
      'Изменять пароли'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какая команда используется для безопасного редактирования /etc/sudoers?',
    options: [
      'nano /etc/sudoers',
      'vim /etc/sudoers',
      'visudo',
      'edit sudoers'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что означает право доступа 755 в восьмеричной системе?',
    options: [
      'rwxr-xr-x',
      'rwxrwxrwx',
      'rw-r--r--',
      'r-xr-xr-x'
    ],
    correct: 0
  },
  {
    category: 'theory',
    question: 'Что такое STDIN?',
    options: [
      'Стандартный поток ошибок',
      'Стандартный поток вывода',
      'Стандартный поток ввода',
      'Системный поток данных'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Какой файловый дескриптор соответствует STDERR?',
    options: [
      '0',
      '1',
      '2',
      '3'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что делает /dev/null?',
    options: [
      'Генерирует случайные числа',
      'Сохраняет данные в файл',
      'Отбрасывает все записанные в него данные',
      'Создает пустой файл'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что происходит первым при загрузке Linux?',
    options: [
      'Запускается init процесс',
      'BIOS загружает и запускает загрузчик',
      'Монтируется корневая файловая система',
      'Инициализируются драйверы'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой PID имеет процесс init/systemd?',
    options: [
      '0',
      '1',
      '2',
      '10'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает shebang #!/bin/bash в начале скрипта?',
    options: [
      'Комментарий для программиста',
      'Указывает интерпретатор для выполнения скрипта',
      'Устанавливает права доступа',
      'Задает переменные окружения'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какая переменная в bash хранит количество аргументов скрипта?',
    options: [
      '$@',
      '$*',
      '$#',
      '$?'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что такое systemd?',
    options: [
      'Файловая система',
      'Менеджер систем и служб для Linux',
      'Командная оболочка',
      'Пакетный менеджер'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой тип unit в systemd запускает и контролирует процесс?',
    options: [
      '.target',
      '.socket',
      '.service',
      '.timer'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Какая команда показывает логи systemd в реальном времени?',
    options: [
      'journalctl',
      'journalctl -f',
      'journalctl -b',
      'systemctl logs'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает SUID бит (4000)?',
    options: [
      'Файл выполняется с правами владельца',
      'Файл выполняется с правами группы',
      'Только владелец может удалить файл',
      'Файл доступен только для чтения'
    ],
    correct: 0
  },
  {
    category: 'theory',
    question: 'Какой файл содержит хэши паролей пользователей?',
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/group',
      '/etc/sudoers'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает опция -R в команде chmod?',
    options: [
      'Read only',
      'Рекурсивное применение к директориям',
      'Remove permissions',
      'Reset to defaults'
    ],
    correct: 1
  },
  // Practice questions
  {
    category: 'practice',
    question: 'Как перенаправить stdout в файл с перезаписью?',
    options: [
      'command > file.txt',
      'command >> file.txt',
      'command < file.txt',
      'command 2> file.txt'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как перенаправить stderr в файл?',
    options: [
      'command > file.txt',
      'command 1> file.txt',
      'command 2> file.txt',
      'command &> file.txt'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как объединить stdout и stderr и перенаправить в файл?',
    options: [
      'command > file.txt',
      'command 2>&1 > file.txt',
      'command &> file.txt',
      'command | tee file.txt'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как установить пакет nginx в Ubuntu?',
    options: [
      'apt install nginx',
      'sudo apt install nginx',
      'dnf install nginx',
      'rpm -i nginx'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Какая команда обновляет списки пакетов в Debian/Ubuntu?',
    options: [
      'sudo apt upgrade',
      'sudo apt update',
      'sudo apt refresh',
      'sudo apt fetch'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как создать файловую систему ext4 на /dev/sdb1?',
    options: [
      'mkfs /dev/sdb1',
      'mkfs.ext4 /dev/sdb1',
      'format ext4 /dev/sdb1',
      'create-fs ext4 /dev/sdb1'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как смонтировать раздел /dev/sdb1 в /mnt/data?',
    options: [
      'mount /mnt/data /dev/sdb1',
      'mount /dev/sdb1 /mnt/data',
      'mount -t /dev/sdb1 /mnt/data',
      'attach /dev/sdb1 /mnt/data'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как показать список файлов с размерами в человекочитаемом формате?',
    options: [
      'ls -l',
      'ls -a',
      'ls -lh',
      'ls -s'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как сделать скрипт исполняемым для владельца?',
    options: [
      'chmod +x script.sh',
      'chmod 777 script.sh',
      'chown +x script.sh',
      'exec script.sh'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как изменить владельца файла на user и группу на group?',
    options: [
      'chown user file.txt && chgrp group file.txt',
      'chown user:group file.txt',
      'chmod user:group file.txt',
      'usermod user:group file.txt'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как запустить сервис nginx через systemd?',
    options: [
      'systemctl nginx start',
      'service nginx start',
      'sudo systemctl start nginx',
      'start nginx'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как включить автозапуск сервиса при загрузке системы?',
    options: [
      'systemctl autostart nginx',
      'systemctl enable nginx',
      'systemctl boot nginx',
      'systemctl activate nginx'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как посмотреть статус сервиса nginx?',
    options: [
      'systemctl nginx',
      'systemctl show nginx',
      'systemctl status nginx',
      'systemctl info nginx'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как создать пользователя с домашней директорией и оболочкой bash?',
    options: [
      'useradd username',
      'useradd -m username',
      'useradd -m -s /bin/bash username',
      'adduser username /bin/bash'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как добавить пользователя в группу sudo?',
    options: [
      'usermod -G sudo username',
      'usermod -aG sudo username',
      'addgroup username sudo',
      'gpasswd -a username sudo'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как найти UUID раздела для добавления в fstab?',
    options: [
      'lsblk -f',
      'blkid /dev/sdb1',
      'fdisk -l',
      'mount | grep uuid'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как подавить весь вывод команды (stdout и stderr)?',
    options: [
      'command > /dev/null',
      'command 2> /dev/null',
      'command &> /dev/null',
      'command | tee /dev/null'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как передать вывод одной команды в другую?',
    options: [
      'command1 & command2',
      'command1 | command2',
      'command1 > command2',
      'command1 && command2'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как добавить задачу в crontab для ежедневного запуска скрипта в 2:00?',
    options: [
      '0 2 * * * /path/script.sh',
      '2 0 * * * /path/script.sh',
      '* 2 * * * /path/script.sh',
      '0 2 1 * * /path/script.sh'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как посмотреть последние 50 строк логов systemd?',
    options: [
      'journalctl -n 50',
      'journalctl --lines=50',
      'journalctl -last 50',
      'journalctl -tail 50'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как установить права 644 на файл?',
    options: [
      'chmod 644 file.txt',
      'chmod rw-r--r-- file.txt',
      'chown 644 file.txt',
      'setperm 644 file.txt'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как удалить процесс с PID 1234 принудительно?',
    options: [
      'kill 1234',
      'kill -15 1234',
      'kill -9 1234',
      'killall 1234'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как посмотреть все процессы отсортированные по использованию CPU?',
    options: [
      'ps aux --sort=-cpu',
      'top -o %CPU',
      'ps -e --sort=cpu',
      'ps aux | sort -k3'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как проверить синтаксис bash скрипта без его выполнения?',
    options: [
      'bash -c script.sh',
      'bash -n script.sh',
      'bash -t script.sh',
      'bash -v script.sh'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как размонтировать файловую систему?',
    options: [
      'unmount /mnt/data',
      'umount /mnt/data',
      'dismount /mnt/data',
      'mount -u /mnt/data'
    ],
    correct: 1
  },
  // Additional theory questions
  {
    category: 'theory',
    question: 'Какое состояние процесса обозначается буквой R в выводе ps?',
    options: [
      'Running - процесс запущен и выполняется',
      'Ready - процесс готов к запуску',
      'Restart - процесс перезапускается',
      'Remove - процесс удаляется'
    ],
    correct: 0
  },
  {
    category: 'theory',
    question: 'Что означает колонка VSZ в выводе ps aux?',
    options: [
      'Virtual Size - размер виртуальной памяти процесса в КБ',
      'Variable Size - переменный размер',
      'Version Size - размер версии',
      'Visual Size - видимый размер'
    ],
    correct: 0
  },
  {
    category: 'theory',
    question: 'Зачем нужен пакетный менеджер?',
    options: [
      'Только для установки программ',
      'Для автоматического разрешения зависимостей и управления пакетами',
      'Только для удаления программ',
      'Для компиляции исходного кода'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что такое UEFI?',
    options: [
      'Unified Extensible Firmware Interface - расширяемый интерфейс прошивки',
      'Universal Extended File Interface',
      'Unified Error Fixing Interface',
      'Universal Executable Format Interface'
    ],
    correct: 0
  },
  {
    category: 'theory',
    question: 'Максимальный размер диска для MBR?',
    options: [
      '1 ТБ',
      '2,2 ТБ',
      '4 ТБ',
      '8 ТБ'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что такое точка монтирования?',
    options: [
      'Программа для монтирования',
      'Директория, к которой присоединяется файловая система',
      'Устройство для монтирования',
      'Команда монтирования'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой файл содержит информацию о пользователях в Linux?',
    options: [
      '/etc/users',
      '/etc/passwd',
      '/etc/userlist',
      '/etc/accounts'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает sticky bit на директории?',
    options: [
      'Директория защищена от удаления',
      'Только владелец файла может удалить его в этой директории',
      'Директория доступна только для чтения',
      'Директория автоматически монтируется'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает символ | (pipe) в командной строке?',
    options: [
      'Логическое ИЛИ',
      'Перенаправление stdout одной команды в stdin другой',
      'Параллельное выполнение команд',
      'Комментарий'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какая команда показывает дерево процессов?',
    options: [
      'ps tree',
      'pstree',
      'top -tree',
      'process --tree'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что делает команда fork() в Linux?',
    options: [
      'Завершает процесс',
      'Создает копию процесса',
      'Запускает новую программу',
      'Изменяет приоритет процесса'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какая клавиша в top сортирует процессы по памяти?',
    options: [
      'P',
      'M',
      'C',
      'S'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает операция && между командами?',
    options: [
      'Выполнить обе команды параллельно',
      'Выполнить вторую только если первая успешна',
      'Выполнить только одну из команд',
      'Объединить вывод команд'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой target в systemd соответствует графическому режиму?',
    options: [
      'multi-user.target',
      'graphical.target',
      'desktop.target',
      'gui.target'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает код возврата 0 в bash скрипте?',
    options: [
      'Ошибка',
      'Успешное выполнение',
      'Предупреждение',
      'Прерывание'
    ],
    correct: 1
  },
  // Additional practice questions
  {
    category: 'practice',
    question: 'Как посмотреть только процессы пользователя user1?',
    options: [
      'ps -u user1',
      'ps user1',
      'top user1',
      'ps --user=user1'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как найти все файлы в директории, измененные за последние 24 часа?',
    options: [
      'ls -lt',
      'find . -mtime -1',
      'find . -time 24',
      'ls --modified'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как посмотреть только ошибки в логах systemd?',
    options: [
      'journalctl -e',
      'journalctl --errors',
      'journalctl -p err',
      'journalctl --level=error'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как проверить, смонтирована ли файловая система?',
    options: [
      'check mount',
      'mount | grep /dev/sdb1',
      'ls /mnt',
      'test mount'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как добавить текст в конец файла без его открытия?',
    options: [
      'echo "text" > file.txt',
      'echo "text" >> file.txt',
      'cat "text" > file.txt',
      'add "text" file.txt'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как посмотреть размер директории /var/log?',
    options: [
      'ls -l /var/log',
      'size /var/log',
      'du -sh /var/log',
      'df /var/log'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как перезагрузить systemd после изменения unit файла?',
    options: [
      'systemctl reload',
      'systemctl daemon-reload',
      'systemctl restart',
      'systemctl update'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как установить пакет из локального .deb файла?',
    options: [
      'apt install package.deb',
      'dpkg -i package.deb',
      'deb install package.deb',
      'apt-get package.deb'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как посмотреть список всех установленных пакетов в Debian/Ubuntu?',
    options: [
      'apt list',
      'apt list --installed',
      'dpkg -l',
      'apt show all'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как узнать, какой пакет предоставляет команду ls?',
    options: [
      'which ls',
      'apt find ls',
      'dpkg -S $(which ls)',
      'locate ls'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как посмотреть логи конкретного сервиса в реальном времени?',
    options: [
      'journalctl -u service.service',
      'journalctl -u service.service -f',
      'tail -f /var/log/service.log',
      'systemctl logs service'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как сделать резервную копию файла перед редактированием?',
    options: [
      'cp file.txt file.txt.bak',
      'backup file.txt',
      'save file.txt',
      'copy file.txt'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как найти все файлы больше 100MB в /home?',
    options: [
      'find /home -size 100M',
      'find /home -size +100M',
      'ls -l /home | grep 100M',
      'du /home --min=100M'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как изменить пароль пользователя user1?',
    options: [
      'password user1',
      'passwd user1',
      'usermod --password user1',
      'setpass user1'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как посмотреть использование дисков в человекочитаемом формате?',
    options: [
      'df',
      'df -h',
      'disk',
      'du -h'
    ],
    correct: 1
  },
  // Basic Linux commands questions
  {
    category: 'commands',
    topic: 1,
    question: 'Какая команда выводит текущую директорию?',
    options: [
      'pwd',
      'cd',
      'dir',
      'whereami'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 1,
    question: 'Какая команда создает новую директорию?',
    options: [
      'makedir',
      'mkdir',
      'createdir',
      'newdir'
    ],
    correct: 1
  },
  {
    category: 'commands',
    topic: 1,
    question: 'Как скопировать файл file1.txt в file2.txt?',
    options: [
      'copy file1.txt file2.txt',
      'cp file1.txt file2.txt',
      'mv file1.txt file2.txt',
      'duplicate file1.txt file2.txt'
    ],
    correct: 1
  },
  {
    category: 'commands',
    topic: 1,
    question: 'Как переименовать или переместить файл?',
    options: [
      'rename',
      'move',
      'mv',
      'rn'
    ],
    correct: 2
  },
  {
    category: 'commands',
    topic: 1,
    question: 'Как удалить пустую директорию?',
    options: [
      'rm directory',
      'rmdir directory',
      'delete directory',
      'remove directory'
    ],
    correct: 1
  },
  {
    category: 'commands',
    topic: 2,
    question: 'Как вывести содержимое файла на экран?',
    options: [
      'show file.txt',
      'print file.txt',
      'cat file.txt',
      'view file.txt'
    ],
    correct: 2
  },
  {
    category: 'commands',
    topic: 2,
    question: 'Как вывести первые 10 строк файла?',
    options: [
      'head file.txt',
      'top file.txt',
      'first file.txt',
      'cat -10 file.txt'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 2,
    question: 'Как вывести последние 20 строк файла?',
    options: [
      'tail -20 file.txt',
      'last -20 file.txt',
      'end -20 file.txt',
      'bottom -20 file.txt'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 2,
    question: 'Какая команда позволяет просмотреть файл постранично?',
    options: [
      'more',
      'less',
      'page',
      'Все перечисленные'
    ],
    correct: 3
  },
  {
    category: 'commands',
    topic: 3,
    question: 'Как найти все файлы .txt в текущей директории и поддиректориях?',
    options: [
      'find . -name "*.txt"',
      'search *.txt',
      'locate *.txt',
      'grep *.txt'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 3,
    question: 'Как найти строку "error" в файле log.txt?',
    options: [
      'find "error" log.txt',
      'search "error" log.txt',
      'grep "error" log.txt',
      'locate "error" log.txt'
    ],
    correct: 2
  },
  {
    category: 'commands',
    topic: 3,
    question: 'Как найти все файлы, измененные за последние 7 дней?',
    options: [
      'find . -mtime -7',
      'find . -time 7',
      'locate -days 7',
      'search -modified 7'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 4,
    question: 'Как создать архив .tar.gz?',
    options: [
      'tar -czf archive.tar.gz files/',
      'zip archive.tar.gz files/',
      'gzip files/',
      'compress files/'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 4,
    question: 'Как распаковать архив .tar.gz?',
    options: [
      'tar -xzf archive.tar.gz',
      'untar archive.tar.gz',
      'unzip archive.tar.gz',
      'extract archive.tar.gz'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 4,
    question: 'Как посмотреть содержимое .tar архива без распаковки?',
    options: [
      'tar -tf archive.tar',
      'tar -list archive.tar',
      'tar -show archive.tar',
      'tar -view archive.tar'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 5,
    question: 'Как скачать файл по URL?',
    options: [
      'download http://example.com/file',
      'get http://example.com/file',
      'wget http://example.com/file',
      'fetch http://example.com/file'
    ],
    correct: 2
  },
  {
    category: 'commands',
    topic: 5,
    question: 'Как проверить доступность хоста?',
    options: [
      'ping host',
      'check host',
      'test host',
      'connect host'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 5,
    question: 'Как подключиться по SSH?',
    options: [
      'connect user@host',
      'ssh user@host',
      'login user@host',
      'remote user@host'
    ],
    correct: 1
  },
  {
    category: 'commands',
    topic: 6,
    question: 'Как посмотреть справку по команде ls?',
    options: [
      'help ls',
      'man ls',
      'info ls',
      'Все перечисленные'
    ],
    correct: 3
  },
  {
    category: 'commands',
    topic: 6,
    question: 'Как узнать полный путь к исполняемому файлу команды?',
    options: [
      'where command',
      'which command',
      'locate command',
      'find command'
    ],
    correct: 1
  },
  {
    category: 'commands',
    topic: 7,
    question: 'Как посмотреть переменные окружения?',
    options: [
      'env',
      'printenv',
      'echo $PATH',
      'Все перечисленные'
    ],
    correct: 3
  },
  {
    category: 'commands',
    topic: 7,
    question: 'Как установить переменную окружения на текущую сессию?',
    options: [
      'set VAR=value',
      'export VAR=value',
      'VAR=value',
      'setenv VAR value'
    ],
    correct: 1
  },
  {
    category: 'commands',
    topic: 8,
    question: 'Как посмотреть историю команд?',
    options: [
      'history',
      'commands',
      'log',
      'past'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 8,
    question: 'Как выполнить команду из истории по номеру (например, 42)?',
    options: [
      '!42',
      '#42',
      'exec 42',
      'run 42'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 9,
    question: 'Как посмотреть кто сейчас в системе?',
    options: [
      'users',
      'who',
      'w',
      'Все перечисленные'
    ],
    correct: 3
  },
  {
    category: 'commands',
    topic: 9,
    question: 'Как узнать имя текущего пользователя?',
    options: [
      'whoami',
      'me',
      'user',
      'myname'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 10,
    question: 'Как создать символическую ссылку?',
    options: [
      'ln -s target link',
      'link target link',
      'symlink target link',
      'mklink target link'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 10,
    question: 'Как посмотреть размер файла?',
    options: [
      'size file',
      'ls -lh file',
      'du -h file',
      'Оба b и c'
    ],
    correct: 3
  },
  {
    category: 'commands',
    topic: 10,
    question: 'Как подсчитать количество строк в файле?',
    options: [
      'wc -l file',
      'count file',
      'lines file',
      'nl file'
    ],
    correct: 0
  },
  {
    category: 'commands',
    topic: 10,
    question: 'Как отсортировать строки файла?',
    options: [
      'order file',
      'sort file',
      'arrange file',
      'organize file'
    ],
    correct: 1
  },
  {
    category: 'commands',
    topic: 10,
    question: 'Как удалить дубликаты из отсортированного файла?',
    options: [
      'unique file',
      'uniq file',
      'dedup file',
      'nodups file'
    ],
    correct: 1
  }
];

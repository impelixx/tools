export const allQuestions = [
  {
    category: 'theory',
    question: 'Что такое процесс в Linux?',
    options: [
      'Запущенная программа',
      'Файл на диске',
      'Папка в системе',
      'Команда в терминале'
    ],
    correct: 0
  },
  {
    category: 'definition',
    question: 'Процесс - это...',
    options: [
      'Выполняющаяся программа с собственным адресным пространством и ресурсами',
      'Файл на диске, содержащий программный код',
      'Команда, которую вводит пользователь в терминале',
      'Служба, которая работает только на сервере'
    ],
    correct: 0
  },
  {
    category: 'theory',
    question: 'Что такое PID?',
    options: [
      'Имя процесса',
      'Числовой идентификатор процесса',
      'Статус процесса',
      'Приоритет процесса'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'PID (Process ID) - это...',
    options: [
      'Пароль для доступа к процессу',
      'Уникальный номер, который система присваивает каждому процессу',
      'Приоритет исполнения процесса',
      'Статус выполнения процесса'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'PPID (Parent Process ID) - это...',
    options: [
      'Идентификатор основного процесса',
      'Идентификатор родительского (главного) процесса',
      'Параллельный идентификатор процесса',
      'Постоянный идентификатор процесса'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает буква R в колонке STAT команды ps?',
    options: [
      'Процесс остановлен',
      'Процесс запущен и выполняется',
      'Процесс удаляется',
      'Процесс ждет'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает буква S в колонке STAT команды ps?',
    options: [
      'Процесс работает',
      'Процесс приостановлен (sleeping)',
      'Процесс заблокирован',
      'Процесс завершен'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Фоновый процесс - это...',
    options: [
      'Процесс, который выполняется скрытно и не занимает терминал',
      'Процесс, который работает медленнее других',
      'Процесс, запущенный от пользователя без прав администратора',
      'Процесс, который загружается при старте системы'
    ],
    correct: 0
  },
  {
    category: 'definition',
    question: 'Сигнал в Linux - это...',
    options: [
      'Сообщение об ошибке',
      'Способ внутрипроцессного взаимодействия',
      'Посылаемое процессу уведомление о событии (команда завершения, перезагрузки, паузы)',
      'Файл, содержащий команды для процесса'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Какая команда показывает все процессы?',
    options: [
      'ps',
      'ps aux',
      'top',
      '2 и 3'
    ],
    correct: 3
  },
  {
    category: 'practice',
    question: 'Какая колонка в ps aux показывает использование памяти?',
    options: [
      '%CPU',
      '%MEM',
      'VSZ',
      'RSS'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Что означает VSZ в ps aux?',
    options: [
      'Физическая память в КБ',
      'Виртуальная память в КБ',
      'Видимый размер',
      'Версия'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Какую клавишу нажать в top для сортировки по памяти?',
    options: [
      'P',
      'C',
      'M',
      'S'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как завершить процесс мягко (TERM)?',
    options: [
      'kill -9 12345',
      'kill -15 12345',
      'kill 12345',
      '2 и 3'
    ],
    correct: 3
  },
  {
    category: 'practice',
    question: 'Как завершить процесс принудительно (KILL)?',
    options: [
      'kill 12345',
      'kill -15 12345',
      'kill -9 12345',
      'killall 12345'
    ],
    correct: 2
  },
  {
    category: "theory",
    question: "Как выбирается MBR при загрузке (с какого диска?)",
    options: [
      "MBR выбирается системой всегда с первого физического диска, независимо от настроек BIOS/UEFI.",
      "MBR выбирается с диска, который в BIOS/UEFI стоит первым в порядке загрузки и имеет активный загрузочный раздел.",
      "MBR выбирается из любого диска, который пользователь выбрал в меню загрузки, не учитывая порядок устройств в BIOS.",
      "MBR загружается с диска с самой большой ёмкостью, если несколько дисков подключены и настроек BIOS нет."
    ],
    correct: 1
  },
  {
    category: "theory",
    question: "Что такое загрузочный раздел (boot partition)?",
    options: [
      "Раздел, на котором хранятся все пользовательские данные.",
      "Раздел диска, содержащий файлы загрузчика и необходимые для старта системы файлы.",
      "Раздел, используемый для временного хранения файлов при установке ОС.",
      "Раздел, на котором хранятся резервные копии системы."
    ],
    correct: 1
  },

  {
    category: 'theory',
    question: "Зачем нужен BIOS?",
    options: [
      "Для управления питанием компьютера.",
      "Для установки ОС",
      "Для инициализации аппаратного обеспечения и запуска загрузчика операционной системы.",
      "Для управления файлами на диске.",
    ],
    correct: 2
  },
  {
    category: "practice",
    question: "Что значит первый бит ls -l ?",
    options: [
      "Права доступа",
      "Тип файла",
      "Владелец файла",
      "Это костыль, не имеет значения"
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что такое пакет в Linux?',
    options: [
      'Папка с файлами',
      'Набор команд и зависимостей для установки ПО',
      'Архив с программой',
      'Скрипт для установки'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Пакет в Linux - это...',
    options: [
      'Папка на жестком диске',
      'Архив с программой, её файлами, конфигурацией и метаинформацией',
      'Команда для установки программы',
      'Репозиторий с исходным кодом'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что такое зависимость пакета?',
    options: [
      'Файл конфигурации',
      'Другой пакет, который нужен для работы',
      'Версия пакета',
      'Размер пакета'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Зависимость пакета - это...',
    options: [
      'Версия пакета',
      'Размер пакета в байтах',
      'Другой пакет или библиотека, необходимая для работы данного пакета',
      'Статус установки пакета'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Какой формат пакетов в Debian/Ubuntu?',
    options: [
      '.rpm',
      '.deb',
      '.apk',
      '.tar.gz'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой пакетный менеджер используется в Ubuntu?',
    options: [
      'YUM',
      'APT',
      'DNF',
      'Pacman'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Репозиторий - это...',
    options: [
      'Хранилище с отчётами об ошибках',
      'Место в интернете или локально, где хранятся пакеты для скачивания',
      'Программа для управления пакетами',
      'Папка на компьютере с установленными программами'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Пакетный менеджер - это...',
    options: [
      'Человек, управляющий пакетами на сервере',
      'Программа, которая автоматически решает зависимости и управляет установкой/удалением пакетов',
      'Файл, где хранится список установленных пакетов',
      'Сервис для закачки файлов из интернета'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как обновить список пакетов в Ubuntu?',
    options: [
      'sudo apt upgrade',
      'sudo apt update',
      'sudo apt refresh',
      'sudo apt sync'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как установить пакет nginx в Ubuntu?',
    options: [
      'apt install nginx',
      'sudo apt install nginx',
      'sudo apt get nginx',
      'install nginx'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как удалить пакет nginx?',
    options: [
      'apt delete nginx',
      'sudo apt remove nginx',
      'sudo apt uninstall nginx',
      'remove nginx'
    ],
    correct: 1
  },
  
  {
    category: 'theory',
    question: 'Что такое раздел (partition)?',
    options: [
      'Папка на жестком диске',
      'Часть жесткого диска',
      'Тип файловой системы',
      'Место для сохранения файлов'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Раздел диска (partition) - это...',
    options: [
      'Папка на жестком диске',
      'Логически выделенная часть жесткого диска, на которую можно установить ОС или хранить данные',
      'Файл, содержащий данные',
      'Тип файловой системы'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что такое MBR?',
    options: [
      'Главный файл, содержащий информацию о памяти',
      'Первые 512 байт диска с информацией о разделах',
      'Тип файловой системы для больших дисков',
      'Резервная копия системы'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'MBR (Master Boot Record) - это...',
    options: [
      'Главный файл, содержащий информацию о памяти',
      'Первые 512 байт диска, содержащие информацию о разделах и загрузчик ОС',
      'Тип файловой системы для больших дисков',
      'Резервная копия системы'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Сколько первичных разделов поддерживает MBR?',
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
    question: 'Какой максимальный размер диска для MBR?',
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
    question: 'Что такое GPT?',
    options: [
      'Тип файловой системы',
      'Современный стандарт разметки дисков',
      'Команда для форматирования',
      'Загрузчик ОС'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'GPT (GUID Partition Table) - это...',
    options: [
      'Пароль для защиты диска',
      'Программа для работы с дисками',
      'Современный стандарт разметки дисков, поддерживающий до 128 разделов и диски больше 2 ТБ',
      'Тип файлов в Linux'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Сколько разделов максимум поддерживает GPT?',
    options: [
      '4',
      '16',
      '128',
      'Неограниченно'
    ],
    correct: 2
  },
  {
    category: 'definition',
    question: 'Точка монтирования - это...',
    options: [
      'Место, где хранятся файлы операционной системы',
      'Директория, к которой присоединяется раздел диска или файловая система',
      'Команда для подключения диска',
      'Тип файловой системы'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Монтирование - это...',
    options: [
      'Копирование данных на диск',
      'Процесс присоединения раздела диска или файловой системы к определённой папке в системе',
      'Процесс форматирования диска',
      'Процесс проверки целостности файлов'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'fstab файл - это...',
    options: [
      'Конфигурационный файл для пользователей',
      'Архив с резервной копией',
      'Файл (/etc/fstab), содержащий информацию о всех монтируемых при загрузке файловых системах',
      'База данных установленных программ'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как смонтировать раздел /dev/sdb1 в папку /mnt/data?',
    options: [
      'mount /mnt/data /dev/sdb1',
      'mount /dev/sdb1 /mnt/data',
      'mount -t /dev/sdb1 /mnt/data',
      'mount /dev/sdb1 -to /mnt/data'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как размонтировать файловую систему?',
    options: [
      'unmount /mnt/data',
      'umount /mnt/data',
      'mount -u /mnt/data',
      'remove-mount /mnt/data'
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
    question: 'Какой файл содержит информацию о монтируемых ФС?',
    options: [
      '/etc/mount',
      '/etc/fstab',
      '/etc/filesystem',
      '/etc/partitions'
    ],
    correct: 1
  },
  
  {
    category: 'theory',
    question: 'Что такое sudo?',
    options: [
      'Команда для входа в систему',
      'Пароль администратора',
      'Выполнение команд с правами другого пользователя',
      'Удаление прав доступа'
    ],
    correct: 2
  },
  {
    category: 'definition',
    question: 'sudo - это...',
    options: [
      'Сокращение от слова "super user do"',
      'Команда, позволяющая выполнять другие команды с правами другого пользователя (обычно root)',
      'Пароль администратора',
      'Права доступа для файлов'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Root пользователь - это...',
    options: [
      'Первый зарегистрированный пользователь',
      'Администратор системы с наивысшими привилегиями (UID 0)',
      'Пользователь для резервной копии',
      'Пользователь, который не может удалять файлы'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой файл содержит хэши паролей?',
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/password',
      '/etc/users'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой файл содержит информацию о пользователях?',
    options: [
      '/etc/shadow',
      '/etc/users',
      '/etc/passwd',
      '/etc/accounts'
    ],
    correct: 2
  },
  {
    category: 'definition',
    question: 'UID (User ID) - это...',
    options: [
      'Пароль пользователя',
      'Название пользователя',
      'Уникальный номер, который система присваивает каждому пользователю',
      'Статус доступа пользователя'
    ],
    correct: 2
  },
  {
    category: 'definition',
    question: 'Группа в Linux - это...',
    options: [
      'Несколько пользователей, сидящих за одним компьютером',
      'Набор прав для одного пользователя',
      'Логическое объединение пользователей для управления правами доступа к ресурсам',
      'Папка, содержащая файлы пользователей'
    ],
    correct: 2
  },
  {
    category: 'definition',
    question: 'GID (Group ID) - это...',
    options: [
      'Пароль группы',
      'Уникальный номер группы в системе',
      'Имя администратора группы',
      'Количество пользователей в группе'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как создать пользователя user1?',
    options: [
      'addser user1',
      'useradd user1',
      'newuser user1',
      'createuser user1'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как установить пароль пользователю user1?',
    options: [
      'set passwd user1',
      'passwd user1',
      'password user1',
      'setpass user1'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как добавить пользователя в группу sudo?',
    options: [
      'usermod -G sudo user1',
      'usermod -aG sudo user1',
      'addgroup user1 sudo',
      'gpasswd user1 sudo'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Какой инструмент всегда использовать для редактирования sudoers?',
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
    question: 'Что означает r в правах доступа?',
    options: [
      'write (запись)',
      'read (чтение)',
      'run (выполнение)',
      'remove (удаление)'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Право "read" (r) - это...',
    options: [
      'Возможность запустить файл',
      'Возможность изменить содержимое файла',
      'Возможность прочитать содержимое файла или просмотреть содержимое папки',
      'Возможность удалить файл'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что означает w в правах доступа?',
    options: [
      'read (чтение)',
      'write (запись)',
      'execute (выполнение)',
      'view (просмотр)'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Право "write" (w) - это...',
    options: [
      'Возможность просмотреть файл',
      'Возможность изменить или удалить содержимое файла или добавить файлы в папку',
      'Возможность запустить файл',
      'Возможность скопировать файл'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает x в правах доступа?',
    options: [
      'read (чтение)',
      'write (запись)',
      'execute (выполнение)',
      'example (пример)'
    ],
    correct: 2
  },
  {
    category: 'definition',
    question: 'Право "execute" (x) - это...',
    options: [
      'Возможность прочитать файл',
      'Возможность переименовать файл',
      'Возможность запустить файл как программу или войти в папку',
      'Возможность изменить размер файла'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Какое значение у r в восьмеричной системе?',
    options: [
      '1',
      '2',
      '4',
      '8'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Какое значение у w в восьмеричной системе?',
    options: [
      '1',
      '2',
      '4',
      '8'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какое значение у x в восьмеричной системе?',
    options: [
      '1',
      '2',
      '4',
      '8'
    ],
    correct: 0
  },
  {
    category: 'definition',
    question: 'Восьмеричные права доступа - это...',
    options: [
      'Пароли для файлов',
      'Числовая система представления прав доступа (r=4, w=2, x=1)',
      'Имена групп в системе',
      'Типы файловых систем'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает право 755?',
    options: [
      'rw-r--r--',
      'rwxr-xr-x',
      'rwx------',
      'rw-rw-rw-'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает право 644?',
    options: [
      'rwxr-xr-x',
      'rw-r--r--',
      'rwx------',
      'rw-rw-rw-'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'SUID бит - это...',
    options: [
      'Защита от удаления файла',
      'Специальный бит, позволяющий выполнить файл с правами его владельца',
      'Возможность менять имя файла',
      'Защита от чтения файла'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Sticky bit - это...',
    options: [
      'Возможность быстрого выполнения файла',
      'Специальный бит, позволяющий только владельцу файла его удалить (обычно на временных папках)',
      'Защита от изменения прав доступа',
      'Отметка на активном файле'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как сделать скрипт исполняемым?',
    options: [
      'chmod 755 script.sh',
      'chmod +x script.sh',
      'chmod a+x script.sh',
      'Все перечисленные'
    ],
    correct: 3
  },
  {
    category: 'practice',
    question: 'Как установить права 644 на файл?',
    options: [
      'chmod 644 file.txt',
      'chmod rw-r--r-- file.txt',
      'chmod a+r file.txt',
      'а и б'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как изменить владельца файла на user1?',
    options: [
      'chown user1 file.txt',
      'sudo chown user1 file.txt',
      'owner user1 file.txt',
      'а и б'
    ],
    correct: 3
  },
  {
    category: 'practice',
    question: 'Как изменить владельца и группу файла?',
    options: [
      'chown user1 && chgrp group1 file.txt',
      'chown user1:group1 file.txt',
      'chmod user1:group1 file.txt',
      'usermod user1:group1 file.txt'
    ],
    correct: 1
  },

  
  {
    category: 'theory',
    question: 'Какой номер у STDIN?',
    options: [
      '0',
      '1',
      '2',
      '3'
    ],
    correct: 0
  },
  {
    category: 'definition',
    question: 'STDIN - это...',
    options: [
      'Стандартный поток ошибок',
      'Стандартный поток вывода результатов',
      'Стандартный поток ввода (обычно клавиатура)',
      'Стандартный системный файл'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Какой номер у STDOUT?',
    options: [
      '0',
      '1',
      '2',
      '3'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'STDOUT - это...',
    options: [
      'Стандартный поток ввода',
      'Стандартный поток вывода результатов программы (обычно экран)',
      'Стандартный поток ошибок',
      'Стандартный файл конфигурации'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой номер у STDERR?',
    options: [
      '0',
      '1',
      '2',
      '3'
    ],
    correct: 2
  },
  {
    category: 'definition',
    question: 'STDERR - это...',
    options: [
      'Стандартный поток ввода',
      'Стандартный поток вывода',
      'Стандартный поток для вывода сообщений об ошибках',
      'Системный файл с ошибками'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что делает /dev/null?',
    options: [
      'Генерирует данные',
      'Отбрасывает всё, что туда попадает',
      'Сохраняет данные',
      'Выводит ошибки'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: '/dev/null - это...',
    options: [
      'Папка для нулевых файлов',
      'Специальный файл, который игнорирует всё, что в него писать',
      'Команда для очистки памяти',
      'Резервная копия системы'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Перенаправление потоков - это...',
    options: [
      'Переименование файлов',
      'Процесс изменения, где программа отправляет свой вывод (в файл вместо экрана и т.д.)',
      'Создание резервной копии',
      'Изменение прав доступа'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Pipe (|) - это...',
    options: [
      'Символ перенаправления в файл',
      'Символ для комментариев в коде',
      'Механизм, передающий вывод одной команды на вход другой',
      'Символ для обозначения математического модуля'
    ],
    correct: 2
  },
  {
    category: 'practice',
    question: 'Как перенаправить stdout в файл?',
    options: [
      'command < file.txt',
      'command > file.txt',
      'command >> file.txt',
      '2 и 3'
    ],
    correct: 3
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
    question: 'Как перенаправить и stdout и stderr в файл?',
    options: [
      'command > file.txt',
      'command 2>&1 > file.txt',
      'command &> file.txt',
      '2 и 3'
    ],
    correct: 3
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
    question: 'Что делает команда tee?',
    options: [
      'Выводит данные в stdout',
      'Выводит в stdout и одновременно сохраняет в файл',
      'Сохраняет данные в файл',
      'Удаляет данные'
    ],
    correct: 1
  },

  
  {
    category: 'definition',
    question: 'Bash скрипт - это...',
    options: [
      'Образец текстового файла',
      'Текстовый файл, содержащий последовательность команд bash для выполнения',
      'Папка с программами',
      'Конфигурационный файл системы'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что такое shebang?',
    options: [
      'Комментарий',
      'Строка для указания интерпретатора',
      'Команда для выполнения',
      'Переменная окружения'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Shebang (#!) - это...',
    options: [
      'Комментарий в коде',
      'Строка, указывающая какой интерпретатор использовать для выполнения скрипта',
      'Команда для запуска скрипта',
      'Защита от редактирования файла'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает переменная $0?',
    options: [
      'Первый аргумент',
      'Имя скрипта',
      'Количество аргументов',
      'Текущий PID'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что означает переменная $#?',
    options: [
      'Все аргументы',
      'Первый аргумент',
      'Количество аргументов',
      'Код возврата'
    ],
    correct: 2
  },
  {
    category: 'theory',
    question: 'Что означает переменная "$?" ?',
    options: [
      'Количество аргументов',
      'Код возврата последней команды',
      'PID процесса',
      'Текущая директория'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Переменная в bash - это...',
    options: [
      'Название скрипта',
      'Объект, хранящий значение (строку, число), которое можно использовать в скрипте',
      'Тип файла',
      'Аргумент команды'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Параметр скрипта ($1, $2 и т.д.) - это...',
    options: [
      'Переменная окружения',
      'Аргумент, переданный скрипту при его запуске',
      'Переменная, установленная в конфигурации',
      'Значение по умолчанию'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как проверить синтаксис bash скрипта?',
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
    question: 'Как запустить скрипт с отладкой?',
    options: [
      'bash script.sh',
      'bash -n script.sh',
      'bash -x script.sh',
      'bash --debug script.sh'
    ],
    correct: 2
  },

  
  {
    category: 'theory',
    question: 'Что такое systemd?',
    options: [
      'Файловая система',
      'Менеджер систем и служб',
      'Командная оболочка',
      'Загрузчик ОС'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'systemd - это...',
    options: [
      'Текстовый редактор',
      'Система инициализации и менеджер сервисов/демонов Linux',
      'Пакетный менеджер',
      'Файловая система'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой PID у systemd?',
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
    question: 'Что такое unit в systemd?',
    options: [
      'Папка с конфигом',
      'Одна служба или сервис',
      'Номер процесса',
      'Название ОС'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Unit в systemd - это...',
    options: [
      'Единица памяти',
      'Конфигурационный файл, описывающий сервис, таргет, таймер или другую управляемую systemd единицу',
      'Команда для управления сервисами',
      'Тип прав доступа'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой тип unit используется для запуска сервиса?',
    options: [
      '.target',
      '.service',
      '.socket',
      '.timer'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Service unit в systemd - это...',
    options: [
      'Набор инструментов',
      'Unit, описывающий сервис (программу, которая должна запуститься и работать)',
      'Группа пользователей',
      'Тип файловой системы'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что такое target в systemd?',
    options: [
      'Один сервис',
      'Группа сервисов',
      'Конфигурационный файл',
      'Тип устройства'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Target в systemd - это...',
    options: [
      'Папка назначения',
      'Специальный unit, группирующий другие units для достижения определённого состояния системы',
      'Программа для установки',
      'Файл конфигурации'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'journalctl - это...',
    options: [
      'Команда для управления дисками',
      'Команда для просмотра логов systemd (логов системных сервисов)',
      'Команда для установки пакетов',
      'Команда для управления пользователями'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как запустить сервис nginx?',
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
    question: 'Как проверить статус сервиса?',
    options: [
      'systemctl nginx',
      'systemctl status nginx',
      'systemctl info nginx',
      'systemctl show nginx'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как включить автозапуск сервиса?',
    options: [
      'systemctl autostart nginx',
      'systemctl enable nginx',
      'systemctl boot nginx',
      'systemctl run nginx'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как посмотреть логи systemd?',
    options: [
      'journalctl',
      'journalctl -f',
      'journalctl -u service',
      'Все перечисленные'
    ],
    correct: 3
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
    category: 'definition',
    question: 'BIOS - это...',
    options: [
      'Операционная система',
      'Программа для работы с файлами',
      'Программа, встроенная в материнскую плату, которая инициализирует оборудование при загрузке',
      'Тип процессора'
    ],
    correct: 2
  },
  {
    category: 'definition',
    question: 'Bootloader (загрузчик) - это...',
    options: [
      'Пакет операционной системы',
      'Программа, которая загружает и запускает ядро Linux с параметрами загрузки',
      'Команда для управления сервисами',
      'Тип файловой системы'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'GRUB - это...',
    options: [
      'Тип раздела диска',
      'Популярный загрузчик для Linux систем',
      'Команда для управления процессами',
      'Конфигурационный файл'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Что происходит первым при загрузке?',
    options: [
      'Запускается init',
      'BIOS инициализирует оборудование',
      'Ядро загружается',
      'Монтируется root ФС'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Kernel (ядро Linux) - это...',
    options: [
      'Первая запущенная программа',
      'Основная часть операционной системы, управляющая ресурсами и взаимодействием с оборудованием',
      'Пакет с драйверами',
      'Файловая система'
    ],
    correct: 1
  },
  {
    category: 'theory',
    question: 'Какой процесс запускается после ядра?',
    options: [
      'systemd/init',
      'bash',
      'network',
      'login'
    ],
    correct: 0
  },
  {
    category: 'definition',
    question: 'init/systemd процесс - это...',
    options: [
      'Процесс инициализации дисков',
      'Первый процесс, запущенный ядром (PID 1), который запускает все остальные сервисы и процессы',
      'Процесс для загрузки программ',
      'Процесс резервного копирования'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как посмотреть логи текущей загрузки?',
    options: [
      'journalctl',
      'journalctl -k',
      'journalctl -b',
      '2 и 3'
    ],
    correct: 3
  },
  
  {
    category: 'definition',
    question: 'cron - это...',
    options: [
      'Команда для просмотра времени',
      'Демон (фоновый процесс), который запускает команды/скрипты по расписанию',
      'Файл конфигурации времени',
      'Тип сервиса systemd'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'crontab - это...',
    options: [
      'Таблица времени системы',
      'Файл, содержащий расписание задач для запуска по времени для конкретного пользователя',
      'Команда для проверки времени',
      'Список активных процессов'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Задача cron - это...',
    options: [
      'Ошибка в системе',
      'Запись в crontab, содержащая расписание и команду для автоматического выполнения',
      'Процесс, который запускается только один раз',
      'Файл для резервной копии'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как добавить задачу в crontab?',
    options: [
      'cron -e',
      'crontab -e',
      'add cron',
      'cron add'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как показать задачи в crontab?',
    options: [
      'crontab -l',
      'crontab -show',
      'crontab -list',
      'show crontab'
    ],
    correct: 0
  },
  {
    category: 'practice',
    question: 'Как запустить скрипт ежедневно в 2:00?',
    options: [
      '2 0 * * * script.sh',
      '0 2 * * * script.sh',
      '* 2 * * * script.sh',
      '0 0 2 * * script.sh'
    ],
    correct: 1
  },
  {
    category: 'practice',
    question: 'Как запустить скрипт при каждой загрузке?',
    options: [
      '0 0 * * * script.sh',
      '@hourly script.sh',
      '@reboot script.sh',
      '@startup script.sh'
    ],
    correct: 2
  },

  // ========================
  // ОБЩИЕ КОНЦЕПЦИИ
  // ========================
  
  {
    category: 'definition',
    question: 'Демон (daemon) - это...',
    options: [
      'Вредоносная программа',
      'Фоновый процесс, работающий без взаимодействия с пользователем',
      'Процесс с очень высоким приоритетом',
      'Процесс, который выполняется один раз в день'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Интерпретатор команд (shell) - это...',
    options: [
      'Тип файла',
      'Программа, которая читает и выполняет команды, введённые пользователем или из скрипта',
      'Команда для просмотра файлов',
      'Тип процессора'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Привилегии (permissions) - это...',
    options: [
      'Пароли для входа',
      'Разрешения для выполнения определённых действий с файлами или командами',
      'Типы пользователей',
      'Версии программ'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Архив - это...',
    options: [
      'Папка на сервере',
      'Сжатый или несжатый файл, содержащий один или несколько файлов и директорий',
      'Резервная копия всей системы',
      'Тип файловой системы'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Конфигурационный файл - это...',
    options: [
      'Исполняемая программа',
      'Текстовый файл, содержащий параметры и настройки для программы или системы',
      'Резервная копия данных',
      'Архив с документацией'
    ],
    correct: 1
  },
  {
    category: 'definition',
    question: 'Права доступа в Linux - это...',
    options: [
      'Пароли для файлов',
      'Система, определяющая кто может читать, писать или выполнять файлы и директории',
      'Имена пользователей с доступом к файлу',
      'Теги для классификации файлов'
    ],
    correct: 1
  }
];
export const theoryTopics = [
  {
    id: 1,
    title: "Управление ресурсами",
    subtitle: "ps, top, процессы, удаление процессов",
    content: {
      description: "Процесс — это запущенная программа. Каждый процесс в системе имеет числовой идентификатор процесса (process ID, PID).",
      sections: [
        {
          title: "Команда ps и её параметры",
          text: "Команда ps выводит информацию о процессах.",
          items: [
            "PID — идентификатор процесса",
            "TTY — терминальное устройство, на котором выполняется процесс",
            "STAT — состояние процесса (S = sleeping/приостановлен, R = running/запущен)",
            "TIME — процессорное время в минутах и секундах",
            "COMMAND — команда, используемая для запуска программы"
          ],
          code: `ps aux
# Показывает все процессы всех пользователей
USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND`
        },
        {
          title: "Колонки ps aux",
          items: [
            "USER — имя пользователя, связанное с процессом",
            "PID — идентификатор процесса",
            "%CPU — использование центрального процессора в процентах",
            "%MEM — текущее использование оперативной памяти",
            "VSZ — размер виртуальной памяти процесса в КБ",
            "RSS — объем физической памяти, используемой процессом в КБ",
            "START — время начала процесса"
          ]
        },
        {
          title: "Команда top",
          text: "top — интерактивная утилита для мониторинга процессов в реальном времени.",
          items: [
            "-v — вывести версию программы",
            "-b — режим только для вывода данных (batch mode)",
            "-c — отображать полный путь к исполняемым файлам",
            "-d — интервал обновления информации",
            "-H — включает вывод потоков процессов",
            "-i — не отображать процессы, которые не используют ресурсы процессора",
            "-n — количество циклов обновления",
            "-p — отслеживать только указанные по PID процессы",
            "-u — выводить только процессы указанного пользователя"
          ]
        },
        {
          title: "Интерактивные команды в top",
          items: [
            "h — вывод справки",
            "q или Esc — выход",
            "k — послать сигнал завершения процессу",
            "H — выводить потоки процессов",
            "P — сортировка по CPU",
            "M — сортировка по памяти",
            "V — отображение процессов в виде дерева"
          ]
        },
        {
          title: "Завершение процесса",
          code: `kill -<код сигнала> <PID>
# TERM (15) — мягкий выход
# KILL (9) — принудительное завершение
kill -9 12345  # Завершить процесс с PID 12345`,
          warning: "Используйте kill -9 только в крайнем случае. Предпочтительнее использовать kill -15 (или просто kill)."
        },
        {
          title: "Состояния процессов (STAT)",
          text: "Каждый процесс находится в определенном состоянии:",
          items: [
            "R (Running) — процесс выполняется или готов к выполнению",
            "S (Sleeping) — процесс ожидает события (спит)",
            "D (Disk Sleep) — непрерываемый сон (обычно ожидание I/O)",
            "Z (Zombie) — завершенный процесс, но не удаленный родителем",
            "T (Stopped) — процесс остановлен сигналом",
            "< — процесс с высоким приоритетом",
            "N — процесс с низким приоритетом",
            "s — лидер сессии",
            "+ — процесс в группе переднего плана"
          ],
          code: `# Примеры состояний:
ps aux | head -5
# Ss — sleeping, session leader
# R+ — running, foreground
# Sl — sleeping, multi-threaded`
        },
        {
          title: "Сигналы Linux",
          text: "Сигналы — это способ взаимодействия с процессами. Основные сигналы:",
          items: [
            "SIGHUP (1) — перечитать конфигурацию",
            "SIGINT (2) — прерывание с клавиатуры (Ctrl+C)",
            "SIGQUIT (3) — выход с созданием дампа",
            "SIGKILL (9) — принудительное завершение (нельзя перехватить)",
            "SIGTERM (15) — запрос на завершение (можно перехватить)",
            "SIGCONT (18) — продолжить выполнение",
            "SIGSTOP (19) — остановить процесс",
            "SIGTSTP (20) — остановка с терминала (Ctrl+Z)"
          ],
          code: `# Примеры использования:
kill -HUP 1234    # Перечитать конфигурацию
kill -TERM 1234   # Мягкое завершение
kill -9 1234      # Принудительное завершение
killall nginx     # Завершить все процессы nginx
pkill -u user     # Завершить все процессы пользователя`
        },
        {
          title: "Приоритеты и nice",
          text: "Приоритет определяет, сколько процессорного времени получит процесс. Nice значение от -20 (высший приоритет) до 19 (низший).",
          items: [
            "nice — запустить процесс с заданным приоритетом",
            "renice — изменить приоритет работающего процесса",
            "Только root может устанавливать отрицательные значения nice"
          ],
          code: `# Запустить с низким приоритетом
nice -n 19 ./heavy-task.sh

# Изменить приоритет
renice -n 10 -p 1234

# Посмотреть приоритет
ps -o pid,ni,comm`
        },
        {
          title: "Фоновые процессы и jobs",
          text: "Процессы можно запускать в фоне и управлять ими:",
          code: `# Запустить в фоне
./script.sh &

# Посмотреть фоновые задачи
jobs

# Вернуть в фон/передний план
bg %1    # В фон
fg %1    # На передний план

# Остановить процесс
Ctrl+Z

# Отсоединить от терминала
nohup ./script.sh &
disown %1`
        },
        {
          title: "Команда pstree",
          text: "Показывает дерево процессов, демонстрируя родительско-дочерние отношения:",
          code: `# Показать дерево всех процессов
pstree

# С PID
pstree -p

# Для конкретного пользователя
pstree user

# С номерами потоков
pstree -t`
        }
      ]
    }
  },
  {
    id: 2,
    title: "Linux пакеты и пакетные менеджеры",
    subtitle: "Что это, какую проблему решает, зависимости",
    content: {
      description: "Пакет — это набор команд и зависимостей для установки программного обеспечения.",
      sections: [
        {
          title: "Форматы пакетов",
          items: [
            ".deb — Debian и производные (Ubuntu, Mint и т.д.)",
            ".rpm — Red Hat и производные (CentOS, Fedora и т.д.), OpenSUSE",
            ".apk — Alpine Linux",
            ".ebuild — Gentoo"
          ]
        },
        {
          title: "Зависимости",
          text: "Зависимость — это другой пакет, который необходим для работы данного пакета. Пакетные менеджеры автоматически разрешают зависимости при установке."
        },
        {
          title: "Репозиторий",
          text: "Репозиторий (от англ. repository — хранилище) — место, где хранятся и поддерживаются пакеты. Пакетные менеджеры применяются для поиска и скачивания пакетов из репозиториев."
        },
        {
          title: "Пакетные менеджеры",
          items: [
            "APT — для Debian/Ubuntu",
            "RPM/YUM — для Red Hat",
            "DNF (Dandified YUM) — современная версия YUM",
            "Pacman — для Arch Linux"
          ]
        },
        {
          title: "Зачем нужны пакетные менеджеры",
          items: [
            "Автоматическое разрешение зависимостей",
            "Централизованное управление программами",
            "Простое обновление всех установленных пакетов",
            "Безопасность (пакеты подписаны и проверены)"
          ]
        },
        {
          title: "APT (Advanced Package Tool)",
          text: "APT — высокоуровневый пакетный менеджер для Debian и производных дистрибутивов.",
          items: [
            "apt update — обновить списки пакетов из репозиториев",
            "apt upgrade — обновить установленные пакеты",
            "apt install <пакет> — установить пакет",
            "apt remove <пакет> — удалить пакет (оставить конфигурацию)",
            "apt purge <пакет> — удалить пакет с конфигурацией",
            "apt search <запрос> — поиск пакетов",
            "apt show <пакет> — информация о пакете",
            "apt autoremove — удалить ненужные зависимости"
          ],
          code: `# Типичный workflow
sudo apt update
sudo apt upgrade
sudo apt install nginx
apt search web-server
apt show nginx
sudo apt autoremove`
        },
        {
          title: "dpkg — низкоуровневый инструмент",
          text: "dpkg работает с .deb файлами напрямую, но не разрешает зависимости автоматически:",
          code: `# Установить локальный .deb
sudo dpkg -i package.deb

# Список установленных пакетов
dpkg -l

# Информация о пакете
dpkg -s nginx

# Содержимое пакета
dpkg -L nginx

# Какой пакет предоставляет файл
dpkg -S /usr/bin/ls

# Удалить пакет
sudo dpkg -r package`
        },
        {
          title: "DNF (Dandified YUM)",
          text: "Современный пакетный менеджер для Fedora, RHEL 8+, CentOS 8+:",
          code: `# Установка
sudo dnf install httpd

# Обновление
sudo dnf update

# Поиск
dnf search apache

# Информация
dnf info httpd

# Удаление
sudo dnf remove httpd

# Очистка кэша
sudo dnf clean all

# История операций
dnf history`
        },
        {
          title: "Работа с репозиториями",
          text: "Репозитории настраиваются через конфигурационные файлы:",
          items: [
            "Debian/Ubuntu: /etc/apt/sources.list и /etc/apt/sources.list.d/",
            "RHEL/Fedora: /etc/yum.repos.d/"
          ],
          code: `# Добавить репозиторий (Ubuntu)
sudo add-apt-repository ppa:user/repo
sudo apt update

# Добавить репозиторий (Fedora)
sudo dnf config-manager --add-repo http://example.com/repo

# Просмотр репозиториев
apt policy  # Ubuntu
dnf repolist  # Fedora`
        },
        {
          title: "Проблемы с зависимостями",
          text: "Иногда возникают конфликты зависимостей. Способы решения:",
          items: [
            "apt --fix-broken install — исправить сломанные зависимости",
            "dpkg --configure -a — настроить незавершенные пакеты",
            "apt autoremove — удалить ненужные пакеты",
            "Удалить конфликтующий пакет вручную"
          ],
          code: `# Типичное решение проблем
sudo apt --fix-broken install
sudo dpkg --configure -a
sudo apt update
sudo apt upgrade`
        }
      ]
    }
  },
  {
    id: 3,
    title: "Файловая система и разделы",
    subtitle: "Разделы, MBR, GPT",
    content: {
      description: "Раздел (partition) — часть жесткого диска, логически выделенная для удобства работы и состоящая из смежных блоков.",
      sections: [
        {
          title: "Преимущества разделения диска",
          items: [
            "На одном диске можно хранить информацию в разных файловых системах",
            "Манипуляции с одним разделом не сказываются на других разделах",
            "Можно отделить информацию пользователя от файлов ОС",
            "Образ раздела будет меньше по размеру при резервном копировании",
            "Уменьшение влияния фрагментации"
          ]
        },
        {
          title: "MBR (Master Boot Record)",
          text: "MBR — код и данные, необходимые для последующей загрузки операционной системы и расположенные в первых физических секторах на жёстком диске. Размер — 512 байт.",
          items: [
            "0000h (446 байт) — Код загрузчика",
            "01BEh (16 байт) — Таблица разделов (раздел 1)",
            "01CEh (16 байт) — Таблица разделов (раздел 2)",
            "01DEh (16 байт) — Таблица разделов (раздел 3)",
            "01EEh (16 байт) — Таблица разделов (раздел 4)",
            "01FEh (2 байта) — Сигнатура (55h AAh)"
          ]
        },
        {
          title: "Ограничения MBR",
          warning: true,
          items: [
            "Максимум 4 первичных раздела",
            "Максимальный размер диска: 2,2 ТБ"
          ]
        },
        {
          title: "GPT (GUID Partition Table)",
          text: "GPT — современный стандарт разметки дисков, часть спецификации UEFI.",
          items: [
            "GPT опирается на возможности EFI, а не на исполняемый код",
            "GPT использует современную адресацию LBA вместо CHS",
            "GPT обеспечивает дублирование (таблица записана в начале и конце диска)",
            "Максимум 128 разделов по умолчанию",
            "Теоретически позволяет создавать разделы размером до 9,4 ЗБ"
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "Монтирование файловых систем",
    subtitle: "ФС в Linux, монтирование, fstab",
    content: {
      description: "Файловая система — порядок, определяющий способ организации, хранения и именования данных на носителях информации в компьютерах.",
      sections: [
        {
          title: "Задачи файловой системы",
          items: [
            "Именование файлов",
            "Программный интерфейс работы с файлами для приложений",
            "Отображение логической модели ФС на физическую организацию хранилища",
            "Организация устойчивости к сбоям питания и ошибкам",
            "Содержание параметров файла, необходимых для взаимодействия с системой",
            "Защита файлов в многопользовательских системах"
          ]
        },
        {
          title: "Команды монтирования",
          code: `mount /dev/sdb1 /mnt/data  # Смонтировать раздел
umount /mnt/data            # Размонтировать раздел
mount | grep sdb1           # Проверить монтирование
df -h                       # Использование дисков`
        },
        {
          title: "Файл /etc/fstab",
          text: "Файл /etc/fstab содержит описание монтируемых файловых систем и служит для автоматического монтирования разделов при загрузке системы.",
          code: `UUID=abc123-def456 /data ext4 defaults 0 2`,
          items: [
            "device — устройство или UUID",
            "mount — точка монтирования",
            "type — тип файловой системы (ext4, xfs, ntfs и т.д.)",
            "options — параметры монтирования (defaults, rw, noatime и т.д.)",
            "dump — нужно ли делать резервную копию (0 или 1)",
            "pass — порядок проверки при загрузке (0, 1 или 2)"
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: "Пользователи и группы",
    subtitle: "Управление пользователями, SUDO",
    content: {
      description: "Суперпользователь (root) — это пользователь с максимальными привилегиями.",
      sections: [
        {
          title: "sudo",
          text: "sudo позволяет выполнять команды с правами другого пользователя (обычно root) безопасно с логированием всех действий."
        },
        {
          title: "Управление пользователями",
          code: `useradd username                    # Создать пользователя
useradd -m -s /bin/bash user    # С домашней директорией и оболочкой
passwd username                 # Установить пароль
userdel username                # Удалить пользователя
userdel -r username             # Удалить с домашней директорией
usermod -aG sudo username       # Добавить в sudo
groups username                 # Посмотреть группы пользователя`
        },
        {
          title: "Управление группами",
          code: `groupadd groupname                  # Создать группу
groupdel groupname                  # Удалить группу
usermod -aG groupname username      # Добавить в группу
gpasswd -d username groupname       # Удалить из группы
getent group groupname              # Члены группы`
        },
        {
          title: "Файлы конфигурации пользователей",
          items: [
            "/etc/passwd — информация о пользователях",
            "/etc/group — информация о группах",
            "/etc/shadow — хэши паролей (только для root)",
            "/etc/sudoers — конфигурация sudo"
          ]
        },
        {
          title: "Редактирование sudoers",
          code: `sudo visudo
# ВСЕГДА используйте visudo для редактирования /etc/sudoers
# Это предотвратит ошибки синтаксиса`,
          warning: "Всегда используйте visudo для редактирования /etc/sudoers"
        }
      ]
    }
  },
  {
    id: 6,
    title: "Права доступа chmod",
    subtitle: "Права доступа, chmod, chown, chgrp",
    content: {
      description: "В Linux каждый файл имеет три уровня доступа: для владельца (user), группы (group) и остальных (others). Для каждого уровня: r (read=4), w (write=2), x (execute=1).",
      sections: [
        {
          title: "Просмотр прав доступа",
          code: `ls -l file.txt
# -rw-r--r-- 1 user group 1234 Nov 08 12:00 file.txt
#  ^^^ права владельца (user rights)
#     ^^^ права группы (group rights)
#        ^^^ права остальных (others rights)`
        },
        {
          title: "chmod — символьный метод",
          code: `chmod u+x script.sh         # Добавить execute владельцу
chmod g-w file.txt          # Убрать запись группе
chmod a+r file.txt          # Добавить чтение всем
chmod u=rwx,go=rx file.txt  # Точно установить права
chmod o-rwx private.txt     # Убрать все права остальным`
        },
        {
          title: "chmod — числовой (октальный) метод",
          code: `chmod 755 script.sh             # rwxr-xr-x (исполняемый файл)
chmod 644 file.txt              # rw-r--r-- (обычный файл)
chmod 700 directory/            # rwx------ (приватная директория)
chmod 600 ~/.ssh/id_rsa         # rw------- (приватный ключ)
chmod 644 ~/.ssh/id_rsa.pub     # rw-r--r-- (публичный ключ)`
        },
        {
          title: "Изменение владельца (chown)",
          code: `sudo chown user file.txt                # Изменить владельца
sudo chown user:group file.txt          # Владелец и группа
sudo chown :group file.txt              # Только группа
sudo chown -R user:group /path/to/dir   # Рекурсивно`
        },
        {
          title: "Специальные биты",
          items: [
            "SUID (4000) — файл выполняется с правами владельца",
            "SGID (2000) — файл выполняется с правами группы",
            "Sticky bit (1000) — только владелец может удалить файл в директории"
          ],
          code: `chmod u+s program           # SUID: chmod 4755
chmod g+s directory         # SGID: chmod 2755
chmod +t directory          # Sticky bit: chmod 1777`
        }
      ]
    }
  },
  {
    id: 7,
    title: "Потоки ввода-вывода",
    subtitle: "STDIN, STDOUT, STDERR, перенаправление",
    content: {
      description: "В Linux существуют три стандартных потока ввода-вывода.",
      sections: [
        {
          title: "Потоки I/O",
          items: [
            "STDIN (0) — стандартный поток ввода (клавиатура)",
            "STDOUT (1) — стандартный поток вывода (терминал)",
            "STDERR (2) — стандартный поток ошибок (терминал)"
          ]
        },
        {
          title: "Перенаправление потоков",
          code: `command > file.txt          # stdout в файл (перезапись)
command >> file.txt         # stdout в файл (добавление)
command 2> errors.txt       # stderr в файл
command &> all.txt          # все потоки в файл
command > out.txt 2>&1      # все потоки в файл (старый способ)
command 2>&1                # stderr в stdout
command 1>&2                # stdout в stderr`
        },
        {
          title: "Pipe и tee",
          code: `command1 | command2         # stdout command1 в stdin command2
ps aux | grep nginx         # Пример: поиск процесса
command | tee file.txt      # Вывод и запись одновременно
command | tee -a file.txt   # Добавление в файл`
        },
        {
          title: "Псевдо-устройства",
          text: "/dev/null — файл, в который записывается всё, что попадает туда, и это 'исчезает' навсегда.",
          code: `rm $badname 2>/dev/null             # Сообщение об ошибке в никуда
cat /dev/null > /var/log/messages   # Очистка файла логов
command > /dev/null 2>&1            # Подавить весь вывод`,
          items: [
            "/dev/zero — файл, содержащий бесконечное количество нулей",
            "/dev/random и /dev/urandom — генераторы случайных чисел"
          ]
        }
      ]
    }
  },
  {
    id: 8,
    title: "Загрузка Linux",
    subtitle: "Процесс загрузки ОС, GRUB",
    content: {
      description: "Процесс загрузки Linux состоит из нескольких этапов.",
      sections: [
        {
          title: "Процесс загрузки",
          items: [
            "1. BIOS или загрузочная программа компьютера загружается и запускает загрузчик",
            "2. Загрузчик находит образ ядра на диске, загружает его в память и запускает",
            "3. Ядро инициализирует устройства и их драйверы",
            "4. Ядро монтирует корневую файловую систему",
            "5. Ядро запускает программу init с идентификатором процесса 1",
            "6. Программа init приводит в действие остальные системные процессы",
            "7. В какой-то момент запускается процесс для входа пользователя"
          ]
        },
        {
          title: "Просмотр логов загрузки",
          code: `journalctl -k               # Сообщения текущей загрузки
journalctl -b               # С последней загрузки
journalctl -b -1            # Предыдущая загрузка`
        },
        {
          title: "GRUB (GRand Unified Bootloader)",
          text: "GRUB — практически универсальный загрузчик для систем Linux с BIOS/MBR и UEFI.",
          items: [
            "1. BIOS инициализирует аппаратное обеспечение и ищет загрузочный код",
            "2. BIOS загружает и выполняет загрузочный код (GRUB stage 1)",
            "3. Загружается ядро GRUB (stage 1.5 или stage 2)",
            "4. Ядро инициализируется, получает доступ к дискам и файловым системам",
            "5. GRUB загружает конфигурацию из файла grub.cfg",
            "6. GRUB выполняет конфигурацию (команду boot для загрузки ядра)"
          ]
        },
        {
          title: "Другие загрузчики",
          items: [
            "LILO — один из первых загрузчиков Linux",
            "ELILO — версия UEFI",
            "SYSLINUX — для множества файловых систем",
            "systemd-boot — простой менеджер загрузки UEFI"
          ]
        }
      ]
    }
  },
  {
    id: 9,
    title: "Bash скриптинг",
    subtitle: "Переменные, условия, циклы",
    content: {
      description: "Bash-скрипт — файл, содержащий последовательность команд, которые выполняются программой bash построчно.",
      sections: [
        {
          title: "Hello World на bash",
          code: `#!/bin/bash
echo "Hello, World!"
# Сохранить как script.sh
chmod +x script.sh
./script.sh`
        },
        {
          title: "Переменные",
          code: `NAME="John"
AGE=25
echo $NAME
echo "Hello, $NAME"
echo "Age: \${AGE} years"`
        },
        {
          title: "Специальные переменные",
          items: [
            "$0 — имя скрипта",
            "$1, $2 — аргументы скрипта",
            "$# — количество аргументов",
            "$@ — все аргументы",
            "$$ — PID процесса",
            "$? — код возврата последней команды"
          ]
        },
        {
          title: "Математические операции",
          code: `result=$((5 + 3))
result=$((a * b))
let result=5+3
((count++))
((count += 5))
# Операции: + - * / % **`
        },
        {
          title: "Условные конструкции",
          code: `if [ $a -eq $b ]; then
    echo "A equals B"
elif [ $a -lt $b ]; then
    echo "A less than B"
else
    echo "A greater than B"
fi`
        },
        {
          title: "Операторы сравнения",
          items: [
            "-eq — равно",
            "-ne — не равно",
            "-lt — меньше",
            "-le — меньше или равно",
            "-gt — больше",
            "-ge — больше или равно"
          ]
        },
        {
          title: "Циклы",
          code: `# For loop
for i in {1..5}; do
    echo $i
done

# While loop
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done`
        }
      ]
    }
  },
  {
    id: 10,
    title: "systemd",
    subtitle: "Менеджер систем и служб, systemctl, journalctl",
    content: {
      description: "systemd — это менеджер систем и служб для операционных систем Linux. Выполняется как процесс с PID 1 и запускает остальную часть системы.",
      sections: [
        {
          title: "Типы unit",
          items: [
            ".service — запускает и контролирует процесс",
            ".target — группа сервисов",
            ".socket — сетевой или IPC сокет",
            ".mount — точка монтирования",
            ".path — мониторинг изменений в файловой системе",
            ".timer — служба времени (аналог cron)"
          ]
        },
        {
          title: "Команды systemctl",
          code: `sudo systemctl start service       # Запустить
sudo systemctl stop service        # Остановить
sudo systemctl restart service     # Перезапустить
sudo systemctl reload service      # Перезагрузить конфиг
systemctl status service           # Статус
sudo systemctl enable service      # Автозапуск при загрузке
sudo systemctl disable service     # Отключить автозапуск`
        },
        {
          title: "Targets (уровни запуска)",
          items: [
            "poweroff.target — выключение (runlevel 0)",
            "rescue.target — однопользовательский (runlevel 1)",
            "multi-user.target — текстовый режим (runlevel 3)",
            "graphical.target — графический (runlevel 5)",
            "reboot.target — перезагрузка (runlevel 6)"
          ]
        },
        {
          title: "Структура service файла",
          code: `[Unit]
Description=My Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/myapp
ExecStop=/usr/bin/myapp-stop
Restart=on-failure
RestartSec=5s
User=myuser

[Install]
WantedBy=multi-user.target`
        },
        {
          title: "journalctl — логи systemd",
          code: `journalctl                          # Все логи
journalctl -f                       # В реальном времени
journalctl -u service               # Логи сервиса
journalctl -b                       # С последней загрузки
journalctl -n 50                    # Последние 50 строк
journalctl -p err                   # Только ошибки
journalctl --since "2 hours ago"    # За последние 2 часа`
        }
      ]
    }
  }
];

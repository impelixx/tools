export const practiceTopics = [
  {
    id: 1,
    title: "Перенаправление потоков",
    subtitle: "Практическая работа с STDIN, STDOUT, STDERR",
    tasks: [
      {
        title: "Задача 1: Перенаправить stdout",
        code: `ls -l > output.txt
echo "Hello World" > hello.txt
cat >> log.txt << EOF
New log entry
Another line
EOF`
      },
      {
        title: "Задача 2: Перенаправить stderr",
        code: `ls /nonexistent 2> errors.txt
find / -name "test" 2> /dev/null
command 2>> errors.log`
      },
      {
        title: "Задача 3: stdout и stderr в разные файлы",
        code: `ls /home /root > files.txt 2> errors.txt
./script.sh 1> output.log 2> error.log`
      },
      {
        title: "Задача 4: stdout и stderr вместе",
        code: `command > output.log 2>&1
command &> all.log
./build.sh &> build.log`
      },
      {
        title: "Задача 5: Использовать pipe",
        code: `ps aux | grep nginx
cat /var/log/syslog | grep error
ls -l | wc -l
cat file.txt | sort | uniq | wc -l`
      },
      {
        title: "Задача 6: Использовать tee",
        code: `echo "Log entry" | tee -a log.txt
ls -l | tee listing.txt
make 2>&1 | tee build.log`
      }
    ]
  },
  {
    id: 2,
    title: "Установка пакетов",
    subtitle: "APT, RPM, DNF",
    tasks: [
      {
        title: "Для Debian/Ubuntu (APT)",
        code: `sudo apt update                # Обновить списки пакетов
sudo apt install nginx          # Установить пакет
apt search apache               # Поиск пакета
apt show nginx                  # Информация о пакете
sudo apt remove nginx           # Удалить пакет
sudo apt purge nginx            # Удалить с конфигурацией
sudo apt upgrade                # Обновить пакеты
sudo apt clean                  # Очистить кэш
sudo apt autoremove             # Удалить ненужные`
      },
      {
        title: "Для RHEL/CentOS/Fedora (RPM)",
        code: `rpm -q package              # Запрос информации
rpm -i package.rpm          # Установка
rpm -U package.rpm          # Обновление
rpm -e package              # Удаление
rpm -V package              # Проверка
rpm -qa                     # Все установленные пакеты`
      },
      {
        title: "Для RHEL/CentOS/Fedora (DNF)",
        code: `sudo dnf install httpd      # Установить пакет
dnf search nginx            # Поиск
dnf info httpd              # Информация
sudo dnf remove httpd       # Удалить
sudo dnf upgrade            # Обновить
sudo dnf clean all          # Очистить кэш`
      }
    ]
  },
  {
    id: 3,
    title: "Создание и монтирование ФС",
    subtitle: "mkfs, mount, fstab",
    tasks: [
      {
        title: "Шаг 1: Просмотр дисков",
        code: `lsblk                   # Все блочные устройства
sudo fdisk -l           # Подробная информация
sudo parted -l          # Информация parted`
      },
      {
        title: "Шаг 2: Создание раздела",
        code: `sudo fdisk /dev/sdb
# n - новый раздел
# p - первичный
# 1 - номер раздела
# Enter - начало и конец по умолчанию
# w - записать`
      },
      {
        title: "Шаг 3: Форматирование",
        code: `sudo mkfs.ext4 /dev/sdb1
# Или с меткой
sudo mkfs.ext4 -L mydisk /dev/sdb1`
      },
      {
        title: "Шаг 4: Создание точки монтирования",
        code: `sudo mkdir /mnt/mydisk
sudo mkdir -p /data/backup`
      },
      {
        title: "Шаг 5: Монтирование",
        code: `sudo mount /dev/sdb1 /mnt/mydisk
sudo mount -o rw,noatime /dev/sdb1 /mnt/mydisk
# Проверка
df -h | grep sdb1
mount | grep sdb1`
      },
      {
        title: "Шаг 6: Автомонтирование в fstab",
        code: `# Узнать UUID
sudo blkid /dev/sdb1
# Отредактировать /etc/fstab
sudo nano /etc/fstab
# Добавить строку (device mount type options dump pass)
UUID=abc123-def456 /mnt/mydisk ext4 defaults 0 2
# Проверить fstab
sudo mount -a`
      }
    ]
  },
  {
    id: 4,
    title: "Работа с ls",
    subtitle: "Просмотр файлов и директорий",
    tasks: [
      {
        title: "Основные параметры ls",
        code: `ls                  # Простой список
ls -l               # Подробный список (long format)
ls -a               # Со скрытыми файлами
ls -la              # Все с деталями
ls -lh              # Человекочитаемые размеры
ls -lt              # Сортировка по времени
ls -lS              # Сортировка по размеру
ls -lR              # Рекурсивно
ls -ld */           # Только директории
ls -li              # С inode`
      },
      {
        title: "Практические примеры",
        code: `# Последние изменённые файлы
ls -lt | head -10

# Самые большие файлы
ls -lhS | head -10

# Только .txt файлы
ls -l *.txt

# С цветным выводом
ls --color=auto -l

# Сортировка по расширению
ls -lX

# Размер директории
du -sh directory`
      }
    ]
  },
  {
    id: 5,
    title: "Изменение прав доступа",
    subtitle: "chmod, chown, типичные сценарии",
    tasks: [
      {
        title: "Типичные правильные права",
        code: `# Исполняемые скрипты
chmod 755 script.sh
chmod +x script.sh

# Обычные файлы
chmod 644 file.txt

# Приватные файлы
chmod 600 secret.txt

# SSH ключи и директории
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 700 ~/.ssh

# Web-контент
sudo chown -R www-data:www-data /var/www/html
sudo find /var/www/html -type d -exec chmod 755 {} \\;
sudo find /var/www/html -type f -exec chmod 644 {} \\;

# Shared directory
sudo chmod 1777 /shared

# Конфигурационные файлы
chmod 640 /etc/config.conf
sudo chown root:group /etc/config.conf`
      },
      {
        title: "Практические задания",
        code: `# Посмотреть права
ls -l file.txt

# Сделать скрипт исполняемым
chmod u+x script.sh

# Изменить владельца
sudo chown user file.txt
sudo chown user:group file.txt

# Рекурсивно для директории
sudo chown -R user:group /path/to/dir
chmod -R 755 /path/to/dir

# Использовать специальные биты
chmod u+s program       # SUID
chmod g+s directory     # SGID
chmod +t directory      # sticky bit`
      }
    ]
  },
  {
    id: 6,
    title: "Запуск скриптов",
    subtitle: "Различные способы запуска, cron, systemd",
    tasks: [
      {
        title: "Пример 1: Простой скрипт",
        code: `#!/bin/bash
echo "Hello, World!"
echo "Current date: $(date)"
echo "Current user: $(whoami)"
echo "Current directory: $(pwd)"
# Сохранить как script.sh
chmod +x script.sh
./script.sh`
      },
      {
        title: "Пример 2: Скрипт с аргументами",
        code: `#!/bin/bash
echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "Number of arguments: $#"
echo "All arguments: $@"
# Запуск:
./script.sh arg1 arg2 arg3`
      },
      {
        title: "Различные способы запуска",
        code: `./script.sh                 # Через ./ (относительный путь)
/path/to/script.sh          # Абсолютный путь
bash script.sh              # Через bash явно
sh script.sh                # Через sh
source script.sh            # В текущей оболочке

# Проверка перед запуском
bash -n script.sh           # Проверить синтаксис
bash -x script.sh           # С отладкой`
      },
      {
        title: "Автоматический запуск через crontab",
        code: `crontab -e
# Добавить:
@reboot script.sh           # При загрузке
0 2 * * * script.sh         # Ежедневно в 2:00
0 * * * * script.sh         # Каждый час
*/5 * * * * script.sh       # Каждые 5 минут

# Команды работы с crontab:
crontab -l                  # Показать задачи
crontab -r                  # Удалить задачи`
      },
      {
        title: "Запуск через systemd service",
        code: `# Создать /etc/systemd/system/myscript.service
[Unit]
Description=My Script
After=network.target

[Service]
Type=oneshot
ExecStart=/path/to/script.sh
User=username

[Install]
WantedBy=multi-user.target

# Активировать
sudo systemctl daemon-reload
sudo systemctl enable myscript.service
sudo systemctl start myscript.service`
      }
    ]
  }
];

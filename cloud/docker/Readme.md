# Manajemen Kontainer dengan Docker

## Konsep Kontainer

## Docker

## Docker Image

## Docker Container

## Kontainerisasi App

## Docker Compose
|                    Sintaks                    |                                                                    Deskripsi                                                                   |
|:---------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------:|
| FROM <base image>                             | Mendefinisikan image yang menjadi dasar kontainer                                                                                              |
| COPY [--chown=<user>:<group>] <src>... <dest> | Menambahkan file atau folder dari host ke dalam image                                                                                          |
| ADD [--chown=<user>:<group>] <src>... <dest>  | Menambahkan file atau folder dari host atau URL website ke dalam image                                                                         |
| RUN <command>                                 | Menjalankan perintah shell pada saat proses build.                                                                                             |
| ENV <key>=<value>                             | Mendefinisikan variabel lingkungan di dalam image, yang juga dapat dipakai pada saat kontainer berjalan                                        |
| WORKDIR <path to folder>                      | Berpindah folder dan menetapkannya sebagai direktori saat ini                                                                                  |
| USER <nama user>                              | Berganti user untuk menjalankan perintah-perintah dibawahnya                                                                                   |
| ENTRYPOINT <perintah>                         | Menjalankan perintah shell pada saat kontainer dijalankan                                                                                      |
| CMD                                           | Menjalankan perintah shell pada saat kontainer dijalankan namun dapat digantikan dengan parameter yang berada pada saat menjalankan kontainer. |
| ARGS <key>=<value>                            | Mengirimkan variabel dari perintah docker untuk dijalankan pada saat proses build                                                              |
| EXPOSE <portNumber>/[tcp/udp]                 | Sebagai dokumentasi pada port berapa kontainer menerima koneksi                                                                                |
## Docker Networking

## Docker Volume

## Latihan
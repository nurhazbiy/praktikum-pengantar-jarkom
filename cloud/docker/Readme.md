# Manajemen Kontainer dengan Docker

## Konsep Kontainer
<img src="https://www.docker.com/sites/default/files/d8/styles/large/public/2018-11/container-what-is-container.png" width="600" />

Dalam dunia rekayasa perangkat lunak, container adalah lingkungan virtual yang isinya adalah aplikasi dan semua file konfigurasi, perpustakaan, binari, dan dependensi yang diperlukan untuk menjalankan aplikasi itu. Metode pengemasan aplikasi bersama dengan pustaka dan dependensinya memungkinkan tim pengembangan perangkat lunak untuk membangun aplikasi yang akan bekerja secara identik bahkan ketika dipindahkan antar komputer.

## Docker
<img src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png" width="400" />

**Docker** merupakan perangkat lunak yang dapat digunakan untuk mengoperasikan kontainer, (menjalankan, menghentikan, memulai ulang, dsb). Kontainer tersebut menjalankan sistem operasi, kumpulan pustaka, dan kode program yang berasal dari suatu objek bernama **docker images**. Penggunaan kontainer dapat memberikan kelebihan dari berbagai aspek, salah satu yang slogan yang cukup terkenal adalah “Build once, run anywhere”, yang berarti kita sebagai pengguna dapat menjalankan program yang telah kita buat di mana saja. Selain itu kelebihan lain yang didapat dari penggunaan kontainer adalah kita tidak perlu menunggu lama-lama seperti menunggu proses boot mesin virtual, karena kontainer menggunakan kernel yang sama dengan host-OS kita.
<br> 

**Docker** menggunakan arsitektur klien-server untuk model komunikasi antara pengguna dan server. Pengguna dapat terhubung dengan server docker menggunakan perintah docker dengan catatan bahwa pengguna telah masuk kedalam grup **docker**. Hal ini diperlukan karena docker masih membutuhkan akses **root** terhadap beberapa komponen pada sistem operasi kita, seperti pengaksesan dan pembentukan jaringan baru, agar antar kontainer dapat saling terhubung. Server docker dapat disediakan ke pengguna dalam dua bentuk, yang pertama adalah unix socket, dan yang kedua adalah melalui HTTP API.


## Docker Image

Seperti yang telah dijelaskan sebelumnya, kontainer akan menjalankan sistem operasi berdasarkan image. **Images** terdiri dari beberapa **layer yang ditumpuk** di atas satu sama lain dan direpresentasikan sebagai objek tunggal. Di dalam Images adalah **cut-down sistem operasi (OS)** dan semua file dan dependensi yang diperlukan untuk menjalankan aplikasi. Karena kontainer dimaksudkan untuk menjadi cepat dan ringan, gambar cenderung kecil. Images dapat kita ambil atau simpan di penyedia **image registry** seperti Docker Hub, Amazon Elastic Container Registry, Google Cloud Registry, dan lain lain. 
**Berikut bagan tabel commands yang sering digunakan pada Docker Image:**

| Command              |                          Description                         |
|----------------------|:------------------------------------------------------------:|
| docker image build   |              Build sebuah image dari Dockerfile              |
| docker image history |                   Menampilkan histori image                  |
| docker image import  |                 Import image dari sumber luar                |
| docker image inspect | Menampilkan detail informasi tentang sebuah atau semua image |
| docker image load    |          Load sebuah image dari tar archive or STDIN         |
| docker image ls      |                          List images                         |
| docker image prune   |                    menghapus unused images                   |
| docker image pull    |        Pull image atau repository dari image registry        |
| docker image push    |       Push image atau repository menuju image registry       |
| docker image rm      |               Menghapus sau atau beberapa image              |
| docker image save    |              Menyimpan satu atau beberapa image              |
| docker image tag     |  Membuat tag TARGET_IMAGE yang mengacu pada # SOURCE_IMAGE  |


## Docker Container
Docker container adalahadalah alat yang memungkinkan anda untuk menjalankan dan membuat containerizatin aplication menggunakan docker. Dengan memanfaatkan commad-command yantg ada pada tabel dibawah.

**Kumpulan commands pada docker container**
| Command                  | Description                                                                    |
|--------------------------|--------------------------------------------------------------------------------|
| docker container run     | Digunakan untuk memulai container baru                                         |
| docker container exec    | Menjalankan atau mengelola proses pada running container                       |
| docker container stop    | Akan menghentikan running container dan mengubah statenya menjadi Exited (0).  |
| docker container start   | Akan merestart container yang berhenti/stop.                                   |
| docker container rm      | Akan menghapus container yang berhenti/stop.                                   |
| docker container inspect | Akan menampilakn detail configurasio dan runtimeinformation tentang container. |

Seperti yang telah dijelaskan pada sebelumnya, kontainer akan menjalankan image yang dapat kita ambil dari penyedia seperti Docker Hub, Amazon Elastic Container Registry, Google Cloud Registry, dan lain lain. Image tersebut berisi dasar-dasar dari sistem operasi dan pustaka-pustaka yang biasa dapat digunakan agar nantinya kode program kita dapat berjalan. Kumpulan pustaka dan dasar-dasar sistem operasi tadi didefinisikan dengan file yang bernama ‘Dockerfile’. File jenis ini dibuat khusus untuk membuat image dan memiliki sintaks-sintaks khusus yang sudah ditetapkan oleh pihak docker.

**Berikut bagan tabel sintaks-sintaks yang sering digunakan pada Dockerfile:**

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

## Kontainerisasi App

**Kontainerisasi aplikasi** adalah metode virtualisasi tingkat OS yang digunakan untuk menerapkan dan menjalankan aplikasi terdistribusi tanpa meluncurkan seluruh mesin virtual (VM) untuk setiap aplikasi. Beberapa aplikasi atau layanan yang terisolasi berjalan pada satu host dan mengakses kernel OS yang sama. Kontainer bekerja pada sistem bare-metal, instans cloud, dan mesin virtual, di seluruh Linux dan memilih Windows dan Mac OS.

Banyak yang mendukung kontainerisasi karena menunjukkan efisiensi untuk memori, CPU, dan penyimpanan dibandingkan dengan virtualisasi tradisional dan hosting aplikasi fisik. Tanpa overhead yang dibutuhkan oleh VM, dimungkinkan untuk mendukung lebih banyak kontainer aplikasi pada infrastruktur yang sama. Portabilitas adalah manfaat lain. Jika OS sama di seluruh sistem, kontainer aplikasi dapat berjalan di sistem apa pun dan di cloud apa pun tanpa memerlukan perubahan kode. Tidak ada variabel guest OS environment atau dependensi library untuk dikelola.

**Cara kerja kontainerisasi aplikasi**<br>
Kontainer aplikasi menyertakan komponen runtime seperti file, environment variables, dan libraries yang diperlukan untuk menjalankan perangkat lunak yang diinginkan. Kontainer aplikasi mengkonsumsi lebih sedikit sumber daya jika dibandingkan dengan penerapan pada VM karena kontainer berbagi sumber daya tanpa sistem operasi penuh untuk mendukung setiap aplikasi. Kumpulan informasi lengkap untuk dieksekusi dalam wadah disebut **image**. Mesin kontainer menyebarkan semua image ini pada host.
  
## Docker Compose
  
**Docker Compose** adalah alat yang memungkinkan Anda untuk menjalankan lingkungan aplikasi multikontainer berdasarkan definisi yang ditetapkan dalam berkas YAML. Alat ini menggunakan definisi layanan untuk sepenuhnya membangun lingkungan yang dapat disesuaikan dengan penggunaan beberapa kontainer yang dapat berbagi volume data dan jaringan.

**Contoh: docker-compose.yml**
```
version: '3.7'
services:
  web:
    image: nginx:alpine
    ports:
      - "8000:80"
    volumes:
      - ./app:/usr/share/nginx/html
    networks:
      - website-coba
```
  
**Berikut bagan tabel commands yang sering digunakan pada Docker Compose:**
| Command                |                                                                                                                         Description                                                                                                                        |
|------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| docker-compose up      | is the command we use to deploy a Compose app. It expects the Compose file to be called docker-compose.yml or docker-compose.yaml, but you can specify a custom filename with the -f flag. It’s common to start the app in the background with the -d flag. |
| docker-compose stop    |                                                     will stop all of the containers in a Compose app without deleting them from the system. The app can be easily restarted with dockercompose restart.                                                     |
| docker-compose rm      |                                                                    will delete a stopped Compose app. It will delete containers and networks, but it will not delete volumes and images.                                                                    |
| docker-compose restart |                                                                                          will restart a Compose app that has been stopped with docker-compose stop                                                                                          |
| docker-compose ps      |                                                                   will list each container in the Compose app. It shows current state, the command each one is running, and network ports.                                                                  |
| docker-compose down    |                                                                         will stop and delete a running Compose app. It deletes containers and networks, but not volumes and images.                                                                         |
  
## Docker Networking
  
**Docker network** merupakan sebuah opsi menu yang memungkinkan kita untuk melakukan segala hal yang berhubungan dengan manajemen administrasi jaringan, seperti membuat jaringan, menghubungkan, melihat informasi jaringan hingga mendetail sekali. Biasanay digunakan untuk membuat koneksi antar container atau keluar-masuk container.

**Tipe-tipe network yang ada pada Docker Networking:**

|                    Tipe Network                    |                                                                    Deskripsi                                                                   |
|:---------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------:|
| bridge                             | Driver jaringan default. Jika anda tidak menentukan driver, tipe network ini adalah jenis jaringan yang akan terbuat. Network bridge biasanya digunakan saat aplikasi berjalan dalam standalone containers yang perlu berkomunikasi. |
| host | Untuk standalone containers, menghapus isolasi jaringan antara container dan host Docker, dan menggunakan gunakan jaringan/network host secara langsung.     |
| overlay  | Network overlay menghubungkan multiple Docker daemon dan memungkinkan layanan swarm untuk berkomunikasi satu sama lain. Anda juga dapat menggunakan jaringan overlay untuk memfasilitasi komunikasi antara swarm service dan container standalone, atau antara dua container standalone pada daemon Docker yang berbeda. Strategi ini menghilangkan kebutuhan untuk melakukan perutean tingkat OS di antar containers                                                                         |
| ipvlan  | Network IPvlan memberi pengguna kendali penuh atas pengalamatan/addressing IPv4 dan IPv6. Driver VLAN dibangun untuk memberikan operator kontrol penuh atas tagging VLAN lapisan 2 dan bahkan routing IPvlan L3 untuk pengguna yang tertarik pada underlay network integration.                                                                                             |
| macvlan | Jaringan Macvlan memungkinkan untuk menetapkan alamat MAC ke sebuah container, membuatnya muncul sebagai perangkat fisik di jaringan Anda.|
| none | Untuk menonaktifkan semua jaringan dicontainer ini. Biasanya digunakan bersama dengan driver jaringan khusus. ( tidak tersedia untuk layanan swarm.) |
<br>
  
**Kumpulan commands pada docker network**
| Command                | Description                                                       |
|------------------------|-------------------------------------------------------------------|
| docker network ls      | Lists semua networks yang ada pada local Docker host.             |
| docker network create  | Membuat Docker networks Baru                                      |
| docker network inspect | Memberikan detail information konfigurasi tentang Docker network. |
| docker network prune   | Menghapus semua networks yang tidk digunakan pada Docker host.    |
| docker network rm      | Menghapus sebuah networks yang diinginkan pada Docker host.       |
  
## Docker Volume

<img src="https://cdn-blinux.s3-id-jkt-1.kilatstorage.id/post/leon/types-of-mounts-volume.png" width="400" />
  
**Volume** adalah mekanisme untuk menyimpan data yang dihasilkan dan digunakan oleh container Docker. Jika mount dan bind bergantung pada struktur direktori dan OS dari host, maka volume sepenuhnya dikelola oleh Docker. Volume memiliki beberapa keunggulan dibandingkan mount dan bind:
  
* Volume lebih mudah untuk dibackup atau dimigrasi daripada bind mount.
* Anda dapat mengelola volume menggunakan perintah Docker CLI atau API Docker.
* Volume berfungsi pada container Linux dan Windows.
* Volume dapat dibagikan dengan lebih aman di antara banyak kontainer.
* Driver volume memungkinkan Anda menyimpan volume di remote host atau penyedia cloud, untuk mengenkripsi konten volume, atau menambahkan fungsionalitas lainnya.
* Volume baru dapat memiliki kontennya yang telah diisi sebelumnya oleh sebuah wadah.
* Volume di Docker Desktop memiliki kinerja yang jauh lebih tinggi daripada bind mount dari host Mac dan Windows.

**Contoh command untuk menjalankan penyimpanan menggunaka Bind-mount dan Volume :**
  
* Bind-mount
```
docker run --rm --name postgres-db -e POSTGRES_PASSWORD=password --mount type=bind,source="$pwd",target=/var/lib/postgresql/data -p 2000:5432 -d postgres
```
  
* Volume
```
docker run --rm --name postgres-db -e POSTGRES_PASSWORD=password --mount type=volume,source=$HOME/docker/volumes/postgres,target=/var/lib/postgresql/data -p 2000:5432 -d postgres
```
  
**Kumpulan commands pada docker volume**

| Command               | Description                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------|
| docker volume create  | Command yang digunakan untuk membuat new volumes.                                                                        |
| docker volume ls      | Untuk melihat daftar semua volume yang ada pada local Docker host                                                       |
| docker volume inspect | Menampilkan informasi detail volume. Command ini bisa digunakan untuk melihat lokasi volume di Docker host’s filesystem. |
| docker volume prune   | Menghapus semua volumes yang tidak digunakan oleh container atau service replica.                                        |
| docker volume rm      | Menghapus volume yang ditunjuk                                                                                           |

## Latihan

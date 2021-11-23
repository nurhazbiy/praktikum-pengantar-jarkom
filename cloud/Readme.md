# Manajemen Cloud Computing Kampus
1. [Persiapan Lingkungan Praktek](https://github.com/bhawiyuga/idren-workshop-2021/tree/main/cloud#persiapan-lingkungan-praktek) 
    - [Instalasi Docker dan Kubernetes Lokal](https://github.com/bhawiyuga/idren-workshop-2021/tree/main/cloud#instalasi-docker-dan-kubernetes-lokal)

2. Manajemen Kontainer dengan Docker

3. Orkestrasi Kontainer dengan Kubernetes

## [Persiapan Lingkungan Praktek](#prepare)
### [Instalasi Docker dan Kubernetes Lokal](#install-docker-kube-local)
Bagian ini berisi langkah-langkah persiapan lingkungan praktek Docker dan Kubernetes untuk topik Cloud Computing. Langkah instalasi menyesuaikan dengan sistem operasi yang dipakai peserta. Namun demikian, peserta **disarankan untuk menggunakan sistem operasi berbasis Unix (Linux/MacOS/Windows Subsystem Linux 2)**.

**Linux Ubuntu (Ubuntu/Debian/CentOS/RHEL)**
- Pasang Docker dengan menjalankan perintah berikut. 

    ```bash 
    curl -fsSL https://get.docker.com 
    sudo usermod -aG docker $(whoami)
    ```
    Logout atau exit kemudian login kembali ke sistem anda.

- Pasang ```k3d``` untuk membangun cluster Kubernetes pada lingkungan lokal dengan menjalankan perintah berikut.

    ```
    curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
    ```

- Pasang ```kubectl``` untuk manajemen cluster kubernetes dengan menjalankan perintah berikut.
    ```
    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
    ```

**MacOS**

- Pasang Docker Desktop untuk MacOS (https://www.docker.com/products/docker-desktop)


- Pasang ```k3d``` untuk membangun cluster Kubernetes pada lingkungan lokal dengan menjalankan perintah berikut.

    ```
    brew install k3d
    ```

- Sebagai alternatif dari ```k3d``` anda juga dapat memanfaatkan fitur Kubernetes yang terintegrasi dengan Docker Desktop (https://docs.docker.com/desktop/kubernetes/#enable-kubernetes).

- ```kubectl``` sudah terpasang bersamaan dengan Docker Desktop

**Windows**

- Pasang Docker Desktop untuk Windows (https://www.docker.com/products/docker-desktop)

- Pasang shell terminal Windows untuk memudahkan eksekusi perintah. Beberapa alternatif antara lain : 

    a. GitBash (https://git-scm.com/download/win)
    
    b. WSL2 (https://docs.microsoft.com/en-us/windows/wsl/install)

- Pasang ```k3d``` untuk membangun cluster Kubernetes pada lingkungan lokal
    
    Jika anda **sudah mengaktifkan Windows Subsystem Linux (WSL) 2**, maka anda dapat memasang ```k3d``` dengan mengeksekusi perintah berikut pada terminal WSL2
    ```bash
    curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
    ```

    Jika anda **belum mengaktifkan WSL2**, maka pasang manajer paket Chocholatey dengan menjalankan perintah berikut lewat *PowerShell*

    ```powershell
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```
    Pasang ```k3d``` menggunakan perintah berikut lewat *PowerShell*
    ```powershell
    choco install k3d
    ```

- Sebagai alternatif dari ```k3d``` anda juga dapat memanfaatkan fitur Kubernetes yang terintegrasi dengan Docker Desktop (https://docs.docker.com/desktop/kubernetes/#enable-kubernetes).

- ```kubectl``` sudah terpasang bersamaan dengan Docker Desktop

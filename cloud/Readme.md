# Manajemen Cloud Computing Kampus
1. Persiapan Lingkungan Praktek 
    - Instalasi Docker dan Kubernetes Lokal 

## [Persiapan Lingkungan Praktek](#prepare)
### [Instalasi Docker dan Kubernetes Lokal](#install-docker-kube-local)
Bagian ini berisi langkah-langkah persiapan lingkungan praktek Docker dan Kubernetes untuk topik Cloud Computing. Langkah instalasi menyesuaikan dengan sistem operasi yang dipakai peserta.

**Linux Ubuntu (Ubuntu/Debian/CentOS/RHEL)**
- Install Docker

    Jalankan script berikut untuk memasang Docker. 

    ```bash 
    curl -fsSL https://get.docker.com 
    sudo usermod -aG docker $(whoami)
    ```
    Logout atau exit kemudian login kembali ke sistem anda.

- Install ```k3d``` untuk membangun cluster Kubernetes pada lingkungan lokal

    ```
    curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
    ```

- Install ```kubectl``` untuk manajemen cluster kubernetes
    ```
    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
    ```

**MacOS**

- Install Docker Desktop untuk MacOS (https://www.docker.com/products/docker-desktop)


- Install ```k3d``` untuk membangun cluster Kubernetes pada lingkungan lokal

    ```
    brew install k3d
    ```

- Sebagai alternatif dari ```k3d``` anda juga dapat memanfaatkan fitur Kubernetes yang terintegrasi dengan Docker Desktop (https://docs.docker.com/desktop/kubernetes/#enable-kubernetes).

- ```kubectl``` sudah terpasang bersamaan dengan Docker Desktop

**Windows**

- Install Docker Desktop untuk Windows (https://www.docker.com/products/docker-desktop)

- Pasang shell terminal Windows untuk memudahkan eksekusi perintah. Beberapa alternatif antara lain : 

    a. GitBash (https://git-scm.com/download/win)
    
    b. WSL2 (https://docs.microsoft.com/en-us/windows/wsl/install)

- Install ```k3d``` untuk membangun cluster Kubernetes pada lingkungan lokal
    
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
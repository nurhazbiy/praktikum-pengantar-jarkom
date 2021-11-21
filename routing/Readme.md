# Manajemen Routing
1. [Persiapan Lingkungan Praktek](https://github.com/bhawiyuga/idren-workshop-2021/tree/main/routing#persiapan-lingkungan-praktek) 
    - [Instalasi Docker Lokal](https://github.com/bhawiyuga/idren-workshop-2021/tree/main/routing#instalasi-docker-dan-kubernetes-lokal)
    

## [Persiapan Lingkungan Praktek](#prepare)
### [Instalasi Docker dan Kubernetes Lokal](#install-docker-kube-local)
Bagian ini berisi langkah-langkah persiapan lingkungan praktek Docker dan Kubernetes untuk topik Cloud Computing. Langkah instalasi menyesuaikan dengan sistem operasi yang dipakai peserta.

**Linux Ubuntu (Ubuntu/Debian/CentOS/RHEL)**
- Pasang Docker dengan menjalankan perintah berikut. 

    ```bash 
    curl -fsSL https://get.docker.com 
    sudo usermod -aG docker $(whoami)
    ```
    Logout atau exit kemudian login kembali ke sistem anda.

**MacOS**

- Pasang Docker Desktop untuk MacOS (https://www.docker.com/products/docker-desktop)

**Windows**

- Pasang Docker Desktop untuk Windows (https://www.docker.com/products/docker-desktop)

- Pasang shell terminal Windows untuk memudahkan eksekusi perintah. Beberapa alternatif antara lain : 

    a. GitBash (https://git-scm.com/download/win)
    
    b. WSL2 (https://docs.microsoft.com/en-us/windows/wsl/install)

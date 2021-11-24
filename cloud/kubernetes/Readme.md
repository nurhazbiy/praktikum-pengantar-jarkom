Jalankan script untuk membuat cluster dengan mapping nodeport

```
k3d cluster create -p "8082:30001@loadbalancer" -a 3
```
Budowanie:

docker build -f Dockerfile2 -t zad --build-arg VERSION=1.2.3 .

Polecenie do uruchomienia kontenera:

docker run -d -p 8081:80 --name zad-conatiner zad


Zdjęcie potwierdzajace poprawność działania w przeglądrace i za pomocą curl

![image](https://github.com/user-attachments/assets/bfe24cb9-c668-41b0-81d4-4912a4ad64ea)
![image](https://github.com/user-attachments/assets/fc85d454-18de-414e-8164-42a481a143be)


Stan kontenera:
![image](https://github.com/user-attachments/assets/71937ea8-2004-402a-ae1f-69d4f6224805)

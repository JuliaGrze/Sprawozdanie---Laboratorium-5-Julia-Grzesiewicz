Budowanie:

docker build -f Dockerfile2 -t zad --build-arg VERSION=1.2.3 .

Uruchamianie:

docker run -d -p 8081:80 --name zad-conatiner zad


Zdjęcie potwierdzajace poprawność działania w przeglądrace

![image](https://github.com/user-attachments/assets/bfe24cb9-c668-41b0-81d4-4912a4ad64ea)


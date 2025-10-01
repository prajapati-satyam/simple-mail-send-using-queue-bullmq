### Follow the step

```
git clone https://github.com/prajapati-satyam/simple-mail-send-using-queue.git
```

```
cd simple-mail-send-using-queue
```


```
npm i
```


```
docker run -it -p 6379:6379 valkey/valkey
```

### Open Terminal in same dir

```
node index.js
```

### Open Terminal in same dir
#### Running worker
```
node worker.js
```

#### don't forget to make .env file and pass your credentials

#### Now go to Browser
```
localhost:3000
```
# How to get started

project in dependent on **scyllaDB** as database. I use docker here to run a single scylla instance for dev mode.

you should install docker on your system.

follow instructions on official docker web site

https://docs.docker.com/engine/install/

after successfully installing docker. open a terminal and run the following command:

*replace $1 after --name to name of your instance*

*replace $2 after --cpuset to a single CPU on your system, for example 3*

```bash
docker run --name $1 -d --network host scylladb/scylla --developer-mode=1 --cpuset $2 --memory 1G --overprovisioned 0

```



It'll take about five minutes or so depending on your system. checkout if scyllaDB is running. use the command below:

```bash
docker exec -it $1 nodetool status
```

*$1 is name of your docker instance*

there should be an output like this:

```
Datacenter: datacenter1
=======================
Status=Up/Down
|/ State=Normal/Leaving/Joining/Moving
--  Address    Load       Tokens       Owns    Host ID                               Rack
UN  127.0.1.1  230.21 KB  256          ?       4cca3038-8f10-45b7-bb3f-991ff5d6d979  rack1

```

if you can find **UN** before the address, your database is Up and Normal.

now you need to create key space for user service. execute code below:

```bash
docker exec -it $1 cqlsh
```

*$1 is name of your docker instance*

you will get connect to cqlsh. now, create key space:

```CQL
CREATE KEYSPACE user WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3 }; 
```


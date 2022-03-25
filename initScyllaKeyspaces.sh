#!/bin/bash
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE authnz WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE business WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE notes WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE tests WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE storage WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE tasks WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE users WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
echo "keyspaces created"
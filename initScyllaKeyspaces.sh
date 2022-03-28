#!/bin/bash
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE authnz WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE business WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE note WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE psychology_test WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE storage WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE task WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE user WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
docker exec -it taskynDb cqlsh -e "CREATE KEYSPACE notification WITH replication = {'class': 'NetworkTopologyStrategy', 'replication_factor': 3 };" &&
echo "keyspaces created"
#!/bin/bash
docker run --name abaDb -d --network host scylladb/scylla:5.1.7 --developer-mode=1 --cpuset 5 --memory 1G --overprovisioned 0 &&
docker run -d --name abaMinio --network host -e "MINIO_ROOT_USER=root_user" -e "MINIO_ROOT_PASSWORD=root_pass" --cpuset-cpus 4 --memory 256m minio/minio:RELEASE.2023-03-13T19-46-17Z server /data &&
docker run --name abaEnvoy -d --network host -v $(pwd)/envoy/envoy_node.dev.yaml:/envoy_node.yaml -v $(pwd)/envoy/certs/taskyn-ir.crt:/taskyn-ir.crt -v $(pwd)/envoy/certs/taskyn-ir.key:/taskyn-ir.key --memory 128mb --cpuset-cpus 3 envoyproxy/envoy-distroless:v1.25.2 -c /envoy_node.yaml

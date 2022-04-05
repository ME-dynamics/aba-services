#!/bin/bash
mkdir -p ~/scylla/data ~/scylla/commitlog &&
mkdir -p ~/minio/data &&
docker run --name taskynDb -v ~/scylla:/var/lib/scylla -d --network host --restart=always scylladb/scylla:4.5.4 --developer-mode=0 --cpuset 1 --memory 2G --listen-address 37.228.136.158 --overprovisioned 0 &&
docker run -d --name taskynMinio -v ~/minio/data:/data --network host --restart=always -e "MINIO_ROOT_USER=d91a608b05c0eb50586eba31cb9931157a01cb3d78c17e2cbc57d71ecb8c79e6e037a3a3326500a3c853b14553240a452c8334b08eb9cfd5b6c51d51d2e21f40" -e "MINIO_ROOT_PASSWORD=f5d1b5870939ee32473350d5ceccbfbd81dd0e6bcd454b541f92e0522f9ad44a6267d066175d0aa1933d04d8240fdf2f7a2df902002ff1bcfbac467bc38ced45" -e "MINIO_SERVER_URL=https://storage.taskyn.ir" --cpuset-cpus 1 --memory 256m minio/minio:RELEASE.2022-03-17T06-34-49Z server /data &&
docker run --name taskynEnvoy -d --network host --restart=always -v $(pwd)/envoy/envoy_node.yaml:/envoy_node.yaml -v $(pwd)/envoy/certs/taskyn-ir.crt:/taskyn-ir.crt -v $(pwd)/envoy/certs/taskyn-ir.key:/taskyn-ir.key --memory 128mb --cpuset-cpus 0 envoyproxy/envoy-distroless:v1.21.1 -c /envoy_node.yaml &&
docker run --name taskynServer -d --network host --restart=always -e "MINIO_ACCESS_KEY=d91a608b05c0eb50586eba31cb9931157a01cb3d78c17e2cbc57d71ecb8c79e6e037a3a3326500a3c853b14553240a452c8334b08eb9cfd5b6c51d51d2e21f40" -e "MINIO_SECRET_KEY=f5d1b5870939ee32473350d5ceccbfbd81dd0e6bcd454b541f92e0522f9ad44a6267d066175d0aa1933d04d8240fdf2f7a2df902002ff1bcfbac467bc38ced45" -e "KAVENEGAR_API_KEY=5A4B56596333565A4C502F774C63555A415A4F6A31517A586F66756437326577556E5667437539643532413D" -e "SMSIR_API_KEY=f86ff9e75397cb3d11f9e7" -e "SMSIR_SECRET_KEY=117351d784c5596dc4804ac7050c03195b3048ece93f21f783144a3d9ff407c6" -e "SCYLLA_CONTACT_POINT=37.228.136.158" --memory 512mb --cpuset-cpus 0 taskyn-server:0.1.0 && ./serverLog
#!/bin/bash
version=$(./scripts/getCurrentVersion.sh)
docker build -t akrasnov87/siesta-lite:$version . -f Dockerfile.selfhost
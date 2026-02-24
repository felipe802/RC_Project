#!/bin/sh

# Stop on Error
set -e

# Uninstall VM
virsh --connect "qemu:///system" destroy FreeBSD-15.0
virsh --connect "qemu:///system" undefine FreeBSD-15.0 --remove-all-storage --nvram

---
date: 2023-03-25
comments: true
description: In this post, I show you how to share USB devices with your WSL instances and Docker containers.
---
# Share USB Devices with WSL & Docker Containers

Recently, I have faced an issue in accessing my USB JLink programmer from inside a docker container using WSL 2. I have found that this process is not well documented and requires advanced understanding of how USB devices work under WSL and inside Linux. After spending a few hours and playing with different tools and commands, I decided to document the steps I have followed here for the community.

<!-- more -->

### My System Configuration
For your information, I have mentioned my system configuration here:

- OS: Windows 11,
- WSL: WSL 2 with Ubuntu 22.04 and Docker Desktop
- My USB device: JLink USB Programmer from SEGGER.
- Debugger tool: OpenOCD (still `udev` rules from JLink software package is requird)

I expect the process doesn't change drastically if you work on Windows 10 or you use another Linux OS for your WSL instance. However, different USB devices require different rules for `udev` Linux utility to make them available for `non-root` users.

## Step 1: Install USPIPD-Win project and attach USB devices to WSL instance
Follow the steps in the [official guide from Microsoft](https://learn.microsoft.com/en-us/windows/wsl/connect-usb) and attach your connected USB devices to your Ubuntu WSL.

!!! note

    You need to run PowerShell as administrator and do this step every time you want to attach a USB device to your WSL. Also, after rebooting your PC or reconnecting the USB device, you have to do this step again as the attachment is temporary. I recommend keeping the PowerShell terminal open in the background if you need to disconnect and connect your device frequently. Also, if the USB devices get reset, this step has to be done again, but for debuggers like JLink this won't be an issue as they don't reset themselves, but the target.

## Step 2: Fix `udev` rules in Ubuntu WSL (give access to `non-root` user)
By default in Ubuntu, USB devices are only accessible by the root user. USB serial devices will appear under `/dev/ttyUSB*` or `/dev/ttyACM*` and are accessible by `non-root` users if the user is in the `dialout` group. However, for other devices, there is this tool called `udev` in Ubuntu and other Linux OSs that changes the permission of the USB device based on the rules defined in `/etc/udev/rules.d/*` and lets the `non-root` users to access them.

To let `udev` detect your device, you need to copy the rules for JLink programmer defined `99-jlink.rules` file in the JLink Software Package into the `/etc/udev/rules.d/`. If you use OpenOCD instead of JLink debugger utilities, you still need to copy the udev rules for JLink devices, but the reset of JLink utilities are not needed anymore.

## Step 3: Enable `udev` service to auto start in WSL
WSL doesn't come with services enabled at boot. `udev` is a service program that need to run in the background to detect changes to the USB bus and the connected devices. There are two ways to auto start services in WSL on Windows 11: 

1. Enable `systemd` for your all WSL instances in the `.wslconfig`. 
2. Add the startup command to the `wsl.conf` file in your WSL instance.

Here I have taken the second approach as it doesn't mess with the other WSL instances. Add the following block to your to `/etc/wsl.conf`:
```shell
[boot]
command="service udev start"
```
For further information on WSL configuration and the accepted parameters check [this guide from Microsoft](https://learn.microsoft.com/en-us/windows/wsl/wsl-config).
Windows 10 users should follow similar steps differently. Please refer to [this stackoverflow response](https://superuser.com/questions/1701853/how-to-enable-a-service-to-start-with-wsl2) for further information.

## Step 4: Share USB devices with Docker
If you have another level of virtualization for your development environment using Docker (e.g. VSCode Containerized Development Environment), you can share all of your WSL USB devices with your container by passing the following arguments to the `docker run` command: `--privileged -v /dev/bus/usb/:/dev/bus/usb`. It is also possible to share only a specific device instead of giving access to the USB bus. You can find more information in [this stackoverflow response](https://stackoverflow.com/questions/24225647/docker-a-way-to-give-access-to-a-host-usb-or-serial-device).


## (Optional) Final Step
Now you see the USB devices by running the following command in your WSL and docker container:
```shell
lsusb
```
If your docker container doesn't have the `udev` utilities included, you need to add them to the docker image. If the image is based on Debian, you can install the following packages (some of them are required for OpenOCD to work):
```shell
sudo apt-get update
sudo apt-get install udev usbutils libusb-0.1-4 libusb-dev
```

## Final Notes
Sharing USB devices with WSL in Windows 11 seems to be easier that Windows 10. I have been using it for a while and it was stable enough to be called reliable. Please contact me if you had questions/feedback or found some information here misleading for me to update.

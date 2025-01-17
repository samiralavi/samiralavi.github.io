---
date: 2022-05-03
comments: true
description: This guide discusses the practices in co-designing firmware and IP cores for FPGA-based solutions in C++/SystemC using Verilator.
---
# Firmware Co-Design & Development for IP Cores in C++/SystemC using Verilator

Co-design of software and hardware for FGPA-based embedded systems has become a major challenge for tech companies, pushing them to follow development processes that require special care to lower the risks. The risk becomes a major factor for system on chip (SoC) solutions with integrated intellectual property (IP) cores that require custom firmware or driver development. A solution to this problem that has received a lot of interest in the last few years is by simulating the IPs and using them to design and validate the corresponding software stacks. Verilator is an open-source tool that is specifically developed for this purpose to simulate the IPs written in Verilog or SystemVerilog hardware description languages. In this talk, I am going to discuss the following topics for the audience:

- A brief introduction to SystemC and simulation of logic blocks in C++
- Common processes for co-design of firmware and FPGA IP cores
- Introduction to Verilator and using it for creating simulation models from IP cores
- Protecting IPs by encrypting their simulated models and sharing pre-releases
- An example workflow for Verilog IP simulation and firmware design in C++
- Analysis of simulation results with open source tools
- Real-time simulation of verilated models with QEMU for system integration

The presentation slides are available on SlideShare. My video presentation is available on [Embedded Online Conference 2022](https://embeddedonlineconference.com/theatre/Firmware_Co-Design_and_Development_for_IP_Cores_in_Cplusplus_SystemC_using_Verilator) website.

<iframe src="//www.slideshare.net/slideshow/embed_code/key/DBCGGpXr9Apdg2" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/SeyedAmirAlavi1/firmware-codesign-development-for-ip-cores-in-csystemc-using-verilator" title="Firmware Co-Design &amp; Development for IP Cores in C++/SystemC using Verilator" target="_blank">Firmware Co-Design &amp; Development for IP Cores in C++/SystemC using Verilator</a> </strong> from <strong><a href="//www.slideshare.net/SeyedAmirAlavi1" target="_blank">SeyedAmirAlavi</a></strong> </div>
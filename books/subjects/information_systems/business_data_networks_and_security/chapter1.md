# Chapter 1: Core Network Concepts and Terminology

- Internet transmission is served and controlled by Internet Service Providers, _ISP_.
- ISPs took over the backbone of the Internet in 1995
- Devices that connect to the internet are considered _hosts_.
- Internet Assigned Numbers Authority, _IANA_, controls assigned internet addresses to avoid duplication
- The Internet Engineering Task Force, _IETF_, creates Internet standards that _ISPs_ can opt-in and follow
- The _Internet_ is the not the only network. In fact, "Inter" means between and was originally meant to be a link between multiple networks.
- The _Internet_ connects hosts by communicating application messages between them
- _Server hosts_ and _client hosts_ are differentiated by who is requesting and serving data for a request.
- _Rack servers_ are typically 48cm or 19in wide, and measure in height by multiples or fractions of "U", which is 1.75in (e.g. 4U = 7in)
- _Source hosts_ send application messages to _destination hosts_
- A single _packet_ can be up to _65,536 bytes_
- _Network stacks_ are small group programs govern the application message transmission and reception from the Internet
  - They involve: a) decomposing application messages into _TCP segments_, b) adding _TCP headers_ to each segment, c) placing each _TCP_ segment and header into an _IP_ packet, and d) sending the packet across the Internet
- _Transparency_ refers to the networking implementation details being abstracted from application programs (i.e. networking is transparent to application programs)
- _IPv4_, Internet Protocol Version 4, was the first generation of IP addresses and represents addresses _dotted decimal notation (DDN)_ stored in 32 bits (e.g. 127.0.0.1)
- _IPv6_, Internet Protocol Version 6, is the newer version of IP addresses and uses 128 bits to store addresses
- A _router_ is a device that sends and receives IP packets across the Internet. _Routing_ is the process of a router choosing to forwards an incoming IP packet to another router. _Routing Decision_ is the process of choosing which router to forward a packet to.
- A _data link_ is the transmission path between two routers.
- The complexity of the transport and internet processes led to the split of functionality: _TCP_, Transmission Control Protocol, and _IP_, Internet Protocol
  - TCP controls data sequencing for correction, etc (functionality performed at the host level)
  - IP controls packet routing, etc (functionality performed at each router and hosts)
  - _UDP_, User Datagram Protocol, is an alternative to _TCP_
- _Supervisory Protocols_ are protocols that handle cases beyond packet transmission
  - _DHCP_, Dynamic Host Configuration Protocol, handles \_dynamic IP addresses
    - when a device boots up, it broadcasts a message to its local DHCP server IP: `11111111 11111111 11111111 11111111`) from IP: `00000000 00000000 00000000 00000000`
    - the DHCP then selects an unused dynamic IP address and sends it back to use during its session
  - _DNS_, Domain Name System, are used to lookup _static IP addresses_ for hosts by their _host name_
    - source hosts send a request for the host name to a DNS, and the DNS returns the IP address
    - then the source host can cache the host name to skip the process in the near future
  - A _single network_ is a network where all devices on the network follow a single standard
  - An example of a _single network_ is a _point to point network_, which uses a _physical standard_.
    - The _physical standard_ is defined by three characteristics: the _transmission medium_, a _physical connection_, and the transmission method of binary
    - Single networks send messages called _frames_ (different from _packets_), which are determined by the data link standards
  - _Point-to-Point Protocol_ (PPP) is the most common data link standard for single networks
  - A frame's path from source to destination host on any single network is called its _data link_
  - _Ethernet_, created for switched _local area networks_ (LAN) is a widely used single network standard
  - The difference between _PPP_ and _Ethernet_ standards comes down to the number of physical links (due to Ethernet's use of switches)
  - The Internet is filled with many different networks and standards. These individual networks drive the internet by packaging _packets_ in their _frames_, based on their protocols, to send messages from source to destination host
  - Ethernet, and Wifi, data link addresses follow the _Extended Unique Identifier 48_ (EUI-49) standard
    - this standard was previously _Media Access Control_ (MAC)
  - There are distinct types of routers
    - _Internet Core Routers_
    - _Residential Access Routers_
    - _Corporate Access Routers_

Knowledge Check

1.  What is a DDoS attack?

- _Distributed Denial of Service_ is a type of _cyper attack_ where attackers infiltrate many different internet connected devices and send packets/requests to a server to overload it and prevent legitimate requests from taking place.

2.  In what two ways was the KrebsOnSecurity.com DDoS attack unusual?

- The KrebsOnSecurity.com DDos attack was unusual because the attackers used thousands of IoT devices (i.e. routers, security cameras and VCRs) to send a record ~600+ Gbps worth of packets to the site server.

3.  What do we mean by the “Internet of Things?”

- The _Internet of Things_ is the concept of having many machines and devices connected to the internet, besides just traditional computers, phones and servers.

4.  What happens when a host cannot reach a Domain Name System server?

- When a host cannot reach a Domain Name System, _DNS_, it will not be able to reach it's targeted site/destination.

5.  What specific security weakness did the Mirai malware use to propagate from machine to machine?

- The _Mirai_ malware infiltrated IoT devices by exploiting default devices passwords before they were changed (if they could be changed).

6.  When was commercial activity on the Internet first allowed?

- In 1995, the National Science Foundation, _NSF_, who controlled the Internet's transmission backbone, backed out, taking with them the Acceptable Use Policy that prohibited commercial activity on the Internet.

7. What services do Internet service providers provide?

- Internet Service Providers, _ISPs_, provide the backbone of Internet transmission and connect hosts across the world.

8. In Figure 1-2, through which ISP(s) will traffic pass if a packet from Hawaii.edu goes to Panko.com? (Answer: ISP 1, ISP 2, and ISP 3)
9. Through which ISP(s) will traffic pass if a packet from Microsoft.com goes to the mobile phone in the lower right of Figure 1-2?
10. Through which ISP(s) may traffic pass if a packet from Microsoft .com goes to Panko.com? (Hint: There are multiple possible answers.)
11. What do we call any device connected to the Internet?

- Any device connected to the Internet is called a _host_.

12. When you use a laptop to connect to the Internet, is it a host? Explain in terms of the definition of host.

- A laptop connected to the Internet is a _host_, because any device connected to the Internet is considered a _host_.

13. When you use the Internet, are you a host? Explain in terms of the definition.

- When you use the Internet, whether through a phone, laptop or microcontroller, you are considered a _host_, because any device connected to the Internet is considered a _host_.

14. What continuing changes in the Internet are contributing to its ability to support new applications constantly?

- Internet transmission speeds and device improvements are contributing to the support of new applications constantly.

15. What are the characteristics of the Internet of Things?

- The Internet of Things, _IoT_, is the trend of having many devices and machines connected to the internet.

16. Who owns the Internet?

- No one owns the Internet. The Internet is a collection of _ISPs_ transmitting cross traffic between each others resources.

18. Who is in charge of the Internet?

- No one is in charge of the Internet. The only body that controls an aspect of the Internet is the _Internet Assigned Numbers Authority_ who controls the assignment of Internet addres numbers to avoid duplication.

20. What is the role of the IETF?

- The role of the _International Engineering Task Force_ is to create Internet standards that _ISPs_ can choose to implement and follow.

21. Why is the Internet’s ability to give broad access a good thing?

- The Internet's ability to give broad access enables bad actors to have greater reach and capability.

22. What danger does it bring?

- Although the Internet brings connectivity to everyone in the world, it gives bad actors and criminals a network to further their bad habits and activities.

23. What does “Inter” in Internet mean.

- "Inter" means between.

24. Why is this important?

- "Inter" in the name "Internet" is important to remember because the original concept of the Internet was to be a link between multiple networks.

25. Why is the Internet often depicted as a cloud?

- The Internet is often depicted as a cloud because, the low level details are complicated and users just want to know that it works. Hosts are connected and communicate.

26. Why is the Internet not about sending messages between hosts?

- The Internet is about sending messages between _applications_ on hosts.

27. Distinguish between client and server hosts.

- Client hosts are typically hosts that request information from hosts that will "serve" that information.

29. What type of devices are most servers?

- Most servers are _rack servers_ that are stored in equipment racks in data farms.

30. a) What are networked applications? b) Is the client always a browser? c) Is the server always a webserver?

- _Networked applications_ are applications that send a receive messages across the Internet. Not all networked appications are browsers interacting with webservers. For example spreadsheet applications, _integrated development environments_ (IDE) and email clients are all examples of networked applications that interact with servers other than strictly webservers.

32. a) What two processes does the network stack provide? b) What is the maximum size of an IP packet? c) What does the transport process do to the application message if it is short enough to fit in a single packet? d) If the application message is too long? e) What does the transport process add to the application message or fragment? f) What is the resulting message called? g) What does the internet process do with each TCP segment? 13. What are the three parts of an IP packet?

- The _network stack_ gets an application message ready to transmit across the Internet. This includes decomposing it into TCP segments, adding a TCP header and adding a IP header. The result is an IP packet with all the information needed to transmit a message across the Internet, from source to destination.

34. a) What does the internet process on the destination host do when a packet arrives for it? b) What does the transport process on the destination host do with multiple TCP segments from a single application message? (This answer is not short.)

- The internet process confirms that the packet arrived at the right address and adds the packet to the network stack. The transport process is responsible for assembling the packets (by sequence) and decoding the application message for the destination application.

35. a) How many bits long are IPv4 addresses? b) Convert 00000001 00000010 00000000 11111111 to dotted decimal notation (spaces have been added). (Note: 00000001 is 1) c) Convert 5.6.0.255 to a 32-bit IP address (add spaces between groups of 8 bits). (Note: 5 is 0000101, not 101)

- IPv4 addresses are 32 bits long. `00000001 00000010 00000000 11111111` converts to `1.2.0.255`. `5.6.0.255` to 32 bit IP address is `00000101 00000110 00000000 11111111`.

37. a) What are the three parts of an IP packet? (Yes, this is a repeat of an earlier question.) b) In which part will you find the source and destination IP addresses? c) Which of these addresses will routers use to deliver the IP packet?

- The three parts of an IP packet are: TCP segment, TCP header and IP header. The IP destination addresses are found in the IP header and routers will use the _destination host_ address to deliver the packet.

39. a) What does a router do when an IP packet arrives? b) What is router forwarding called? c) In Figure 1-17, suppose that 60.3.27.4719 transmits a packet to 128.171.17.13. When Router C receives the packet, what will be its routing choices?

- A router uses the internet process to forward a packet to its destination host (or another router that will continue the process). This process is called _routing_.

41. a) Distinguish between data links and routes. b) In Figure 1-15, how many data links will there be when the packet travels to Host 5.6.7.8? c) How many routes will there be? d) In general, when a source host sends a packet to a destination host, will there probably be more data links or routes along the way? Explain. (The answer is not in the text.)

- _Data links_ and _routes_ are different. A _data link_ is the individual path between routers, while the _route_ is the entire path from source to destination host. In general, there will be more data links than routes for a packet because data links, in effect, make up routes.

37. a) There are six routers between the source and destination host. How many transport processes will be involved? Explain. b) How many internet processes will be involved? Explain.

- With six routers between source and destination host, the transport process will only be called twice: once per host. However, There will be 7 internet processes in that same route, because internet processes are handled by hosts and routers to determine the route of a packet.

38. a) Why does the Internet need supervisory protocols?

- The Internet needs supervisory protocols because there are more scenarios and complexities that go beyond just TCP/IP.

39. a) What type of host gets a dynamic IP address? b) What type of host gets a static IP address? c) Why is a static IP address needed for this type of host? d) Does a DHCP server give a host the same IP address each time?

- A device that boots up and does not have an IP address, broadcasts a message to its local DHCP, _dynamic host configuration protocol_, to get a _dynamic IP address_. This address will only be available until the device reboots, thus having to request another dynamic address. _Static IP addresses_ are vital for many hosts that want to others to know where it can be found at all times. An example would be common websites, servers, databases, etc.

40. a) Distinguish between the originating host, the DNS server, and the target host. b) What is the purpose of a DNS lookup? c) Does the originating host need to contact the DNS host each time it sends a packet to the target host? Explain.

- An _originating host_, or source host, is a host that is requesting information from a _target host_, or destination host. Since humans typically use _host names_, the originating host needs to lookup the IP address associated with that host name in order to send the request. _DNS_, Domain Name Servers, are used to find and return the IP address for a given host name. Originating hosts can cache this IP address for quick access next time it wants to make a request to the same host name.

41. a) Distinguish between physical links and data links. b) In a point-to-point single network, how many physical links will there be when a packet is transmitted? c) How many data links?

- _Physical links_ and _data links_ are both relevant for _single networks_. Physical links have standards for the transmission mediums between devices. Data links have standards for how binary/data is transmitted across those transmission mediums. Also, in a single network that implements _PPP_, there will always be one data link and one physical link for a frame.

43. a) Are all data link addresses EUI-48 addresses? b) In which header are source and destination IP addresses found? c) In which header are source and destination data link addresses found? d) What kind of data link address do Ethernet networks use? e) What kind of data link address do Wi-Fi networks use? f) Why do hosts need two addresses?

- Not all data link addresses are EUI-48, or _extended unique identifiers- 48 bits_. The IP addresses are still stored in the IP header, but now there is an additional frame header that contains data link addresses. Ethernet and Wifi use EUI-48 addresses, previously MAC, or _media access control_, addresses. If hosts are apart of more than one network, then they need an address for each network they are in.

44. a) Compare Internet core routers with home access routers in terms of functionality. b) Compare them in terms of routing complexity. c) Compare corporate access points and Internet access routers with wireless access point capabilities.

- _Internet core routers_ need to shoulder the heaviest traffic load, so they tend to have more complexity and functionality for processes traffic. _Residential Access Routers_ and _Corporate Access Routers_ are quite different from internet core routers, and both similiar and dissimilar from each other. They vary in complexity and functionality as it comes to controlling access, remote access, and security.

Assignment 1

- [x] Show your work (i.e explain)
- [ ] Turn in by September 8th

![Image](assets/IMG_1.png)

In Figure 1-28, when Host A transmits a packet to Host B, how many physical links, data links, and routes will there be along the way? How many packets and frames? How many switches and routers? (Hint: The answers are in the figure, but work it out yourself.)

- In a switched network, there will be a physical link between each host, switch and router. However, there will only be one data link within each single network. From Host A to Host B, regardless of the amount of single networks it passes through, there will only be one packet and one route that it takes. So, for a packet that is transmitted from Host A to Host B, there will be 7 physical links, 3 data links, 3 frames, 1 packet and 1 route. The physical links are Host A to Switch X1, Switch X1 to Switch X2, Switch X2 to Router R1, Router R1 to Router R2, Router R2 to Switch Z1, Switch Z1 to Switch Z2, and Switch Z2 to Host B. The data links are Host A to Router R1, Router R1 to Router R2, and Router R2 to Host B. The frames are Frame X, Frame Y, and Frame Z. No matter the frames, physical links or data links, the same packet that was sent from Host A will be received by Host B. And a packet's route is the total journey of a packet from host to host.

Repeat for Host C sending a packet to Host E.

- From Host C to Host E, there will be 10 physical links, 3 data links, 3 frames, 3 networks, 1 packet and 1 route. The physical links are Host C to Switch X4, Switch X4 to Switch X3, Switch X3 to Switch X2, Switch X2 to Switch X1, Switch X1 to Router R1, Router R1 to Router R2, Router R2 to Switch Z1, Switch Z1 to Switch Z3, Switch Z3 to Switch Z4, and Switch Z4 to Host E. The data links are Host C to Router R1, Router R1 to Router R2, and Router R2 to Host E. The frames are Frame X, Frame Y, and Frame Z. Again, there will only every be one packet from source host to destination host, and a packet's route is the entire journey from host to host.

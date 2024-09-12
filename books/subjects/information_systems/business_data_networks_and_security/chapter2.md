# Chapter 2: Network Standards

- ARPANET, or DARPA, began in 1969 with 4 hosts: UCLA, Stanford Research Institute's Augmentation Research Center, UCSB, and University of Utah
- Messages were transmitted and exchanged through _IMPs_, Interface Message Processors
- _Network Working Group_ was created to formulate standards for IMPs
- _Steve Crocker_ created the first _RFC_, or Request for Comment
- _Ray Tomlinson_ created email to use username@host
- _IETF_, Internet Engineering Task Force\_, handles Internet standards creation
- In general, _standard_ means _protocol_
- _Network standards_ are rules of operation for how two software or hardware processes will work together by exchanging messages
- _Standards Agencies_ are organizations that create networking standards (e.g. IETF)
  - IETF create Internet standards
  - _ISO_, International Organization for Standardization, and _ITU-T_, International Telecomunications Union - Telecomunications Standards Sector, create network standards including for physical and data processes
- _Standards architectures_ specify everything needed for two applications on two hosts on different single networks to interoperate
  - architecture is divided into _layers_, where each layer provides services to the next higher layer
- The _ISO_ and _ITU-T_ created the Reference Model Open of Systems Interconnection _OSI_
- The _IETF_ created the _TCP/IP_ architecture, not to be confused with the _TCP_ and _IP_ standards
  - The _IETF_ uses the _SNAP_, Subnet Access Protocol for physical and data link standards, then _TCP/IP_ for Internet and Transport layers
- _Message ordering_ determines when and what messages should be sent
- _HTTP_ is a _connectionless_ and _unreliable_ protocol
  - messages can be sent at any time (don't have to establish a live connection)
  - packets can be lost (without retransmission)
- _TCP_ is a _connection-oriented_ and _reliable_ protocol
  - this means that a connection is established before data is transmitted, and lost or incorrect data is retransmitted or corrected
  - _SYN_, synchronization, packets are sent to initiate opening a connection
  - _ACK_, acknowledgement, packets are sent to acknowledge a received packet
  - _FIN_, finished, packets are sent to initiate closing a connection
- _Message syntax_ describes how messages are organized
- Messages are organized into headers and data fields
  - _IP_ packets have IP header and IP data field
  - _TCP_ segments have TCP header and TCP data field
  - _Frames_ have frame header, data field and trailer
- _Headers_ and _trailers_ themselves have _data fields_
- _Fields_ are distinct information in the bit stream of a message
  - bit streams are rows of 32 bits of data
  - first row and first 4 bits define the IP version number (e.g. 0100 for IPv4, 0110 for IPv6)
- _IP_ is a _connectionless_ and _unreliable_ protocol
  - no connection is required to send messages
  - errors are detected (via checksum field) but not corrected (packets are just discarded if incorrect)
- _TCP_ fields contain _flag fields_ that are 9 reserved single bits
  - these bits are either "on" (i.e. 1) or "off" (i.e. 0)
  - include _SYN_, _ACK_, and _FIN_ fields
- _TCP_ segments contain both _acknowledgement number_ and _data field_ to limit the number of _TCP_ segments that are transmitted
  - one tcp segment can both acknowledge another segment and contain new data
- Servers have _distinct port numbers_
  - well known port numbers are between 0-1023
  - e.g. HTTP = 80, SMTP = 25, FTP = 20,21
- Clients have _ephemeral port numbers_
  - temporary port numbers generated between 1024-4999 (on windows)
- _Sockets_ refer to the IP address followed by a colon and the port number (e.g. 127.0.0.1:3000)
- _Ethernet II_ frame syntax is represented in rows of _octets_, or _bytes_, depending on the length of the field (meaning different rows can be different lengths)
  - ethernet II is a _connectionless_ and _unreliable_ protocol
  - ethernet II is defined by the IEEE 802.3 working group (802.2 ethernet frames are used too, but ethernet II is preferred by the IETF)
  - _EtherType_ field determines if contents are IPv4 or IPv6
  - _Frame Check Sequence Field_ is used to detect data errors
- _Encoding_ is the conversion of rich application data converted into bits for transmission
  - this is done by the application program
  - text is encoded into _ASCII codes_, or more recently _UNICODE_, which represents text and characters by 7 bits
  - decimal numbers are converted to binary numbers (e.g. 11 = 1011)
-

Knowledge Check

1. a) What are IETF standards called? (Spell out the name and give the acronym.) b) What factors in the Internet’s informal development process lead to rapid standards development and low-cost products?

- The Internet standards submitted to and voted on by working groups in the _IETF_, Internet Engineering Task Force, are called _RFCs_, Requests For Change. The IETF emphasizes "rough consensus working code" to make progress. In fact they often use "humming" as a consensus mechanism for their meetings to pass or reject RFCs. This allows for quicker resolution and action as opposed to strict hand voting.

2. a) Distinguish between standards and protocols. b) What is a network standard? c) What is interoperability? d) What are the benefits of standards?

- In networking, _standards_ and _protocols_ are the same. A _network standard_ is a rule of operation between two software or hardware processes that enables them to work together by sharing messages. Standards keep the technology space competitive by not allowing for monopolies, ensure lower prices, and encourage new features.

3. a) What standards agency creates Internet standards? b) What other two standards agencies work together to create network standards? c) Which standards agency(ies) is(are) especially important for internet processes? d) For physical transmission processes? e) For data link processes? f) For transport processes? g) For Internet supervisory processes?

- The IETF creates Internet standards while the ISO and ITU-T work together to create network standards. Standards for Internet standards are important for internet processes, transport processes, and Internet supervisory processes. Network standards are important for physical and data link processes

4. a) Why do standards architectures have multiple layers? b) To what does a standards layer provide services? c) If you change a standard at one layer, do standards at other layers need to be changed? d) Why may it be advantageous to change a standard if the standard at the layer below it is upgraded?

- _Standards architectures_ specify everything needed for two hosts to interoperate on different single networks. These architecture are divided into _layers_, that provide services to the next higher layer. Due to this abstraction, higher layers do not need to worry about implementations or changes at lower levels, and can focus on design and improvement at their level.

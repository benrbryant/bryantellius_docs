# Chapter 8: TCP/IP Internetworking I

- `TCP` and `UDP` govern layer 4 transport layer
- `IP` governs layer 3 Internet layer
  - along with many others
- Router ports are called **interfaces**
- **Routing** refers to a router forwarding an incoming packet closer to it's destination
- **"Network"** is an organizational concept that refers to a group of routers and switches belonging to a _recognized organization_
- **Hierarchical Addressing**
  - addresses split into parts (group of bits)
  - network part, subnet part, and host part
  - IPv4 addresses are 32 bits long
  - IPv6 addresses are 128 bits long
- **Border routers** connect different networks
- **Internal routers** connect different subnets
- **Masks** are 32 bit strings that represent how many bits are used for network and subnet numbers in the IPv4 address
  - network masks have `1`s for the amount of bits that represent the network part
  - subnet masks have `1`s for the amount of bits that represent the network and subnet parts
  - e.g. `255.255.0.0` as a network mask is `11111111 11111111 00000000 00000000`
  - **prefix notation** shortens the decimal notation of `255.255.0.0` to `/16`
- Router table steps
  1. finding all row matches
  2. selecting the best-match row
     - selects based on **longest match** of bits in the mask
     - if a tie occurs, the **metric column** is consulted (e.g. if cost, then lower cost; if speed, then higher speed)
  3. sending the packet back out
     - **interface** and **next-hop router** columns are used to send a packet out an interface to a specified router
     - if the destination host in on the current subnet, then **local** is shown in the **next-hop router** column

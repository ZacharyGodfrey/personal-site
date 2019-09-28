---
slug: "crypto-1"
title: "Cryptography: Part 1"
timestamp: "2018-10-02"
published: true
featured: true
preview: "This post is the first in a series where I will share cryptography concepts
  as I learn them and explain the process of writing my own cipher as I develop it
  alongside my understanding of the field."
---

### The roadmap

I've been interested in cryptography for a long time but only recently started learning about it. Since cryptography is a field that progresses by learning from what's been done previously, my goal is to learn cryptography in the same way by studying ciphers in roughly chronological order (or in order of increasing complexity where appropriate). I know from experience that I learn things best by doing them. I've also heard that a great way to solidify a newly learned concept is to teach it to somebody else.

In this series of blog posts, I'd like to accomplish both. As I learn new topics in cryptography, I'll explain them in simple terms. Along the way, I'll be writing my own cipher and revising it as I learn more. I'll walk you through exactly how my cipher works and how I'm changing it at each step of the process. I'll also provide a working demo of each version of my cipher so that you can follow along more easily and see the results of my work.

Yes, I do know that security experts always say not to implement your own methods of encryption. I'm not doing this to produce something that I'll actually use (or recommend to anybody else), it's just a learning exercise.

### Some helpful definitions

I'll provide definitions for new terms as I go, but here's a list of some of the foundational terms I feel will be helpful to know ahead of time.

- **Key:** A secret piece of information known only to the parties who are exchanging encrypted messages. The key is used both to encrypt messages as they are sent and to decrypt messages as they are received.
- **Plaintext:** The message to be encrypted.
- **Cipher:** The algorithm, or set of steps, being used to encrypt the plaintext.
- **Ciphertext:** The encrypted form of the message. This is the unique result of combining a particular key and message using a particular cipher.
- **Classic ciphers**: These ciphers are simple enough that you could do them with paper and a pencil. In fact, you may have played with some of these as a kid in school.
- **Mechanical ciphers**: These ciphers are performed by machines that are specifically built for them. These saw much use in World War 2.
- **Modern ciphers**: These ciphers are so complex that the only feasible way to perform them is with a modern computer.

-----

If you'd like to continue in this series, [part 2](/blog/crypto-2) is now available.
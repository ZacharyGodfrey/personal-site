---
slug: "crypto-6"
title: "Cryptography: Part 6"
timestamp: "2018-10-07"
published: true
featured: false
preview: "In this post, we'll begin to look at modern ciphers as we break down version three of my cipher."
---

In the last post, we took a look at mechanical ciphers and the Enigma machine in particular. During World War 2, Alan Turing and his team at Bletchley Park created the first computer in order to break the Enigma cipher. They succeeded, and the mechanical era of cryptography would soon come to an end.

With the rise of modern computers, cryptanalysts are far better equipped to break ciphers. However, we also have the ability to do far more complex manipulations to data in a much smaller amount of time, so modern ciphers can be far more secure than anything we've looked at previously. For now, we'll break modern ciphers down into two categories: **block ciphers** and **stream ciphers**. Modern cryptographic techniques are deeply rooted in computer science and mathematics that is frankly over my head right now, so at the moment this is as specific as I'm able to be.

### Block Ciphers

Block ciphers encrypt a message (or other piece of data) in a different way than we've looked at previously. Instead of applying a change to the whole message at once, these ciphers will instead manipulate fixed-length pieces of the data (called blocks) individually until all the data has been encrypted.

**Substitution-Permutation Networks (SPNs)**

A **substitution-permutation network** or **SPN** is a type of block cipher that works on the plaintext in multiple rounds that alternate between substitution (replacing data) and permutation (rearranging data). During each round, the key is used so that the cipher is still encrypting the data in a way that is unique. However, instead of using the specified key, a different derived key is used for each round that is based on the specified key.

Because SPNs are run on computers, they often use things like bit shifting and exclusive or (XOR) operations to manipulate the plaintext into ciphertext. But you could technically create a simple SPN by performing multiple rounds where you do an Atbash cipher (substitution) followed by columnar transposition (permutation) in each round.

### Stream Ciphers

Stream ciphers work on individual bits (binary digits) of the input data. The specified key is transformed into a key stream that will produce pseudo-random data for as long as you need. That data is then combined with the input data bit by bit to produce bits of ciphertext data.

### My cipher (version three)

In version two, I introduced the idea of creating multiple hashes of the specified key with different salt values in order to create several different keys for use in different parts of the encryption. However, the cipher relied on a single substitution step followed by two transposition steps.

In the latest version, I've decided to turn the cipher into a 4 round substitution-permutation network. Each round will be assigned a different salt value and a derived key will be created by hashing the specified key with the round's salt value. Each derived key will only be used within its round. Each round then has a substitution step (like in version two) and a permutation step using columnar transposition. In the end it looks like this:

1. **Setup:** Create a derived key by hashing the specified key with a salt value.
2. **Setup:** Use the derived key to apply columnar transposition to the ASCII alphabet.
3. **Substitute:** Convert each plaintext character into the 8 digit binary representation of its position in the transposed alphabet.
4. **Permute:** Use the derived key again to apply columnar transposition to the binary data.
5. **Cleanup:** Convert the transposed binary data back to ASCII characters.
6. Repeat steps 1 through 5 four times.
7. Since the resulting ASCII characters could be invisible control characters, convert each ASCII character to its hexadecimal representation and concatenate them all together to produce the final ciphertext.

If you want to play with this cipher, you can use the [v3 demo page](/crypto-demo/v3).
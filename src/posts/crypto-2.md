---
slug: "crypto-2"
title: "Cryptography: Part 2"
timestamp: "2018-10-03"
published: true
featured: false
preview: "In this post, I'll be discussing some of the classic ciphers and the various classifications they fall into."
---

### Classic ciphers

Classic era ciphers are the ciphers that can be done by hand with only paper and a pencil. They saw a lot of use throughout history but are no longer considered secure methods of encryption due to advances in technology and statistics that have made them easy to break.

Classic ciphers tend to fall into one of two categories: **substitution ciphers** and **transposition ciphers**. A substitution cipher replaces each character in a message with some other character(s) to make the message unreadable. Transposition ciphers, on the other hand, make a message unreadable by rearranging the message characters so that they no longer resemble the original message.

### Simple substitution ciphers

As a kid in school, I remember being really interested in spies and secret messages. I used to play around with encrypting messages by replacing each letter with the one that comes after it: A becomes B, B becomes C, etc. This is called the Caesar cipher, and in this case the key is 1. In Caesar ciphers, your key is the number of places you shifted the alphabet. Another substitution cipher I used to play with (without really knowing what I was doing) was the Atbash cipher. In this cipher, you simply reverse the alphabet: A becomes Z, B becomes Y, etc.

These ciphers fit into a more general classification of **simple substitution** ciphers. This set of ciphers includes any cipher where all you do is use a scrambled alphabet in order to encrypt messages. You could shift the letters over by a set amount, reverse their order, or put them in a completely random order. As long as both parties exchanging messages can agree on the order of the alphabet, messages can be encrypted and decrypted successfully. In practice, a common way to scramble the alphabet is to decide on a key word or phrase, remove any duplicate letters, put that at the beginning, and then fill in the unused letters in order.

### Monoalphabetic and polyalphabetic substitution ciphers

Expanding our definition outward a little, a more general classification that all simple substitution ciphers fit into is the **monoalphabetic substitution** ciphers. This set includes any cipher where the whole plaintext is substituted using only one scrambled alphabet.

If you took the Caesar cipher from before and instead shifted each plaintext character by a different amount based on its position in the message, you would arrive at a classification of ciphers called **polyalphabetic substitution** ciphers. One example would be to shift every even character by 3 and every odd character by 4. This cipher would effectively be using two alphabets.

### Monographic and polygraphic substitution ciphers

Spreading our definition even wider, both monoalphabetic and polyalphabetic substitution ciphers fit into the classification of **monographic substitution** ciphers. This set includes any cipher where each plaintext character is substituted individually.

In contrast, **polygraphic substitution** ciphers work on more than one character at a time. For example, the Playfair cipher takes two plaintext characters at a time and encrypts each specific pair of plaintext characters as a pair of ciphertext characters. This technique was developed to strengthen substitution ciphers against frequency analysis in which the cipher could be broken by comparing how often a ciphertext character appears to how often each letter occurs naturally in the English language (or whatever language the particular plaintext came from).

### Fractionating substitution ciphers

So far, we've only discussed ciphers that substitute a single character for each plaintext character. **Fractionating substitution** ciphers will encrypt each plaintext character as more than one character. One example of this is the Polybius square cipher in which each plaintext character is encrypted as its X and Y coordinates in a grid of letters. These coordinates could be left as numbers, but are often replaced with letters by labeling the rows and columns.

### Transposition ciphers

Man, who knew there were so many ways to substitute letters? Alright, let's talk about how we can transpose them instead to encrypt messages. **Transposition ciphers** don't change any of the characters used in the plaintext, they just write them in a different order. You can think of this like making anagrams, except the entire message is the word you're rearranging, the result won't be anything intelligible, and the rearrangement is done in a specific way so that the other party is able to decrypt the message.

One example of a transposition cipher would be to write each character of the plaintext into a grid of a particular size where you start at the top right corner and spiral the text inward toward the center. Then you could read the characters along each row to produce the final ciphertext. To decrypt, you would copy the ciphertext into a grid of the same size by writing along the rows, then read out each character from the center rotating in the opposite direction until you got back to the top right corner.

A more common transposition cipher is called columnar transposition. In this cipher, the two parties will agree on a key word. Make a grid and label the columns with the letters of the key. Then write the plaintext across the rows of the grid. If you have empty cells in the last row of the grid (which you will if the plaintext length is not a multiple of the key length), then pad the plaintext by filling in those cells with a character that both parties agree to use for this purpose. You produce the ciphertext by reading down the columns in alphabetical order according to the column labels (the key letters).

-----

If you'd like to continue in this series, [part 3](/blog/crypto-3) is now available.
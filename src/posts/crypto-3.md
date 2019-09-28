---
slug: "crypto-3"
title: "Cryptography: Part 3"
timestamp: "2018-10-04"
published: true
featured: false
preview: "In this post, I'll be specifically discussing the German ADFGVX cipher and version one of my cipher which is based on it."
---

### The ADFGVX cipher

The ADFGVX cipher is a German cipher that was used in World War 1. It's a combination of two ciphers we've already mentioned: the Polybius square cipher and the columnar transposition cipher. I'll explain each one below.

By World War 1, and probably a long time before that, both of these ciphers were considered weak on their own, but the Germans knew that they could combine the two to produce something quite strong because each cipher strengthened the weaknesses of the other (like a good marriage).

**Step 1: a modified Polybius square cipher**

The first step of ADFGVX is to use a modified Polybius square cipher to encrypt each plaintext character as a pair of ciphertext characters. The ADFGVX cipher gets its name from the 6 letters used to label the rows and columns of the 6x6 grid it uses for this step. The standard Polybius square cipher uses a 5x5 grid that provides 25 positions. The Germans used a 6x6 grid so that they wouldn't have to combine any letters (usually I and J) or ommit any letters (usually Q) or translate numbers to word form before encrypting. This was a great improvement that allowed them to shorten the ciphertext and communicate more clearly.

First, a key word or phrase is agreed upon by the parties exchanging information. A 36 character alphabet containing the letters A-Z and the numbers 0-9 is then rearranged by putting the key at the front (omitting any duplicate characters) and then filling in the unused characters in order.

Next, a 6x6 grid is filled in by writing the scrambled alphabet across the rows. The rows and columns are labeled with the letters A, D, F, G, V, and X because the Germans would transmit encrypted messages via Morse code and these letters sound very different from each other in Morse.

The ciphertext is produced by finding each plaintext character in the grid and replacing it with the row and column labels of its position. Ciphertexts produced by this cipher will always be twice the length of their plaintexts.

The weakness of the Polybius square cipher is that it's still vulnerable to frequency analysis attacks. Instead of analyzing the frequency of 26 individual letters, a cryptanalyst would have to look at the frequencies of 676 (26 x 26) possible letter pairs. It would take longer to crack than a simple substitution cipher, but it could still be done by hand. Columnar transposition hardened this vulnerability by breaking up the valid letter pairs so that a cryptanalyst wouldn't know which ciphertext letters go together to form plaintext characters.

**Step 2: columnar transposition**

The second step of ADFGVX is to use a columnar transposition cipher to break up the ciphertext pairs produced in step 1. I'll be referring to the ciphertext from step 1 as the plaintext for this step so as not to confuse it with the final ciphertext produced by this step. Please don't get this confused with the original plaintext which is the message being sent.

First, a grid is created with the same number of columns as the key's length. The number of rows will be the length of the plaintext divided by the key's length and then rounded up to the nearest whole number. Label the columns with the characters of the key and then write the plaintext across the rows of the grid.

There are two forms of columnar transposition: regular (padded) and irregular (unpadded). ADFGVX uses irregular columnar transposition, but if you were going to use regular columnar transposition then this is where you would add an agreed upon padding character to fill in any empty cells in the last row of the grid. This adds a little work to encryption and decryption, but it makes the logic simpler when you do this to make the plaintext length a multiple of the key's length.

Next, rearrange the columns of characters so that the column labels are in alphabetical order from left to right. The final ciphertext is produced by reading down the columns of characters from top to bottom and left to right.

The weakness of the columnar transposition cipher is that it's just a rearrangement of the plaintext characters. You can try out different key lengths and column orderings (like working out an anagram) and you'll eventually rearrange the ciphertext back into the plaintext without having to know the exact key that was used. Polybius square substitution hardened this vulnerability because plaintext characters were no longer being transposed. How would a cryptanalyst know when they'd gotten the key length and ordering correct? They'd still just have a mess of letters that didn't spell out any plaintext words.

### My cipher (version one)

I chose to base my cipher on the ADFGVX cipher because in the process of implementing it I would be implementing the Polybius square cipher and the columnar transposition cipher, which was better than using my efforts to learn only one cipher. It was also the most secure and interesting cipher I'd read about thus far.

My cipher uses a 16x16 grid for the Polybius square that provides 256 positions: one for each ASCII character that computers can work with. This includes upper case and lower case letters, numbers, symbols, and special characters. The rows and columns are labeled with the first 16 characters of the alphabet (A-P).

I also used regular (padded) columnar transposition with Q as the padding character since it is not part of the output of the substitution. The ADFGVX cipher used only one round of transposition. This was sufficient for encryption because the message had already been encrypted with the modified Polybius square. Doing more than one round of transposition would cause the cipher to take too long as it was done by hand with paper and pencil. When used by itself, columnar transposition is not very strong after a single round but it does become harder to break when multiple rounds are used. Since a computer can execute my code very quickly, adding rounds of columnar transposition wouldn't slow it down enough for anyone to notice. It was an easy change that would theoretically improve security, so my cipher uses 4 rounds.

If you want to play with this cipher, you can use the [v1 demo page](/crypto-demo/v1).

-----

If you'd like to continue in this series, [part 4](/blog/crypto-4) is now available.
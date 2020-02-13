---
slug: "crypto-4"
title: "Cryptography: Part 4"
timestamp: "2018-10-05"
published: true
featured: false
preview: "In this post, I'll discuss the concept of hashing and salting and then I'll explain how I used this concept to improve the strength of my cipher in version two."
---

### Hashing and salting

**Hashing** is the process of producing a fixed-length value from a value of arbitrary length. You can think of it like a process that creates a summary of the data it receives. This process cannot be reversed, so it's not like compression where you can expand it to get the original data back, but it produces a value that is (effectively) unique to the input data. The result of a hashing process is sometimes called a digest, but is usually just called a hash.

Hashing is often used to create a digital signature of the contents of a file so that computers can verify that a file hasn't been corrupted or modified while being transferred. Hashing is also great when you want to allow someone to specify some value (like an encryption key) that can be any length they choose and you want to be able to work with a fixed-length value that is more useful and still a unique representation of what they gave you.

In cryptography, a **salt** is a random or arbitrary piece of data that is added to the data being hashed. You can think of it like setting the initial condition of the function so that the hash produced is now the unique result of hashing the specified data with the specified salt value. This is useful if you want to create multiple, unique hashes of the same data.

Hashing and salting are commonly used for websites that store your username and password in their database when you create an account. Each user is assigned a unique salt value, and the database stores the hash produced from their specified password combined with this salt. In this way, the user's actual password is never stored, and users with the same password will not have the same hash stored in the database. This greatly improves the protection of users' passwords, and when you go to log in the website can simply hash the password you type in with the salt assigned to your account and see whether it matches what they have stored in the database.

### My cipher (version two)

I created the first version of my cipher after reading about the ADFGVX cipher and the two ciphers that it combines. However, as I began to understand the classifications that these ciphers fit into and why they work well together, I started to realize how I could improve my cipher.

The strength of the ADFGVX cipher comes from its combination of a fractionating substitution cipher and a transposition cipher. The basic idea here is that you want to break up each plaintext character into multiple pieces and then scatter those pieces throughout the ciphertext. One way to improve the security of a cipher like this is to break up each character into a greater number of characters. Think of it like breaking an object into a few pieces and rearranging them versus grinding it into a fine powder and stirring it around.

**Substitution changes**

My cipher takes in ASCII characters as plaintext. You can think of ASCII as a 256 character alphabet where every upper case letter, lower case letter, number, symbol, and special character has an assigned position. Because ASCII assigns an ordered position to each character, we can represent every possible character as the number corresponding to its position. A similar thing is done with the regular alphabet when you replace A with 1, B with 2, C with 3, etc.

At this point, my cipher is going to start involving some math; I'll try to keep it as simple as possible. Most people only ever work with numbers in base 10, but if we convert base 10 numbers to other bases we can represent the same value with a different number of digits. For example, 245 is a 3 digit number in base 10. We could also represent 245 as the 2 digit number f5 in base 16 (hexadecimal) or the 8 digit number 11110101 in base 2 (binary).

When we use the Polybius square cipher to encrypt each letter as X and Y coordinates in a 16x16 grid, we're essentially representing the character's position as 2 digits of base 16. Instead of doing that, we could encrypt each plaintext character as the binary representation of the character's position in the scrambled ASCII alphabet. This will break up every plaintext character into a series of 8 ones and zeros.

In the first version of my cipher, the ciphertext is always twice as long as the plaintext because each character of plaintext is represented by 2 characters of ciphertext. In the new version, if we leave each character represented by 8 binary digits, then the ciphertext will be 8 times as long as the plaintext. This will start to be a problem if you're storing a lot of encrypted messages because they'll take up considerably more space than the message they contain.

We only really need to break up the plaintext into more pieces so that columnar transposition can scatter them more effectively. Once we've done our transposition step, we could convert the resulting scrambled ones and zeros back into something shorter.

Technically, we could convert each block of 8 binary digits back to a base 10 number and use it to find an ASCII character at that position in our scrambled alphabet. This would create a ciphertext that is exactly the same length as the plaintext. That's great for storing encrypted messages in as little space as possible, but it presents a new problem: ASCII contains special characters that are used by computers but don't represent a visible character you would see on the screen. That's going to be ugly to work with.

Instead, we'll convert our 8 digit binary blocks into base 16 (hexadecimal). Each 8 digit block will take up 2 digits in hexadecimal and we'll be back to producing ciphertext twice as long as the plaintext. That is a better length ratio, and hexadecimal is much nicer to display on screen because it's represented as the digits 0-9 followed by A-F for the values 10 through 15.

Okay, so we've found an effective way to break up our plaintext into a larger number of characters so that columnar transposition can spread out each plaintext character across the ciphertext more effectively. We've also found a way to output our ciphertext in a format that displays nicely on a screen and doesn't take up too much space. Great, what's next?

**Transposition changes**

Performing more than one round of columnar transposition helps with security, but in the first version of my cipher I chose 4 rounds arbitrarily. I've dropped that to 2 rounds now since it will improve security without doing arbitrary extra work.

In version one, I performed each round of columnar transposition using the specified key. This works, but it would be better if we could use a different key for each round. Also, I had to pad the text with a padding character before applying the transposition because the substituted plaintext length wasn't guaranteed to be a multiple of the key length. Since we are now replacing plaintext characters with 8 digits, it would be great if our key was always 8 characters long. This would remove the need for padding because the substituted plaintext would always be divisible by the key length. Hashing and salting to the rescue!

In the new version of my cipher, I'm creating three hashes of the specified key. One is used to perform a columnar transposition on the ASCII alphabet so that the substitution step is still specific to our specified key. The other two hashes are used as the keys for each round of columnar transposition on the binary ciphertext. Each hash is an 8 character summary of the key they specified, so I don't have to worry about padding. Each hash uses a different salt value, so the hashes will be different but they'll all still be uniquely based on the specified key.

### Putting it all together

So in the end, version two of my cipher will do the following steps:

1. Create 3 derived keys by hashing the specified key with 3 different salt values.
2. Use the first derived key to perform a columnar transposition on the ASCII alphabet.
3. Replace each plaintext character with the 8 digit binary representation of its position in the transposed ASCII alphabet.
4. Perform 2 rounds of columnar transposition on the binary ciphertext using the other two derived keys.
5. Convert each 8 digit block of transposed binary digits into a 2 digit hexadecimal value.
6. Concatenate the hexadecimal values into one string of text.

If you want to play with this cipher, you can use the [v2 demo page](/crypto-demo/v2).

-----

If you'd like to continue in this series, [part 5](/blog/crypto-5) is now available.
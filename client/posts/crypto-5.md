---
slug: "crypto-5"
title: "Cryptography: Part 5"
timestamp: "2018-10-06"
published: true
featured: false
preview: "In this post, I'll be discussing mechanical ciphers. We'll take a look at the Enigma cipher and see what makes it and other mechanical ciphers more secure than the classic ciphers."
---

### Mechanical ciphers

Mechanical ciphers began showing up just before World War 2. These ciphers were too complex to be done by hand, so they were implemented as machines specifically built for encrypting messages. We're only going to look at the German Enigma cipher in this post, but during World War 2 nearly every country had their own mechanical ciphers.

### The Enigma cipher

If you've seen the movie *The Imitation Game* starring Benedict Cumberbatch then you will be somewhat familiar with this cipher. It was used by German field soldiers in World War 2. The Enigma machine consists of a keyboard, a plugboard, and 3 rotor wheels (chosen from 5 available options).

The "key" for Enigma is not a word or phrase like it was in classic ciphers. Instead, the key is made up of all the details about how the machine is set up when you start encrypting a message. It includes the following details:

- The plugboard settings
- Which rotor wheels have been selected
- What order the rotor wheels are in
- The initial position of each rotor wheel
- The ring settings of each rotor wheel

The plugboard consists of a plug for each letter and 13 wires. Both ends of each wire would be plugged into the plugboard to pair up the 26 letters according to the key. When you press a letter on the keyboard, the signal first travels through the plugboard, through the wire connected to it, and through the letter on the other side of the wire. You can think of this like a simple substitution.

Each of the 5 available rotor wheels is wired up with the alphabet in order on one side and the alphabet in a uniquely scrambled order on the other side. A signal would pass through one side of the rotor wheel, through the "input" letter, and then through the "output" letter connected to it, and out the other side. You can think of each rotor wheel as another simple substitution. In addition to having a unique order of scrambled letters on one side, each rotor wheel also has a ring on the side with the ordered alphabet that would allow you to shift the alphabet according to the key information so that the rotor wheels don't work in exactly the same way every time.

Each time a user presses a key, the letter they typed will go through the plugboard where it gets substituted for the other letter connected to the same wire. The output letter from the plugboard then becomes the input letter for the first rotor wheel. The signal travels through the first rotor wheel where the letter is substituted again. The output from the first rotor wheel becomes the input for the second and another substitution occurs. The process is repeated again for the third rotor wheel. The output letter from the third rotor wheel then passes through a reflector where yet another substitution occurs. The output from the reflector is then sent back through all 3 rotor wheels in the opposite direction (now taking a different path through each rotor wheel) and then the signal passes through the plugboard in the opposite direction for one last substitution and the resulting letter lights up. This is the ciphertext character produced by encrypting the plaintext character that was typed.

In total, 9 simple substitutions occur for each plaintext character; each substitution uses a different alphabet order. After each key is pressed and the letter is encrypted, the rotor wheel in the first position steps one position forward (like an old odometer in a car). Unlike an odometer, however, the rotor to the right does not need to make a full revolution before the rotor to the left of it steps forward. Each of the 5 possible rotor wheels has its own position at which it will cause the one to the left of it to step.

Because of the way the plugboard is designed, no letter can be connected to itself. This turned out to be a fatal flaw in the cipher, once cryptanalysts figured out how to exploit it, but even with that flaw the Enigma was massively more complex and secure than anything that could be done by hand. Can you image performing 9 unique simple substitutions for each letter of a plaintext and then changing the substitution settings each time? That would be too much complexity to handle with paper and a pencil and it would take way too much time to be useful.

Many other mechanical ciphers exist, and they all have their own features that make them uniquely complex. I'd rather not go into detail on any other ones, though, because Enigma is by far the most famous of this type of cipher and I think it paints a pretty good picture of what mechanical ciphers are like.

-----

If you'd like to continue in this series, [part 6](/blog/crypto-6) is now available.
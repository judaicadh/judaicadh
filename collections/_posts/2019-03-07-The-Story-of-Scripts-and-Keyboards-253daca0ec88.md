---
author: lauraneckstein
date: 2019-03-07
layout: post
slug: 2019-03-07-scripts-keyboards
title: "The Story of Scripts and Keyboards"
categories:
- Digital Humanities
- Scribes of the Cairo Geniza
tags:
- Digital Humanities
- Scribes of the Cairo Geniza
pull-quote: "Have you tried transcribing in the interface at Zooniverse? Laura Newman Eckstein shares how she developed keyboards for Hebrew and Arabic.  Transcribing Geniza fragments can be a challenge even for the most learned scholar. In this blog post we talk about our tools for transcription in Scribes of the Cairo Geniza including keyboards."
---

We are so excited to share with you the second phase of [Scribes of the Cairo Geniza](https://www.scribesofthecairogeniza.org/)! This second phase is all about **transcribing** Cairo Geniza fragments. In this second phase, you'll notice that the fragments are divided both by their difficulty (whether they are "easy" or "hard") and by their script type (whether they are in Arabic or are in Hebrew). As of this post, we've opened the workflows for Easy Hebrew and Easy Arabic.

You'll notice that when you transcribe a line in Arabic versus when you transcribe a line in Hebrew, you face a very different experience because of the way the keyboards function. We wanted to take time to explain each of these keyboards and also why there are these differences.

### The Arabic Keyboard

Selim S. Haddad's Keyboard with showing two different letter forms on one key for many of the letters

The Arabic Keyboard looks a bit different from a modern Arabic keyboard. Our keyboard design is based off of a keyboard referenced in an image from this [blog post](https://oztypewriter.blogspot.com/2014/10/the-arabic-typewriter-keyboard-and.html). Originally created by Selim S. Haddad in Cairo for the typewriter, we liked Haddad's design because it has the benefit of showing the various forms of the same letter on one key (Haddad's design shows two letter forms on one key).

Unlike in Hebrew, where a character looks the same no matter its position in a word (aside from Alef and Lamed), a letter in modern Arabic can take four different forms: initial (a letter's appearance at the beginning of the word), medial (a letter's appearance in the media of a word), final (a letter's appearance at the end of a world), and isolated (a letter's appearance unconnected to any other characters). Using Haddad's keyboard design for inspiration, we updated Haddad's keyboard to map onto the modern North African Arabic keyboard and we show all four different letter forms when necessary.
The Modern North African Arabic Keyboard. Circled in green, the keys that would be changed on the Scribes of the Cairo Geniza Arabic Interface.

In addition, we changed a few letters on the modern keyboard so that it would be more user friendly for transcribing geniza fragments. We wanted someone who had no experience using an Arabic keyboard to be able to easily find the most commonly used letters in the geniza. The comma became the lam-alif character (**ﻻ** **ﻼ)**, the period became a catch-all letter (**ٮ)**, for baa' (**ب)**, taa' (**ت)**, and thaa' **(ث)** characters. Without dots, baa', taa' and thaa' are three letters are indistinguishable from one another, so those who cannot understand the meaning of the sentence they are transcribing (which is not expected!), can use this character **ٮ**if the character does not have a dot. The forward slash became an alif maqsura **(ى)**, and the semi-colon became a hamza (**ﺀ)**.
Scribes of the Cairo Geniza Arabic Transcription Keyboard

Ultimately, we ended up with a keyboard that serves two purposes. It allows those unfamiliar with Arabic script to see the various shapes of one letter, allowing for easier transcription. On the other hand, it still matches to the modern Arabic keyboard with a few letter exceptions. The keyboard can either be used like an on-screen keyboard, where you can click with your mouse on each letter individually, or you can type using your own keyboard. We thought the latter would be important for native Arabic speakers who are familiar with an Arabic keyboard.

### The Hebrew Keyboard

The Hebrew keyboards work differently from the Arabic keyboards. You'll notice that that when you transcribe you can toggle between a Hebrew keyboard with a modern font and various Hebrew keyboards that have different fonts that come directly from geniza fragments.

We worked with Dr. Judith Olszowy-Schlanger, a French Jewish studies scholar and President of the Oxford Centre for Hebrew and Jewish Studies at the University of Oxford. Dr. Olszowy-Schlanger categorized the various handwriting styles from Cairo Geniza fragments. Unlike in Arabic script, which has ligatures (letters are connected to each other), letters in Hebrew script are usually not connected one another. This makes deciphering each individual letter a much easier task than in Arabic. For beginners, Hebrew script has a clearer definition of where one letter begins and one letter ends.

Using the different typologies from Dr. Olszowy-Schlanger, we created 20 different keyboards that aid transcribers who may not have recognized letter they're transcribing while using the modern Hebrew font keyboard. Using a keyboard that matches the style of the fragment allows for the user who does not necessarily know Hebrew to transcribe solely by matching letter shape to letter shape.

If a transcriber desires to see the keyboards in a different presentation style or browse through them, they can use the crib sheet. The crib sheet allows the user to filter through the Hebrew keyboards based on script style (square, minuscule, or cursive) and then examine each individual alphabet. If a user wants to see the specific keyboard they are examining on the crib sheet imposed on the keyboard, they can click "send script to keyboard."

### Reasons behind the differences in the Arabic and Hebrew Keyboards

While the differences are evident between the Arabic and Hebrew keyboard interfaces, we wanted to take a moment to further explain why we chose to have different interfaces for these script types.

Initially, we had planned to have many different keyboard options for both the Hebrew and Arabic interfaces. However, when we thought about the user with little to no expertise and how they would approach transcription, it didn't seem like something manageable for us. In Arabic, there are many the different character shapes and connections for one single letter in Arabic. Creating, categorizing and/or conveying within set number of keyboards, each containing a set number of letters, seemed complicated from a user and developer experience. There were too many possibilities for how each letter could visually appear and on top of that, how these each may appear in a different script type. We could never possibly show all of those combinations or even a reasonable number that would be helpful for transcription purposes.

Another factor swaying our decision not to create a multitude of keyboards for Arabic script was the fact that our experts explained that what was sorted as "formal" Arabic and written in handwriting from the premodern and middle ages can still be transcribed by someone familiar with reading the Arabic language today. Instead, we created a modified version of the typewriter keyboard shown above that includes all four letter forms from the Arabic alphabet on each key. As mentioned above, we changed some of the Arabic keyboard layout to help transcribers find relevant letters that might appear while transcribing.

Unlike formal Arabic handwriting styles from the 10–13th centuries, which can be read by those literate in modern Arabic, some of the formal and informal Hebrew handwriting of the 10th-13th centuries is difficult to read even for a literate Hebrew speaker. However, because Hebrew letters were discrete, meaning they were not connected to each other, Hebrew scripts in the Geniza could be more easily categorized. In Hebrew, we could pick an individual letter and compare it across fragments — in Arabic, this was nearly impossible because one would really have to compare word by word. Because we could typologize Hebrew scripts in the Geniza, that meant that those fragments classified as both informal and formal could be transcribed using these keyboards created.

In phase 2, we developed the Hebrew and Arabic keyboards to assist #genizascribes with no prior knowledge in transcribing these fragments. In future phases of Scribes of the Cairo Geniza, we hope to develop a tool that helps #genizascribes transcribe challenging Hebrew and Arabic fragments.

By [Judaica DH at the Penn Libraries](https://medium.com/@judaicadh) on [<time>March 7, 2019</time>](https://medium.com/p/253daca0ec88).

[Canonical link](https://medium.com/@judaicadh/scriptsandkeyboards-253daca0ec88)

Exported from [Medium](https://medium.com) on April 14, 2020.

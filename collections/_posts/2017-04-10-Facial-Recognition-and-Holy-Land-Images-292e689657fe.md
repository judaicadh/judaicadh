---
author: lauraneckstein
date: 2017-04-10
layout: post
slug: 2017-04-10-facial-recognition
title: "Facial Recognition and Holy Land Images"
categories:
- Holy Land
- Digital Humanities
tags:
- Digital Humanities
- Holy Land
- Facial Recognition
- "Envisaging the Holy Land: Facial Recognition and Early Photography"
pull-quote: "We discuss our facial recognition Python script that brings back to life the faces of local inhabitants in the Penn Library's Holy Land Digital Image Collection that would otherwise lost to history."
---

_The photographs below all come from the Lenkin Family Collection of Photography which comprises part of the_ [_University of Pennsylvania Libraries's Holy Land Digital Image Collection_](http://dla.library.upenn.edu/dla/holyland/index.html) _. The Penn Libraries are grateful to_ **_Edward Lenkin (C'71, PAR'12)_** _for a major gift which made it possible to acquire approximately 5,000 photographs of the Holy Land dating from ca. 1850–1937._

Recently, an exhibit, curated by Hila Fishman, went on display in the Kamin Gallery in the Van Pelt-Dietrich Library, entitled "Insight: Seeing the People of the Holy Land, Collections from the Lenkin Family Collection of Photography." While these photographs contain people, the focus is not really on them, but rather on the purpose that they serve for the photographer, whether it was to show the scale of a Pyramid, reenact a biblical scene, or epitomize Western Christian notions of the Holy Land.

If we were to analyze this stereograph above in the simplest of fashions we see a man looking out on to an arid valley.
"Moses's outlook over this Valley of Shittim", Realistic Travels Publishers, CAJS Image Collection BE RTP 1856 BE74, The Lenkin Family Collection of Photography, University of Pennsylvania Libraries

However, with the caption, "Moses's outlook over the Valley of Shittim", the stereograph takes on a new meaning. There is a biblical connotation, where a Western audience with some knowledge of the Hebrew Bible would link the man in the stereograph as reenacting the scene in Deuteronomy where Moses looks out at the Land of Israel right before he dies. With this caption the viewer of the photographer has less questions about the man himself and the land is what gives the man meaning.

Hila Fishman writes that:

With the caption, "Moses's outlook over the Valley of Shittim", the stereograph takes on a new meaning. There is a biblical connotation, with the man in the stereograph depicting Moses looking out into the land of Israel right before he dies in that famous scene of Deuteronomy 34.Ms. Fishman writes that:

> With the introduction of portraiture and early street photography, the people of the Holy Land later became subjects in their own right, yet their modes of representation largely remained tied to common Oriental and religious themes. This exhibition focuses on these modes of representation, as it presents the role of people in nineteenth century Holy Land photography and the ways in which their visual representations met or challenged nineteenth-century conventions about the Holy Land It also brings back to life the faces of local inhabitants otherwise lost to history.

In support of the exhibition's efforts to bring these forgotten faces back to life, this author, at Penn's Judaica DH lab, experimented with a [Python](https://www.python.org/) script in order to find a way to use facial recognition to comb the entire corpus of photographs. At the end of the exhibit in Van Pelt Library you can see the isolated individual faces which in turn were compiled, edited, and transformed into a rotating slide show.

The video below offers a "how-to" manual to run our python script and extract your own faces from your own set of photographs. (For this tutorial, I will assume that you are using the [Anaconda-Navigator](https://www.continuum.io/downloads) application.):

* Please [download](https://github.com/judaicadh/Holy-Land-Faces) our Github repository before following along.
* [OpenCV Documentation](http://opencv.org/)

There were a few problems with the code that still give us pause.

1. One of the photographic styles is to use people for scale. This makes people extremely small. Because of this, their faces are often not extracted.
2. In the earliest of images, because of the photographic technique, if they even moved a fraction of an inch, their faces were blurred. This caused the script to not pick up their eyes and face.
3. Women are sometimes veiled, particularly at holy sites, so their faces are not extracted and they continue to be invisible, and "lost to history."
4. The python script has technical difficulties identifying faces with darker hues of skin color. This has been a problem in modern facial recognition software as well ([see this article](http://www.huffingtonpost.com/entry/heres-why-facial-recognition-tech-cant-figure-out-black-people_us_56d5c2b1e4b0bf0dab3371eb)). To remedy this problem, we are still working to review a large number of photographs to ensure that no faces were omitted due to this software limitation.

Future plans and fixing the problems:

Our plan is to create a faces training library from the faces we have extracted so that when we rerun the facial recognition script perhaps at least darker skinned faces will be recognized.

We are also planning on going through by hand and creating a veiled image library of women who would otherwise not be picked up by our script.

If you have any suggestions or feedback we'd love to hear from you.

Citations:

Hila Fishman, _In Sight: Seeing the People of the Holy Land_ (Philadelphia, PA: University of Pennsylvania Libraries, 2017).2.

By [Judaica DH at the Penn Libraries](https://medium.com/@judaicadh) on [<time>April 10, 2017</time>](https://medium.com/p/292e689657fe).

[Canonical link](https://medium.com/@judaicadh/facial-recognition-and-holy-land-images-292e689657fe)

Exported from [Medium](https://medium.com) on April 14, 2020.

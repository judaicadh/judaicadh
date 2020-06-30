---
author: emily-esten
date: 2020-06-30
layout: post
slug: about-singermanja2
title: "Building the Digital Second Edition of Robert Singerman's Judaica Americana"
categories:
- Digital Second Edition of Judaica Americana 
tags:
- Judaica Americana
- Digital Second Edition of Judaica Americana 
- How Did They Make That
pull-quote: "As the project manager and develop for Judaica DH, Emily Esten shares the launch of the Digital Second Edition of Judaica Americana and walks us through the project's development."
---

As the project manager and developer for [Judaica Digital Humanities at the Penn Libraries](http://judaicadh.library.upenn.edu), I’m excited to announce the launch of the [Digital Second Edition of Judaica Americana](https://singermanja2.exhibits.library.upenn.edu/). This is an Omeka database which draws from Robert Singerman’s *Judaica Americana,* a bibliography chronicling American Jewish book production until 1900. The Digital Second Edition contains 3,000 supplemental entries to the print edition. The project’s features allow users to search the bibliography by author, language, holding institution, and various tags, as well as find open-access links to digitized Jewish monographs, serials, and periodicals.

You can view the project at [*singermanja2.exhibits.library.upenn.edu/*](https://singermanja2.exhibits.library.upenn.edu/).
Additional information about the project can be found on the Judaica DH website at [*judaicadh.github.io/work/judaica-americana*](http://judaicadh.github.io/work/judaica-americana).

# About *Judaica Americana*

In July 2019, Robert Singerman, emeritus university librarian at the University of Florida, donated to the Penn Libraries the draft of the full text and the copyright to his revised second edition of *Judaica Americana*. The first edition, issued in 1990, is an award-winning, magisterial two-volume bibliography of American Jewish publications before 1900. The print edition of *Judaica Americana* was sponsored by the Center for the Study of the American Jewish Experience, Hebrew Union College-Jewish Institute of Religion, and published by Greenwood Press as part of the Bibliographies and Indexes in American History.

In it, Singerman identified just over 6,500+ monographic and serial publications, presented with meticulous bibliographical descriptions, classification explanations, and holdings information, i.e., the names of collections where copies are known to be held. His bibliography chronicled American Jewish book production from the 17th century to the beginning of the twentieth century. Taken as a whole, Singerman’s bibliography provides extensive and authoritative documentation of American Jewish communal activity and growth before 1901.

When starting the project, I read book reviews of *Judaica Americana* to understand what exactly we were attempting to transform. In addition to building on the work of existing American Jewish bibliographies like [*Rosenbach’s*](https://archive.org/details/americanjewishbi0000rose), several reviews mentioned Singerman’s use of multiple bibliographic techniques, by which they meant OCLC, RLIN, and traditional onsite visits to institutions. For me, that was a key detail, recognizing Singerman’s bibliography as a distinct moment in time between past bibliographies (which required someone to physically view and document each monograph) and the use of online databases in scholarly communication.

Bibliographer [*Nathan Kaganoff’s review of the first edition*](http://www.jstor.org/stable/23884484) was not the most positive review, but provided crucial insight into how our project could augment and transform Singerman’s work. Kaganoff asked four questions in his review:

1)  Does this bibliography present new data or information that was not previously available?

2)  How does it appear physically compared to the earlier bibliographies? Does the use of a computer bring with it any unusual elements or features?

3)  Have we learned anything new about the quantity of American Jewish printed material? How has this material been preserved and what might we still anticipate finding in the future?

4)  Does “Singerman” now become the definitive bibliographic tool for students of early American Jewish history rather than “Rosenbach”?

For Kaganoff, the print edition fulfilled Questions 1 and 3, but fell short in Questions 2 and 4. I found this review really helpful in framing the value of our project for scholars and the steps we needed to take at each stage of the process. Kaganoff’s questions are similar to those digital scholarship practitioners use to evaluate digital projects, and these were key areas in which our project could expand upon the print edition.

# Building the Project 
**First Steps**

![White board with text from planning stages](https://judaicadh.github.io/assets/post-media/singermanja2/2020-06-03-singermanja2-1.jpg)

*One of our boards following the User Analysis model from Yale DH.*

This was the first project I undertook from start-to-finish at Penn, and I used this as an opportunity to learn best techniques for engaging my colleagues, understanding library infrastructure, and segmenting the project into clear goals. To guide us in our project planning process, we used elements of the [*YaleDH Lab Project Planning Toolkit*](https://dhlab.yale.edu/guides/project-planning.html). Most helpful for us were the [*Lean Canvas*](https://dhlab.yale.edu/assets/docs/DH-LeanCanvas.pdf) and [*User Analysis*](https://dhlab.yale.edu/assets/docs/DH-User-Analysis.pdf) worksheets, which identified key user audiences and experiences we wanted to facilitate with both the dataset and the database.

We also used this time to talk about existing projects related to ours. In particular, we took inspiration from [*Women in Book History*](https://www.womensbookhistory.org/) and the [*Footprints: Jewish Books Through Space and Time*](https://footprints.ctl.columbia.edu/), both of which are databases for book history. We really admired how both projects had clean, clear interfaces, and contextualized their projects for user engagement.

As part of the Jekyll and Python Working Groups at Penn, I also spent a lot of time with the team working on the [*Digital Beehive*](https://kislakcenter.github.io/digital-beehive/) here at Penn. The Digital Beehive project is a working digital edition of Francis Daniel Pastorius’ Beehive Manuscript, a commonplace book begun in 1696. While the Digital Beehive’s data is a lot more complicated than the datasets we used, the project’s interest in understanding how can digital formats faithfully replicate pre-digital data systems provided a good example of how a similar project could be built in Jekyll.

We also spent a lot of time referring to the physical book at this point, so I always had the library copy on my desk. It was often a conduit for asking questions in the planning stage about how we wanted to represent things digitally. Some of the questions:

-   Why does Singerman use asterisks here?

-   What is the author when Singerman uses an LOC header or an institution?

-   In the document, there were some odd formatting issues. What of this part of the notes and which of this is part of the entry?

-   Where should entries with uncertain years (like 184-?) be placed?

-   What fields are explicitly listed and can be extracted easily, and which ones are inferred within an entry?

Over the course of a few meetings and rounds of editing, we completed a project charter that borrowed sections from [*Yale DH Lab*](https://dhlab.yale.edu/assets/docs/ProjectCharter-RPG.pdf), [*PM4DH at Emory*](https://scholarblogs.emory.edu/pm4dh/creating-a-project-charter/), and [*Princeton DH Charters*](https://cdh.princeton.edu/research/project-management/charters/) to address all the questions we had in mind.

**The Open-Access Edition**

![Announcement on Medium](https://judaicadh.github.io/assets/post-media/singermanja2/2020-06-03-singermanja2-2.jpg)

*A screenshot of our Medium announcement about the ScholarlyCommons repository.*

The dataset for the open-access edition, as well as the process of converting the chronological file into a dataset, is discussed a forthcoming article for [*Journal of Open Humanities Data*](). I borrowed from my experience working on the [*1853 New York Crystal Palace*](http://cds.library.brown.edu/projects/crystalpalace/) to [*write a script*](https://github.com/judaicadh/ja2-scripts/blob/master/extract_singerman.py) that separated out id numbers, year, entry, notes, and holdings information based on the structure of the original text. This was further cleaned through a combination of OpenRefine and manual review.

There were probably more effective ways to write this script that would not have been as labor-intensive for data cleaning, but this balance worked for me. It also helped us answer a lot of questions along the way, such as how we wanted to clean fields like “Location”, “Publisher”, “Author/Editor”.

After merging the revised second edition draft with additional supplemental entries, and converting the chronological file into a dataset, both were deposited into a project-specific [*ScholarlyCommons repository*](https://repository.upenn.edu/judaica_americana/). At this time, we [*announced*](https://medium.com/@judaicadh/explore-robert-singermans-judaica-americana-a33c8721707d) the open-access edition to the public and the start of our project.

We agreed with Singerman at this point that any edits or additions to the dataset would not be uploaded to ScholarlyCommons until the end of the project. For any new entries to the supplement that Singerman would send us, we created a Google form that structured data entry for the dataset. (Over the course of the project, Singerman sent eleven updates to the database, with five to fifteen new entries each time.) Establishing that boundary early on in our process helped us be consistent.

**Augmenting the Dataset**

![Scanned index page, with columns of words](https://judaicadh.github.io/assets/post-media/singermanja2/2020-06-03-singermanja2-3.png)

*A scan of the Singerman index, which includes nearly 12,000 headers.*

At this point, we were ready to augment the dataset in a few ways:

-   We knew that we wanted to have “Language” as a searchable field in the dataset, as many languages are represented in this dataset. Singerman typically identifies this information in the Notes if multiple languages are present in the text. We separated language in two categories: language of the *text* (the “Language” field) and language of the *title* (the “Language-Title” field).

-   Prior to the start of this project, Camille Davis had identified open-access links to digital facsimiles of each entry (when possible) on WorldCat, HathiTrust, GoogleBooks, Internet Archive, or in other digital repositories. Davis also included the vernacular titles of entries listed in Yosef Goldman’s *Hebrew Printing in America, 1735-1926: A History and Annotated Bibliography*. Both of Davis’s datasets were merged with the JA2 dataset.

-   We also wanted to use the tagging feature on Omeka to include the index headers of the original publication’s index. This process is discussed in a forthcoming article for [*Journal of Open Humanities Data*](), but involves performing OCR to extract text and then associate specific locators (in this case, Singerman ID numbers) with headers. Penn Libraries staff scanned the 150+ pages of the index as three separate PDF files. I then used [tess](https://github.com/senderle/tess), a Python script by Penn Libraries’ Digital Humanities Librarian Jonathan Scott Enderle for converting PDFs to TIFFs and performing OCR with tesseract, to create three separate text files. The text files were combined into one, with each line serving as a heading followed by a list of locators. The 12,000+ entries of the index were then separated row by row into a key/value structure with two distinct columns, split on the first comma and reviewed manually for quality control.

-   In addition to the chronological file, JA includes a union list of nineteenth-century serials that fit Singerman’s criteria. We had originally chosen not to include the serials as part of our dataset, but seeing resources like Ohio State University’s [*Union List of Digitized Jewish Historic Newspapers, Periodicals and e-Journals*](https://library.osu.edu/projects/hebrew-lexicon/Jewish-Press_files/sheet002.htm) encouraged us to make the effort to include them. We restructured the Python script used for extracting entries for the original dataset into one that could be used to extract serial entries.

While we initially proposed building the project on a static site in order to have full control over the site’s display, it was around this stage that we switched to Omeka instead. Working with Omeka allowed us to have an established project interface to scale up for future phases of the project. It also brought together a variety of library departments for consultation and support in a way that we may not have been able to do on another platform. It engaged a lot more staff in the conversation of our project, yielding new insights into its development.

We worked with the library's Learning and Technology Services division to get installations of Omeka on the library server. By the end of February, we shared the first draft of the site with our project team, which featured the first 500 entries in chronological order. We had built the incremental loading of data into the project charter, initially with 5%, 10%, 50%, etc. In practice, those percentages didn’t make sense, so we scaled this incremental practice to specific numbers and focused our questions around that data for our team to go in and review.

**Drafting the Site**

![Screenshot of early site navigation](https://judaicadh.github.io/assets/post-media/singermanja2/2020-06-03-singermanja2-4.jpg)

*A screenshot of the navigation for the second draft of the site*

By the end of March, we shared the second draft of the site with the team, including the first 1,000 entries in chronological order. Some of the changes we made for this draft:

-   We made two additional changes to the dataset specifically for the database:

    -   Using the “Dublin Core: Metadata” description, we included the full entry as displayed in the text - the bibliographic entry, any notes provided by Singerman, and the holdings information in full (see below). This allows users to view all this content while browsing, simulating the experience of reading the physical book.

    -   In the “Holdings” field, Singerman occasionally provides notes or specific volume information about a library’s copy of the monograph. To make that field searchable by institution, we maintained the codes but removed the notes from the “Holdings” field.

-   We added a “Using JA2” page to include information about how browse entries work, descriptions for each metadata field, the abbreviations used by Singerman in the Notes field, and the Library Symbols used in the text. (We took inspiration from the information research aid for [*Women in Book History*](https://www.womensbookhistory.org/the-bibliography)!)

-   We added Singerman’s introduction to the site and hyperlinked footnotes to facilitate easy reading.

-   At this point, we decided to make a custom Omeka theme. We had originally used a [*custom Omeka theme for Penn Libraries Special Collections*](https://github.com/upenn-libraries/upennlib_sc_shadowpage_bootstrap), but wanted to make changes to the images and CSS of the page to match our project needs.

**More Data & Customization**

![Header image for the site: shelf of books in the background with white box at center. Penn Libraries logo followed by "Digital Second Edition of Judaica Americana"](https://judaicadh.github.io/assets/post-media/singermanja2/2020-06-03-singermanja2-5.png)

*The graphic header for the site - the books in the background comes from a \#shelfie at the [*Library at the Katz Center for Advanced Judaic Studies*](https://business.facebook.com/katzcenterupenn/photos/a.716387478439866/2672788819466379/?type=3&theater).)*

By the end of April, we shared the third draft of the site with the team, including all the entries in chronological order. Some of the changes we made for this draft:

-   We previously had not included the open-access links in the project. We added them here for our beta testers to review, and included Penn-specific links for any entries for which Penn has digitized copies in Colenda or digital repositories.

-   We made a custom graphic header for the site, modeled after other library project graphics like the [*Kaplan Collection*](https://kaplan.exhibits.library.upenn.edu/).

-   We uploaded the first version of the custom theme, which included:

    -   Adding an option to sort by Year
    -   Removing the option to sort by Creator (since we don’t use that metadata)
    -   CSS changes in the footer

**Final Draft & Next Steps**

We launched the final version of the site in May. Most of the changes here were small edits to the dataset we had noticed in user review. We also made changes for database’s “Browse” pages to reflect as closely as possible the original draft in chronological order by publication. We used Omeka's collection feature to separate out the Chronological File (sorted in chronological order) and the Union List (sorted by title). 

Since October 2019, the PDF of *Judaica Americana* on ScholarlyCommons has 1,125 downloads and the dataset 96 downloads. These files have been downloaded from 80 institutions and 96 countries. As of May 2020, there are 8,881 monograph entries in the database, including 2,936 supplemental entries added from the first edition. 58% of the original entries have WorldCat links, 18% have HathiTrust links, 10% have GoogleBooks links, and 6% have Internet Archive links.

During summer 2020, we plan to identify open-access links for the \~3,000 entries in the supplement, and improve existing links that may have broken in the past few years. We also hope to enter vernacular titles for more entries, especially those in the supplement.

There are three outstanding tasks that we hope to complete in future phases of the project:

-   In the print edition, Singerman transliterated titles in non-Roman languages; in the supplement, he was able to type in non-Hebrew characters. Using the Goldman-Kinsberg bibliography, we were able to include vernacular titles of Hebrew and Yiddish texts. We didn’t have the time and resources to build a plugin at this stage, but we would like to find and or develop a virtual keyboard plugin that would allow users to type and search for Hebrew characters within our site, rather than copying and pasting Hebrew text from elsewhere. We think this type of plugin would be useful for multilingual Omeka projects.

-   For now, only the entries indexed in the print edition have been tagged. We would also love to fully index the supplemental entries in order to expand the depth of search within the database.

-   We hope to include PDF files of the entries within Omeka for items in Penn’s collection, allowing for full-text search of these entries.

We set out to create an interactive digital edition of this rich bibliography and we can’t wait to see what discoveries can be made based on this data. We would love to see this project modeled in the creation of other enumerative bibliographies or digital library collections.

And while Singerman’s bibliography focuses on monograph holdings at various locations, we now have the opportunity to take this a step further and quantify the efforts of library digitization through projects like HathiTrust and Google Books. We hope this encourages others to identify digital facsimiles of their collections, whether on an institutional or cross-institutional level.

# Acknowledgements
----------------

Our full team is listed [*here*](https://singermanja2.exhibits.library.upenn.edu/credits-and-acknowledgments).

First and foremost, this project would not be possible without the generosity of Robert Singerman, who entrusted us with his extraordinary work. It is with his conceptualization, vision, and data curation that this project is possible.

Mitch Fraas and Arthur Kiron served as project directors, handling the project administration and mentor oversight to the project. Arthur Kiron was also responsible for developing the project vision, including serving as liaison with Robert Singerman, coordinating files, and providing quality control. Nicky Agate provided project administration support. 

I was responsible for the data preparation and project methodology. As the developer and designer, I designed the look and feel of the site, editing the Omeka theme that is used for the navigation and user interaction with the site. Senior developers Kate Lynch and Chris Clement, and DevOps Developer Andrew Kimball provided Omeka support on this project.

Many thanks to the distinguished scholars, librarians, and staff who generously provided guidance and assistance with the project, including: Michelle Chesner, Laurie Allen, Camille Davis, Laura Newman Eckstein, Doug Emery, Scott Enderle, Emily Morton Owens, Will Noel, and Jordan Rothschild.

### Additional Resources
--------------------

You can view the project at [*singermanja2.exhibits.library.upenn.edu/*](https://singermanja2.exhibits.library.upenn.edu/).
Additional information about the project can be found at [*judaicadh.github.io/work/judaica-americana*](http://judaicadh.github.io/work/judaica-americana).

**Publications**

-   Esten, Emily. “Digital Second Edition of Judaica Americana: A Bibliography of Publications to 1900” (forthcoming). Journal of Open Humanities Data 6, no. 1, (2020).

-   We have a repository on ScholarlyCommons, University of Pennsylvania’s open access institutional repository, dedicated to resources for the project:

    -   Esten, Emily. “[*Dataset for Judaica Americana: A Bibliography of Publications to 1900*](https://repository.upenn.edu/judaica_americana/2)”. Scribes of the Cairo Geniza, Scholarly Commons, 2019. Web.

    -   Esten, Emily. “[*Dataset for Union List of Nineteenth-Century Jewish Serials Published in the United States*](https://repository.upenn.edu/judaica_americana/3/)”. Judaica Americana, Scholarly Commons, 2020. Web.

    -   Singerman, Robert. “[*Judaica Americana: A Bibliography of Publications to 1900*](https://repository.upenn.edu/judaica_americana/1)”. Judaica Americana, Scholarly Commons, 2019. Web.

-   The Python scripts used in this project are maintained in a [*GitHub repository*](https://github.com/judaicadh/ja2-scripts), including:

    -   Esten, Emily. “Extract\_singerman.py.” ja2-scripts, Github, accessed May 15, 2020, [*https://github.com/judaicadh/ja2-cleaning*](https://github.com/judaicadh/ja2-cleaning) DOI: 10.5281/zenodo.3894691

    -   Enderle, Jonathan Scott. “tess.py.” ja2-scripts, Github, accessed May 15, 2020, [*https://github.com/judaicadh/ja2-cleaning*](https://github.com/judaicadh/ja2-cleaning). (Forked from its original repository) DOI: 10.5281/zenodo.3894691

    -   Esten, Emily. “flip-index-headers.py.” ja2-scripts, Github, accessed May 15, 2020,[*https://github.com/judaicadh/ja2-cleaning*](https://github.com/judaicadh/ja2-cleaning) DOI: 10.5281/zenodo.3894691

    -   Esten, Emily. “extract-singerman-serials.py.” ja2-scripts, Github, accessed May 15, 2020, [*https://github.com/judaicadh/ja2-cleaning*](https://github.com/judaicadh/ja2-cleaning) DOI: 10.5281/zenodo.3894691

**Resources & Tools**

-   [*Omeka Classic*](https://omeka.org/)

-   [*Omeka theme for Penn Libraries Special Collections*](https://github.com/upenn-libraries/upennlib_sc_shadowpage_bootstrap)

-   [*OpenRefine*](https://openrefine.org/)

-   [*ScholarlyCommons*](https://repository.upenn.edu/)

-   [*Yale DHLab - DH Toolkit*](https://dhlab.yale.edu/guides/project-planning.html)

-   [*PM4DH at Emory*](https://scholarblogs.emory.edu/pm4dh/creating-a-project-charter/)

-   [*Princeton DH Charters*](https://cdh.princeton.edu/research/project-management/charters/)

**References**

-   Chesner, Michelle, ed., et al. “Footprints: Jewish Books Through Time and Place.” *Footprints: Jewish Books Through Time and Place*, Center for Teaching and Learning at Columbia University Libraries, [*https://footprints.ctl.columbia.edu/*](https://footprints.ctl.columbia.edu/).

-   Coker, Cait and Kate Ozment. [**Building the Women in Book History Bibliography, or Digital Enumerative Bibliography as Preservation of Feminist Labor.**](https://www.digitalhumanities.org/dhq/vol/13/3/000428/000428.html) 13, no. 3 (2019). Accessed May 14, 2020. [*https://www.digitalhumanities.org/dhq/vol/13/3/000428/000428.html*](https://www.digitalhumanities.org/dhq/vol/13/3/000428/000428.html).

-   Coker, Cait, and Kate Ozment. “Women in Book History Bibliography.” *Women in Book History Bibliography*, English Department at Texas A&M University, [*www.womensbookhistory.org/*](http://www.womensbookhistory.org/our-mission). Accessed May 14, 2020.

-   Croxall, Brian, Emily Esten, Steffani Gomez, Steven Lubar, and Patrick Rashleigh. “1853 New York Crystal Palace.” *1853 New York Crystal Palace*, Center for Digital Scholarship at Brown University Library, [*http://cds.library.brown.edu/projects/crystalpalace/*](http://cds.library.brown.edu/projects/crystalpalace/). Accessed May 14, 2020.

-   Galron-Goldshcläger, Joseph (Yossi). “Union List of Digitized Jewish Historic Newspapers, Periodicals, and e-Journals.” *Union List of Digitized Jewish Historic Newspapers, Periodicals, and e-Journals*, The Ohio State University, [*https://library.osu.edu/projects/hebrew-lexicon/Jewish-Press.htm*](https://library.osu.edu/projects/hebrew-lexicon/Jewish-Press.htm). Accessed May 14, 2020.

-   Kaganoff, Nathan M. *American Jewish History* 80, no. 1 (1990): 136-41. Accessed May 14, 2020. [*www.jstor.org/stable/23884484*](http://www.jstor.org/stable/23884484).

-   Nelson, David Ragnar, ed. “Digital Beehive.” *Digital Beehive*, Kislak Center for Special Collections, Rare Books, and Manuscripts, [*https://kislakcenter.github.io/digital-beehive/*](https://kislakcenter.github.io/digital-beehive/). Accessed May 14, 2020.



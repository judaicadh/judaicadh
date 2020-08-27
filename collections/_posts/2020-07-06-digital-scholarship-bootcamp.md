---
author: emily-esten
date: 2020-07-06
layout: post
slug: 2020-07-06-digital-scholarship-bootcamp
title: "Data Wrangling with Google Sheets"
categories:
- Presentations
tags:
- Conferences
pull-quote: "A presentation on functions and formulas in Google Sheets for the Digital Scholarship Bootcamp in the 2020 Penn Libraries Summer Workshops Series."
---

*The following transcript and slides were part of a workshop in the Digital Scholarship Bootcamp series at Penn Libraries in July 2020. The recording of this workshop is available [here](http://www.kaltura.com/tiny/zkt69).*

![Title Slide - Data Wrangling with Google Sheets](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-12.jpg)

![About Emily Esten](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-10.jpg)

Some background on me: I am the Judaica Digital Humanities Coordinator in the Center for Research Data and Digital Scholarship here in the libraries, which means I work between Special Collections and the Center on projects related to Jewish history and culture. I wanted to run this workshop because Google Sheets is really commonplace in our work as scholars, and in particular I’ve made a lot of use of data wrangling tips to create the datasets I work with. In this workshop, we’ll be using some of those datasets I’ve created as an example of what we can do with Google Sheet functions. 

![Definitions](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-11.jpg)

So if you think back to algebra, an expression is a group of numbers, symbols and operators to show the value of something 
> 1+5

A formula is an expression with an equals sign in front of it, which tells the computer that you want to calculate this expression
> =1+5

A function is a predefined formula in Google Sheets that allows you to manipulate data and calculate strings and numbers. A function uses specific values and symbols in a particular order (called syntax). All functions are formulas, but not all formulas are functions. 
> =SUM(1,5)

You can also mix functions together to get a result, which is called “nesting”. We’re not going to do that in today’s session, but some of the things I’ve linked to in the **Next Steps** will show you how to do that. 

![Syntax of Function](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-1.jpg)

The most important thing to remember with any function is the syntax. You'll see within the case studies the syntax for any specific function, but the basic syntax for anything looks like the following:
* the **equals sign**, which tells Google Sheets that you want to calculate this expression
* the **function name**, which tells Google Sheets that you're about to use a specific function 
* the **argument**, which provides the data necessary to use that function. The argument section can refer to individual cells, cell ranges, text, numbers, values. Depending on the function, you may need to input multiple arguments. In the case above, I've provided a *range* - a group of cells. A range is written as two cells, separated by a colon. 

In the case of functions and formulas, the “argument” section can refer to a lot of different things depending on what you're attempting to do - a string, a number, an individual cell, and/or cell ranges. Depending on the function, you may include one argument or multiple arguments.
> = SUM(1,5) features two arguments
=SUM(A1:A3) only features one (the cell range). 

![Types of Functions](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-3.jpg)

There are over [400 functions](https://support.google.com/docs/table/25273?hl=en) in Google Sheets. Most of these functions also work in Microsoft Excel, but I’m doing this in Google Sheets because my work with data often involves right-to-left languages, which are handled slightly better here than in Excel. 

These Google Sheets functions are grouped into types - the bolded types are the ones I’m going to discuss today, but any of these hundreds could be valuable to your data wrangling experience.

![Syntax of Function](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-2.jpg)
 
The other nice thing about functions is if you can’t remember how to write one, you can always use the functions button to find and select the one you’d like to use in a particular case. 

Okay! If you already have access to the Google Sheets, great! You can make a copy of the one I’m working on and follow along by going to [this link](https://docs.google.com/presentation/d/1Sh73KHRrJEGAI8EAGLJWXMmUojX2ApRJ4kOFIIsBKCo/edit?usp=sharing) and making a copy of the Google Sheets file. All the case studies follow the same structure: you can see the dataset, some questions below, and then at the bottom are some functions relevant to this case study’s question. 

# CASE 1: MATH

![List of Math Functions, pt. 1](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-4.jpg)

![List of Math Functions, pt. 2](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-5.jpg)

In this first case study, math, are all basic mathematical operations you might remember from algebra, or operations for providing count and frequency information. 

* **SUM** provides the sum of values in a range
* **AVERAGE** provides the average value in a range
* **MODE** provides the most common value in a range.
* **MAX** provides the highest value in a range.  
* **MIN** provides the lowest value in a range.
* **COUNT** provides the number of numeric values in range. 
* **COUNTA** provides the number of any type of values in a range. 
* **COUNTUNIQUE** provides a number of unique values in a range, removing duplicates from your count.
* **COUNTIF** provides a number of values matching criteria in one range
* **COUNTIFS** provides a number of values that match multiple criteria in multiple ranges. 

![Screenshot of Case 1 Spreadsheet](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-13.jpg)

This is a bibliographic dataset, with some information about monographs published prior to 1900. I want to find some quantitative information about the dataset to get a sense of what I’m looking at.

*View the worksheet* [here](https://docs.google.com/spreadsheets/d/15qlFC78I1VpW_LCkhyNN6J9U-BG0yQInsM8EfBQxB3c/edit?usp=sharing).

* What is the average year of this dataset?
> =AVERAGE(B4:B21)
>
> 1866

* What is the most common year in this dataset?
>=MODE(B4:B21) 
>
> 1898

* What is the highest year in this dataset?
> =MAX(B4:B21)
>
> 1900

* What is the lowest year in this dataset?
> =MIN(B4:B21)
>
> 1807

* How many unique years are in this dataset?
> =COUNTUNIQUE(B4:B21)
>
> 15

* How many entries are in this dataset?
> =COUNT(B4:B21)
>
> 18

* How many unique locations are in this dataset?
> =COUNTUNIQUE(D4:D21)
>
> 5

* How many books were published in New York, NY?
> =COUNTIF(D4:D21, "New York, NY")
>
> 9

* How many books were published in Boston, MA, by D. Lothrop?
> =COUNTIFS(D4:D21, "Boston, MA", E4:E21, "D. Lothrop")
>
> 2

# CASE 2: TEXT

![List of Text Functions, pt. 1](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-6.jpg)

![List of Text Functions, pt. 2](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-7.jpg)

So in this second case study, text, we’re interested in cleaning some of this data as opposed to answering specific questions. These functions in the text category clean the data by removing characters, converting data types, cutting up, replacing, substituting, or piecing together strings. 

* **TEXT** converts a number into a string, based on a specified format. This could be a date, a decimal, a time, more columns. 
* **VALUE** does the opposite - it converts a string into a number, based on a specified format. 
* **TO_DATE** is pretty self-explanatory: it does what VALUE does, but specifically for a specified date format.
* **SUBSTITUTE** replaces existing text with new text in a string
* **TEXTJOIN** combines text from multiple strings with a specifiable delimiter
* **CONCATENATE** combines strings. 
* **TRIM removes** leading and trailing spaces in a specified string.

![Screenshot of Case 2 Spreadsheet](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-14.jpg)

*View the worksheet* [here](https://docs.google.com/spreadsheets/d/15qlFC78I1VpW_LCkhyNN6J9U-BG0yQInsM8EfBQxB3c/edit?usp=sharing).

This is a dataset containing metadata from a manuscript collection here in the libraries. But it’s not exactly formatted the way I would like it to be. These functions can help me to edit the dataset.   

* For SMBx1FF8_14, convert the year into a string in the following format (#,###).
> =TEXT(D3, "#,###")
>
> 1,851

* For SMBx1FF10_8, convert the Gregorian date into a numerical date.
> =TO_DATE(C7)
>
> 5/20/1853

* For SMBx1FF10_13, substitute "Unknown Addressee" to "Solis, S" in the manuscript name.
> =SUBSTITUTE(B7, "Unknown Addressee", "Solis, S")
>
> Letter from Morais, Sabato to Solis, S. Philadelphia, PA; May 1853

* For SMBx1FF8_6, join the city and the state, separated by a comma.
> =CONCATENATE(E5,", ",F5) OR =TEXTJOIN(", ",TRUE,E5:F5) works here 
>
> Long Branch, NJ

* For SMBx17FF1_1, trim the spaces from the manuscript name.  
> =TRIM(B4)
>
> Letter from Bernal, A. I. H. to Morais, Sabato. Louisville, KY; Jun 1851

# CASE 3: WEB

![List of Web Functions](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-8.jpg)

In this third case study, web, we can use these formulas to import, export, or encode specific information from a web service on the Internet. 

* **ISURL** will check valid URLs - if it is a valid URL, it returns true; otherwise it returns false. This works whether or not your link is hyperlinked (with the blue font and underline). 
* **ENCODEURL** turns your text string into a link, which can be really helpful in passing it to some of these next functions. 
* **IMPORTDATA** imports the data from a URL of a .csv or .tsv file, rather than downloading the file and uploading or copying/pasting it yourself.
* **IMPORTXML** imports the data from an XML file. 
* **IMPORTHTML** imports data from a table or list within an HTML page. 

![Screenshot of Case 3 Spreadsheet](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-15.jpg)

*View the worksheet* [here](https://docs.google.com/spreadsheets/d/15qlFC78I1VpW_LCkhyNN6J9U-BG0yQInsM8EfBQxB3c/edit?usp=sharing).

In this case study, we're importing data from existing datasets from [OPenn](http://openn.library.upenn.edu/) and the [Judaica DH GitHub repository](https://github.com/judaicadh). 

* Import all attributes that are named "mainLang" from the XML file in Row 4. 
> =IMPORTXML(C4,"@mainLang")
>
> jrb 

* Import the data from the CSV in Row 3. 
> =IMPORTDATA(C3)

* Import the data from the table from the HTML page in Row 5.
> =IMPORTHTML(C5,"table", 1)

# CASE 4: VLOOKUP & QUERY

![List of VLOOKUP and QUERY functions](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-9.jpg)

In this fourth case study, lookup and reference, either looks up information about the data inside the cell or about the cell itself. 

* **VLOOKUP** is short for “vertical lookup” and it looks down the first column of a range for a specific key, and returns the value of a specified cell in the row found. It can work within a sheet as well as across sheets or worksheets.

* **QUERY** is arguably the most useful function in Google Sheets but the hardest one we’ll tackle today. It runs a language query across your data using database-type commands. 

![Screenshot of Case 4 Spreadsheet](https://judaicadh.github.io/assets/post-media/2020-07-06/google-sheets-16.jpg)

*View the worksheet* [here](https://docs.google.com/spreadsheets/d/15qlFC78I1VpW_LCkhyNN6J9U-BG0yQInsM8EfBQxB3c/edit?usp=sharing).

In this case study, we're working with data from the previous four case studies to look up more information about the data we've imported and collected.

* Search for the author_editor of the item with the pid "supp0785" from the CASE1 sheet.
> =VLOOKUP("supp0785",CASE1!A3:E21,3,FALSE)
>
> Alden, Isabella Macdonald, ed.

* Search for the manuscript name of the item with Box/Folder Location "SMBx1FF8_14" from the CASE2 sheet.
> =VLOOKUP("SMBx1FF8_14",CASE2!A2:F8,2,FALSE)
>
> Letter from Solis, S. to Weil, Clara E. Philadelphia, PA; May 1851

* Search for the file named "George Washington" from the CASE3 sheet.
> =VLOOKUP("George Washington",CASE3!A2:E25,1,FALSE). You will get #N/A because that doesn't exist in CASE3
>
> Alden, Isabella Macdonald, ed.

* Query the average year of the dataset in the CASE1 sheet. 
> =QUERY(CASE1!A3:E21,"select avg(B)")
>
> avg YEAR
>
> 1866

* Query the manuscript name where the year is 1853 in the CASE 2 sheet.
> =QUERY(CASE2!A2:F8, "select (B) where (D) > 1852")
>
> Name
>
> Letter from Morais, Sabato to Unknown Addressee. Philadelphia, PA; May 1853
>
> Letter from Labatt, D. C. to Morais, Sabato. New Orleans, LA; Sep 1853

# Next Steps with Google Sheets

Functions are one way to wrangle your data, but there are so many other things you can do and learn.

* [21 Awesome Things Google Sheets Can Do - Tips & Tricks (Benjamin Mangold)](https://www.lovesdata.com/blog/google-sheets-tips)
* [Custom Functions in Google Sheets (Google)](https://developers.google.com/apps-script/guides/sheets/functions)
* [Data Wrangling in Google Sheets: Debating Motions Example (Jessica Yung)](https://www.jessicayung.com/data-wrangling-in-google-sheets-debating-motions-example/ )
* [Google Sheets function list (Magnus Adielsson, Richard Barnes, Peter Kupfer, Iain Roberts, Jean Hollis Weber)](https://support.google.com/docs/table/25273?hl=en)
* [Google Sheets Tutorial (GCF Global)](https://edu.gcfglobal.org/en/googlespreadsheets/)
* [How We Helped Our Reporters Learn to Love Spreadsheets (Lindsey Rogers Cook)](https://open.nytimes.com/how-we-helped-our-reporters-learn-to-love-spreadsheets-adc43a93b919) and [Data Training Materials  (Lindsey Rogers Cook)](https://drive.google.com/drive/u/0/folders/1ZS57_40tWuIB7tV4APVMmTZ-5PXDwX9w) 
* [How to Use the QUERY Function in Google Sheets (Ben Stockton)](https://www.howtogeek.com/450465/how-to-use-the-query-function-in-google-sheets/)
* [Scraping, Transforming, and Enriching Bibliographic Data with Google Sheets (Michael P. Williams, Penn Libraries)](https://www.slideshare.net/MichaelWilliams513/scraping-transforming-and-enriching-bibliographic-data-with-google-sheets)
* [The Ultimate Guide to Google Sheets VLOOKUP Function (with examples) (Productivity Hotspot)](https://productivityspot.com/google-sheets-vlookup-function/)
* [Using IFERROR Function in Google Sheets (Productivity Spot)](https://productivityspot.com/iferror-function-google-sheets/)


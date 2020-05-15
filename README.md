# Judaica DH at the Penn Libraries
The code that forms our [Judaica DH at the Penn Libraries](judaicadh.github.io) site, and stuff related to improving the site (documentation, issue list of future work).

It was forked from [Scholars' Lab](https://scholarslab.lib.virginia.edu) at the University of Virginia Library. 

## Table of Contents

1. [View the site](#view-the-site)
2. [Contribute to the site](#contribute-to-the-site)
3. [Add an issue](#get-help-or-add-an-issue)
4. [Working with the site locally](#working-with-the-site-locally)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
	* [Building the site](#building-the-site)
	* [Rake tasks](#rake-tasks)

## View the site

1. [Judaicadh.github.io](judaicadh.github.io)
  * Our "live" (aka production) website that the world can see.
  * We change code in this repo, a service that Ammon created updates the UVA web server hosting our site, and the change appears on ScholarsLab.org a couple minutes later

## Contribute to the site

Check out the appropriate documentation for:  
* [editing or adding a new post or page](https://github.com/judaicadh/judaicadh.github.io/blob/master/docs/authoring-and-editing.md)  
* [template for new posts](https://docs.google.com/document/d/1OWBTybWrpZuesu8BQVQTbpXMkIC5p-nyAW26DV7r_A4/edit?usp=sharing)    * [template for new pages](https://docs.google.com/document/d/10OeLQUflD5txvjPQXFPHRgCpzfvu9_c9LC7R6nfXLl4/edit?usp=sharing)  
* [template for new events](https://docs.google.com/document/d/1qLncvRa6aqQPpf2BtZwGJFf_vqrLTG6EB6qoyenZxLc/edit?usp=sharing)  

...and then locate where you need to go in the repo:  

If you can't find the text you want to alter, it may be something that lives in a separate file:  

3. [/_includes](https://github.com/judaicadh/judaicadh.github.io/tree/master/_includes) covers things like our footer, navbar, and     
	A. Alerting folks to a snow day or other surprise/emergency notice: [/_includes/snowday.html](https://github.com/judaicadh/judaicadh.github.io/blob/master/_includes/snowday.html)  
	B. Updating the "Open Office Hours" sticky notice (in the homepage "upcoming events" list), e.g. when it's summer and we pause office hours until fall: [/_includes/open-office-hours.html](https://github.com/judaicadh/judaicadh.github.io/blob/master/_includes/open-office-hours.html)  
	
4. [/_layouts](https://github.com/judaicadh/judaicadh.github.io/tree/master/_layouts) covers structural stuff that is the same on a bunch of pages, e.g. setting all our project pages to list the title of the project, years, and collaborator names happens in [/layouts/work.html](https://github.com/judaicadh/judaicadh.github.io/blob/master/_layouts/work.html)  
5. [/collections](https://github.com/judaicadh/judaicadh.github.io/tree/master/collections) contain the following files, which get pulled into layouts to form posts or pages:  
	B. `/collections/_people`: a file for every person currently or formerly part of the team  
	C. `/collections/_posts`: our blog posts! (appear on /blog)
	E. `/collections/_work`: our projects/chunks of work (on /work and individual project pages)  

## Get help or add an issue

* Alerting the team to a bug, requested feature, possible future site work, or other fix? [Add to our issues list](https://github.com/judaicadh/judaicadh.github.io/issues); here's [how to add an issue](https://github.com/judaicadh/judaicadh.github.io/blob/readme-rebooot/docs/adding-an-issue.md), plus how to look through our (often long) list of existing issues.

* Check out our [list of frequent error messages](https://github.com/judaicadh/judaicadh.github.io/blob/readme-rebooot/docs/common-jekyll-problems.md) encountered when working with Jekyll locally. Please add any you encounter (even if you can't document how to solve it.)

## Working with the site locally

How to get the site up and running on your computer:

### Prerequisites

- Ruby 2.4.1 
	* OSX: Install/manage using [Ruby Version Manager](https://rvm.io/)
	* Windows: Install/manage using [Uru](https://bitbucket.org/jonforums/uru/wiki/Downloads)
- [Bundler](https://bundler.io/)
- [NPM](https://nodejs.org/en/)

*NB for Windows folks:* Uru is unzipped using 7-Zip, which can be downloaded [here](http://www.7-zip.org/download.html). If you're in a hurry, here's the executable for [version 16.04](http://www.7-zip.org/a/7z1604-x64.exe). Additionally, this [article](https://www.neverletdown.net/2015/08/managing-multiple-ruby-versions-with-uru.html) is a great explainer on how to use Uru effectively, including command line instructions.

### Installation

We use [Jekyll](https://jekyllrb.com) for publishing our site. To run the site locally, clone this Git repository and change directory into the project folder:

```bash
git clone git://github.com/judaicadh/judaicadh.github.io.git
cd scholarslab.org
```

To install all the necessary gems specified in the `Gemfile.lock`, run Bundler:

```bash
bundle install
```

To install all the necessary node packages, run NPM:
```bash
npm install
```
If this results in an error message, make sure you have Node.js and npm installed. Check out this [guide](http://blog.teamtreehouse.com/install-node-js-npm-mac), or go straight to the [download page](https://nodejs.org/en/).

### Building the site

To build the site and search corpus, run Rake:
```bash
rake
```

If this doesn't work, or you're on Windows, try:
```bash
bundle exec jekyll serve --watch
```

The site should build, and be locally accessible at [http://localhost:4000](http://localhost:4000).

### Rake tasks

The project includes several Rake tasks for creating new content.

#### Make a new person
```bash
rake new_person["First","Last"]
rake new_person["Emily","Esten"]
```

#### Make a new post given a title and an author name in the form of first_name last_name
```bash
rake new_post["Title here","First Last"]
ex.
rake new_post["A new blog post","Emily Esten"]
```

#### Make a new research project given a title
```bash
rake new_project["The name of your project goes here"]
``` 

If you run into errors, double check that you are copying the syntax exactly - no extra spaces, comma outside the quotation marks, etc.

---
layout: page
title: CV
permalink: /cv/
nav: true
order: 5
---
This project CV shares the prizes and grants Judaica DH has been honored to receive, the scholarly publications, and the invited, conference and community talks and workshops by our team members. You'll also find press coverage. This is modeled after the Project Curriculum Vitae by [Colored Conventions Project](https://coloredconventions.org/about/cv/). 

<!---### Funding/Grants:--->
<!---#### National Funding:--->
<!---#### University Funding:--->

<!---### Advisory Committees:--->

<!---### Symposiums Organized:--->


### Scholarly Publications:
#### Journal Articles
{% for link in site.data.cv.journals %}
{% if link.link != "" %}
* [{{ link.article }}]({{ link.link }})
{% else %}
* {{ link.article }}
{% endif %}
{% endfor %}

#### Datasets
{% for link in site.data.cv.datasets %}
* [{{ link.title }}]({{ link.url }})
{% endfor %}

<!---#### Web--->

<!---#### Other--->

<!---### Invited Talks and Panels:--->

### Conference Presentations:
{% for link in site.data.cv.conferences %}
{% if link.url %}
* [{{ link.title }}]({{ link.url }})  • A {{ link.type}} at {{ link.event }} ({{ link.institution }}; {{ link.location }}) •  {{ link.date }}
{% else %}
* {{ link.title }} • A {{ link.type}} at {{ link.event }} ({{ link.institution }}; {{ link.location }}) •  {{ link.date }}
{% endif %}
{% endfor %}

### Community Presentations:
{% for event in site.data.cv.community %}
* "{{ event.title }}"  • {{ event.institution }} ({{ event.location }}) • {{ event.date }}
{% endfor %}

<!---### Workshops and Workshop Series:--->

#### Transcribe-a-thons: 
{% for link in site.data.cv.transcribeathons %}
* [{{ link. institution }}]({{ link.url }})  • {{ link.date }}

{% endfor %}

### Press and Reviews

### Reviews
{% for link in site.data.cv.reviews %}
{% if link.link != "" %}
* [{{ link.article }}]({{ link.link }})
{% else %}
* {{ link.article }}
{% endif %}
{% endfor %}


#### [Scribes of the Cairo Geniza](/work/cairo-geniza) Press:
{% for link in site.data.cv.press %}
{% if link.type == "cairogeniza" %}
* [{{ link.article }}]({{ link.link }})
{% endif %}
{% endfor %}

#### [Scribes of the Seder](/work/cairo-geniza) Press:
{% for link in site.data.cv.press %}
{% if link.type == "seder" %}
* [{{ link.article }}]({{ link.link }})
{% endif %}
{% endfor %}

#### Other Press:
{% for link in site.data.cv.press %}
{% if link.type == "general" %}
* [{{ link.article }}]({{ link.link }})
{% endif %}
{% endfor %}

### Honors and Awards:
{% for award in site.data.cv.awards %}
{{ award.title }} • {{ award.date }} • {{ award.secondary }}
{% endfor %}




Beer Advocate's Top 250 Beers
=============================

Demo: [dmofot.github.io/batop250](https://dmofot.github.io/batop250)

After [Maptime Boston's](http://www.meetup.com/Maptime-Boston/) first event on [Intro to Web Maps and Mappers](http://www.meetup.com/Maptime-Boston/events/188255552/), a comment pointed out an article on [The Top 250 Beers in the World: Mapped](http://epic-curiousity.com/2014/06/beer-bucket-list-map-top-250.html).  The article includes a nice little embedded [Leaflet](http://www.leafletjs.com) map with markerclustering.

Jake Wasserman then downloaded and heavily parsed the [data](https://gist.github.com/jwass/7e3cbef7844f80899662) to produce [beers.geojson](https://gist.github.com/jwass/7e3cbef7844f80899662#file-beers-geojson), where each beer has the following properties:

* name
* address
* abv: Alcohol by Volume (%)
* rank: beeradvocate.com rank
* rating: Average rating (1-5)
* homepage
* Beer Advocate page

I thought it would be nice to throw the data into Bryan McBride's [BootLeaf](https://github.com/bmcbride/bootleaf) template to show how quickly one can create a mobile friendly web map.  It includes geolocation, so anyone can quickly see if there are any top beers nearby, because you just never know...  Bonus, it makes it easy to search through the list of beers to see if your favorite is on there.

If you're looking to contribute, one thing that could be added is the ability to search through multiple fields in the data file, rather than just beer name, e.g. the ability to search by beer name _or_ brewery name (usually contained in the address field).

Credits:
* [Beer Advocate](http://www.beeradvocate.com/) and their community for the Top 250 Beer [list](http://www.beeradvocate.com/lists/top/)
* Joe @ [Epic Curiousity](http://epic-curiousity.com/) - for the original [article](http://epic-curiousity.com/2014/06/beer-bucket-list-map-top-250.html) and map
* Matthew Rouser for pointing out the article
* @jwass for parsing the [data](https://gist.github.com/jwass/7e3cbef7844f80899662) and making it available
* @bmcbride for the [BootLeaf](https://github.com/bmcbride/bootleaf) template
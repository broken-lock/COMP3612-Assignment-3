# COMP 3612: Node API

## Overview
A node JS server using the express modules route functionality. The core of the assignement is to set up a remote 
server to provide Art gallery data to api query requests. As of writting this server is hosted at render.com. 

The following table shows the api end-points and their purpose:
<table border="1">
<thead>
<tr>
    <th>Route</th>
    <th>Purpose</th>
</tr>
</thead>
<tbody>
    <tr>
        <td>/api/paintings</td>
        <td>Returns JSON for all paintings</td>
    </tr>
    <tr>
        <td>/api/painting/id</td>
        <td>Returns JSON for the single painting whose id matches the provided id</td>
    </tr>
    <tr>
        <td>/api/painting/galley/id</td>
        <td>Returns JSON for the painting whose gallery id matches the provided gallery id</td>
    </tr>
    <tr>
        <td>/api/painting/artist/id</td>
        <td>Returns JSON for the paintings whose artist id matches the provided artist id</td>
    </tr>
    <tr>
        <td>/api/painting/year/min/max</td>
        <td>Returns the paintings whose yearOfWork field is between the two supplied values.</td>
    </tr>
    <tr>
        <td>/api/painting/title/text</td>
        <td>Returns JSON for the paintings whose title contains (somewhere) the provided text. This search is case sensitive.</td>
    </tr>
    <tr>
        <td>/api/painting/color/name</td>
        <td>Returns JSON for the paintings that have a color that matches the provided hex value. Each painting has a dominantColors array with th six most common colors in the painting; each of these color values comes with a property named name that contains the name for that color. This search is case insensitive.</td>
    </tr>
    <tr>
        <td>/api/artists</td>
        <td>Returns JSON for all artists.</td>
    </tr>
    <tr>
        <td>/api/artists/country</td>
        <td>Returns JSON for all artists from the specified country. This should be case insensitive.</td>
    </tr>
    <tr>
        <td>/api/galleries</td>
        <td>Returns JSON for all galleries.</td>
    </tr>
    <tr>
        <td>/api/galleries/country</td>
        <td>Returns JSON for all galleries from the specified country. This should be case insesitive.</td>
    </tr>
</tbody>
</table>

## USAGE

To make a query to the server, preface the api route with the server host, as follows:

## TESTING

/api/paintings
/api/painting/433
/api/painting/43374534856
/api/painting/gallery/7
/api/painting/gallery/43374534856
/api/painting/artist/106
/api/painting/artist/43374534856
/api/painting/year/1850/1900
/api/painting/year/2200/2400
/api/painting/title/self
/api/painting/title/dfjkghdfkgh
/api/painting/color/NAPA
/api/painting/color/coffee%20bean
/api/painting/color/kcvhvxchbkcj
/api/artists
/api/artists/FRANCE
/api/artists/france
/api/artists/sdfjjsdf
/api/galleries
/api/galleries/france
/api/galleries/kcvhvxchbkcj
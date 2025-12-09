# COMP 3612: Node API

## Overview
A node JS server using the express modules route functionality. The core of the assignement is to set up a remote 
server to provide Art gallery data to api query requests. As of writting this server is hosted at render.com. 

The following table shows the api end-points and their purpose:
<table border="1" style="width: 40%;">
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

<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/paintings">https://comp3612-assignment-3-5ixq.onrender.com/api/paintings</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/433">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/433</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/43374534856">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/43374534856</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/gallery/7">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/gallery/7</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/gallery/43374534856">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/gallery/43374534856</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/artist/106">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/artist/106</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/artist/43374534856">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/artist/43374534856</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/year/1850/1900">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/year/1850/1900</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/year/2200/2400">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/year/2200/2400</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/title/self">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/title/self</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/title/dfjkghdfkgh">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/title/dfjkghdfkgh</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/NAPA">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/NAPA</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/coffee%20bean">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/coffee%20bean</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/kcvhvxchbkcj">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/kcvhvxchbkcj</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/artists">https://comp3612-assignment-3-5ixq.onrender.com/api/artists</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/artists/FRANCE">https://comp3612-assignment-3-5ixq.onrender.com/api/artists/FRANCE</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/artists/france">https://comp3612-assignment-3-5ixq.onrender.com/api/artists/france</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/artists/sdfjjsdf">https://comp3612-assignment-3-5ixq.onrender.com/api/artists/sdfjjsdf</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/galleries">https://comp3612-assignment-3-5ixq.onrender.com/api/galleries</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/galleries/france">https://comp3612-assignment-3-5ixq.onrender.com/api/galleries/france</a><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/galleries/kcvhvxchbkcj">https://comp3612-assignment-3-5ixq.onrender.com/api/galleries/kcvhvxchbkcj</a><br>

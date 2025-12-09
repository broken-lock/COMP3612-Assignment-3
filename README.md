# COMP 3612: Node API

## Overview
A Node.js server using the Express module's route functionality. The core of the assignment is to set up a remote server to provide art gallery data to API query requests. As of writing, this server is hosted at render.com.

The following table shows the api end-points and their purpose:
| Route &nbsp; &nbsp; &nbsp; | Purpose |
| ---- | ---- |
| `/api/paintings` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for all paintings |
| `/api/painting/id` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for the single painting whose id matches the provided id |
| `/api/painting/gallery/id` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for the painting whose gallery id matches the provided gallery id |
| `/api/painting/artist/id` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for the paintings whose artist id matches the provided artist id |
| `/api/painting/year/min/max` &nbsp; &nbsp; &nbsp; &nbsp; | Returns the paintings whose yearOfWork field is between the two supplied values. |
| `/api/painting/title/text` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for the paintings whose title contains the provided `text`. This search is case insensitive. |
| `/api/painting/color/name` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for the paintings that have a color that matches the provided hex value. Each painting has a dominantColors array with th six most common colors in the painting; each of these color values comes with a property named name that contains the name for that color. This search is case insensitive. |
| `/api/artists` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for all artists. |
| `/api/artists/country` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for all artists from the specified country. This search is case insensitive. |
| `/api/galleries` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for all galleries. |
| `/api/galleries/country` &nbsp; &nbsp; &nbsp; &nbsp; | Returns JSON for all galleries from the specified country. This search is case insesitive. |
## USAGE

<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/paintings">https://comp3612-assignment-3-5ixq.onrender.com/api/paintings</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/433">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/433</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/43374534856">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/43374534856</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/gallery/7">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/gallery/7</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/gallery/43374534856">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/gallery/43374534856</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/artist/106">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/artist/106</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/artist/43374534856">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/artist/43374534856</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/year/1850/1900">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/year/1850/1900</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/year/2200/2400">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/year/2200/2400</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/title/self">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/title/self</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/title/dfjkghdfkgh">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/title/dfjkghdfkgh</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/NAPA">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/NAPA</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/coffee%20bean">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/coffee%20bean</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/kcvhvxchbkcj">https://comp3612-assignment-3-5ixq.onrender.com/api/painting/color/kcvhvxchbkcj</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/artists">https://comp3612-assignment-3-5ixq.onrender.com/api/artists</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/artists/FRANCE">https://comp3612-assignment-3-5ixq.onrender.com/api/artists/FRANCE</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/artists/france">https://comp3612-assignment-3-5ixq.onrender.com/api/artists/france</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/artists/sdfjjsdf">https://comp3612-assignment-3-5ixq.onrender.com/api/artists/sdfjjsdf</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/galleries">https://comp3612-assignment-3-5ixq.onrender.com/api/galleries</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/galleries/france">https://comp3612-assignment-3-5ixq.onrender.com/api/galleries/france</a><br><br>
<a href="https://comp3612-assignment-3-5ixq.onrender.com/api/galleries/kcvhvxchbkcj">https://comp3612-assignment-3-5ixq.onrender.com/api/galleries/kcvhvxchbkcj</a><br><br>

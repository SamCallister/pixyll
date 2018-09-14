---
layout:     post
title:      Rotation showing parts of a whole
date:       2018-09-14
summary:    Showing parts of whole with scales
categories: [datavis]
---
I thought it would be fun to [make a visualization](https://github.com/SamCallister/scales) using a rotation animation to show parts of a whole. Behold the scales of data visualization:

<div class="legend-container">
    <svg id="legend"></svg>
</div>

<div class="scales-container">
    <svg id="scales" viewBox="0 0 100 100" class="scales" preserveAspectRatio="xMaxYMax slice"></svg>
</div>

<div class="source-container">
    <a href="https://pressgallery.house.gov/member-data/party-breakdown">Source</a>
</div>

<div class="legend-container">
    <svg id="legendTwo"></svg>
</div>

<div class="scales-container">
    <svg id="scalesTwo" viewBox="0 0 100 100" class="scales" preserveAspectRatio="xMaxYMax slice"></svg>
</div>

<div class="source-container">
    <a href="https://www.citylab.com/transportation/2015/04/global-car-motorcycle-and-bike-ownership-in-1-infographic/390777/">Source</a>
</div>
<link rel="stylesheet" href="{{base.url | prepend: site.url}}/assets/css/scales.css" type="text/css">
<script src="{{base.url | prepend: site.url}}/assets/vendor/d3.min.js" type="text/javascript"></script>
<script src="{{base.url | prepend: site.url}}/assets/vendor/d3-legend.min.js" type="text/javascript"></script>
<script src="{{base.url | prepend: site.url}}/assets/vendor/scales.min.js" type="text/javascript"></script>
<script src="{{base.url | prepend: site.url}}/assets/js/scalesExample.js" type="text/javascript"></script>
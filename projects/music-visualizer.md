---
title: LED Music Visualizer
year: '2012'
---

<iframe width="640" height="390" src="//www.youtube.com/embed/___XwMbhV4k" frameborder="0" allowfullscreen="" style="margin-bottom: 20px;"></iframe>
<iframe width="640" height="390" src="//www.youtube.com/embed/D_83ZUk8p-U" frameborder="0" allowfullscreen=""></iframe>

## Description ##

Audio is passed in via a standard audio cable through the back of the unit. Inside, a spectrum analyzer chip breaks down the sound into seven frequency bands, passing the results to an Arduino microcontroller. The Arduino takes this information and directs four LED drivers to display the audio spectrum by powering a matrix of 49 LEDs in time with the music.

## Parts List ##

- 1x Arduino Duemilanove
- 1x Bliptronics Spectrum Analyzer shield
- 1x 9 VDC 1A regulated switching power adapter
- 1x 5 VDC 1A regulated switching power adapter
- 4x Capacitor Ceramic 0.1 µF
- 1x DC Barrel Power Jack/Connector
- 28x green LEDs
- 14x orange LEDs
- 7x red LEDs
- 49x T1 3/4 LED mounting hardware
- 4x 1.5 kΩ resistor
- 4x TI TLC5940 LED driver
- 2x Breadboard
- Wire, wood, screws

## Schematics & Source

- <a href="/projects/music-visualizer/visualizer_bb_lg.png" target="_blank">Breadboard</a>
- <a href="/projects/music-visualizer/visualizer_schem_lg.png" target="_blank">Schematic</a>
- <a href="/projects/music-visualizer/visualizer.ino.txt" target="_blank">Arduino source code</a>
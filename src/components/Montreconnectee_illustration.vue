<script setup lang="ts">
import type { Montre } from '@/types';
withDefaults(defineProps<Montre>(), {
  boitier: '#ffffff',
  bracelet: '#ffffff',
  ecran: '#b3b3b3',
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 380.41 711">
    <defs>
      <radialGradient id="radial-gradient" cx="1027.95" cy="-22914.37" r="28.95"
        gradientTransform="translate(-1141.66 5795.64) scale(1.14 0.25)" gradientUnits="userSpaceOnUse">
        <stop offset="0.1" stop-color="#dadada" stop-opacity="0.95" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="radial-gradient-2" cx="33.03" cy="57.46" r="34.11" gradientTransform="translate(-0.04)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#b1bfc7" />
      </radialGradient>
      <radialGradient id="radial-gradient-3" cx="21.19" cy="39.89" r="11.71" gradientTransform="translate(-0.04)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.11" stop-color="#fff" />
        <stop offset="0.95" />
      </radialGradient>
      <radialGradient id="radial-gradient-4" cx="18.46" cy="19.69" r="2.81" xlink:href="#radial-gradient-3" />
      <radialGradient id="radial-gradient-5" cx="17.69" cy="42.76" r="4.36" xlink:href="#radial-gradient-3" />
      <radialGradient id="radial-gradient-6" cx="37.41" cy="14.67" r="5.26" xlink:href="#radial-gradient-3" />
      <radialGradient id="radial-gradient-7" cx="35.52" cy="25.67" r="1.08" xlink:href="#radial-gradient-3" />
      <radialGradient id="radial-gradient-8" cx="24.86" cy="27.59" r="2.22" xlink:href="#radial-gradient-3" />
      <radialGradient id="radial-gradient-9" cx="49.27" cy="30.89" r="15.41" xlink:href="#radial-gradient-3" />
      <linearGradient id="linear-gradient" x1="-560.65" y1="-583.25" x2="-597.7" y2="-546.2"
        gradientTransform="matrix(0.96, -0.04, -0.04, 0.96, 576.43, 564.93)" gradientUnits="userSpaceOnUse">
        <stop offset="0" />
        <stop offset="0.6" stop-color="#fff" />
        <stop offset="0.9" />
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="18959.75" y1="12535.23" x2="18922.7" y2="12572.28"
        gradientTransform="matrix(-0.37, -1, -0.85, 0.64, 17701.4, 10911.04)" xlink:href="#linear-gradient" />
      <linearGradient id="linear-gradient-3" x1="18623.39" y1="5115.24" x2="18586.34" y2="5152.29"
        gradientTransform="matrix(-0.55, -0.84, 0.91, -0.42, 5598.92, 17806.05)" xlink:href="#linear-gradient" />
      <linearGradient id="linear-gradient-4" x1="-2847" y1="5755.36" x2="-2884.06" y2="5792.42"
        gradientTransform="matrix(0.83, 0.55, -0.55, 0.83, 5609.73, -3209.48)" xlink:href="#linear-gradient" />
      <linearGradient id="linear-gradient-5" x1="2577.81" y1="14915.21" x2="2540.76" y2="14952.26"
        gradientTransform="matrix(-0.43, 1.4, -1.45, 0.01, 22784.55, -3726.23)" xlink:href="#linear-gradient" />
      <linearGradient id="linear-gradient-6" x1="8121.22" y1="-1938.34" x2="8084.16" y2="-1901.29"
        gradientTransform="matrix(0.81, -0.83, 0.84, 0.8, -4888.73, 8321.4)" xlink:href="#linear-gradient" />
      <linearGradient id="linear-gradient-7" x1="17700.74" y1="10160.4" x2="17663.69" y2="10197.46"
        gradientTransform="matrix(-0.95, -0.54, 0.41, -1.01, 12704.2, 19911.33)" xlink:href="#linear-gradient" />
      <linearGradient id="linear-gradient-8" x1="-3640.78" y1="-15472.94" x2="-3640.78" y2="-15392.38"
        gradientTransform="translate(2538.31 5136.51) scale(0.69 0.33)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient id="linear-gradient-9" x1="16.51" y1="6.01" x2="34.28" y2="48.69" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#d4d6d7" />
      </linearGradient>
      <linearGradient id="linear-gradient-10" x1="38.66" y1="42.26" x2="14.7" y2="12.42" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#b8babc" />
      </linearGradient>
      <radialGradient id="radial-gradient-10" cx="20.17" cy="17.26" r="15.36" gradientTransform="translate(0)"
        xlink:href="#radial-gradient-2" />
      <linearGradient id="linear-gradient-11" x1="21.73" y1="20.07" x2="32.55" y2="38.74"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#b7c6ce" />
      </linearGradient>
      <symbol id="Chargement_4" data-name="Chargement 4" viewBox="0 0 35.92 35.92">
        <path class="cls-1" d="M16.83,0A17.93,17.93,0,0,0,6.06,4.47l7.46,7.46a7.37,7.37,0,0,1,3.31-1.37Z" />
        <path class="cls-2" d="M0,19.09A18,18,0,0,0,4.46,29.87l7.47-7.47a7.4,7.4,0,0,1-1.38-3.31Z" />
        <path class="cls-3" d="M4.47,6.06A17.88,17.88,0,0,0,0,16.84H10.55a7.49,7.49,0,0,1,1.38-3.32Z" />
        <path class="cls-4" d="M29.87,4.47A18,18,0,0,0,19.08,0V10.56a7.32,7.32,0,0,1,3.32,1.37Z" />
        <path class="cls-5" d="M24,22.41l7.46,7.46a17.89,17.89,0,0,0,4.46-10.78H25.37A7.59,7.59,0,0,1,24,22.41Z" />
        <path class="cls-6" d="M35.92,16.84A17.87,17.87,0,0,0,31.46,6.06L24,13.52a7.49,7.49,0,0,1,1.38,3.32Z" />
        <path class="cls-7" d="M6.06,31.46a17.86,17.86,0,0,0,10.77,4.46V25.37A7.6,7.6,0,0,1,13.52,24Z" />
        <path class="cls-8" d="M19.08,35.92a17.92,17.92,0,0,0,10.79-4.46L22.4,24a7.49,7.49,0,0,1-3.32,1.37Z" />
      </symbol>
      <symbol id="Orb_-_Gris" data-name="Orb - Gris" viewBox="0 0 66.17 72">
        <path class="cls-9"
          d="M66.17,64.76c0,4-14.81,7.24-33.08,7.24S0,68.76,0,64.76s14.81-7.24,33.09-7.24S66.17,60.76,66.17,64.76Z" />
        <g>
          <g>
            <path class="cls-10" d="M33.09,65.92A32.84,32.84,0,1,1,65.92,33.09,32.87,32.87,0,0,1,33.09,65.92Z" />
            <path class="cls-11"
              d="M33.09.5A32.59,32.59,0,1,1,.5,33.09,32.62,32.62,0,0,1,33.09.5m0-.5A33.09,33.09,0,1,0,66.17,33.09,33.08,33.08,0,0,0,33.09,0Z" />
          </g>
          <path class="cls-12" d="M32.86,39.89A11.71,11.71,0,1,1,21.15,28.18,11.71,11.71,0,0,1,32.86,39.89Z" />
          <path class="cls-13" d="M21.23,19.7a2.81,2.81,0,1,1-2.81-2.82A2.81,2.81,0,0,1,21.23,19.7Z" />
          <path class="cls-14" d="M22,42.77a4.37,4.37,0,1,1-4.36-4.37A4.36,4.36,0,0,1,22,42.77Z" />
          <path class="cls-15" d="M42.63,14.67a5.26,5.26,0,1,1-5.26-5.26A5.27,5.27,0,0,1,42.63,14.67Z" />
          <path class="cls-16" d="M36.56,25.67a1.08,1.08,0,1,1-1.08-1.08A1.07,1.07,0,0,1,36.56,25.67Z" />
          <path class="cls-17" d="M27,27.59a2.22,2.22,0,1,1-2.22-2.22A2.22,2.22,0,0,1,27,27.59Z" />
          <path class="cls-18" d="M64.65,30.89A15.42,15.42,0,1,1,49.23,15.47,15.41,15.41,0,0,1,64.65,30.89Z" />
          <path class="cls-19"
            d="M36.3,37.52c9.68-9.87,20.57-15,24.87-11.9a2.67,2.67,0,0,0-.38-.44C56.84,21.3,45.5,26.46,35.46,36.7s-15,21.68-11,25.56a4,4,0,0,0,.45.37C21.69,58.39,26.62,47.4,36.3,37.52Z" />
          <path class="cls-20"
            d="M39.22,35.14C44,19.2,44.11,5,39.51,2.57a2.66,2.66,0,0,1,.56.12c5.12,1.58,5.22,16.26.23,32.79S27.12,64.12,22,62.53a2.62,2.62,0,0,1-.52-.22C26.61,62.91,34.41,51.08,39.22,35.14Z" />
          <path class="cls-21"
            d="M31.64,48.26C17.31,44.34,6.7,37.12,7.28,31.82a3.66,3.66,0,0,0-.21.55c-1.46,5.34,9.4,13,24.26,17s28.09,3,29.54-2.32A2.87,2.87,0,0,0,61,46.5C58.78,51.35,46,52.18,31.64,48.26Z" />
          <path class="cls-22"
            d="M31.25,16.1c13.53-2.88,25.51-.84,27.47,4.54a4.55,4.55,0,0,0-.09-.63C57.39,14.18,45,11.88,31,14.87S6.61,25,7.85,30.85a5.94,5.94,0,0,0,.18.6C7.62,25.74,17.73,19,31.25,16.1Z" />
          <path class="cls-23"
            d="M45.39,23.73C55.59,37.11,58,52.56,51.07,59a10.11,10.11,0,0,0,.87-.58c7.87-6,5.68-22.1-4.88-36S21.54,2.2,13.68,8.19a8.7,8.7,0,0,0-.8.68C20.94,3.93,35.2,10.35,45.39,23.73Z" />
          <path class="cls-24"
            d="M17.91,34c-.5-16,4.32-29.15,10.88-30.26a5.85,5.85,0,0,0-.73,0c-6.93.22-12.14,13.81-11.62,30.35S23,63.82,29.93,63.61a5.82,5.82,0,0,0,.73-.08C24,62.83,18.4,50,17.91,34Z" />
          <path class="cls-25"
            d="M42.24,56.76C29,61.52,16.45,60.49,13.46,54.55a5.75,5.75,0,0,0,.2.71C16,61.79,29,63.08,42.74,58.14S65.65,43.92,63.3,37.39a5.65,5.65,0,0,0-.29-.67C64.49,43.2,55.46,52,42.24,56.76Z" />
          <g class="cls-26">
            <path class="cls-27"
              d="M52.85,14.2c0,5.55-8.85,10.05-19.76,10.05s-19.77-4.5-19.77-10S22.17,4.14,33.09,4.14,52.85,8.64,52.85,14.2Z" />
          </g>
        </g>
      </symbol>
      <symbol id="Puce_6_-_Gris" data-name="Puce 6 - Gris" viewBox="0 0 48 48">
        <g>
          <path class="cls-28" d="M24,47.75A23.75,23.75,0,1,1,47.75,24,23.78,23.78,0,0,1,24,47.75Z" />
          <path class="cls-29"
            d="M24,.5A23.5,23.5,0,1,1,.5,24,23.52,23.52,0,0,1,24,.5M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Z" />
        </g>
        <path class="cls-30" d="M41.5,24A17.5,17.5,0,1,1,24,6.5,17.49,17.49,0,0,1,41.5,24Z" />
        <g>
          <path class="cls-31" d="M24,38.5A14.5,14.5,0,1,1,38.5,24,14.52,14.52,0,0,1,24,38.5Z" />
          <path class="cls-11" d="M24,10A14,14,0,1,1,10,24,14,14,0,0,1,24,10m0-1A15,15,0,1,0,39,24,15,15,0,0,0,24,9Z" />
        </g>
        <g class="cls-32">
          <path class="cls-33" d="M32.91,12A15.33,15.33,0,0,1,33.06,14,15,15,0,0,1,9.16,26.05,15,15,0,1,0,32.91,12Z" />
        </g>
      </symbol>
    </defs>
    <g id="bracelet">
      <path :fill="bracelet" stroke="black" stroke-width="0.5"
        d="M550.41,73.36S602.58,53.07,649,54.52s95.65,15.94,95.65,15.94-29,271-26.09,349.28S746.06,727,746.06,727s-47.83,21.73-92.76,18.84-97.1-17.4-97.1-17.4S580.09,489.3,580.09,395.1,550.41,73.36,550.41,73.36Z"
        transform="translate(-459.17 -45.58)" />
      <path :fill="bracelet" stroke="black" stroke-width="0.5"
        d="M509.83,199.45S549,127,544.61,73.36c0,0,17.39-27.53,102.9-27.53S757.65,64.67,757.65,64.67s14.8,110.14,35.09,130.43c0,0-96,18.84-148.13,18.84S509.83,199.45,509.83,199.45Z"
        transform="translate(-459.17 -45.58)" />
      <path :fill="bracelet" stroke="black" stroke-width="0.5"
        d="M795.14,607.79s-41.87,70.92-39.57,124.67c0,0-18.43,26.85-103.87,23.59s-109.35-23-109.35-23S531.76,622.4,512.26,601.35c0,0,96.61-15.17,148.74-13.18S795.14,607.79,795.14,607.79Z"
        transform="translate(-459.17 -45.58)" />
    </g>
    <g id="boitier">
      <rect :fill="boitier" stroke="black" stroke-width="0.5" x="0.25" y="130.63" width="379.91" height="453.62" rx="80.8" />
      <rect :fill="boitier" stroke="black" stroke-width="0.5" x="19.52" y="156.05" width="341.37" height="402.78" rx="72.17" />
      <rect :fill="ecran" stroke="black" stroke-width="0.5" x="38.43" y="172.53" width="303.55" height="369.83" rx="65.21" />
    </g>
    <g id="ecran">
      <text class="cls-36" transform="translate(59.96 329.78)">1O:1O</text>
      <text class="cls-37" transform="translate(109.28 222.03)">
        <tspan xml:space="preserve">Lun. 24 oct.</tspan>
      </text>
      <text class="cls-37" transform="translate(135.34 511.45)">TiK•TaK</text>
      <use width="35.92" height="35.92" transform="translate(249.08 396.86) scale(1.22)" xlink:href="#Chargement_4" />
      <use width="66.17" height="72" transform="translate(88.65 395.79) scale(0.64)" xlink:href="#Orb_-_Gris" />
      <use width="48" height="48" transform="translate(169.03 394.86)" xlink:href="#Puce_6_-_Gris" />
    </g>
  </svg>
</template>
<style>
.cls-1 {
  fill: #bbbdbf;
}

.cls-2 {
  fill: #929497;
}

.cls-3 {
  fill: #a6a8ab;
}

.cls-4 {
  fill: #231f20;
}

.cls-5 {
  fill: #58595b;
}

.cls-6 {
  fill: #404041;
}

.cls-7 {
  fill: #808284;
}

.cls-8 {
  fill: #6d6e70;
}

.cls-32,
.cls-9 {
  mix-blend-mode: multiply;
}

.cls-9 {
  fill: url(#radial-gradient);
}

.cls-10 {
  fill: url(#radial-gradient-2);
}

.cls-11 {
  fill: #8c98a0;
}

.cls-12 {
  opacity: 0.6;
  fill: url(#radial-gradient-3);
}

.cls-12,
.cls-13,
.cls-14,
.cls-15,
.cls-16,
.cls-17,
.cls-18,
.cls-19,
.cls-20,
.cls-21,
.cls-22,
.cls-23,
.cls-24,
.cls-25,
.cls-26 {
  mix-blend-mode: screen;
}

.cls-13,
.cls-14,
.cls-15,
.cls-18,
.cls-32 {
  opacity: 0.8;
}

.cls-13 {
  fill: url(#radial-gradient-4);
}

.cls-14 {
  fill: url(#radial-gradient-5);
}

.cls-15 {
  fill: url(#radial-gradient-6);
}

.cls-16 {
  fill: url(#radial-gradient-7);
}

.cls-17 {
  fill: url(#radial-gradient-8);
}

.cls-18 {
  fill: url(#radial-gradient-9);
}

.cls-19 {
  fill: url(#linear-gradient);
}

.cls-20 {
  opacity: 0.4;
  fill: url(#linear-gradient-2);
}

.cls-21,
.cls-25 {
  opacity: 0.7;
}

.cls-21 {
  fill: url(#linear-gradient-3);
}

.cls-22 {
  fill: url(#linear-gradient-4);
}

.cls-23 {
  fill: url(#linear-gradient-5);
}

.cls-24 {
  fill: url(#linear-gradient-6);
}

.cls-25 {
  fill: url(#linear-gradient-7);
}

.cls-27 {
  fill: url(#linear-gradient-8);
}

.cls-28 {
  fill: url(#linear-gradient-9);
}

.cls-29 {
  fill: #b2b4b7;
}

.cls-30 {
  fill: url(#linear-gradient-10);
}

.cls-31 {
  fill: url(#radial-gradient-10);
}

.cls-33 {
  fill: url(#linear-gradient-11);
}

.cls-34 {
  fill: #fff;
}

.cls-34,
.cls-35 {
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 0.5px;
}

.cls-35 {
  fill: #b3b3b3;
}

.cls-36 {
  font-size: 98px;
  letter-spacing: -0.11em;
}

.cls-36,
.cls-37 {
  font-family: ArialMT, Arial;
}

.cls-37 {
  font-size: 30px;
  letter-spacing: -0.01em;
}
</style>
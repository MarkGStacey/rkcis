<template>
  <Layout>
    <div class="container">

      <div class="competitor-header">
        <p>
          Analysis of competitor products.
          Sports watch products and traditional cardio workout products have been excluded as not being a competitor as such
        </p>
      </div>
      <table style="width:100%">
        <thead style="font-size:18px;background-color: rgb(218, 221, 218)">
          <tr>
            <td>
              Competitor
            </td>
            <td>
              Link
            </td>
            <td>
              Key USP
            </td>
            <td>
              Audience
            </td>
            <td>
              Comments
            </td>
            <td>
              Pricing
            </td>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="https://www.rehabguru.com/">Rehab guru</a></td>
            <td>Telehealth - video calls</td>
            <td>Physios</td>
            <td>Rehab guru is the strongest competitor in the rehab space - a decent exercise library, and the telehealth feature make it a strong contender</td>
            <td>£30 / month - 3 users</td>
        </tr>
          <tr>
            <td><a href="https://www.myphysiorehab.com/">MyPhysio Rehab</a></td>
            <td>Skype integration for instant messaging</td>
            <td>Physios</td>
            <td>New exercise and injury profiles are clunky</td>
            <td>£25.95 / month</td>
        </tr>
          <tr>
            <td><a href="https://www.rehabmypatient.com/">Rehab My Patient</a></td>
            <td>Rehab guru but cheaper</td>
            <td>Physios</td>
            <td>A not quite as good version of rehab guru. Also, creting plans is clunky</td>
            <td>£16.42 / monthly</td>
        </tr>
          <tr>
            <td><a href="https://physiotec.ca/ca/en/">Physiotec</a></td>
            <td>Similar to rehab guru/rehab my patient - but integrates directly with practice management software</td>
            <td>Physios</td>
            <td>The practice management slant gives them a sales advantage.</td>
            <td>Hidden and variable - sold through partners</td>
        </tr>
          <tr>
            <td><a href="https://www.simpleset.net/">SimpleSet Pro</a></td>
            <td>Physios</td>
            <td>More clinically oriented than the apps mentioned above</td>
            <td>Drag and drop program building is nice - but still rigid</td>
            <td>Clinic not listed. CAD$ 12.48 / month for individual</td>
        </tr>
          <tr>
            <td><a href="https://truecoach.co/">True Coach</a></td>
            <td>Collaboration between coaches and clients</td>
            <td>Personal trainers</td>
            <td>Workout logging features and links to videos are an overlap, and user interface wise it's better than most of the rehab apps. Real time recorded messaging is also good</td>
            <td>$49 / month for 20 clients, $99 / months for 50</td>
        </tr>
        <tr>
            <td><a href="https://www.mypthub.net/">My Pt HUB</a></td>
            <td>Video library & your own branding</td>
            <td>Personal trainers</td>
            <td>Workout logging and design less slick than true coach. Also does practice management that we don't aim at</td>
            <td>$49 / month</td>
        </tr>
          <tr>
            <td><a href="https://www.coachseye.com/">Coaches eye</a></td>
            <td>Video analysis</td>
            <td>Coaches - in person</td>
            <td>A competitor for the video analysis sectiosn - but not anything else</td>
            <td>$120 / year</td>
        </tr>
          <!-- <tr>
            <td>Polar beat</td>
            <td><a href="https://www.coachseye.com/">Link</a></td>
            <td>Ties in with Polar eco system</td>
            <td>Audience</td>
            <td>Comments</td>
        </tr> -->
          <tr>
            <td><a href="https://chrome.google.com/webstore/detail/mindful-break/onjcfgnjjbnflacfbnjaapcbiecckilk?hl=en-GB">Mindful break</a></td>
            <td></td>
            <td>Integrated to chrome</td>
            <td>Office workers at their desk</td>
            <td>The only extension similar that promotes breaks</td>
            <td>Free</td>
        </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>

table {
  border-color: rgb(226, 232, 240);
}
td {
  border-style:solid;
  border-width:1px;
  border-color: rgb(226, 232, 240);
}

 tr:nth-child(even) { 
            background-color: rgb(218, 221, 218); 
        } 
thead {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
}

.competitor-header {
  padding: 2rem 0 4rem 0;
}
.competitor-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>


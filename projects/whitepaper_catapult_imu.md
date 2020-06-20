---
thumbnail: '/uploads/catapult_imu.png'
title: Inertial Movement Analysis
date: 2020-06-17
categories:
- information-systems
- submission
- whitepaper
project_bg_color: ''
project_fg_color: ''
order: 600
---
# Inertial Movement Analysis, by Catapult

https://images.catapultsports.com/wp-content/uploads/2018/10/IMA_WP_vF.pdf

This paper validates the data collected by Catapult's accelerometer based sensor, the Otpimeye S5, for use in estimating player load and acceleration points, by comparing to a sophisticated motion video analyis system - a "calibrated 24 camera motion analysis system (Qualisys Oqus 7+, Goteborg Sweden), operating at 200Hz", and combined with a reflective marker to aid capture. One stated key objective was to be able to "filter out high intensity acceleration, deceleration and change of direction (COD) micro movements" - this is somewhat ambigously stated, as the objective is in fact to be able to analyze those very micro-movements, which the specified PlayerLoad(TM) software analysis tools can not, and of which the referenced paper [(Boyd, Ball, & Aughey, 2013)](http://pdfs.semanticscholar.org/333a/75517f4a9b401e938241b44d553ac0a1ac0d.pdf) says "horizontal displacement is minimal,
so common time–motion-analysis methods may not accurately represent the load placed on the body. Episodes of physical contact such as tackling, bumping, blocking, and contested situations when the ball is in dispute are also common". The referenced papers and methodologies can include these micro-movements as part of a total load, but the objective of this new calculation methodology is to filter for them and use them as aids for coaching. 

The research method was to have trial subjects perform randomised direction changes and/or accelerations/decelerations, and counter movement jumps. This is illustrated well in the figure attached, and suitable  procedures (including smoothing, downsampling and removal of invalid data points etc.) were performed on both motion analysis and accelerometer data before performing the analysis. All these steps of data cleaning appear correct. The final metric produced was "gravity decoupled acceleration" - i.e. removing the acceleration of gravity from the accelerometer readings. The paper discusses the suitability of doing this versus reference papers
Pearson's correlation co-efficient was used to examine the relationship between motion analysis and accelerometer data. The data analysis was provided and neatly tabulated, and the conclusion that the IMA algorithm was accurately identifying the correct events is supported by the correlation (r=0.98) with the motion analysis. 

The paper holds itself to be an accurate measure of picking up directional movement in particular cuts (Left at 90 degrees, diagonally left at 45 degrees, 0 degrees i.e forward, 180 degrees i.e. backwards, diagonally right at 45 degrees, and right at 90 degrees)
Interestingly, the errors of the right diagonal cuts are significantly higher than those of the left, and the researchers speculate that this is due to the trial participants being non-elite and hence maximal force execution being more variable. A follow-up trial to support this conclusion could then mean that this device could be used to identify training opportunities for non-elite individuals to improve their consistency - not identified in the paper but a good point for a coach using these tools.

While the paper does not delve deeply into the commercial implications of this validation, it becomes quite clear when reviewing other material from this vendor, that this mechanism of analysis is embedded heavily within products they market. The webinar on the Catapult Vision product [(Baker, 2019)](https://www.youtube.com/watch?v=lNWA-q35YYM&list=PL_oD1A99SorB2WchO4osmpCqf6pW4xK2v&index=4&t=0s) correlates these acceleration moments with video analysis during a game and talks directly about creating coachable moments by measuring acceleration during training and tweaking until it meets match-time requirements. The screenshots from that webinar highlight this:

![Video Analysis Process](/uploads/catapult_12_small.png)
![Video Analysis Process](/uploads/catapult_15_small.png)

This paper, while at first glance appearing to deal with a relatively technical and narrow issue, in fact opens up a wide-ranging avenue for creating a coachable knowledge base on what types of movement are effective for different sports tactics, across multiple sports, and has already been integrated into commercially successful products used by high profile sports teams. See Stratus Sports [(Stratus Sports, 2020)](http://stratussports.com/) (which is built on Microsoft's Sport Performance Platform - [(Microsoft In-Culture, 2019)](https://www.microsoft.com/inculture/sports/springboks-rugby/)) as well as [(Catapult Sports, 2020)](https://www.catapultsports.com/stories) for examples.

### Bibliography
- Baker, J., 2019. Catapult Vision Webinar: Bridging the gap between coaching and sports science. [Online] 
Available at: https://www.youtube.com/watch?v=lNWA-q35YYM&list=PL_oD1A99SorB2WchO4osmpCqf6pW4xK2v&index=4&t=0s
- Boyd, L. J., Ball, K. & Aughey, R., 2013. Quantifying External Load in Australian Football Matches. p. 44.
- Catapult Sports, 2020. Catapult Sports - User Stories. [Online] 
Available at: https://www.catapultsports.com/stories
- Microsoft In-Culture, 2019. Microsoft In-Culture. [Online] 
- Available at: https://www.microsoft.com/inculture/sports/springboks-rugby/
- Stratus Sports, 2020. Stratus Sports. [Online] 
Available at: http://stratussports.com/


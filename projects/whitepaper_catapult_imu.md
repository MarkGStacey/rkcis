---
thumbnail: '/uploads/catapult_imu.png'
title: Inertial Movement Analysis
date: 2020-06-17
categories:
- information-systems
- draft
project_bg_color: ''
project_fg_color: ''

---
# Inertial Movement Analysis, by Catapult

https://images.catapultsports.com/wp-content/uploads/2018/10/IMA_WP_vF.pdf

This paper validates the data collected by Catapult's accelerometer based sensor, the Otpimeye S5, for use in estimating player load and acceleration points, by comparing to a sophisticated motion video analyis system - a "calibrated 24 camera motion analysis system (Qualisys Oqus 7+, Goteborg Sweden), operating at 200Hz", and combined with a reflective marker to aid capture. One stated key objective was to be able to "filter out high intensity acceleration, deceleration and change of direction (COD) micro movements" - this is somewhat ambigously stated, as the objective is in fact to be able to analyze those very micro-movements, which the specified PlayerLoad(TM) analysis can not, and which the referenced paper [(Boyd, Ball, & Aughey, 2013)](http://pdfs.semanticscholar.org/333a/75517f4a9b401e938241b44d553ac0a1ac0d.pdf) says "horizontal displacement is minimal,
so common time–motion-analysis methods may not accurately represent the load placed on the body. Episodes of physical contact such as tackling, bumping, blocking, and contested situations when the ball is in dispute are also common". The referenced papers and methodologies can include these micro-movements as part of a total load, but the objective of this new calculations is to discriminate them out. 

The research method was to have trial subjects perform randomised direction changes and/or accelerations/decelerations, and counter movement jumps. This is illustrated nicely in the figure attached, and suitable  procedures (including smoothing, downsampling and removal of invalid data points) were performed on both motion analysis and accelerometer data before performing the analysis - all these steps of data cleaning appear correct. The final metric produced was "gravity decoupled acceleration" (i.e. removing the acceleration of gravity from the calculations) 
Pearson's correlation co-efficient was used =to examine the relationship between motion analysis and accelerometer data. The data analysis was provided and neatly tabulated, and the conclusion that the IMA algorithm was accurately identifying the correct events is supported by the correlation (r=0.98) with the motion analysis.

The paper holds itself to be an accurate measure of picking up directional movement in particular cuts (Left at 90 degrees,diagonally left at 45 degrees, 0 degrees i.e forward, 180 deegrees i.e. backwards, diagonally right at 45 degrees, and right at 90 degrees)
Interestingly, the errors of the right diagonal cuts are significantly higher than those of the left, and the researchers speculate that this is due to the trial participants being non-elite and hence maximal force execution being more variable. A follow-up trial to support this conclusion could then mean that this device could be used to identify training opportunities for non-elite individuals to improve their consistency - not identified in the paper but a good point for a coach using these tools.

While the paper doesn't delve deeply into the commercial implications of this validation, it becomes quite clear when reviewing other material from this vendor, that this mechanism of analysis is embedded heavily within later product material released. The webinar on the Catapult Vision product [(Baker, 2019)](https://www.youtube.com/watch?v=lNWA-q35YYM&list=PL_oD1A99SorB2WchO4osmpCqf6pW4xK2v&index=4&t=0s) correlates these acceleration moments with video analysis during a game and talks directly about creating coachable moments by measuring acceleration during training and tweaking until it meets match-time requirements. The screenshotss from that webinar highlight this nicely.

![Video Analysis Process](/uploads/catapult_12_small.png)
![Video Analysis Process](/uploads/catapult_15_small.png)

This paper, while at first glance appearing to deal with a relatively technical and narrow issue, in fact opens up a wide-ranging avenue for creating a coachable knowledge base on what types of movement are effective for different sports tactics, across multiple sports, and has already been integrated into commercially succesful products used by high profile sports teams.

Bibliography
- Argote, L., McEvily, B., & Reagans, R. (2003). Managing knowledge in organisations: An integrative framework and review of emerging themes. Management Science, 571-582. Retrieved from https://pdfs.semanticscholar.org/aeb2/3992f2a2d386a3a3521908c5354905fc3352.pdf
- Baker, J. (2019). Catapult Vision Webinar: Bridging the gap between coaching and sports science. Retrieved from YouTube: https://www.youtube.com/watch?v=lNWA-q35YYM&list=PL_oD1A99SorB2WchO4osmpCqf6pW4xK2v&index=4&t=0s
- Boyd, L., Ball, K., & Aughey, R. (2013). Quantifying External Load in Australian Football Matches. 44.
- Catapult Sports. (2020). Catapult Sports. Retrieved from Catapult Sports: https://www.catapultsports.com/
- Catapult Sports. (2020). Catapult Sports - list of sports. Retrieved from Catapult Sports: https://www.catapultsports.com/sports
- Catapult Sports. (n.d.). I N E R T I A L M O V E M E N T A N A LY S I S . Retrieved from - - Catapult Sports: https://images.catapultsports.com/wp-content/uploads/2018/10/IMA_WP_vF.pdf
- D2L - desire to learn. (n.d.). Modern learning is a team sport. Retrieved from HCI: https://www.hci.org/system/files/2019-12/Organizational-Alignment-Playbook-D2L-OPTIMIZED.pdf
- Ebrahim Razaghi, M., Moosavi, S., Safania, A., & Dousti, M. (2013). Presentation of a Suitable Model for Knowledge Management Establishment in Sport Organizations: Delphi Classic Method. Annals of Applied Sport Science, vol. 1, no. 2, 33-41. Retrieved from http://aassjournal.com/article-1-42-en.pdf
- Eisenhardt, K. (1989). Building theories from case study research. The Academy of Management Review, 532-550. Retrieved from https://journals.aom.org/doi/full/10.5465/amr.1989.4308385
- Erhardt, N., & Martin-Rios, C. (2016). Knowledge Management Systems in Sports: The Role of Organisational Structure, Tacit and Explicit Knowledge. Journal of Information & Knowledge Management.
- Erhardt, N., & Martin-Rios, C. (Vol. 15, No. 02, 1650023 (2016)). Knowledge Management Systems in Sports: The Role of Organisational Structure, Tacit and Explicit Knowledge. - - Journal of Information & Knowledge Management. Retrieved from https://www-worldscientific-com.salford.idm.oclc.org/doi/abs/10.1142/S0219649216500234
- FitFor90. (2020). FitFor90. Retrieved from FitFor90: https://www.fitfor90.com/
Frawley, S., & Toohey, K. (n.d.). The importance of prior knowledge: the Australian Olympic Committee and the Sydney 2000 Olympic Games. Sport in Society, Cultures, Commerce, Media, Politics. Retrieved from https://www-tandfonline-com.salford.idm.oclc.org/doi/full/10.1080/17430430903053208?src=recsys
- GeekWire. (2017). Microsoft debuts ‘Sports Performance Platform’ to help teams make data-driven decisions. Retrieved from GeekWire: https://news.microsoft.com/transform/seattle-seahawks-use-data-and-sports-science-to-help-players-work-as-hard-at-recovery-as-they-do-on-field/
- Halbwirth, S., & Toohey, K. (n.d.). The Olympic Games and knowledge management: A case study of the Sydney organising committee of the Olympic Games. European Sport Management Quarterly. Retrieved from https://www-tandfonline-com.salford.idm.oclc.org/doi/abs/10.1080/16184740108721890

- Microsoft. (2017, 12 12). Microsoft New: Sports Performance Platform. Retrieved from The Seattle Seahawks use data and sports science to help players work as hard at recovery as they do on the field: https://news.microsoft.com/transform/seattle-seahawks-use-data-and-sports-science-to-help-players-work-as-hard-at-recovery-as-they-do-on-field/
- Microsoft In-Culture. (2019). Microsoft In-Culture. Retrieved from Tackling the future of rugby: https://www.microsoft.com/inculture/sports/springboks-rugby/
Opta Sports Pro. (2017). Leicester City Case Study. Retrieved from Opta Sports Pro: https://www.optasportspro.com/case-study/leicester-city/
- Schenk, J., Parent, M., MacDonald, D., & Therrien, L. (2015). The evolution of knowledge management and transfer processes from domestic to international multi-sport events. European Sport Management Quarterly, 15, Issue 5. Retrieved from https://www.tandfonline.com/doi/abs/10.1080/16184742.2015.1091022
- Slack, T., & Parent, M. (2006). Understanding Sport Organizations: The Application of Organization Theory, Champaign, IL: Human Kinetics. 
Sports Business Insider. (2016). Australian Analytics Company Catapult Acquires XOS Digital For $60M. Retrieved from Sports Business Insider: https://www.sportsbusinessdaily.com/Daily/Issues/2016/07/13/Finance/Catapult.aspx
- Stratus Sports. (2020). Stratus Sports. Retrieved from Stratus Sports: http://stratussports.com/
- TechSmith. (2019). Coaches Eye. Retrieved from Coaches Eye: https://www.coachseye.com/
Venkitachalam, K., & Busch, P. (2013). Tacit knowledge: Review and possible research. - Journal of Knowledge Management, 357-372. Retrieved from https://search-proquest-com.salford.idm.oclc.org/docview/939131495?accountid=8058
- Witherspoon, C., Bergner, J., Cockrell, C., & Stone, D. (2013). Antecedents of organizational knowledge sharing: A meta-analysis and critique. Journal of Knowledge Management, 17(2), 250-277. Retrieved from https://www.researchgate.net/publication/262860998_Antecedents_of_organizational_knowledge_sharing_A_meta-analysis_and_critique



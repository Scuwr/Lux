import pandas as pd
import random
import os

os.chdir('./ASRS_Picker')

df = pd.read_csv('ASRS_DBOnline_2022.csv')

narrative = df.columns.get_loc('Report 1')
report = df.iloc[:, [0,narrative]]
report = report.set_axis(['ACN', 'Report'], axis=1)

selected = pd.read_csv('ACN_Picked.csv')

'''
selected = pd.DataFrame({
    'ACN': ['1920608', '1916481', '1870834', '1891681', '1885604', '1870987', '1868552', '1864976', '1864918', '1864751', '1859056', '1858937', '1857915', '1849581', '1849672', '1848362', '1838807', '1838688', '1837663', '1837462'],
    'Report': [
        'We identified an unsafe and potentially catastrophic condition in the Gulfstream GVII-G500 and Gulfstream GVII-G600 Airplane Flight Manual. We contacted the Original Equipment Manufacturer Gulfstream to inform them of the unsafe condition, and did not receive qualitative justification, leading to believe the unsafe condition is still present. Gulfstream promotes that the "Appendix A1: Reduced Thrust (FLEX) Takeoff", located in the GVII-500 and GVII-G600 Airplane Flight Manual, can be used as an alternative to the Chapter 5 - Performance, to determine allowable takeoff weight from short aircraft. To that effect, Gulfstream has also convinced airport performance providers such as Airport Performance Group (APG) to use this supplement as an alternative to Chapter 5. Customers use those blindly. This could have devastating consequences as a quick examination of the Accelerate-Go and Accelerate-Stop distances in the Chapter 5 will clearly indicate that this method does not appropriately respect necessary basic conditions to allow a safe takeoff. Example: 5,000 ft. runway at 50 ft. elevation, WET runway and 15 degrees Celsius. The Appendix A1 tells the operator the following: At the next higher pressure altitude in the chart (1000 ft because interpolation is not accepted). Takeoff flaps 20. Takeoff weight: 60,000 lb. FLD LENGTH (FT) 4970 (although not clear or explained what this parameter incorporates). V1 KIAS 116. VR KIAS 118. V2 KIAS 133. However, when reporting those parameters in the Chapter 5, at this specific V1 over VR ratio (0.983), an effective runway length of 5,000 ft., we get that the GVII-G500 aircraft would need 4,200 ft. of runway for the Accelerate-go, but would require 6,400 ft. for the Accelerate-stop distance, putting public at great risk if the pilot had to make the decision to stop the aircraft right before V1. This situation is of great concern. The FLD LENGTH parameter in the Appendix A1 does not consider the higher value of the Accelerate-go or accelerate-stop and is therefore NOT conservative. Furthermore, the said supplement does not offer an example on how a pilot would use such a supplement in lieu of using Chapter 5 to calculate performance. All of which poses a great danger to public safety and is an accident waiting to happen.',        'Aircraft X was instructed to cross Runway 19 at L but instead crossed Runway 24 at L, the departure runway with an aircraft, Aircraft Y, already cleared for takeoff and in departure roll. Aircraft Y overflew Aircraft X at approximately 10ft. The taxiway that connects Runway 19 to the Alpha pad should be renamed Taxiway Alpha to avoid confusion. Taxiway alpha should extend from the alpha pad.',
        'We were flying ZZZ-ZZZ1. In our descent into ZZZ1 (ZZZZZ Arrival) we were approximately at 17000 feet when I (Captain) opened the speed brakes. As soon as I opened the speed brakes we received a FLAP FAIL message. We immediately performed the QRH procedures and decided the game plan would be to divert to ZZZ2. We notified dispatch, ATC, spoke to the Flight Attendant\'s and passengers of the situation and game plan. ATC asked us if we wanted to request priority handling, but we told them to deploy Crash Fire Rescue (CFR) just as a precaution so they could check brake temps upon landing. ATC decided to give priority handling for us. Once set up for the approach (ILS XXC-VFR conditions at the airfield) and briefed, we set up for a long straight in final and configured early. We landed without incident and momentarily stopped the aircraft on the Runway. CFR requested we pull off the next Taxiway so we elected to do that. CFR checked all brake temperatures and gave us the ok. We proceeded to our new Gate XX67 and CFR met us at the Gate for one final brake check.',
        'I flew behind my house and above the woods with line of sight. Upon flight I was trying different settings on the new drone. I lost control and was disoriented with the direction of flight. I lost connection to the drone multiple times and the return to home function was not set properly and it tried to return to a location that was south of me. A helicopter was in the area. They indicated that I flew within 20 feet of their aircraft but I did not see them. I tried to navigate back to my location and after multiple attempts I was successful. The helicopter followed the drone back to my location and Public Officials confiscated the drone. I do not have access to the video, only the flight logs. The App shows when aircraft are present or close. This never occurred until returning home and the helicopter was circling the house. Not sure if the helicopter was broadcasting or any other traffic was present.',
        'We took off on Runway XXR on the ZZZZZ departure. Climbing through 29000 ft., we received AFT COMPT LOOP FAULT. I leveled off at 30000 ft. and we ran the QRH checklist. We then received the CARGO COMPT SMOKE ECAM message and a Master Caution. I took over ATC comm 1 radio and [advised ATC] and requested return to ZZZ. The FO (First Officer) continued the checklist, changed the destination and set us up for a return to Runway XYR at ZZZ. We had an uneventful landing and the fire department used thermal cameras to check for heat signature in the AFT compartment. No indications were seen and we taxied back to the ramp. This is an edited version of my first [report] from this event. I was PF (Pilot Flying). We took off on [Runway] XXR on the ZZZZZ departure. Climbing through 29000 ft.,we had a AFT COMPT LOOP FAULT ECAM message with a Cargo Loop Fault procedure. My FO (First Officer) opened the QRH to the Cargo Loop Fault checklist. After further reflection on our actions during the event and referencing the Systems manual and QRH again, I realized the Cargo Loop Fault checklist does not fully explain how to do a Loop Test. The checklist states, "Loop Test - Perform" but does not go into detail on HOW to perform a loop test. The systems manual does, and on step X. Loop Test Pushbutton it states - "Pressed and held IN". My FO did not press and hold in the Loop Test button, he only pressed and released it. The next sentence in the QRH Cargo Loop Fault checklist states, "If SMOKE light does not illuminate for affected compartment (smoke condition exists):" My FO and I looked at each other and said, "We must have smoke." We then continued the checklist by RE-SELECTING LOOP A (which had faulted) and turned OFF the OTHER LOOP. Almost immediately we received the CARGO COMPT SMOKE ECAM Master Warning and chime as the checklist states, Procedure: CARGO COMPT SMOKE. I took over ATC communications 1 radio and [requested priority handling], requested return to ZZZ as the FO continued the checklist, changed the destination and set us up for a return to XYR back at ZZZ. Uneventful landing and the fire department used thermal cameras to check for heat signature in the AFT compartment. No indications were seen and we taxied back to the ramp. If you look at the [Aircraft] System manual, you can see the photo of the Lower Cargo Smoke Detection system and see that by re-selecting a faulted LOOP A, and turning OFF the good LOOP B, you will receive a SMOKE detection, which is what we had. In addition, if you turn the page in the QRH you will see "Additional Information" which uses the example of an Illuminated LOOP A fault. This information is very important and a reference to it should be included on page XXX of the QRH. I would recommend a change to the QRH CARGO LOOP FAULT checklist to edit the "LOOP TEST - PERFORM" to closely match the Systems manual and should read, "LOOP TEST - PRESS AND HOLD IN". ALL lights on the Cargo Compartment Smoke Detection panel should illuminate which will confirm a faulty loop (see second boldfaced sentence). If the SMOKE light does NOT illuminate for affected compartment, smoke condition exists. If you flip the two boldface sentences, the checklist will make more sense after you "perform a loop test" by holding the button IN. Since our FO\'s do not perform a Main Deck or Cargo compartment LOOP test during their preflight, they may not understand you must hold the button in to do the loop test.',
        'During the initial climb of flight number service from ZZZ to ZZZ1, we got a BLEED 2 FAIL EICAS msg at FL320 and climbing to FL350, we immediately stopped the climb and I ran the QRH. The message did not go away, but we decided then to continue to ZZZ1 at FL310 in accordance with the QRH. BLEED 2 OVERPRESS appeared 42 min into the flight (maybe 10min after the first EICAS), also persistent, we followed the QRH as well, XBLEED was pushed out for the reminder of the flight and EICAS overpress was gone. The new QRH put a band aid on the plane that lasted about 5 to 10 min. The message came back after that, the QRH thus called to request priority handling and land in nearest suitable airport. The Captain, ATC and myself all agreed on ZZZ2. We executed a descent and ran the QRC for that and landed with no other issues afterwards. The Captain got himself numbers and worked the box, while I was briefing the approach, obtaining the ATIS and talking to ATC. He also took care of the PAs. We did not exceed any limitations, nor did we request priority into the alternate. The rest of the flight was uneventful.',
        'I was assigned to fly the freighter ZZZ-ZZZ1. Upon arrival in operations I was notified that the plane wouldn\'t likely be to the cargo parking area until around XA00, even though we had a XB55 departure time scheduled. When I met the Captain I relayed what I had heard about the arrival time and he offered the idea to taxi the plane from the maintenance hangar to cargo parking. When we arrived at the hanger we were notified it was there because it had previously been involved with a fire in the ground power receptacle area. Reviewing the logbook also indicated the aircraft had been involved with a fire and had multiple repairs done because of the fire, including damage to a pressure vessel seal. I performed a personal assessment of the threats for a roughly 3 hour 45 minute flight to ZZZ1 that we were facing. -Airplane just out of maintenance with no functional check flight. -night flight. -poor weather currently and in the forecast for ZZZ. -poor weather along the route to ZZZ1. -unknown runway conditions along route. -possibly no ARFF (Airport Rescue and Fire Fighting) along the route. -still need reposition from hangar to cargo. -still needed to be loaded with cargo. -needed lots of de-ice. -both pilots only getting more fatigued. -best case scenario, we would depart around XA30 after showing at XC55. I expressed my concerns to the Captain and said I\'m of the opinion that the airplane should have a functional check flight prior to it operating again. Also, the fear of if we have a problem, we have almost zero divert options. Captain then called flight operations to consult the concerns and they indicated that the fire was suspected to be caused from the ground power cart cable and indicated that after consulting with Maintenance, it seems safe to proceed with the flight. Reviewing the verbiage of the FOM, it states that a functional check flight is required after major work is performed and Flight Operations or Maintenance can request the flight. We jointly decided that the repairs done should warrant a functional check flight. It was then that the Captain communicated flight operations that we are opting to decline the airplane.',
        'This report is filed to report a maintenance omission. Aircraft X arrived with an APU keel duct pressure seal missing. The aircraft was taken out of service because of the lengthy time required to correct this issue. This can lead to pressurization leaks/issues. There have been several other aircraft with the same issue.',
        'We were on approach to RWY 30 into BZN on the RNAV RNP 30 from Livingston transition. We were getting moderate turbulence with the wind around 600-70 kts below 10,000 [feet]. We had thoroughly briefed the approach prior to the descent. While on the approach around 5,000ft Tower advised us the an aircraft had circled to 30 from ILS 12 and during the approach experienced a 2,000 fpm updraft and moderate turbulence on approach but braking action was good upon landing. Around LAVPE, the Captain called for below the line landing checklist while we were descending on the VPATH. I ran the checklist and then looked at my Jepp Approach Chart to confirm what the missed approach altitude was, it was right after that we got a "Caution Terrain" aural warning followed by Tower telling us we had a low altitude warning. We then got another caution terrain warning and the Captain disconnected the AP and started to climb, I saw at that point we were below the VPATH somehow. We started to climb back towards the path and then got the RWY in sight and descended for a normal landing. Some time between me going heads down to run the below the line landing checklist and MOSNE intersection we got low and I still do not know how. We were on AP and VPATH just a few seconds prior, I don\'t know if we got a downdraft or what but I\'m still confused as to how the aircraft got low. We decided to continue to the approach instead of going around and I believe that was the safer of the two options giving the wind gusts and moderate turbulence in mountainous and unfamiliar (for me first time to BZN) terrain. We both had a long day (I commuted in that morning because I missed my last commute the night prior due to operational delays) and had been fighting turbulence all day long on ZZZ-ZZZ1-ZZZ-BZN routes which probably made us more tired than normal. This was my first time into BZN and the low visibility, moderate icing from the snow storm, and moderate (or greater) turbulence on approach made it tougher to concentrate and multi task. I\'m not sure how we got below the path on approach as I was Pilot Monitoring and heads down running the checklist so I have no suggestions as of now. I should have done a better job monitoring our descent and VPATH even while conducting the Landing Checklist.',
        'Me and my student were doing ground reference maneuvers near the town of Name and a rotorcraft was inbound for ZZZ. We made several calls about where we were in relation to the airport and even other aircraft could here us making the calls. The helicopter cut through our approach path and I took the controls from my student and made an abrupt decision to introduce power and climb away from the maneuver because he was descending into us. The rotorcraft then went and cut someone off on final for Runway X at ZZZ. What I feel can be done about this is the pilot needs to be talked too about visual scanning if he would\'ve been scanning for traffic while flying and listening to radio calls this report wouldn\'t be typed to begin with.',
        'While operating Aircraft X we received a "Cell call" message on ACARS from our Dispatcher. The message informed us that we were NORDO and that we needed to contact center on Frequency X. In the 5 mins prior the radios were quiet. For the night in particular, we didn\'t find this to be that unusual because radio chatter had already been sporadic. Guard was tuned on VHF 2, however we turned it down due to unnecessary chatter earlier in the flight. As a procedure, guard should be tuned, and selected in VHF 2 with the volume turned up loud enough to be heard. If radio chatter becomes unnecessary and distracting then guard should be turned down for no longer than 5 minutes. This could alleviate any potential NORDO incidents in the future.',
        'Around the last week of Month during our move from the west hangar to our new facility in the east side of the airport many pallets with un-serviceable back hold parts were loaded on trailer trucks without the proper dangerous goods documentation or undeclared, with the final destination of ZZZ1. They were loaded following instructions to do so by our leadership team. We were unaware of the present of Dangerous Goods in many or several of these pallets and were not instructed of the need to provide any Dangerous Goods documentation only to load the pallets onto the trailer trucks. We neither had the system to retrieve any information that would have alert us about the presence of these dangerous goods parts.',
        'Solo flight in PA18 with wheel skis configured in a wheels down position. Locked brake during landing resulting in propeller contacting the ground. Landing surface snow covered gravel with areas of exposed gravel. Push rod connecting front seat brake pedal to master cylinder was discovered pinned under wheel/ski pump after stopping on the runway. Aircraft was stopped on the runway following the propeller contacting the ground. Front brake pedals were not used during the landing. No additional damage to the aircraft or property. Tower was notified of the aircraft being shutdown on the landing surface and a tow was requested. Aircraft was towed from the landing surface. Locked brake perception was insidious due to slippery surface initially and the drag increased rapidly just prior to prop contact. Mid roll out there were sounds similar to the back of the skis dragging if the pressure drops a little in the wheel ski pump or the skis are not installed properly but I did not process as possible brake lock during the landing. Sound was most likely gravel kicking up and hitting the ski from the locked brake. There was also a light quartering headwind with an approximate 5kt crosswind on the same side as the locked brake to add to the poor perception. The mechanical situation is preventable with adjustment of the ski pump installation to avoid interference with the brake push rod. I also intend to add a visual check of brake rods/cables to my before landing checklist and be more vigilant for unusual sensory perceptions that do not match my expected environment.',
        'In short, the Tower Controller created a situation in which I felt I was out of options, and ultimately led to a wake turbulence / jet blast encounter for my student and me. I was providing flight instruction in a Cessna 172 while my student was flying the RNAV 36 at MYR (the student was wearing a view limiting device and I was responsible for looking outside, see & avoid, etc). As we were approximately 3-4 nautical miles out from Runway 36, a Navy Aircraft Y was in the tower pattern for touch-and-goes, and the Tower Controller cleared the Aircraft Y for a short approach in front of us. This was a day with winds aloft from approximately 270, so the Aircraft Y had a tail wind on the base leg. The Aircraft Y\'s short approach was still a rather wide base, and it appeared to be in a steady descending turn straight toward us at approximately the same altitude as us. I asked Tower if the Aircraft Y was turning towards us; Tower acknowledged they were making a short approach ahead of us; I responded that the angle looked a little close; Tower issued the Aircraft Y a traffic advisory to look for us on a 3-mile final, to which the Aircraft Y responded they had us in sight. My student continued his approach under the hood. Once the Aircraft Y turned final (I would estimate approximately 1.5 miles ahead of us, at approximately 300 ft AGL), Tower instructed the Aircraft Y to go around. I am unsure of why the go-around was given to the Aircraft Y. I was worried about wake turbulence and began to cycle through options in my head: -I determined I couldn\'t go around upwind, because I would have to outclimb the short approach of an Aircraft Y to avoid wake turbulence -I determined I couldn\'t go around straight ahead, because the Aircraft Y had applied takeoff thrust and I cannot out-climb a Aircraft Y in a C172 -I determined I couldn\'t go around downwind, because the wake turbulence would be blown downwind; additionally, there\'s a busy tour helicopter helipad just east of the runway 36 threshold so I didn\'t want to conflict with any helicopter traffic. In the short amount of time this took to unfold, I determined none of the above alternatives were acceptable, which left me having my student continue the approach and just hoping the wake turbulence and jet blast had blown downwind. It is the first time I\'ve ever felt helpless in an airplane, and it really rattled me when I got on the ground and reflected on it. We continued the approach and at approximately 300ft AGL we experienced sharp, jolting turbulence for approximately one second. I believe we were lucky and did not hit the epicenter of the wake turbulence / jet blast, as I know it can flip a light GA aircraft or cause catastrophic damage. After the encounter, my student continued the approach and made a normal landing. In my state of disbelief, I failed to inform Tower of the wake turbulence encounter. After reflecting on the incident, I think both Tower and I could have made better decisions to avoid the encounter, and maybe even the Aircraft Y as well: -I may have had a case of "get-there-itis," as the only scenarios that ran through my head involved continuing forward in some capacity. I believe my best course of action would have been to take controls from my student and execute a go around with a 90-degree left turn, or a left 180 degree turn. It never crossed my mind to turn around, and I will always consider that as an option going forward. -If Tower had been more cognizant of wake turbulence, they likely would not have given a Aircraft Y a short approach in front of a Cessna on final approach -Additionally, if Tower had instructed us to go around, rather than the Aircraft Y, I believe this would have been a non-event. -It is hard for me to tell, but the Aircraft Y performed a pretty wide short approach so maybe they should have kept it a little tighter or declined the short approach. -I don\'t believe Tower ever gave us a wake turbulence warning after giving the Aircraft Y a short approach. I have been instructing out of MYR in Cessnas for XX years so I am very cognizant of wake turbulence even without "Caution Wake Turbulence" warnings from controllers, but I would be worried if a student pilot solo was in that same situation got overwhelmed or couldn\'t properly visualize the wake turbulence.',
        'After deplaning all customers, our flight attendants stated that they smelled musty fumes from the mid to aft cabin area (rows 14-21) during low altitude descent during approach and that the fumes remained until the engines were shut down at the gate. I did not smell any fumes. After obtaining pertinent information from the flight attendants, ZZZ maintenance was notified, and a discrepancy was entered into the aircraft logbook. As was previously stated, the fumes event was brought to our attention only after deplaning was completed and we did not smell fumes in the flight deck.',
        'We operated under Medevac, but left the kidney in ZZZ. It all started with a call to Maintenance. While powering on the aircraft, the message "EICAS OVHT" flashed a couple times followed by "EICAS FAULT." At this point, I noticed a little bit of moisture surrounding the Display Unit. I called Maintenance who suggested that I run the EICAS FAULT check. It worked, the fault cleared, and by the end of my call with Maintenance, the moisture around the Display Unit\'s dissipated. (I only added that because the moisture was in the back of my mind the entire flight and may have contributed to me forgetting the kidney.) Right after I ended the call, my First Officer got back from his walk around and told me that the nose wheel was missing a bonding strap. I believe it was at this point I\'d take a look at the release and was aware of our Medevac status. I called Maintenance back and they told me they\'d be sending Maintenance out. While waiting, we set up and briefed for the flight like normal. While briefing the departure, the mechanic arrived and took the logbook with less than 10 minutes to departure time. [Mechanic] handed it back with one minute to go. I took a quick look at it, said it was good and we closed [aircraft door]. After the before start check list, I decided to recheck the corrective action and saw that the mechanic had written main landing gear instead of nose landing gear. I called Maintenance and asked him to express urgency because we were a Medevac flight. While waiting the second time and waiting for the takeoff numbers because the plane was still showing out of service, I asked the rampers if they were sure they had loaded the kidney. He told me he\'d double check and came back a moment later saying it was. At XA:55, ten minutes after departure time, the mechanic gave us the logbook back with the edit. We quickly got our takeoff numbers, pushed back and taxied out. While taxiing out, Ground asked us to confirm we were a Medevac flight. At this point, I thought we were, so for the entire flight, we kept the status of Medevac. Just before we started our descent into ZZZ1, it dawned on me that we never received a notification about Dry Ice, thinking that a human organ would need to be kept cool. I checked the takeoff remarks and didn\'t see anything. I messaged Dispatch who said he\'d check with Ops. After we landed, I saw the message that we might not have received the kidney. After parking, I went outside to watch the ground crew unload the bags until they gave me confirmation the kidney was not on board. I did however notice a box wrapped in a red plastic bag. I believe the ZZZ rampers mistook that for the kidney we were supposed to have on board. Even though it would have all but guaranteed a delay, had I gone and looked that the kidney was onboard with my own eyes, all of this would have been avoided. The fact that I was trying to avoid any delays so I could do my part in saving a life ended up causing the biggest delay of all.',
        'I was made aware by the A [Flight Attendant] that we only had three of our four required emergency checklists for both ditching and land emergency evacuations. As a crew we determined this to be a "no-go" issue, so the A requested one each of the checklists that were missing. We were initially informed that the station didn\'t have any. Immediately upon being informed of the situation, the Captain became very agitated and began questioning the A as to why we needed the checklists. After an explanation was attempted, the Captain, again in a very agitated manner, proceeded to get on his cell and call the Chief Pilot. As a crew, we checked the manual to confirm that we were correct in our understanding that we had to have four on board and confirmed this to be accurate, to the best of our interpretation. Someone also called for an Inflight Supervisor to come to the gate, but I am not exactly certain which of the crew made that call. A Supervisor did arrive and informed us that they were looking for one, but she had been informed that we were ok using our [tablets] in the event they couldn\'t find one. At no point up to this time did I feel like anyone considered this more than an annoyance and an unnecessary interruption to their abilities to board the plane for an on time departure. I was even threatened with termination of my job after I said I would not fly if we didn\'t have the proper equipment. We as Flight Crew are already on high alert where safety and security was concerned, we all felt like no one else cared about anything else but the flight being delayed. I have never felt less supported or more pressured by a Captain in my time of flying. When all was said and done, they found additional copies in the training room, which was what we had recommended about 20 minutes prior.',
        'While [enroute] to MMMM (Morelia, Mexico), we briefed and prepared for the VOR DME 2 approach to Runway 5. We were advised by Mexico Center to contact Morelia Approach and to descend and maintain 11,000 feet. Morelia Approach asked us to report 25 nm DME from the airport. At 10 nm DME, Morelia Approach cleared us for the VOR DME 1 to Runway 5. Because of high terrain on all quadrants, night time, unfamiliarity with the terrain/environment, low to the ground condition, we decided to ask the Controller to keep us on the VOR DME 2 instead. The Controller claimed to not have such an approach available for that airport. We told him we had all the information we needed to safely execute the approach in our FMS database. We sighted the runway and asked for a visual approach. We were granted clearance for the visual approach and flew the profile corresponding to the VOR DME 2 approach which we were all set up for. The landing went on uneventfully. In the future, I\'ll make sure to ask the Controller as soon as able for the approach in use (there was no ATIS at this airport) so that we can set up for the right approach and thus avoid last minute changes which could be fatal specially at unfamiliar/high terrain airports.',
        'At (XA05 L) we were cleared for takeoff from runway XX. It was a rainy night after a typhoon had passed through, and although the wind was calm, we needed our wipers on for the rain. We were accelerating normally, I called 80 knots and the captain acknowledged. A few seconds later when my eyes were scanning the engine instruments I heard several thumps against the fuselage and heard the captain say "Birds." He later told me he said this when he saw many medium-sized white streaks pass through our lights. I saw the captain pull the thrust levers to idle and say "Reject." I believe we were about 110 knots (V1 of 143 knots was well above our speed on the speed scale) but I did not notice the exact speed. After a normal RTO procedure, the captain called and I completed the QRH procedure for Rejected Takeoff. Tower instructed us to make a 180 degree turn on the runway, and after the turn we noticed that the BTMS was climbing more than expected. I calculated for a 120 knots reject at our takeoff weight (345,000 lbs) we should see a BTMS Indication of 5. When the BTMS indication on several brakes increased above 5, I called Tower and requested the fire services to come check for fire and smoke from the brakes. After the fire services arrived and told us (via Tower because fire services did not have an aviation frequencies radio) there was no smoke or fire, we saw one wheel (#2) indicate BTMS 9, and two wheels (#3 and #4) indicate BTMS 8, so asked fire services if any tires were flat. They told us that one wheel on the left side was flat, and at that point the captain decided to start the APU and shut off the engines as it was clear that we would not be taxiing back. I tried calling Company ramp/maintenance on the frequency on the chart but we got no answer, so we asked Tower to relay information to our maintenance and request assistance. Fire services then relayed to us that a tire on the right side was also flat. Maintenance arrived around time XA50 and plugged in to the intercom to let us know they would inspect and decide on a course of action. At XB25 with BTMS in the range of 1-2, they started slowly towing us back to the ramp. We exited the runway at around XC05 and set the parking brake on the ramp at 1825 Z. Multiple Bird strikes on takeoff roll causing a rejected takeoff Airport authority should be better at controlling the birds at ZZZ airport',
        'During boarding First Officer and I smelled an acrid odor. It started to get stronger and the flight attendants called and let us know they smelled it as well. Since the odor was getting stronger and we didn\'t have any immediate indication as to what was causing it, I chose to expeditiously deplane the aircraft through the main cabin door. While exiting the aircraft, one of the customers remarked that he thought the smell "was electrical in nature." After deplaning we called Maintenance out to look at the jet. After some back and forth about possible causes, Maintenance decided to take the jet out of service to do a deeper dive. We swapped aircraft and completed the flight with a different tail number.'
    ]
})
'''

#selected.sort_values(by=['ACN'])
#selected.to_csv('ACN_Picked.csv', index=False)

r = 0
acn = ''
for x in range(10):
    while True:
        r = random.randrange(1, report.shape[0])
        acn = report.iloc[r]['ACN']
        if(acn not in selected['ACN'].values.tolist()):
            break
    
    selected = pd.concat([selected, pd.DataFrame({'ACN': [int(acn)], 'Report': [report.iloc[r]['Report']]})], ignore_index=True)

print(selected)
#selected.to_csv('ACN_Picked.csv', index=False)
/* ============================================================
   PICTURE QUESTIONS
   Taken from the photo questions in the Sharjah Driving Institute
   handbook (questions 1-109). Each picture is in images/qNNN.png.
   M(topic, number, question, correct answer, [3 wrong answers])
   F(topic, number, question, [options], correctIndex)  -> fixed order
   ============================================================ */
const IMG_BANK = [];

function imgPath(n){ return 'images/q' + String(n).padStart(3, '0') + '.png'; }

// Multiple-choice text question with a picture. Options are shuffled
// by the page; the correct answer is placed at a fixed slot here.
function M(t, n, q, correct, wrong){
  const opts = wrong.slice();
  const idx = n % 4;
  opts.splice(idx, 0, correct);
  IMG_BANK.push({ t: t, q: q, o: opts, a: idx, e: 'Handbook question ' + n + ': ' + correct, img: imgPath(n), svg: (typeof DRAW !== 'undefined' && DRAW[n]) || null });
}

// Picture-choice question (options are the pictured signs 1, 2, 3).
function F(t, n, q, opts, a){
  IMG_BANK.push({ t: t, q: q, o: opts, a: a, e: 'Handbook question ' + n + ': answer No. ' + (a + 1) + '.', img: imgPath(n), svg: (typeof FDRAW !== 'undefined' && FDRAW[n]) || null, fixed: true });
}

/* ---- 1-12: general sign questions (topic: signs) ---- */
M(3, 1, 'This shape shows what type of sign?', 'Warning sign.', ['Regulatory sign.', 'Information and direction sign.', 'Mandatory sign.']);
M(3, 2, 'What should you do on seeing this traffic sign?', 'Lower gear position, avoid using the clutch and do not increase speed.', ['Increase speed and change to a higher gear.', 'Keep the same speed and use the clutch freely.', 'Stop and turn off the engine.']);
M(3, 3, 'What should you do on seeing this traffic sign?', 'Increase speed after shifting to a lower gear position.', ['Stop and wait for ten minutes.', 'Turn off the engine and coast.', 'Keep the same speed without changing gear.']);
M(3, 4, 'What does this traffic sign mean?', 'Downhill for 1000 metres.', ['Uphill for 1000 metres.', 'Road works for 1000 metres.', 'A bend for 1000 metres.']);
M(3, 5, 'What do you understand on seeing this sign?', 'Avoid driving at higher speed because of the bend ahead.', ['Speed is unlimited ahead.', 'A roundabout is ahead.', 'The road is closed ahead.']);
M(3, 6, 'What does this traffic sign mean?', 'It warns the driver of unknown danger ahead.', ['Priority at the next intersection.', 'Pedestrian crossing ahead.', 'Speed limit of 60 km/h.']);
M(3, 7, 'Driving on a highway at night, what should you expect on seeing this sign?', 'You may see oncoming vehicles with full beam lights.', ['Road works ahead with lights off.', 'Pedestrians crossing in the dark.', 'A closed road with no traffic.']);
M(3, 8, 'What do you understand on seeing this sign?', 'Keep to the right side of the road if oncoming vehicles are using full beam lights.', ['Keep to the left side of the road at all times.', 'Turn on your full beam.', 'Stop and switch off your lights.']);
M(3, 9, 'What will you do when you are approaching a roundabout?', 'Reduce speed in advance to avoid sudden braking at the roundabout.', ['Increase speed to pass quickly.', 'Stop completely at the sign.', 'Turn on your hazard lights and keep going.']);
M(3, 10, 'On seeing this traffic sign, what should you do?', 'Check if the bridge is passable and stop if it is swung open.', ['Speed up and cross quickly.', 'Turn around immediately.', 'Ignore it, it only warns of a hump.']);
M(3, 11, 'What are the risks if this traffic sign is not observed?', 'The vehicle may skid and endanger oncoming vehicles.', ['The engine may overheat.', 'Fuel consumption will increase.', 'The headlights may fail.']);
M(3, 12, 'What does this traffic sign mean?', 'Pedestrian crossing ahead.', ['Cyclists crossing ahead.', 'School zone ahead.', 'Children playing ahead.']);

/* ---- 13-25: warning signs ---- */
M(3, 13, 'What does this traffic sign mean?', 'Slippery road ahead.', ['Road narrows ahead.', 'Tunnel ahead.', 'Crossroad ahead.']);
M(3, 14, 'What does this traffic sign mean?', 'Crossroad ahead.', ['Slippery road ahead.', 'Men at work.', 'Road narrows from right ahead.']);
M(3, 15, 'What does this traffic sign mean?', 'Tunnel ahead.', ['Railway crossing ahead.', 'Road narrows from both sides.', 'Animals crossing ahead.']);
M(3, 16, 'What does this traffic sign mean?', 'Road narrows from right ahead.', ['Road narrows from left ahead.', 'Road narrowing from both sides.', 'Two-way traffic ahead.']);
M(3, 17, 'What does this traffic sign mean?', 'Road narrowing from both sides.', ['Road narrows from right ahead.', 'Merging traffic from the left.', 'Dual carriageway ahead.']);
M(3, 18, 'What does this traffic sign mean?', 'Priority at the next intersection.', ['Crossroad ahead.', 'Give way ahead.', 'Stop sign ahead.']);
M(3, 19, 'What does this traffic sign mean?', 'Crossing for school children.', ['Pedestrian crossing ahead.', 'Cyclists crossing ahead.', 'Children playground ahead.']);
M(3, 20, 'What does this traffic sign mean?', 'Avoid parking, falling rocks expected.', ['Steep upward slope ahead.', 'Road works ahead.', 'Slippery road ahead.']);
M(3, 21, 'What does this traffic sign mean?', 'Shift to a lower gear and reduce the speed.', ['Roundabout ahead.', 'Road narrows ahead.', 'Keep the speed high on the bend.']);
M(3, 22, 'What does this traffic sign mean?', 'Men at work.', ['Crossing for school children.', 'Tunnel ahead.', 'Road narrows from right ahead.']);
M(3, 23, 'How far is the hazard expected on the highway after seeing this traffic sign?', 'Between 150 metres and 250 metres.', ['Within 50 metres.', 'Between 500 and 800 metres.', 'More than 2 kilometres.']);
M(3, 24, 'What does this traffic sign mean?', 'Railway crossing without gate.', ['Railway crossing with gates.', 'Tram crossing ahead.', 'Level crossing ahead, no danger.']);
M(3, 25, 'What does this traffic sign mean?', 'Cyclist crossing.', ['Cycle track only.', 'Pedestrian crossing ahead.', 'Bicycle parking ahead.']);

/* ---- 26-52: warning, prohibitory, mandatory and speed signs ---- */
M(3, 26, 'What does this traffic sign mean?', 'Road narrowing after 50 metres.', ['Road narrowing after 100 metres.', 'Dual carriageway after 50 metres.', 'Crossroad after 50 metres.']);
M(3, 27, 'What does this traffic sign mean?', 'Roadwork after 100 metres.', ['Road narrowing after 50 metres.', 'Men at work after 50 metres.', 'Tunnel after 100 metres.']);
M(3, 28, 'Which vehicle is not allowed to take a U-turn?', 'Trucks.', ['Motorcycles.', 'Private cars.', 'Taxis.']);
M(3, 29, 'What should you expect on seeing this traffic sign?', 'Sudden aeroplane noise, or dazzle from the headlights of landing aeroplanes in the dark.', ['Sudden railway noise.', 'Pedestrians crossing.', 'Strong crosswind from the left only.']);
M(3, 30, 'What should you do on seeing this traffic sign?', 'Stop at the halt line at the junction.', ['Slow down and pass without stopping.', 'Give way only to buses.', 'Sound your horn and proceed.']);
M(3, 31, 'What does this traffic sign mean?', 'Give way.', ['Stop completely.', 'No entry.', 'Speed limit 60.']);
M(3, 32, 'What does this traffic sign mean?', 'All vehicles except hand-propelled vehicles are prohibited; two-wheelers can be pushed in.', ['Only buses are allowed.', 'Motorcycles may pass.', 'Pedestrians only.']);
M(3, 33, 'What does this traffic sign mean?', 'Pedestrians are not allowed.', ['Pedestrian crossing only.', 'Only pedestrians allowed.', 'Pedestrians must cross here.']);
M(3, 34, 'What does this traffic sign mean?', 'Motorcyclists not allowed.', ['Motorcycles only.', 'Bicycles not allowed.', 'Scooters only.']);
M(3, 35, 'What does this traffic sign mean?', 'No entry.', ['No parking.', 'No overtaking.', 'No stopping.']);
M(3, 36, 'Which vehicle may not enter here?', 'Motor vehicles.', ['Bicycles.', 'Pedestrians.', 'Buses.']);
M(3, 37, 'What does this traffic sign mean?', 'Trucks are not allowed.', ['Buses are not allowed.', 'Motorcycles are not allowed.', 'Trucks allowed only at night.']);
M(3, 38, 'Which vehicles may not use this road?', 'Trucks carrying a load of more than 2.8 tons.', ['All cars.', 'Buses carrying passengers.', 'Motorcycles.']);
M(3, 39, 'What should you do on seeing this traffic sign?', 'You cannot exceed a speed of more than 60 km/h.', ['You must drive at least 60 km/h.', 'Stop for 60 seconds.', 'Overtake at 60 km/h.']);
M(3, 40, 'What does this traffic sign mean?', 'Priority for oncoming traffic.', ['Priority for ongoing traffic.', 'Give way to all traffic.', 'No entry for oncoming traffic.']);
M(3, 41, 'What does this traffic sign mean?', 'Including load, the weight of the vehicle should not exceed 5.5 tons.', ['Minimum weight 5.5 tons.', 'Maximum height 5.5 metres.', 'Axle load limit of 5.5 tons only.']);
M(3, 42, 'What does this traffic sign mean?', 'Including load, the vehicle should not be wider than 2 metres.', ['Maximum height 2 metres.', 'Minimum width 2 metres.', 'Maximum length 2 metres.']);
M(3, 43, 'What does this traffic sign mean?', 'Including load, vehicles should not be higher than 3.8 metres.', ['Maximum width 3.8 metres.', 'Maximum length 3.8 metres.', 'Minimum height 3.8 metres.']);
M(3, 44, 'What does this traffic sign mean?', 'Vehicles with an actual axle load exceeding 8 tons are not allowed.', ['Vehicles over 8 metres long are not allowed.', 'Vehicles over 8 km/h are not allowed.', 'Vehicles with 8 passengers are not allowed.']);
M(3, 45, 'What does this traffic sign mean?', 'Maximum speed limit.', ['Minimum speed limit.', 'End of speed limit.', 'Recommended speed.']);
M(3, 46, 'What does this traffic sign mean?', 'End of the maximum speed limit.', ['Start of the maximum speed limit.', 'Minimum speed limit.', 'Speed limit for trucks.']);
M(3, 47, 'What does this traffic sign mean?', 'No overtaking.', ['No stopping.', 'No entry.', 'Overtaking allowed.']);
M(3, 48, 'Where is overtaking not allowed?', '200 metres after the traffic sign.', ['At the sign itself only.', '100 metres before the sign.', '3 kilometres after the sign.']);
M(3, 49, 'What does this traffic sign mean?', 'No overtaking for the next 3 km.', ['No overtaking for the next 300 metres.', 'No overtaking for 3 hours.', 'Overtaking allowed for the next 3 km.']);
M(3, 50, 'What does this traffic sign mean?', 'No waiting.', ['No stopping.', 'No entry.', 'No overtaking.']);
M(3, 51, 'What does this traffic sign mean?', 'No stopping.', ['No waiting.', 'No parking for trucks.', 'No entry.']);
M(3, 52, 'What is permitted when you see this sign?', 'Disabled drivers can stop and wait for more than 3 minutes.', ['Anyone may park for 3 hours.', 'Taxis may stop.', 'Trucks may park here.']);

/* ---- 53-66: mandatory, direction and information signs ---- */
M(3, 53, 'What do you understand on seeing this sign?', 'Taxis are allowed to stop.', ['Taxis are not allowed to stop.', 'The taxi lane ends ahead.', 'Only buses may stop here.']);
M(3, 54, 'What should you do on seeing this traffic sign?', 'Only right bend ahead.', ['Only left bend ahead.', 'Straight ahead only.', 'Roundabout ahead.']);
M(3, 55, 'What does this traffic sign mean?', 'Track for cyclists only.', ['Cycle crossing ahead.', 'Pedestrians only.', 'Track for buses only.']);
M(3, 56, 'What will you do on seeing this traffic sign?', 'You can only turn right here.', ['You can only go straight.', 'You can only turn left here.', 'Turning is prohibited.']);
M(3, 57, 'What does this traffic sign mean?', 'You should drive at least at the speed of 60 km/h.', ['Maximum speed 60 km/h.', 'Stop for 60 seconds.', 'Speed limit 60 for trucks only.']);
M(3, 58, 'What does this traffic sign mean?', 'Path only for pedestrians.', ['Pedestrian crossing ahead.', 'Cyclists allowed.', "Children's play area ahead."]);
M(3, 59, 'What does this traffic sign mean?', 'You should pass the obstacle from the right side.', ['Pass the obstacle from the left side.', 'Turn left ahead.', 'Keep to the left.']);
M(3, 60, 'What does this traffic sign mean?', 'Track for buses only.', ['Bus stop ahead.', 'Taxi-only track.', 'Buses may park here.']);
M(3, 61, 'What does this traffic sign mean?', 'You can proceed only straight.', ['You can turn left only.', 'You can turn right only.', 'Roundabout ahead.']);
M(3, 62, 'What does this traffic sign mean?', 'Area for pedestrians only.', ['Cyclists crossing.', 'Pedestrian crossing ahead.', 'School zone ahead.']);
M(3, 63, 'What does this traffic sign mean?', 'Priority road.', ['End of priority road.', 'Give way ahead.', 'Road closed.']);
M(3, 64, 'What does this traffic sign mean?', 'End of the priority.', ['Priority road ahead.', 'Give way ahead.', 'Stop sign ahead.']);
M(3, 65, 'What does this traffic sign mean?', 'Road closed.', ['No entry.', 'Dead end (no through road).', 'Road works ahead.']);
M(3, 66, 'What does this traffic sign mean?', 'End of the highway.', ['Beginning of the highway.', 'Motorway ahead.', 'End of residential area.']);

/* ---- 67-74: information and direction signs ---- */
M(3, 67, 'What does this traffic sign mean?', 'One-way street.', ['Two-way street.', 'Priority for ongoing vehicles.', 'Dead end.']);
M(3, 68, 'What does this traffic sign mean?', 'Priority for ongoing vehicles.', ['Priority for oncoming vehicles.', 'One-way street.', 'Two-way traffic ahead.']);
M(3, 69, 'What does this traffic sign mean?', 'Beginning of a highway.', ['End of highway.', 'Highway exit ahead.', 'Tunnel ahead.']);
M(3, 70, 'Which vehicles can use this road?', 'Motor cars with at least a speed of 60 km/h.', ['Motorcycles only.', 'Trucks only.', 'Buses only.']);
M(3, 71, 'What does this traffic sign mean?', 'End of motorway.', ['Beginning of motorway.', 'Motorway ahead.', 'No cars allowed.']);
M(3, 72, 'What does this traffic sign mean?', 'Parking of part of a vehicle on the pavement is allowed.', ['No parking at all.', 'Parking for disabled drivers only.', 'Parking forbidden on pavements.']);
M(3, 73, 'Who can park the vehicle here?', 'Disabled drivers.', ['Taxis only.', 'Buses only.', 'Anyone at any time.']);
M(3, 74, 'What does this traffic sign mean?', 'First aid.', ['Hospital ahead.', 'Police station ahead.', 'Petrol station ahead.']);

/* ---- 75-84: picture-choice questions (No. 1 / No. 2 / No. 3 are shown) ---- */
const NO3 = ['No. 1', 'No. 2', 'No. 3'];
F(3, 75, "Which sign is applied for 'give way'?", NO3, 0);
F(3, 76, 'Which sign gives you priority to go first?', NO3, 0);
F(3, 77, 'Which sign shows that the road is closed?', NO3, 2);
F(3, 78, 'Which sign restricts you from overtaking?', NO3, 0);
F(3, 79, 'Which traffic sign means you cannot enter?', NO3, 1);
F(3, 80, 'What shape / colour will be used for restrictions?', NO3, 0);
F(3, 81, 'Which one of these signs shows a one-way road?', NO3, 0);
F(3, 82, 'Which one of these signs restricts you from driving more than 60 km/h?', NO3, 2);
F(3, 83, 'If pedestrians are not allowed, which sign will you expect?', NO3, 0);
F(3, 84, 'If you have priority at a junction, which sign will you expect?', NO3, 0);

/* ---- 86-92: junctions, lanes, highway and vehicle questions ---- */
M(5, 86, 'Which conduct is correct?', 'The red vehicle can proceed before the white and blue vehicles.', ['The white vehicle can proceed first.', 'The blue vehicle has to wait for the red vehicle.', 'All vehicles must stop.']);
M(5, 87, 'Which conduct is correct?', 'The red vehicle has the right to go first.', ['The blue vehicle has the right to go first.', 'The white vehicle has the right to go first.', 'All vehicles must stop.']);
M(5, 88, 'Which conduct is correct?', 'The red vehicle has to wait for the blue car to go first.', ['The red vehicle can go first.', 'The white vehicle must go first.', 'All vehicles can go together.']);
M(5, 89, 'Which conduct is correct?', 'The white and red vehicles have to wait till the blue car proceeds.', ['Only the white vehicle has to wait.', 'The blue car must wait for the red one.', 'All vehicles can go together.']);
M(6, 90, 'While driving on a 3-lane road, the left lane should be used for what purpose?', 'When changing direction or overtaking.', ['Slow-moving traffic.', 'Parking.', 'Lorries only.']);
M(1, 91, 'Why should you repair vehicle exhaust immediately?', 'Because toxic gases can leak into the vehicle.', ['Because it improves fuel economy.', 'Because it makes the engine quieter.', 'Because it helps the brakes work better.']);
M(11, 92, 'At what distance will danger warning signs be placed on the highway before a broken-down vehicle?', 'About 100 metres before the broken-down vehicle.', ['About 50 metres before it.', 'About 300 metres before it.', 'About 1 kilometre before it.']);

/* ---- 93-109: conduct, safety and vehicle questions ---- */
M(0, 93, 'What should you know if the temperature gauge is on the red light or at the H position?', 'Avoid moving the vehicle further, wait for the engine to cool, check the coolant level and add coolant if required before proceeding.', ['Keep driving faster to cool the engine.', 'Switch off the air conditioner only.', 'Open the bonnet while the engine is hot and keep driving.']);
M(10, 94, 'When should you use the fog light?', 'While driving in fog.', ['In clear sunny weather.', 'Only when the vehicle is parked.', 'At night on a highway with clear visibility.']);
M(5, 95, 'Which conduct is correct?', 'The blue vehicle has right of way over the white and green vehicles.', ['The red vehicle has right of way over the blue one.', 'The white vehicle has priority.', 'The green vehicle must go first.']);
M(5, 96, 'Which conduct is correct?', 'The red vehicle has priority to go first.', ['The white vehicle has priority.', 'The blue vehicle has priority.', 'All vehicles must stop.']);
M(5, 97, 'Which conduct is correct?', 'The driver should stop and wait.', ['Drive on without stopping.', 'Overtake the red vehicle.', 'Turn right immediately.']);
M(5, 98, 'Which conduct is correct?', 'It is priority for the red vehicle.', ['The white vehicle has priority.', 'The blue vehicle has priority.', 'All vehicles must stop.']);
M(5, 99, 'Which conduct is correct?', 'The white vehicle has priority to proceed first.', ['The red vehicle has priority.', 'The blue vehicle has priority.', 'Nobody has priority.']);
M(5, 100, 'Which conduct is correct?', 'The red vehicle has priority to go first.', ['The white vehicle has priority.', 'The blue vehicle has priority.', 'The driver should stop and wait.']);
M(4, 101, 'Which conduct is correct?', 'Since this line is a divider, you may drive over it and change lanes with caution.', ['You cannot cross it at all.', 'You must stop before the line.', 'Only buses may cross it.']);
M(4, 102, 'Which conduct is correct?', 'You cannot drive over it or cross it.', ['You may cross it with caution.', 'It is a bus lane.', 'You may cross it at night only.']);
M(5, 103, 'You are about to enter a roundabout from a 2-lane road, in the right lane, and you want to turn left. What should you do?', 'You cannot turn left from the right lane, because the right lane directs drivers to go straight or turn right.', ['Turn left from the right lane.', 'Change to the left lane inside the roundabout.', 'Turn left using the hard shoulder.']);
M(5, 104, 'You are about to enter a roundabout from a 3-lane road, in the middle lane, and you want to turn right. What should you do?', 'You cannot turn right from the middle lane, because it directs drivers only straight.', ['Turn right from the middle lane.', 'Use the hard shoulder to turn right.', 'Stop in the roundabout and wait.']);
M(10, 105, 'What should you do when you see a vehicle driving with full beam lights from the opposite direction?', 'Look at the right side of the road and avoid glaring at the oncoming full beam lights.', ['Flash your full beam back at it.', 'Speed up to pass it quickly.', 'Look directly into the oncoming lights.']);
M(2, 106, 'When should the seat belt be fastened?', 'Whenever you are driving.', ['Only on highways.', 'Only on long trips.', 'Only for passengers in the back seat.']);
M(10, 107, 'When could driving be more dangerous?', 'Driving at high speed in poorly lit areas and busy places.', ['Driving slowly in daylight on empty roads.', 'Driving with the seat belt fastened.', 'Driving on a well-lit road at low speed.']);
M(10, 108, 'When should hazard lights be used?', 'Only when there is any danger.', ['Whenever it is raining.', 'Whenever you park for a short time.', 'Whenever you drive at night.']);
M(0, 109, 'Which part of the engine should be serviced regularly to prevent high fuel consumption and pollutant emission?', 'The air filter, carburettor system and ignition system.', ['The radiator and fan belt only.', 'The battery and wiper motor.', 'The brake pads and clutch.']);

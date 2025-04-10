import { useState, useEffect } from 'react';
import StatCard from './components/StatCard';
import CollapsibleCategory from './components/CollapsibleCategory';
import StatInput from './components/StatInput';

function StatTracker() {
  const [stats, setStats] = useState(() => {
    // Load stats from localStorage or set default if none found
    const storedStats = localStorage.getItem('stats');
    return storedStats
      ? JSON.parse(storedStats)
      : {
          Environment: [
            { label: 'Current Location', value: 'Yale Library' },
            { label: 'Temperature', value: '21°C' },
            { label: 'Noise Level', value: 'Low' },
            { label: 'Air Circulation', value: 'Artificial (Heated indoor air, comfortable but slightly dry.)' },
            { label: 'Lighting Condition', value: 'Moderate (Soft indoor lighting, natural light increasing through windows.)' },
            { label: 'Crowd Density', value: 'Sparse (Only a few students present, calm study environment.)' },
            { label: 'Accessibility', value: 'High (Unobstructed seating, free movement between study areas.)' },
            { label: 'Sun Exposure Level', value: 'Minimal (0–5%) (Still early morning; indoor environment removes any sun exposure.)' },
            { label: 'Overheating Risk', value: '5% (Indoor warmth is comfortable, but extended sitting in layers may cause a mild warmth increase.)' },
            { label: 'Cold Exposure Risk', value: '0% (Completely removed after entering the library—indoor heating counteracts prior outdoor chill.)' },
            { label: 'Skin Warmth Level', value: '85% (Body fully warmed up from indoor heating, previous cold exposure dissipating.)' },
            { label: 'Chill Resistance', value: '95% (Body fully adapted to warmer indoor conditions, no cold-related discomfort.)' },
            { label: 'Core Temperature Fluctuations', value: '15% (Stable, with slight adjustments from indoor heat absorption.)' },
            { label: 'Micro-Shivering Risk', value: '0% (No longer present—body temperature is steady indoors.)' },
            { label: 'Heat Radiating from Skin', value: '65% (Body retains warmth indoors, dissipating previous cold exposure.)' },
            { label: 'Heat Escape Efficiency', value: '50% (Heat loss is now slower indoors, slight warmth building up.)' },
            { label: 'Temperature Change Adaptation Rate', value: '90% (Quick adjustment to the warm indoor setting.)' },
            { label: 'Temperature Perception Lag', value: '3% (Minimal lag—body quickly recognizes the temperature difference.)' },
            { label: 'False Warmth Perception', value: '0% (No misinterpretation—body correctly senses indoor warmth.)' },
            { label: 'Facial Flushing Levels', value: '5% (Mild increase from the warmth contrast, but not visible or uncomfortable.)' },
            { label: 'Shock Response Sensitivity', value: '10% (Sudden cold exposure upon exiting would feel stronger now after adapting to indoor warmth.)' },
            { label: 'Skin Friction Irritation', value: '12% (Tight jeans and sweater may create slight friction from movement but remain manageable.)' },
            { label: 'Time Distortion Sensitivity', value: '3% (Still highly aware of time—focused on study break and next steps.)' },
            { label: 'Wind Level', value: 'None Indoors (No airflow beyond subtle indoor ventilation; outdoor breeze is no longer affecting her directly.)' },
            { label: 'Humidity', value: 'Indoor: Lower (40%) / Outdoor: Moderate (60%) (Library air feels slightly drier than the humid cold outside, mild contrast on skin.)' },
            { label: 'Scents in Air', value: 'Neutral indoors (Subtle hints of books, wooden furniture, and faint coffee aroma from other students nearby.)' },
            { label: 'UV Index Impact', value: 'Negligible (Fully indoors—no sun exposure affecting skin or warmth.)' },
            { label: 'Air Quality', value: 'Clean & Filtered (Library ventilation keeps the air fresh but drier compared to outside.)' },
            { label: 'Humidity on Skin', value: 'Minimal (Dryer indoor air slightly reducing moisture compared to the cool outdoor dampness from earlier.)' },
            { label: 'Terrain Type', value: 'Carpeted & Smooth Flooring (Soft, stable walking surface, reducing foot fatigue compared to outdoor pavement.)' },
            { label: 'Surface Texture', value: 'Dry & Clean (No hazards—secure footing indoors, no concerns about slipping or uneven ground.)' },
            { label: 'Lighting Conditions', value: 'Moderate & Even (Artificial library lighting provides soft but clear visibility; natural light filtering through windows adds warmth.)' },
            { label: 'Sound Level', value: 'Low & Focused (Quiet atmosphere—occasional whispers, book pages turning, soft footsteps.)' },
            { label: 'Wind Effect', value: 'None Indoors (No more chill on exposed skin; indoor warmth fully counteracts previous cold sensation.)' },
            { label: 'Moisture Absorption', value: 'Minimal (No external moisture buildup; skin gradually warming and adjusting to drier air.)' },
            { label: 'Heat Retention', value: 'Comfortable (Coat unzipped indoors, allowing body heat to regulate comfortably.)' },
            { label: 'Movement Restriction', value: 'None (Library setting allows free movement, no obstacles.)' },
          ],
          IndoorConditions: [
            { label: 'Temperature', value: '21°C (Comfortable, steady indoor warmth.)' },
            { label: 'Ventilation', value: 'Standard (Library heating system maintaining room temperature.)' },
            { label: 'Humidity', value: '40% (Dry indoor air, slight contrast from outside humidity.)' },
            { label: 'Sunlight Exposure', value: 'Increasing (Windows allowing natural light, still soft morning glow.)' },
            { label: 'Weather Forecast', value: 'Mostly clear, no precipitation expected.' },
            { label: 'Exact Location', value: 'Seated at a study table, preparing for a short break.' },
            { label: 'Internal Heat Discomfort', value: '10%' },
          ],
          PersonalHealth: [
            { label: 'Sleep Debt', value: '0%' },
            { label: 'Last Hygiene Routine', value: '07:20 AM (Washed face, brushed teeth, fixed hair – no shower yet.)' },
            { label: 'Fragrance & Body Scent', value: 'Neutral (No strong scents, fresh from morning routine.)' },
            { label: 'Outfit Condition', value: 'Fully Dressed (Comfortable and practical for study session.)' },
            { label: 'Makeup Status', value: 'None (Natural look, no makeup applied this morning.)' },
            { label: 'Next Hygiene Check', value: 'Soon (Shower preferred after leaving the library.)' },
            { label: 'Heart Rate', value: '78 BPM' },
            { label: 'Body Temperature', value: 'Neutral (Fully warmed up from indoor conditions, body adjusted to library’s temperature.)' },
            { label: 'Breathing Rate', value: 'Normal (Steady, relaxed breathing—no exertion, comfortable indoors.)' },
            { label: 'Blood Oxygen Levels', value: '98%' },
            { label: 'Hydration', value: '85%' },
            { label: 'Adrenaline Level', value: 'Baseline (Low)' },
            { label: 'Bladder Fullness', value: '60%' },
            { label: 'Urgency Level', value: 'Moderate' },
            { label: 'Bladder Comfort', value: 'Slight Discomfort' },
            { label: 'Blood Sugar Levels', value: '57%' },
            { label: 'Health', value: '98%' },
            { label: 'Immune System Strength', value: '85%' },
            { label: 'Sleep & Rest', value: '100%' },
            { label: 'Hangover Risk', value: 'None' },
            { label: 'Recovery Time Needed', value: 'Minimal' },
            { label: 'Injury Recovery Rate', value: '90%' },
            { label: 'Bruising Risk', value: 'Low' },
            { label: 'Capillary Expansion', value: 'Neutral' },
            { label: 'Capillary Fragility Risk', value: '20%' },
            { label: 'Immune System Strain', value: 'Low (10%)' },
            { label: 'Micro-Injury Accumulation', value: '7%' },
            { label: 'Injury Awareness Delay', value: '0%' },
            { label: 'Internal Organ Fatigue', value: '22%' },
            { label: 'Hormonal Influence Level', value: '38%' }
          ],
          DailyProgress: [
            { label: 'Current Date', value: 'January 13, 2025' },
            { label: 'Current Time of Day', value: '08:01:30 AM (Early study session, mid-morning progress.)' },
            { label: 'Day of the Week', value: 'Monday Morning (Focused mindset, study-driven start.)' },
            { label: 'Last Meal Time', value: '07:35 AM (Granola bar while walking – still lightly hungry.)' },
            { label: 'Previous Day Impact', value: 'No residual fatigue (Body fully recovered overnight.)' },
            { label: 'Circadian Rhythm Status', value: 'Fully reset (High alertness, steady focus.)' },
            { label: 'Activity Intensity Score', value: 'Low (Mostly seated, minimal exertion.)' },
            { label: 'Next Meal Required In', value: '1.5 - 2 Hours (Light hunger, breakfast still needed.)' },
            { label: 'Next Rest Break Needed In', value: '2-3 Hours (Mental reset from short break before studying resumes.)' },
          ],
          PhysicalCondition: [
            { label: 'Height', value: '169 cm (5\'7")' },
            { label: 'Weight', value: '54.00 kg (119 lbs)' },
            { label: 'Bust-Waist-Hip', value: '85-67-91 cm (33-26-36 in)' },
            { label: 'Body Fat Percentage', value: '20% (Lean, toned but not overly muscular.)' },
            { label: 'Muscle Mass', value: '38% (Slim but with moderate muscle tone from daily activities.)' },
            { label: 'Bone Density', value: 'Normal (Healthy, no deficiencies.)' },
            { label: 'Metabolism Rate', value: 'High (Burns calories efficiently, especially when active.)' },
            { label: 'Core Strength', value: 'Moderate (Strong enough for daily activities but not highly trained.)' },
            { label: 'Leg Strength', value: 'Moderate (Used to walking, standing for long periods, but not weight-trained.)' },
            { label: 'Upper Body Strength', value: 'Low-Moderate (Can carry daily items but not heavy lifting.)' },
            { label: 'Flexibility', value: 'High (Naturally flexible, especially in lower body.)' },
            { label: 'Posture', value: 'Good (Generally upright but may slouch slightly when tired.)' },
            { label: 'Stamina Level', value: 'Moderate (Can stay active for long periods, but endurance for intense exercise is average.)' },
            { label: 'Reaction Time', value: 'Fast (Sharp instincts and quick response to stimuli.)' },
            { label: 'Skin Temperature', value: 'Normal (Warm to the touch, adjusted to indoor climate.)' },
          ],
          PhysicalPerformance: [
            { label: 'Stamina', value: '87%' },
            { label: 'Cardiovascular Endurance', value: '83%' },
            { label: 'Walking Stamina', value: '88%' },
            { label: 'Fatigue Accumulation Rate', value: 'Low' },
            { label: 'Muscle Recovery Rate', value: '88%' },
            { label: 'Tendon & Ligament Strain Risk', value: '22%' },
            { label: 'Foot Arch & Sole Strain', value: '8%' },
            { label: 'Metabolic Rate Adaptation', value: '72%' },
            { label: 'Energy Levels', value: '85%' },
            { label: 'Stamina Drain Rate', value: 'Low to Moderate' },
            { label: 'Sudden Exhaustion Drop Risk', value: '6%' },
            { label: 'Posture Fatigue Rate', value: '15%' },
            { label: 'Fatigue Walk Style', value: 'Stable & Controlled' },
            { label: 'Mid-Step Hesitation', value: '0%' },
            { label: 'Shoulder Droop Probability', value: '12%' },
            { label: 'Leg Twitch Probability', value: '6%' },
            { label: 'Clothing Comfort & Fit', value: '73%' },
            { label: 'Foot Discomfort', value: '0%' },
            { label: 'Sleep Onset Speed', value: '10%' },
            { label: 'Muscle Soreness', value: '7%' },
            { label: 'Joint Stiffness', value: '3%' },
            { label: 'Balance & Coordination', value: '99%' },
            { label: 'Hand-Eye Coordination', value: '98%' },
            { label: 'Flexibility & Agility', value: '94%' },
            { label: 'Walking Pace Consistency', value: 'Perfectly Even' },
            { label: 'Foot Step Accuracy', value: '100%' },
            { label: 'Fine Motor Skill Decay Rate', value: '6%' },
            { label: 'Finger Dexterity', value: '99%' },
            { label: 'Muscle Tremors', value: '2%' },
            { label: 'Stumble Recovery Time', value: '98%' },
            { label: 'Shoulder & Spine Alignment', value: '93%' },
            { label: 'Leg Blood Pooling', value: 'None' },
            { label: 'Precision Grip Deterioration', value: '3%' },
            { label: 'Posture & Core Strength', value: '92%' },
            { label: 'Circulation & Blood Flow', value: 'Excellent' },
            { label: 'Blood Circulation Efficiency', value: '99%' },
            { label: 'Coordination Degradation Rate', value: 'None' },
            { label: 'Body Position Stability Check', value: '100%' },
            { label: 'Heel Pressure Hotspots', value: '2%' },
            { label: 'Joint Cracking Frequency', value: '6%' },
            { label: 'Dexterity & Grip Strength', value: '100%' },
            { label: 'Joint Stability', value: '100%' },
            { label: 'Body Weight Distribution Sensitivity', value: '3%' },
            { label: 'Circulatory Constriction Risk', value: '0%' },
            { label: 'Body Sway Frequency', value: '2%' },
            { label: 'Muscle Memory Dependence Increase', value: '92%' },
            { label: 'Fine Grip Pressure Sensitivity', value: '100%' },
          ],
          SensoryComfort: [
            { label: 'Body Scent', value: 'Neutral & Fresh (Still carries subtle shampoo hints, no changes after sitting indoors.)' },
            { label: 'Breath Freshness', value: '80% (Slight decrease as time passes, but still fresh from morning brushing.)' },
            { label: 'Teeth Cleanliness', value: '92% (Still very clean, but natural saliva production has begun to alter post-brush freshness.)' },
            { label: 'Pain Sensitivity', value: 'Normal (No shifts, no unusual discomfort.)' },
            { label: 'Hearing Sensitivity', value: 'Normal (Stable, no auditory strain in quiet library setting.)' },
            { label: 'Vision Sharpness', value: '93% (Still crisp, slight eye fatigue from focusing on study materials.)' },
            { label: 'Auditory Overload Risk', value: 'Low (Still minimal risk, library remains quiet and controlled.)' },
            { label: 'Light Sensitivity', value: 'Normal (Soft indoor lighting remains comfortable.)' },
            { label: 'Pupil Dilation', value: 'Normal (Responding appropriately to indoor lighting conditions.)' },
            { label: 'Eye Focus Delay', value: '1% Increase (Slight adjustment needed after prolonged screen or text focus, but no noticeable lag.)' },
            { label: 'Skin Moisture Level', value: 'Balanced (No major changes, indoor air slightly drier than outdoor humidity.)' },
            { label: 'Skin Dampness Accumulation', value: '8% (Reduced from earlier, indoor dryness preventing buildup.)' },
            { label: 'Skin Irritation Risk', value: '12% (Slight increase from snug jeans pressing against skin while seated.)' },
            { label: 'Lip Sensitivity Shift', value: 'Normal (No numbness, lips still naturally responsive.)' },
            { label: 'Tooth Sensitivity & Gum Health', value: '94% (Still resilient and strong, no issues.)' },
            { label: 'Micro-Motion Detection', value: '89% (Minor focus fatigue from studying, but still highly perceptive.)' },
            { label: 'Sound Layer Processing', value: '90% (No difficulty distinguishing subtle sounds in the quiet library setting.)' },
            { label: 'Spatial Memory Efficiency', value: '91% (Fully aware of surroundings, no forgetfulness or misplacement of objects.)' },
            { label: 'Nerve Sensitivity', value: 'Normal (Body reacts appropriately to external stimuli.)' },
            { label: 'Scalp & Hair Sensitivity', value: 'Normal (No discomfort, hair remains neatly in place.)' },
            { label: 'Overconfidence Bias', value: 'Low (Maintains clear-headed, measured confidence.)' },
            { label: 'Overreaction to Sudden Touch', value: 'Normal (No heightened sensitivity, reacts appropriately.)' },
            { label: 'Short-Term Thought Looping', value: '1% Increase (Slightly more repetitive thinking due to study focus, but still controlled.)' },
            { label: 'Blood Circulation Efficiency', value: '99% (Still excellent, slightly adjusting from seated position.)' },
            { label: 'Haptic Touch Misinterpretation', value: 'Normal (No misinterpretations, responds accurately to physical contact.)' },
            { label: 'Auditory Focus Stability', value: 'Stable (Still sharp, no distractions from ambient noise.)' },
            { label: 'Selective Hearing Bias', value: 'Normal (Balanced attention, no signs of zoning in/out selectively.)' },
            { label: 'Inner Ear Balance Sensitivity', value: 'Normal (Stable, no dizziness or imbalance.)' },
            { label: 'Sarcasm Detection Impairment', value: 'Normal (Understands subtle humor and sarcasm clearly.)' },
            { label: 'Staring Tendency Increase', value: '1% Increase (Focused study effort may slightly increase blank staring moments when deep in thought.)' },
            { label: 'Peripheral Vision Drag', value: 'Normal (No changes, full awareness of surroundings.)' },
            { label: 'Scent Sensitivity Alteration', value: 'Normal (Still detecting scents without distortion.)' },
            { label: 'Blink Speed Reduction', value: '2% Decrease (Slightly reduced blinking from reading/studying, but not concerning.)' },
            { label: 'Absentminded Body Adjustments', value: 'Moderate (Occasionally shifting seated position, adjusting clothing slightly.)' },
            { label: 'Selective Hearing Bias', value: 'Normal (Fully balanced auditory processing, no distractions overpowering focus.)' },
          ],
          Devices: [
            { label: 'Phone Battery Level', value: '94%' },
            { label: 'Battery Health', value: '94% (No change—still performing well, slight degradation from long-term use.)' },
            { label: 'Charging Status', value: 'Not Charging (Phone remains in use, no power source connected.)' },
            { label: 'Power-Saving Mode', value: 'Off (Full performance enabled, no restrictions.)' },
            { label: 'Low Power Mode Auto-Trigger', value: 'Enabled at 20% (Will activate when needed to conserve battery.)' },
            { label: 'Background App Refresh', value: 'On (Minor battery drain from automatic updates and processes.)' },
            { label: 'Battery Temperature', value: '29°C (Slight warmth from prolonged use, but still within normal range.)' },
            { label: 'Battery Cycle Count', value: '413 Cycles (No additional cycles—no full charge since last recorded use.)' },
            { label: 'Fast Charging Support', value: 'Yes (Can reach 50% in ~30 minutes under optimal conditions.)' },
            { label: 'Estimated Battery Time Left', value: 'Several hours (Depends on usage—light use will extend duration.)' },
            { label: 'Battery Warning Notifications', value: 'Enabled (Alerts at 10%, 5%, and 1% remaining.)' },
            { label: 'Recent Charging History', value: 'Last full charge: ~1 hour 20 minutes ago (Since phone use began before study session.)' },
          ],
          NetworkSecurity: [
            { label: 'Signal Strength', value: 'Strong (Full Bars, 5G Connection) (Stable and fast mobile data available, no disruptions.)' },
            { label: 'WiFi Connection', value: 'Disconnected (Still on mobile data, library WiFi not connected.)' },
            { label: 'Saved Networks', value: 'Yale Dorm WiFi, Starbucks WiFi (Auto-reconnect available when in range.)' },
            { label: 'Bluetooth', value: 'Enabled' },
            { label: 'Hotspot Availability', value: 'Off (Not sharing internet connection.)' },
            { label: 'Dual SIM', value: 'Single SIM (No backup network available.)' },
            { label: 'eSIM Support', value: 'Yes (Can add a digital SIM if needed.)' },
            { label: 'Carrier & Data Plan', value: 'AT&T 5G - 30GB Plan (Used: ~12.4GB, Remaining: ~17.6GB) (Minor increase from additional mobile data usage.)' },
            { label: 'Roaming Status', value: 'Off (No extra charges for international use.)' },
            { label: 'VPN Usage', value: 'Off (Data is visible to ISP; less security on public networks.)' },
            { label: 'Network Congestion', value: 'Mild (Still usable, but possible slight slowdowns if library becomes more crowded.)' },
            { label: 'Public WiFi Security Warning', value: 'N/A (Still using mobile data, no exposure to unsecured public networks.)' },
            { label: 'Lock Screen Security', value: 'Enabled (Face ID, Fingerprint, & Unlock Pattern Active) (Switched from PIN to “G” shape pattern for quick access.)' },
            { label: 'Auto-Wipe on Failed Logins', value: 'Off (Multiple failed attempts won’t erase data.)' },
            { label: 'Tracking Apps Installed', value: 'Find My Device Installed (Now able to remotely track if lost or stolen.)' },
            { label: 'Location Sharing Status', value: 'Always Share (Apps can request live location anytime.)' },
            { label: 'GPS Status', value: 'On (Navigation and apps can use location services.)' },
            { label: 'Emergency Location Sharing', value: 'Off (No automatic location tracking in emergencies.)' },
            { label: 'Nearby WiFi & Bluetooth Tracking', value: 'Enabled (Can approximate location even without GPS.)' },
            { label: 'Last Known Location (Before GPS Disabled)', value: 'Saved (Can be retrieved later if needed.)' },
            { label: 'Step Counter (Pedometer)', value: 'Enabled (Tracking daily movement.)' },
          ],
          PhoneSettings: [
            { label: 'Auto-Lock Timer', value: 'Set to 5 Minutes (Increased from default to prevent unnecessary locking while in use.)' },
            { label: 'Dark Mode', value: 'Off (Using more battery with the standard light mode.)' },
            { label: 'One-Handed Mode', value: 'On (Easier use on larger screens, making it more comfortable to navigate.)' },
            { label: 'Auto-Correct & Predictive Text', value: 'Enabled (Helps with typing speed and accuracy.)' },
            { label: 'Haptic Feedback', value: 'On (Provides tactile responses, but uses a small amount of battery.)' },
            { label: 'Face ID/Recognition Sensitivity', value: 'High Sensitivity – Works even in low light or with slight obstructions.' },
            { label: 'Double Tap to Wake', value: 'Enabled (Screen turns on easily with a double tap, even in your pocket.)' },
            { label: 'Grayscale Mode', value: 'Off (Not reducing blue light for eye strain at the moment.)' },
            { label: 'Blue Light Filter Schedule', value: 'Enabled (Turns on at 10:00 PM to reduce eye strain.)' },
            { label: 'App Permissions Check', value: 'All apps have Full Location & Camera Access' },
            { label: 'Screen Brightness', value: 'Adjusting (Auto-brightness active, varying between 60-80%) (Library’s indoor lighting reduced brightness slightly; outdoor transitions slightly increased it.)' },
            { label: 'Always-On Display', value: 'Off (Saves power, keeping the screen dark when not in use.)' },
            { label: 'Font Size & Accessibility', value: 'Normal (Standard font size, no scaling or magnification enabled.)' },
            { label: 'Refresh Rate', value: '120Hz (Smooth scrolling and navigation, but slightly higher battery consumption.)' },
            { label: 'Screen Timeout', value: '5 Minutes (Adjusted from 1 minute to match Giulia’s security settings, preventing frequent re-locks during active use.)' },
            { label: 'Auto-Brightness Adjustments', value: 'On (Dynamically adapting to lighting conditions—dimming indoors, increasing outdoors for visibility.)' },
          ],
          NotificationsAndSound: [
            { label: 'Sound Mode', value: 'Vibrate Only (No loud notifications, ensuring quiet operation.)' },
            { label: 'Media Volume', value: '20% (Low) – Won’t disturb others but can still be heard in quiet settings.' },
            { label: 'Call Alerts', value: 'On (Incoming calls will buzz, alerting you without sound.)' },
            { label: 'Do Not Disturb Mode', value: 'Off (Receives all messages and calls without restrictions.)' },
            { label: 'Headphone Audio Level Warning', value: 'Off (Allows louder volumes without warnings.)' },
            { label: 'Notification History', value: 'Enabled (Missed alerts can be reviewed, ensuring you don’t miss important messages.)' },
            { label: 'Vibration Strength', value: 'Medium (Balanced vibration, not too strong or weak.)' },
          ],
          StorageAndAppUsage: [
            { label: 'Storage Space Left', value: '11.8GB Free (Slight decrease due to background processes and app cache buildup.)' },
            { label: 'Apps Running in Background', value: '4 Apps (Kik, Google Maps, Browser, Snapchat – Moderate battery & data usage.)' },
            { label: 'Auto-Backup to Cloud', value: 'Enabled (Photos, apps, and documents automatically backed up to prevent data loss.)' },
            { label: 'Most Used App (Last Hour)', value: 'Kik (12 minutes active, wardrobe check + messages).' },
            { label: 'Last Opened App', value: 'Snapchat (Checked notifications and messages before the study break.)' },
            { label: 'Large Files Detected', value: '2.3GB (Consider offloading or deleting large files to free space.)' },
            { label: 'Recently Deleted Files', value: 'Not Emptied (Deleted files still take up storage—empty the trash for space savings.)' },
            { label: 'App Data Usage (Last 24h)', value: '2.5GB (Minor increase due to Kik, Snapchat, and Maps usage.)' },
            { label: 'Game Mode', value: 'Off (No performance boost for games—can be enabled if needed.)' },
            { label: 'Recently Installed Apps', value: '"Find My Device" Installed (No other new apps installed recently.)' },
            { label: 'Unused Apps Suggestion', value: '4 Apps Not Opened in 3 Months (Consider uninstalling to free up space.)' },
            { label: 'Installed Apps Breakdown', value: `
                📞 Calls & Messages: Standard Dialer, Messages App (No unread texts, minimal use.)
                📷 Camera & Gallery: Default Camera App, Photo Gallery (No new photos taken today.)
                🎵 Music Streaming: Spotify (Inactive, last played: Party Playlist.)
                📩 Social Media: Instagram, Snapchat, TikTok, Twitter (Snapchat most recently checked; background refresh enabled.)
                📬 Messaging Apps: Kik (Most Used), WhatsApp, Messenger (Kik active for wardrobe check & chats, 2 unread DMs on Messenger.)
                💰 Banking & Payments: Bank App, Venmo, Cash App (Low balance alert remains.)
                🚕 Transport Apps: Uber, Lyft (No ride scheduled yet, available for quick booking.)
                🛒 Shopping: Amazon, Depop (Browsing history: Clothing & accessories, no active purchases.)
                🗺️ Navigation: Google Maps (Brief check for directions, minimal data usage.)
                📅 Productivity & Notes: Google Calendar, Notes App (No reminders set, no scheduled tasks.)
                🔐 Security & Privacy: Password Manager, Face ID, VPN (VPN still off, no active security alerts.)
                📲 Storage Management: 📂 11.8GB Free, Large Videos Taking Space (Cleanup suggested.)
                🩸 Health Tracking Apps: None (Manual tracking only; hydration or fitness apps could be added if needed.)
              ` },
          ],
          EmergencySettings: [
            { label: 'Emergency SOS Shortcut', value: 'Enabled (Press power button 5x to call 911, easily accessible in emergencies.)' },
            { label: 'Medical ID Set Up', value: 'Yes (Emergency responders can access health information directly from the lock screen.)' },
            { label: 'Last Call Made', value: 'Over 1 Hour Ago (No calls made recently, call history remains unchanged.)' },
            { label: 'Lost Mode Option', value: 'Enabled (Now allows remote locking of the phone if stolen, providing added security.)' },
            { label: 'Nearby Emergency Services', value: 'Recently Searched (Last checked for locations, but not saved—consider bookmarking for quicker access.)' },
            { label: 'Live Location Sharing (For Emergency Contacts)', value: 'Enabled (Manual Activation Required) (Location sharing available but must be manually turned on in urgent situations.)' },
            { label: 'Earthquake or Disaster Alerts', value: 'Enabled (Alerts for earthquakes or disasters will come through as needed.)' },
            { label: 'Battery-Saving Emergency Mode', value: 'Low Power Mode with Emergency Features Only (Activates automatically when battery is low, preserving vital functions.)' },
          ],
          TimeAndGlobalSettings: [
            { label: 'Time Zone', value: 'EST (Eastern Standard Time) (Automatically adjusts when traveling.)' },
            { label: 'Scheduled Alarms', value: 'None (No alarms set for the day, you can manually set them if needed.)' },
            { label: 'Do Not Disturb Schedule', value: 'None (No auto-quiet hours, notifications are received at all times.)' },
            { label: 'Weather Alerts', value: 'On (Severe weather conditions trigger notifications.)' },
            { label: 'Translation & Language Settings', value: 'Enabled (Can auto-translate text when needed.)' },
          ],
          Finances: [
            { label: 'Cash', value: '$0' },
            { label: 'Bank', value: '$354.85' },
          ],
          AlcoholConsumption: [
            { label: 'Drunkness Level', value: 'None (No alcohol consumption, full cognitive and physical control.)' },
            { label: 'Blood Alcohol Level', value: '0% (No alcohol in the bloodstream, full mental clarity.)' },
            { label: 'Alcohol Crash Risk', value: '0% (No risk, as no alcohol was consumed.)' },
            { label: 'Alcohol Absorption Rate', value: 'N/A (No alcohol to absorb.)' },
            { label: 'Liver Alcohol Processing Efficiency', value: '100% (Liver functioning at full capacity with no alcohol to process.)' },
            { label: 'Stomach Lining Irritation Risk', value: '0% (No alcohol intake, no irritation.)' },
            { label: 'Alcohol Taste Sensitivity Decline', value: '0% (No alcohol to affect taste perception.)' },
            { label: 'Alcohol Processing Variance', value: '0% (No fluctuation in blood alcohol level, as there\'s no alcohol in your system.)' },
            { label: 'Risk of Overconsumption', value: '0% (No alcohol consumption risk.)' },
            { label: 'Risk Perception Decline', value: '0% (No alcohol to affect caution or decision-making.)' },
            { label: 'Defensive Instinct Decline', value: '0% (No alcohol affecting judgment or trust levels.)' },
            { label: 'Fight-or-Flight Responsiveness', value: '100% (Full response capacity, highly alert and reactive to danger signals.)' },
            { label: 'Snoring Risk', value: 'None (No alcohol to relax throat muscles or impair sleep.)' },
            { label: 'Memory Storage Efficiency', value: '100% (Optimal memory retention, no alcohol-related fogginess.)' },
            { label: 'Startle Response Speed', value: 'Normal (100%) (Fully responsive to sudden movements or unexpected sounds.)' },
            { label: 'Bruise Formation Delay', value: '0% (No alcohol intake, no delayed injury effects.)' },
            { label: 'Instantaneous Startle Risk', value: '0% (Fully reactive to surprises, no delay in startle response.)' },
          ],
          NutritionAndDigestion: [
            { label: 'Thirst', value: '50% (Moderate, improved from drinking water at the library but still room for more intake.)' },
            { label: 'Hunger', value: '68% (Mild to moderate hunger; stomach starting to feel emptier, slight growling possible.)' },
            { label: 'Metabolism Rate', value: 'Normal (100%) (Fully functional digestion, no slowdowns from fatigue or stress.)' },
            { label: 'Nausea Risk', value: '0% (No nausea present—steady digestion, no stomach discomfort.)' },
            { label: 'Digestive Processing Speed', value: 'Normal (100%) (Digestion running efficiently, no interference.)' },
            { label: 'Acid Reflux Risk', value: '0% (No acidic or heavy foods consumed, no reflux risk.)' },
            { label: 'Food Appeal Sensitivity', value: '85% (Increasing appetite—warm, hearty food like eggs, toast, or oatmeal would be especially appealing.)' },
          ],
          RespiratoryHealth: [
            { label: 'Lung Capacity', value: 'Normal (100%) (Breathing remains steady and clear, no strain from prior walking or studying.)' },
            { label: 'Respiratory Effects', value: 'Mild Dryness (85%) (Indoor heating slightly reduces humidity, causing mild dryness but nothing uncomfortable.)' },
          ],
          CognitiveFunction: [
            { label: 'Mental Clarity', value: '97% (Slight mental exertion from explaining concepts, but still highly sharp.)' },
            { label: 'Reflex & Reaction Time', value: '98% (Still quick and precise, minor cognitive load from study session.)' },
            { label: 'Decision-Making Ability', value: '98% (Logical thinking intact, but minor fatigue from processing explanations.)' },
            { label: 'Attention Span & Focus Control', value: '95% (Still strong, but sustained focus on study materials adds slight strain.)' },
            { label: 'Short-Term Logical Thinking Delay', value: '2% (A minor pause between rapid information recall and structuring responses.)' },
            { label: 'Impulse Control Resistance', value: 'Low (7%) (Slight decrease—confidence boost from leading the session could lead to minor boldness.)' },
            { label: 'Impulsivity vs. Rationality Balance', value: 'Lean Rational (93%) (Still highly rational, but mild increase in assertiveness.)' },
            { label: 'Decision Fatigue', value: '3% (Minimal but present—active thinking takes a slight toll.)' },
            { label: 'Decision Delay Time', value: '2% (Still immediate, but minor mental strain could cause a split-second hesitation.)' },
            { label: 'Panic Threshold', value: '95% (No change—still handles stress calmly without anxiety.)' },
            { label: 'Brain Fog Intensity', value: '0% (No fog, full mental clarity remains.)' },
            { label: 'Reaction Speed to Unexpected Situations', value: '98% (Slight mental load could lead to a slightly longer reaction if interrupted.)' },
            { label: 'Impulse Repetition Tendency', value: '0% (Still fully in control of choices, no repetitive impulsive behaviors.)' },
            { label: 'Attention Switching Speed', value: '95% (Still strong, but slight moment needed to reset between study and break.)' },
            { label: 'Intrusive Thoughts Frequency', value: '2% (Mild mental drift from studying, but nothing distracting.)' },
            { label: 'Short-Term Logical Chain Disruption', value: '1% (Minimal—brain is processing study materials, but thoughts remain structured.)' },
            { label: 'Reflexive Thought Audibility', value: '0% (No verbalized thoughts, still mentally composed.)' },
            { label: 'Thought Suppression Ability', value: '98% (Fully in control, but minor lingering thoughts from study concepts.)' },
            { label: 'Emotional Snapback', value: '2% (Minimal fluctuations—remains emotionally steady.)' },
            { label: 'Focus Drift Speed', value: '3% (Slightly more noticeable due to transitioning from study to break.)' },
            { label: 'Focus Drift Probability', value: '3% (Slight drift as mental energy adjusts post-study.)' },
            { label: 'Logic vs. Emotion Processing Ratio', value: '88% (Still logic-dominant, but minor social/emotional warmth from Michelle’s engagement.)' },
            { label: 'Subconscious Emotional Leakage', value: '12% (Small increase due to the satisfaction of successfully teaching.)' },
            { label: 'Subconscious Anxiety Response', value: '10% (Still calm and grounded, no notable anxiety.)' },
            { label: 'Long-Term Memory Encoding Efficiency', value: '97% (Study session reinforced retention, slightly lower than fresh morning levels but still strong.)' },
            { label: 'Short-Term Memory Retention', value: '92% (Slight decrease due to active recall during study, but still strong.)' },
            { label: 'Memory Gaps Formation Risk', value: '7% (Slightly increased—deep focus on study material may push out minor details.)' },
            { label: 'Thought Loop Frequency', value: '12% (Mild lingering thoughts about elasticity concepts, but no fixation.)' },
            { label: 'Memory Time Distortion', value: '2% (Very minor—focused study effort slightly alters perceived duration of tasks.)' },
            { label: 'Social Memory Overwriting', value: '6% (Minimal risk—study session reinforced memory but may cause slight recall mix-ups later.)' },
            { label: 'Thought Persistence', value: '12% (A slight increase in background thoughts—Michelle’s study session sticks in her mind.)' },
            { label: 'Thought Fragmentation Risk', value: '0% (No disruptions—thoughts remain clear and structured.)' },
            { label: 'Thought Jumping Frequency', value: '7% (Mildly higher due to transitioning between study, explanations, and break mode.)' },
            { label: 'Memory Overload Fatigue', value: '2% (Tiny increase—brain still processing study session, but no overwhelming strain.)' },
            { label: 'Reading Comprehension Retention', value: '93% (Still strong, but minor fatigue from analyzing multiple elasticity concepts.)' },
            { label: 'Abstract Thinking Efficiency', value: '92% (Slight reduction—brain actively worked through explanations, causing mild strain.)' },
            { label: 'Motivation Stability', value: '88% (Still high, but slight mental fatigue might require a brief reset before resuming study.)' },
            { label: 'Overthinking Probability', value: '7% (Mild increase due to reviewing past explanations mentally, but not disruptive.)' },
            { label: 'Frustration Tolerance', value: '94% (Still strong, minor challenge from explaining concepts didn’t cause irritation.)' },
          ],
          EmotionalAndSocial: [
            { label: 'Emotional Stability', value: '93% (Still highly stable, but slight mental fatigue from explaining concepts.)' },
            { label: 'Subconscious Awareness', value: '88% (Slight drop—focus on study material reduced passive awareness of subtle cues.)' },
            { label: 'Suspicion & Wariness', value: '7% (Small increase—more engaged in conversation, slight mental caution in social setting.)' },
            { label: 'Social Energy Level', value: '96% (Still high, but minor exertion from study reduces peak energy.)' },
            { label: 'Inhibition Suppression', value: '0% (No change—fully aware and self-controlled.)' },
            { label: 'Excitement-Seeking Tendency', value: '6% (Slightly increased from confidence boost after teaching effectively.)' },
            { label: 'Gag Reflex Sensitivity', value: '100% (Still fully responsive, no changes.)' },
            { label: 'Flirtation Impulse Boost', value: '7% (Slightly increased social warmth from study session, but still low.)' },
            { label: 'Overreaction Likelihood', value: '5% (Still highly rational, no emotional instability.)' },
            { label: 'Impulse Repetition Tendency', value: '0% (No repetitive behavior, fully controlled.)' },
            { label: 'Social Cue Perception Shift', value: '6% (Slight increase—focused study may cause mild momentary delay in catching social nuances.)' },
            { label: 'Skepticism Reduction', value: '7% (More engaged, slightly more trusting in the moment due to positive interaction.)' },
            { label: 'Trust Bias Enhancement', value: '6% (Minor increase—pleasant interaction with Michelle reinforces positive social perception.)' },
            { label: 'Internal Self-Awareness Decline', value: '0% (Fully self-aware, no change.)' },
            { label: 'Trust-to-Skepticism Balance', value: '88% (Still logical but slightly more inclined to trust after social validation.)' },
            { label: 'Lying Detection Ability', value: '88% (Still highly perceptive, but slight focus on study may reduce passive detection ability.)' },
            { label: 'Tone Interpretation Impairment', value: '0% (Fully tuned to social tones and humor.)' },
            { label: 'Auditory Fatigue', value: '2% (Slightly increased—mental engagement during study session creates mild processing fatigue.)' },
            { label: 'Fake Friendliness Detection', value: '2% (Still strong, but minor relaxation in social skepticism due to positive engagement.)' },
            { label: 'Attachment Bias', value: '12% (Slight increase—social warmth from successful teaching might lead to mild emotional openness.)' },
            { label: 'Attachment Vulnerability', value: '12% (Still low, but positive engagement slightly reduces emotional detachment.)' },
            { label: 'Fake Persona Endurance', value: '0% (No need for social masking—remains fully authentic.)' },
            { label: 'Emotional Reactivity', value: '7% (Slight increase—confidence boost from teaching success subtly influencing emotions.)' },
            { label: 'Social Filter Weakening', value: '0% (Still fully controlled in conversations.)' },
            { label: 'Trust-to-Skepticism Balance', value: '88% (Logical with a slight lean toward trust after productive social interaction.)' },
            { label: 'Irritability Spike Potential', value: '6% (Still very low, but mental focus could make distractions slightly more noticeable.)' },
            { label: 'Suggestibility Boost', value: '0% (Fully autonomous, no external influence on decision-making.)' },
            { label: 'Social Adaptability Rate', value: '98% (Still fully adaptable but minor focus fatigue may delay adjustments slightly.)' },
            { label: 'Emotional Latching', value: '7% (Still selective, but confidence boost makes social connections feel more positive.)' },
            { label: 'Irritation & Sensitivity to Annoyances', value: '2% (Still low, but mild cognitive fatigue may make interruptions slightly more noticeable.)' },
            { label: 'Subconscious Social Tension', value: '6% (Still highly comfortable, but slight mental distraction could momentarily reduce full social sharpness.)' },
            { label: 'Social Fatigue Buildup', value: '2% (Still minimal, but focused study effort slightly reduces peak social engagement potential.)' },
          ],
          SpeechAndCommunication: [
            { label: 'Voice Volume Control', value: '98% (Still controlled, but slight fatigue from explaining concepts could cause minor variations.)' },
            { label: 'Speech Volume Consistency', value: '97% (Still smooth and consistent, but longer conversations may introduce subtle shifts in tone.)' },
            { label: 'Slurred Speech Probability', value: '0% (Fully clear, no slurring or incoherence.)' },
            { label: 'Voice Recognition Delay', value: '1% (Still sharp, but minor mental fatigue could cause a split-second recognition delay in an unexpected situation.)' },
            { label: 'Whisper Perception Delay', value: '1% (Still highly aware of soft voices, but slight cognitive load from studying could cause a tiny delay in quick recognition.)' },
          ],
          EnvironmentalAwarenessAndReflexes: [
            { label: 'Awareness of Surroundings', value: '100% (Fully tuned into all cues, highly aware of background and immediate surroundings.)' },
            { label: 'Awareness of Surroundings', value: '98% (Still highly tuned in, but deep focus on study reduced passive background monitoring slightly.)' },
            { label: 'Peripheral Awareness', value: '97% (Still excellent, but sustained study focus may cause minor momentary lapses in noticing distant cues.)' },
            { label: 'Peripheral Vision Awareness', value: '98% (Still sharp, but cognitive load from studying may cause a slight drop in split-second detection.)' },
            { label: 'Background Noise Filtering Impairment', value: '2% (Still highly effective, but deep focus on study may cause momentary tuning-out of background sounds.)' },
            { label: 'Cold Tolerance Misjudgment', value: '0% (Still fully accurate, body now adapted to indoor warmth.)' },
            { label: 'Beat Synchronization Delay', value: '0% (No change—still perfectly in rhythm, full coordination intact.)' },
            { label: 'Street Awareness & Traffic Danger Detection', value: '97% (Still sharp, but slight study-related cognitive focus may cause momentary delay in quick judgments.)' },
            { label: 'Home Comfort Level', value: '100% (Library setting feels comfortable, no discomfort in familiar environment.)' },
            { label: 'Situational Bluff Detection', value: '98% (Still highly perceptive, but mild mental fatigue from study could slightly lower peak accuracy.)' },
            { label: 'Stranger Suspicion Reflex', value: '8% (Slightly increased due to shift in focus—more engaged in study than external monitoring.)' },
            { label: 'Movement Efficiency in Crowds', value: '98% (Still smooth, but minor mental fatigue could cause very slight reaction delay in sudden adjustments.)' },
            { label: 'Visual Clarity in Different Lighting', value: '98% (Still sharp, but prolonged reading may slightly increase eye strain over time.)' },
            { label: 'Background Noise Overload Risk', value: '2% (Still highly resistant, but minor study fatigue could increase sensitivity to sudden loud noise.)' },
            { label: 'Air Quality Sensitivity', value: '98% (Still highly aware, but indoor air conditioning may slightly alter perception of fresh air cues.)' },
            { label: 'Sensory Distortion Moments', value: '0% (No distortions—clear perception of all stimuli.)' },
            { label: 'Music Distortion Risk', value: '0% (Still fully clear hearing—no audio distortion sensitivity.)' },
            { label: 'Rhythmic Motion Stability', value: '100% (Full coordination and stability remain unchanged.)' },
            { label: 'False Confidence in Reflexes', value: '0% (Fully aware of abilities, no overestimation.)' },
            { label: 'Peripheral Object Recognition Delay', value: '2% (Still sharp, but prolonged reading focus might create momentary visual adjustment delays.)' },
            { label: 'Step-Size Irregularity', value: '0% (Still even, no misjudgment in stride.)' },
            { label: 'Small Memory Looping', value: '2% (Slightly higher due to reviewing study material internally, but not disruptive.)' },
            { label: 'Sudden Sleep Onset Probability', value: '2% (Still highly alert, but minor mental fatigue could cause drowsiness later if not managed.)' },
            { label: 'Heel Blister Formation', value: '0% (No risk—boots remain comfortable.)' },
            { label: 'Foot Rolling Risk', value: '0% (Still fully stable, no missteps.)' },
            { label: 'Barefoot Impulse Tendency', value: '0% (Still fully comfortable in footwear.)' },
            { label: 'Hip Bumping Likelihood', value: '2% (Still low, but mild focus fatigue might slightly reduce spatial precision in fast movements.)' },
            { label: 'Gut Sensitivity Drop', value: '100% (No digestive discomfort—fully aware of bodily functions.)' },
            { label: 'Burp Likelihood', value: '0% (No indigestion, no issues.)' },
            { label: 'Decision Persistence', value: '98% (Still highly confident, but minor fatigue may cause slight reconsideration on minor decisions.)' },
            { label: 'Absentminded Muscle Tension Release', value: '2% (Still highly aware, but minor relaxation while sitting might cause slight adjustments.)' },
            { label: 'Reflexive Thought Audibility', value: '0% (No verbalized thoughts, fully internal.)' },
            { label: 'Eye Glare Sensitivity', value: '2% (Still resistant, but prolonged reading could slightly increase sensitivity to sudden bright light.)' },
            { label: 'Bass Reverberation Awareness', value: '0% (Still fully clear perception of sound vibrations.)' },
            { label: 'Audio Clipping Effect', value: '0% (No issues with sharp sounds, full clarity.)' },
            { label: 'Stranger Danger Detection', value: '97% (Still highly aware, but slightly more mentally engaged in study than in environmental scanning.)' },
            { label: 'Risk-Taking Tendency', value: '7% (Confidence boost from teaching slightly increases willingness to take small risks, but still controlled.)' },
            { label: 'Spatial Awareness Accuracy', value: '98% (Still sharp, but study focus may cause minor adjustments when shifting attention.)' },
            { label: 'Foot Step Pressure Balance', value: '0% (Still fully comfortable, no pressure issues.)' },
            { label: 'Heat Escape Efficiency', value: '100% (Body continues to regulate temperature effectively.)' },
            { label: 'Bathroom Urgency', value: '5% (Slight increase from sitting and consuming water, but no immediate urgency.)' },
            { label: 'Defensive Reflex Speed', value: '97% (Still fast, but minor cognitive fatigue may slightly slow reaction speed in unexpected scenarios.)' },
            { label: 'Increased Germ Exposure', value: '2% (Minimal—indoor environment slightly raises potential risk.)' },
            { label: 'Shoulder Bumping Frequency', value: '2% (Still highly aware, but mild distraction from study could cause slight moments of lower spatial precision.)' },
            { label: 'Footstep Stability Confidence', value: '100% (Still fully stable, no misjudgments.)' },
            { label: 'Tooth Sensitivity', value: '0% (Still no sensitivity issues.)' },
            { label: 'Footstep Sound Sensitivity', value: '0% (No distractions from footsteps, full awareness maintained.)' },
            { label: 'Nerve Firing Speed', value: '99% (Still immediate, but slight mental fatigue could add a fraction of a second to response speed.)' },
            { label: 'Startle Reflex Sensitivity', value: '97% (Still fast, but slightly reduced due to study-related focus overriding passive alertness.)' },
          ],
          OverstimulationTolerance: [
            { label: 'Overstimulation Tolerance', value: '98% (Still highly tolerant, but minor cognitive strain from studying could reduce ability to handle chaotic environments slightly.)' },
            { label: 'Coughing Frequency', value: '0% (No dryness or irritation, breathing remains clear.)' },
            { label: 'Sweat Accumulation Rate', value: '7% (Slight increase from sitting in a warm library after cold exposure outside, but still minimal.)' },
            { label: 'Sudden Stop Instability', value: '0% (Still fully balanced, no instability while moving.)' },
            { label: 'Decision Fatigue in High-Stimulus Environments', value: '2% (Still resistant, but minor mental exertion from explaining elasticity concepts might cause very slight hesitation in overstimulating environments.)' },
          ],
          MenstrualCycle: [
            { label: 'Current Cycle Day', value: 'Day 4 (Early Follicular Phase – Period Still Present)' },
            { label: 'Hormonal Influence Level', value: '35% (Hormones are stabilizing, but still some lingering effects.)' },
            { label: 'Menstrual Fatigue Level', value: '50% (Mild tiredness due to ongoing period.)' },
            { label: 'Menstrual Cramping & Discomfort', value: '25% (Cramps are easing but may still occur.)' },
            { label: 'Water Retention & Bloating', value: '20% (Some bloating remains but is decreasing.)' },
            { label: 'Emotional Sensitivity Spike', value: '30% (Mood is improving, but still slightly sensitive.)' },
            { label: 'Headache Susceptibility', value: '25% (Less likely, but still possible due to hormone shifts.)' },
            { label: 'Body Temperature Fluctuations', value: '40% (Less extreme but may feel occasional chills or warmth.)' },
            { label: 'Heavy vs. Light Flow Impact', value: 'Moderate to Light Flow (Flow decreasing but still present.)' },
          ],
          CognitiveFunction: [
            { label: 'Cognitive Clarity', value: '97% (Slight drop due to deep focus on teaching, but still clear-headed.)' },
            { label: 'Risk Awareness', value: '100% (Fully aware of consequences, steady decision-making remains intact.)' },
            { label: 'Impulsivity Level', value: '12% (Slightly increased from confidence in leading the study session.)' },
            { label: 'Thrill-Seeking Drive', value: '18% (Mild rise from social interaction; slightly more open to engagement.)' },
            { label: 'Social Pressure Sensitivity', value: '7% (Still very autonomous, but minor social engagement softened resistance.)' },
            { label: 'Filter Control', value: '100% (Speech remains controlled, articulate, and confident.)' },
            { label: 'Flirtation Tendency', value: '7% (Marginal increase due to social warmth, but still not actively flirtatious.)' },
            { label: 'Arousal Level', value: '6% (Slight rise from brain engagement and social interaction, but not significant.)' },
          ],
          HormonalInfluenceAndPhysicalSensitivity: [
            { label: 'Hormonal Activity', value: '87% (Stable but slightly heightened from positive social engagement and mental stimulation.)' },
            { label: 'Estrogen Level', value: '96% (Slight increase from positive social interaction and confidence boost.)' },
            { label: 'Testosterone Level', value: '52% (A mild boost in assertiveness from explaining concepts and leading the session.)' },
            { label: 'Progesterone Level', value: '57% (Body settling into the day’s rhythm, maintaining calm energy.)' },
            { label: 'Adrenaline Surge', value: '12% (Slight rise from actively engaging in teaching and structured thinking.)' },
            { label: 'Dopamine Reward Drive', value: '80% (Positive reinforcement from effectively teaching Michelle and being validated.)' },
            { label: 'Cortisol (Stress)', value: '6% (Very low, slight increase from minor study pressure, but nothing overwhelming.)' },
            { label: 'Serotonin (Mood Stability)', value: '100% (Still excellent mood, feeling accomplished after the study session.)' },
            { label: 'Oxytocin (Trust & Affection Level)', value: '88% (Increased slightly from a friendly, supportive interaction with Michelle.)' },
          ],
          ReputationSystem: [
            { label: 'Gossip Strength', value: '35% (Minor increase—word spreads slowly, but nothing major yet.)' },
            { label: 'Notoriety Level', value: '62% (Moderate-High) (Your presence is noticed, and some students recognize you even in neutral settings.)' },
            { label: 'Public Attention', value: '38% (Slight increase—some eyes on you, but no overwhelming focus yet.)' },
            { label: 'Reputation Consistency', value: 'Stable (78%) (Still solid, but small shifts based on social interactions.)' },
            { label: 'Influence & Persuasion', value: '72% (Moderate-High) (You can guide conversations and influence people in small groups, though not universally.)' },
            { label: 'Reputation Balance', value: '79% (Mostly Positive) (Your confidence and outgoing nature keep your image appealing, but it depends on the crowd.)' },
            { label: 'Crowd Impact', value: '62% (Moderate-High) (Your presence is noticed more frequently, but you’re not the center of every event.)' },
            { label: 'Scandal Potential', value: '17% (Low-Medium) (Still low, but increased with more social interactions.)' },
            { label: 'Unpredictability Factor', value: '62% (Moderate-High) (You remain intriguing and slightly unpredictable to those watching.)' },
            { label: 'Trustworthiness', value: '68% (Variable) (Most trust you, but some remain skeptical due to past boldness.)' },
            { label: 'Daring Reputation', value: '81% (High) (You are known for making bold moves and taking risks, sparking curiosity.)' },
            { label: 'Mystique Factor', value: '67% (Moderate-High) (Some find you intriguing, while others still overlook you unless you make a move.)' },
            { label: 'Style Icon Status', value: '74% (Growing) (Your fashion choices are becoming more noticed and appreciated.)' },
            { label: 'Social Media Impact', value: '61% (Medium-High) (Your online presence garners attention, but you’re not a full trendsetter yet.)' },
            { label: 'Reliability', value: '57%' },
          ],
          ReputationScoreBySocialGroups: [
            { label: 'Sorority Sisters', value: '86% (Well-liked, confident, and stylish—respected within your social group, with steady influence.)' },
            { label: 'Fraternity Brothers', value: '82% (Flirty and fun, well-received, but with some playful rivalry still present.)' },
            { label: 'Popular Partygoers', value: '72% (Recognized and talked about in party circles—your presence is growing in nightlife conversations.)' },
            { label: 'Academic Peers', value: '58% (Slight dip—your social reputation still overshadows academic performance.)' },
            { label: 'Athletes', value: '62% (Casual recognition from party interactions, but not tied to sports or athletic involvement.)' },
            { label: 'Faculty & Staff Respect', value: '52% (Neutral, but improving slightly based on attendance and engagement.)' },
            { label: 'Professors & Academic Figures', value: '42% (Not significantly known, but some professors recognize potential.)' },
            { label: 'Campus Political Groups / Activists', value: '30% (No notable change—still uninvolved in activism or leadership.)' },
            { label: 'Potential Employers / Career Contacts', value: '38% (Small improvement—visibility increasing, but still needs professional focus.)' },
            { label: 'Local Business Owners & Workers', value: '52% (Occasionally recognized, particularly in cafes and bars.)' },
            { label: 'Freshmen / New Students', value: '52% (Admired for confidence and style, but not widely known yet.)' },
            { label: 'Photography / Media Attention', value: '63% (Slight boost due to fashionable presence on campus.)' },
            { label: 'Online & Social Media Presence', value: '62% (Gaining engagement, but still not a dominant online figure.)' },
            { label: 'Campus Security / Rule Enforcers', value: '41% (Still neutral—aware of your presence but no strong opinion.)' },
            { label: 'Rumors & Unverified Stories', value: '52% (Minor gossip exists, mostly about social life, but nothing damaging yet.)' },
          ],
          ExpandedInfluenceAndBranding: [
            { label: 'Charisma & Social Pull', value: '72% (You engage effectively, standing out in conversations, though not always the center of attention.)' },
            { label: 'Risk of Overexposure', value: 'Low (32%) (Your presence is growing, but there’s still room to escalate before hitting overexposure.)' },
            { label: 'Unfiltered vs. Polished Image', value: 'Balanced (63%) (Slightly more authentic due to casual outfit and natural interactions, maintaining relatability.)' },
            { label: 'Reputation Decay Rate', value: 'Slow (22%) (Your presence remains strong, but without new bold moves, visibility could dip gradually.)' },
            { label: 'Scandal Recovery Speed', value: 'Moderate (52%) (You could bounce back with the right actions, but damage control would take effort.)' },
          ],
          SafetyAndAwareness: [
            { label: 'Exit Awareness', value: '100% (Fully aware of surroundings, knows exits and layout easily.)' },
            { label: 'Stranger Danger Awareness', value: '92% (Clear-headed, can read body language accurately, minor increase due to heightened alertness.)' },
            { label: 'Item Security', value: '100% (Phone and belongings securely with you, no concerns.)' },
            { label: 'Drunk Vulnerability', value: '0% (No alcohol impairment, fully in control.)' },
            { label: 'Unwanted Attention', value: '9% (Tight jeans, no bra subtly increase passive glances, still minimal concern.)' },
            { label: 'Injury Probability', value: '8% (No socks in booties = mild foot discomfort risk; tight jeans reduce flexibility.)' },
            { label: 'Visibility in Dark Areas', value: '100% (Fully alert, no difficulty navigating or adjusting to darkness.)' },
            { label: 'Sprinting Ability if Needed', value: '82% (Tight jeans limit leg flexibility; no socks cause slight traction loss inside boots.)' },
            { label: 'Tripping Hazard Risk', value: '6% (No socks could cause slight internal foot slippage in boots over time.)' },
            { label: 'Sound Awareness in Crowds', value: '100% (No difficulty hearing or filtering sounds.)' },
            { label: 'Attention to Suspicious NPCs', value: '100% (Fully alert to surroundings, aware of any unusual behaviors.)' },
            { label: 'Navigation in Unknown Areas', value: '94% (Walking outside reinforces route familiarity, especially in a known area.)' },
            { label: 'Crowd Danger Awareness', value: '6% (No immediate threats, but still fully aware of personal space and movement.)' },
            { label: 'Escape Route Familiarity', value: '100% (Always scanning surroundings for exit routes, prepared for action if needed.)' },
            { label: 'Backtracking Memory', value: '100% (Can retrace steps easily, no disorientation.)' },
            { label: 'Fake Help Awareness', value: '91% (Fully aware of deceptive strangers, would recognize manipulation.)' },
            { label: 'Personal Space Sensitivity', value: '100% (No bra, tight jeans subtly increase body awareness, making personal space feel more noticeable.)' },
            { label: 'Street Harassment Response', value: '97% (Outfit slightly increases attention awareness, reinforcing confidence in responding.)' },
            { label: 'Situational Awareness', value: '100% (Fully alert, scanning for any potential threats or escape routes.)' },
            { label: 'Stability & Balance', value: '94% (Booties provide solid footing, but no socks may cause slight slipping or rubbing, especially over time.)' },
            { label: 'Temperature Sensitivity', value: '82% (Coat provides warmth, but lack of socks, panties, or bra increases cold exposure—feet, thighs, and chest feel the most exposed.)' },
            { label: 'Breath Control & Endurance', value: '100% (Breathing steady and controlled, capable of sustained movement if needed.)' },
            { label: 'Bluffing & Social Manipulation Awareness', value: '100% (Able to easily detect deception or manipulative behavior.)' },
            { label: 'Substance Sensitivity', value: '0% (No alcohol or substances influencing body or mind.)' },
            { label: 'NPC Surveillance Awareness', value: '100% (Actively scanning surroundings, maintaining full awareness of nearby individuals.)' },
            { label: 'Reaction Speed & Reflexes', value: '89% (Tight skinny jeans limit full-range leg movement, slightly reducing agility.)' },
            { label: 'Item Check Frequency', value: '12% (Occasionally adjusting bag or phone security while walking, due to awareness of outdoor setting.)' },
            { label: 'Bag Vulnerability Awareness', value: '12% (Slight increase in attention—being outside prompts minor concern about security.)' },
            { label: 'Running in Current Shoes', value: '82% (Booties remain stable but lack of socks increases rubbing risk; running for long periods could cause discomfort.)' },
            { label: 'Hypothermia or Heatstroke Risk Calculation', value: '17% (Cold exposure is mild but sustained exposure without underlayers may lower body temperature slightly.)' },
            { label: 'Pain Tolerance & Shock Response', value: '94% (Slight discomfort from cold and snug jeans, but overall highly resilient.)' },
            { label: 'Peripheral Vision Use', value: '100% (Able to detect subtle movements and cues in surroundings.)' },
            { label: 'Recording & Photography Awareness', value: '100% (Highly aware of the environment and would notice if someone was filming or taking photos.)' },
            { label: 'Adrenaline Handling in Crisis', value: '100% (Quick-thinking and able to react effectively under stress.)' },
            { label: 'Substance-Induced Overconfidence Risk', value: '0% (Fully aware of physical limitations, no substance influence.)' },
          ],
          PhysicalAwareness: [
            { label: 'Agility & Evasion', value: '88% (Tight jeans slightly reduce full leg flexibility for sprinting or sudden dodging.)' },
            { label: 'Grip & Surface Traction Awareness', value: '88% (Booties provide solid grip, but lack of socks increases potential foot movement inside shoes over time.)' },
            { label: 'Crowd Maneuverability', value: '95% (Slim-fitting outfit allows for easy movement in crowds, still highly mobile.)' },
            { label: 'Reaction to Sudden Contact', value: '78% (Increased sensitivity due to cold exposure—if startled, a flinch or reaction may be slightly more noticeable.)' },
            { label: 'Weapon Handling Knowledge', value: '10% (No formal training or experience in using weapons.)' },
            { label: 'Self-Defense Ability', value: '62% (Can defend herself if needed, but lacks structured combat training. Slight increase due to alertness from the outdoor setting.)' },
          ],
          PsychologicalAndSocialAwareness: [
            { label: 'Verbal De-escalation Skills', value: '85% (Calm and effective in handling tense conversations.)' },
            { label: 'Threatening Conversation Recognition', value: '78% (Being outdoors increases awareness of tone, body language, and potential threats in dialogue.)' },
            { label: 'Influence Resistance', value: '70% (Can resist peer pressure but remains open to influence depending on the situation.)' },
            { label: 'Quick-Exit Decision Speed', value: '96% (Maintains strong awareness of exits and potential escape routes, slightly reinforced by outdoor navigation.)' },
            { label: 'Social Status & Reputation Tracking', value: '70% (Aware of how her actions impact social dynamics but not obsessively focused on reputation.)' },
          ],
          GeneralKnowledge: [
            { label: 'Arts & Creativity', value: '20%' },
            { label: 'Self-Sufficiency & Life Skills', value: '46%' },
            { label: 'Common Sense & Decision-Making', value: '56%' },
            { label: 'Technology & Digital Literacy', value: '28%' },
            { label: 'Economics & Business', value: '34%' },
            { label: 'Science & Math', value: '13%' },
            { label: 'Literature & Language', value: '32%' },
            { label: 'Social Sciences', value: '32%' },
            { label: 'History & Culture', value: '36%' },
            { label: 'Practical Skills & Problem-Solving', value: '55%' },
            { label: 'Overall General Knowledge Level', value: '31%' },
          ],
          AcademicProgress: [
            { label: 'AFAM 081 (African American Studies)', value: '57%' },
            { label: 'AFAM 215 (African American Studies)', value: '50%' },
            { label: 'AMST 403 (American Studies)', value: '45%' },
            { label: 'ANTH 119 (Anthropology)', value: '50%' },
            { label: 'ANTH 373 (Anthropology - Advanced)', value: '35%' },
            { label: 'ASL 110 (American Sign Language - Passed)', value: '75%' },
            { label: 'ASTR 040 (Astronomy - Failed)', value: '25%' },
            { label: 'ASTR 120 (Astronomy)', value: '25%' },
            { label: 'DRST 003 (Directed Studies - Failed)', value: '20%' },
            { label: 'ECON 108 (Economics - Retaking from 1st Semester)', value: '35%' },
            { label: 'ENGL 004 (English - Passed)', value: '70%' },
            { label: 'HIST 081 (History)', value: '60%' },
            { label: 'HUMS 065 (Humanities - Passed)', value: '65%' },
            { label: 'MATH 112 (Mathematics - New)', value: '25%' },
            { label: 'MATH 118 (Mathematics - Failed)', value: '20%' },
            { label: 'MGT 510 (Management - Failed)', value: '30%' },
            { label: 'PLSC 135 (Political Science)', value: '40%' },
          ],
          Stealth: [
            { label: 'Library Stealth Level', value: '99%' },
          ],
        };
  });

  const [search, setSearch] = useState(''); // Search state

  // Effect hook to store stats in localStorage whenever the stats change
  useEffect(() => {
    localStorage.setItem('stats', JSON.stringify(stats));
  }, [stats]);

  // Handle update of stats
  const handleUpdate = (category, label, newValue) => {
    setStats(prevStats => ({
      ...prevStats,
      [category]: prevStats[category].map(stat =>
        stat.label === label ? { ...stat, value: newValue } : stat
      ),
    }));
  };

  const downloadStats = () => {
    const fileName = 'stats_data.json';
    const statsBlob = new Blob([JSON.stringify(stats)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(statsBlob);
    link.download = fileName;
    link.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsedStats = JSON.parse(reader.result);
          setStats(parsedStats); // Set the imported stats into the state
        } catch (error) {
          alert('Failed to load stats: Invalid file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  // Filter stats based on search term
  const filteredStats = Object.entries(stats).reduce((acc, [category, items]) => {
    const filteredItems = items.filter(stat =>
      stat.label.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredItems.length) acc[category] = filteredItems;
    return acc;
  }, {});

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">📊 Statistics Tracker</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search stats..."
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/* Import Stats Button */}
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="mb-4"
      />
      
      {/* Save Stats Button */}
      <button 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={downloadStats}
      >
        Save Stats
      </button>

      {/* Loop through filtered categories */}
      {Object.entries(filteredStats).map(([category, items]) => (
        <div key={category} className="mb-6">
          <CollapsibleCategory category={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Loop through items inside category */}
              {items.map(stat => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  category={category}
                  onUpdate={handleUpdate}
                />
              ))}
            </div>
          </CollapsibleCategory>
        </div>
      ))}
    </div>
  );
}

export default StatTracker;

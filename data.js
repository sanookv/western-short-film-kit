// Data templates and default project definitions for Western Short Film Studio
const DEFAULT_PROJECTS = [
  {
    id: 'one-floor-below',
    title: 'One Floor Below — ชั้นที่ไม่มีอยู่',
    genre: 'Psychological Suspense / ระทึกขวัญ',
    aspectRatio: '9:16',
    durationSeconds: 48,
    totalShots: 6,
    shotDurationSeconds: 8,
    status: 'In Production',
    logline: 'หญิงสาวกลับจากงานดึก ลิฟต์พาเธอไปชั้นที่ไม่รู้จัก พร้อมเสียงผิวปากของพ่อที่เสียไปสิบปีแล้ว',
    setting: 'ลิฟต์อพาร์ตเมนต์เก่าใน Chicago ตอนกลางคืน ผนังเหล็กปัดด้าน โถงนอกลิฟต์แสงเหลืองสลัว',
    hook: 'ทำนองคุ้นเคยดังจากที่ไม่ควรมีใคร → ลิฟต์เลือกชั้นเอง → ผ้าพันคอของคนที่จากไป → ทำนองดังซ้ำ',
    characterBible: {
      name: 'Ella Ward (E01)',
      age: '32 ปี',
      appearance: 'ผิวขาวมีกระ ดวงตาสีน้ำตาลอมเขียว ผมบ็อบน้ำตาลเข้ม เสื้อโค้ทขนสัตว์สีกรมท่า เสื้อสเวตเตอร์ครีม กางเกงดำ บูตข้อเท้าสีน้ำตาลเข้ม สร้อยเงินเส้นบาง',
      voice: 'เสียงหญิงผู้ใหญ่พูดไทยมาตรฐาน ระดับกลาง ต่ำลงเล็กน้อยเมื่อกระซิบ ไม่ออกเสียงอังกฤษ',
      referencePrompt: 'Create a photorealistic full-body character reference on a plain neutral background. Ella Ward, an original 32-year-old adult woman with fair freckled skin, hazel eyes and a dark brown bob. A navy wool coat over a cream sweater, black trousers, dark brown ankle boots and a thin silver necklace. Natural proportions, hands visible and empty, calm neutral expression, soft even light. One person only. No scarf, no actor likeness, no text, no logo.',
      sceneReferencePrompt: 'Vertical 9:16 photorealistic scene reference, viewed from inside a brushed-steel elevator in an old Chicago apartment building at night. Fully open elevator doors reveal a narrow empty corridor with cream walls and a warm lamp. Cold light in the elevator, subtle amber spill from the corridor. A blank unlabelled button panel. Restrained contemporary suspense-film look. No people, no scarf, no readable signs, no text or logos.',
      propReferencePrompt: 'Photorealistic reference of one worn red knitted scarf, with one loose thread at one end, on a plain neutral background. Clearly visible knit texture and the whole scarf. Soft even light. No hands, no person, no extra objects, no text or logos.',
      continuityNotes: [
        'Ella ไม่ออกจากลิฟต์ตลอดทั้งเรื่อง (ยืน S01-S03, คุกเข่า S04-S06)',
        'ไม่มีคนที่สองในเฟรมภาพหรือผู้พูดอื่น',
        'ผ้าพันคอสีแดง (P01) เริ่มเห็นบนพื้น S04 และถือด้วยมือขวาเท่านั้นใน S05-S06',
        'เสียงผิวปากเป็นทำนอง 3 โน้ตเดียวกันใน S01 และ S06'
      ]
    },
    shots: [
      {
        id: 'S01',
        timecode: '00:00–00:08',
        duration: 8,
        angle: 'Medium Close-Up',
        status: 'Approved Demo',
        mediaType: 'video',
        mediaSrc: 'assets/demo.mp4',
        thumbnailSrc: 'assets/demo.gif',
        action: 'Ella ยืนในลิฟต์หันหน้าเข้าหาประตูที่ปิดอยู่ มือว่างเปล่า ได้ยินเสียงผิวปาก 3 โน้ตปริศนาดังจากข้างนอก เธอชะงักและค่อยๆ เงยหน้าขึ้นมอง',
        dialogue: 'ฉันจำทำนองนั้นได้',
        audioNotes: 'เสียงหึ่งเบาๆ ของลิฟต์ ตามด้วยเสียงผิวปาก 3 โน้ตเบาๆ ชัดเจนแต่เบากว่าเสียงพูด ไม่มีดนตรีประกอบ',
        prompt: `Shot S01. Vertical 9:16, 8-second photorealistic cinematic shot.
Ella Ward, a 32-year-old adult woman with fair freckled skin, hazel eyes, and a dark brown bob, wears a navy wool coat over a cream sweater, black trousers, dark brown ankle boots, and a thin silver necklace.
A brushed-steel elevator car in an old Chicago apartment building at night. Cold overhead light, subtle amber spill from the corridor, realistic restrained suspense-film lighting.
Use the approved E01 character and L01 scene references when supported by the selected mode.
Standing inside the car facing the closed doors, empty hands relaxed. Use a static medium close-up. Ella hears a faint three-note whistle beyond the doors, freezes and slowly looks up. The doors remain closed. No scarf is present.
Only Ella speaks, in Thai with natural standard Central Thai pronunciation and a restrained medium-low adult female voice, saying exactly: "ฉันจำทำนองนั้นได้"
Audio: A quiet elevator hum, then a faint brief three-note whistle with no words at the start. Keep the whistle clear but quieter than the dialogue. One speaker only, no English dialogue, no spoken translation, no music and no additional dialogue.
No subtitles, no captions, no logos or readable text. Maintain her face, age, hairstyle, outfit and necklace; no extra people or duplicate body parts.`
      },
      {
        id: 'S02',
        timecode: '00:08–00:16',
        duration: 8,
        angle: 'Medium Profile',
        status: 'Ready to Gen',
        action: 'Ella ยังคงยืนอยู่ในลิฟต์ ประตูปิด มุมข้าง มือขวาอยู่ใกล้แผงปุ่มไร้ตัวหนังสือ ปุ่มกดหนึ่งปุ่มสว่างขึ้นเอง เธอชักมือกลับอย่างระแวง',
        dialogue: 'ฉันยังไม่ได้กดอะไรเลย',
        audioNotes: 'เสียงหึ่งของลิฟต์และเสียงคลิกกลไกเบาๆ 1 ครั้ง ไม่มีเสียงผิวปาก',
        prompt: `Shot S02. Vertical 9:16, 8-second photorealistic cinematic shot.
Ella Ward, a 32-year-old adult woman with fair freckled skin, hazel eyes, and a dark brown bob, wears a navy wool coat over a cream sweater, black trousers, dark brown ankle boots, and a thin silver necklace.
A brushed-steel elevator car in an old Chicago apartment building at night. Cold overhead light, subtle amber spill from the corridor, realistic restrained suspense-film lighting.
Use the approved E01 character and L01 scene references when supported by the selected mode.
Ella remains standing inside the car; the doors stay closed. Medium profile with her empty right hand near but not touching a blank, unlabelled button panel. One button lights up on its own. Ella pulls her hand back. No scarf is present.
Only Ella speaks, in Thai with natural standard Central Thai pronunciation and a restrained medium-low adult female voice, saying exactly: "ฉันยังไม่ได้กดอะไรเลย"
Audio: Elevator hum and one soft mechanical click. No whistle in this shot. One speaker only, no English dialogue, no spoken translation, no music and no additional dialogue.
No subtitles, no captions, no logos or readable text. Maintain her face, age, hairstyle, outfit and necklace; no extra people or duplicate body parts.`
      },
      {
        id: 'S03',
        timecode: '00:16–00:24',
        duration: 8,
        angle: 'Over-The-Shoulder',
        status: 'Ready to Gen',
        action: 'มุมมองข้ามไหล่ ประตูลิฟต์ค่อยๆ เลื่อนเปิดออก เผยให้เห็นทางเดินแคบๆ ผนังสีครีม โคมไฟสีอุ่นที่ว่างเปล่าไร้ป้ายบอกชั้น',
        dialogue: 'นี่ไม่ใช่ชั้นของฉัน',
        audioNotes: 'เสียงประตูลิฟต์เลื่อนเปิด ตามด้วยเสียงบรรยากาศทางเดินเงียบกริบ',
        prompt: `Shot S03. Vertical 9:16, 8-second photorealistic cinematic shot.
Ella Ward, a 32-year-old adult woman with fair freckled skin, hazel eyes, and a dark brown bob, wears a navy wool coat over a cream sweater, black trousers, dark brown ankle boots, and a thin silver necklace.
A brushed-steel elevator car in an old Chicago apartment building at night. Cold overhead light, subtle amber spill from the corridor, realistic restrained suspense-film lighting.
Use the approved E01 character and L01 scene references when supported by the selected mode.
Begin with Ella standing inside the car facing closed doors. Over-the-shoulder camera. The doors slowly open onto an empty narrow corridor with cream walls, a warm lamp and no readable signs. Ella remains inside the car, looking into the corridor. End with the doors fully open. The floor just outside the threshold is outside this framing; no scarf is shown yet.
Only Ella speaks, in Thai with natural standard Central Thai pronunciation and a restrained medium-low adult female voice, saying exactly: "นี่ไม่ใช่ชั้นของฉัน"
Audio: Mechanical doors sliding, then a quiet hallway room tone. No whistle in this shot. One speaker only, no English dialogue, no spoken translation, no music and no additional dialogue.
No subtitles, no captions, no logos or readable text. Maintain her face, age, hairstyle, outfit and necklace; no extra people or duplicate body parts.`
      },
      {
        id: 'S04',
        timecode: '00:24–00:32',
        duration: 8,
        angle: 'Medium Low-Angle',
        status: 'Ready to Gen',
        action: 'ประตูเปิดค้าง เห็นผ้าพันคอไหมพรมสีแดงเก่าตกอยู่ตรงธรณีประตู Ella คุกเข่าลงบนพื้นลิฟต์ เอื้อมมือขวาไปแตะแต่ยังไม่ยกขึ้นมา',
        dialogue: 'เขาใส่มันทุกหน้าหนาว',
        audioNotes: 'เสียงเสียดสีของผ้า เสียงหึ่งต่ำของลิฟต์และทางเดิน',
        prompt: `Shot S04. Vertical 9:16, 8-second photorealistic cinematic shot.
Ella Ward, a 32-year-old adult woman with fair freckled skin, hazel eyes, and a dark brown bob, wears a navy wool coat over a cream sweater, black trousers, dark brown ankle boots, and a thin silver necklace.
A brushed-steel elevator car in an old Chicago apartment building at night. Cold overhead light, subtle amber spill from the corridor, realistic restrained suspense-film lighting.
Use the approved E01 character and L01 scene references when supported by the selected mode. Also use the approved P01 scarf reference.
The doors are already fully open and stay open. A worn red knitted scarf with one loose thread at its end lies just outside the elevator threshold. Begin with Ella standing inside the car. A medium low-angle shot keeps her face and the scarf visible in the vertical frame. Ella kneels on the car floor and reaches her right hand toward the scarf without lifting it yet. No other person is visible.
Only Ella speaks, in Thai with natural standard Central Thai pronunciation and a restrained medium-low adult female voice, saying exactly: "เขาใส่มันทุกหน้าหนาว"
Audio: Soft fabric rustle, low elevator hum and quiet corridor ambience. No whistle in this shot. One speaker only, no English dialogue, no spoken translation, no music and no additional dialogue.
No subtitles, no captions, no logos or readable text. Maintain her face, age, hairstyle, outfit and necklace; no extra people or duplicate body parts.`
      },
      {
        id: 'S05',
        timecode: '00:32–00:40',
        duration: 8,
        angle: 'Medium Close-Up',
        status: 'Ready to Gen',
        action: 'Ella ยังคงคุกเข่าในลิฟต์ มือขวายกผ้าพันคอสีแดงขึ้นมาแนบอก มือซ้ายวางบนเข่า น้ำเสียงสั่นเครือ',
        dialogue: 'แต่เขาจากไปสิบปีแล้ว',
        audioNotes: 'เสียงผ้าขยับแผ่วเบา เสียงบรรยากาศเงียบสงัด',
        prompt: `Shot S05. Vertical 9:16, 8-second photorealistic cinematic shot.
Ella Ward, a 32-year-old adult woman with fair freckled skin, hazel eyes, and a dark brown bob, wears a navy wool coat over a cream sweater, black trousers, dark brown ankle boots, and a thin silver necklace.
A brushed-steel elevator car in an old Chicago apartment building at night. Cold overhead light, subtle amber spill from the corridor, realistic restrained suspense-film lighting.
Use the approved E01 character and L01 scene references when supported by the selected mode. Also use the approved P01 scarf reference.
The doors are fully open and remain open. Ella is kneeling inside the car, her right hand reaching just beyond the threshold. In a static medium close-up she picks up the worn red knitted scarf with its loose end thread using her right hand and holds it close; her left hand rests on her knee. Keep her face, right hand and scarf visible. She remains kneeling at the end. No other person is present.
Only Ella speaks, in Thai with natural standard Central Thai pronunciation and a restrained medium-low adult female voice, saying exactly: "แต่เขาจากไปสิบปีแล้ว"
Audio: Subtle fabric movement, low elevator hum and quiet corridor ambience. No whistle in this shot. One speaker only, no English dialogue, no spoken translation, no music and no additional dialogue.
No subtitles, no captions, no logos or readable text. Maintain her face, age, hairstyle, outfit and necklace; no extra people or duplicate body parts.`
      },
      {
        id: 'S06',
        timecode: '00:40–00:48',
        duration: 8,
        angle: 'Static Close-Up',
        status: 'Ready to Gen',
        action: 'Close-Up ใบหน้าของ Ella ที่ถือผ้าพันคอ เสียงผิวปาก 3 โน้ตเดิมดังขึ้นจากทางเดินอีกครั้ง เธอเบิกตากว้าง หันขวับมองออกไป แล้วตัดภาพเป็นจอมืดทันที',
        dialogue: 'พ่อเหรอ?',
        audioNotes: 'เสียงผิวปาก 3 โน้ตเดิมเหมือน S01 ดังขึ้นในตอนต้น ตามด้วยคำพูดสั้นๆ แล้วเงียบกริบก่อนตัดมืด',
        prompt: `Shot S06. Vertical 9:16, 8-second photorealistic cinematic shot.
Ella Ward, a 32-year-old adult woman with fair freckled skin, hazel eyes, and a dark brown bob, wears a navy wool coat over a cream sweater, black trousers, dark brown ankle boots, and a thin silver necklace.
A brushed-steel elevator car in an old Chicago apartment building at night. Cold overhead light, subtle amber spill from the corridor, realistic restrained suspense-film lighting.
Use the approved E01 character and L01 scene references when supported by the selected mode. Also use the approved P01 scarf reference.
Ella remains kneeling inside the car, holding the worn red knitted scarf with its loose end thread in her right hand. The doors are fully open and stay open. Use a static close-up with her face and the scarf visible. She hears the same short whistle from the corridor, looks toward the corridor with startled recognition and asks her short Thai question. Leave a brief silent reaction; cut to black at the end. Do not show the father or any other person.
Only Ella speaks, in Thai with natural standard Central Thai pronunciation and a restrained medium-low adult female voice, saying exactly: "พ่อเหรอ?"
Audio: At the beginning, the same faint brief three-note whistle used in S01, without any words. Then her short Thai dialogue, elevator hum and a quiet pause. One speaker only, no English dialogue, no spoken translation, no music and no additional dialogue.
No subtitles, no captions, no logos or readable text. Maintain her face, age, hairstyle, outfit and necklace; no extra people or duplicate body parts.`
      }
    ]
  },
  {
    id: 'yesterday-call',
    title: 'Yesterday’s Call — คนรักจากวันพรุ่งนี้',
    genre: 'Romance / Mystery',
    aspectRatio: '9:16',
    durationSeconds: 48,
    totalShots: 6,
    shotDurationSeconds: 8,
    status: 'Draft Outline',
    logline: 'หญิงสาวรับโทรศัพท์บ้านเครื่องเก่าในห้องเช่า แต่ปลายสายคือคนรักที่บอกเหตุการณ์ที่จะเกิดขึ้นในวันพรุ่งนี้',
    setting: 'ห้องพักสไตล์ยุโรปเก่า ฝนตกนอกหน้าต่าง แสงไฟนีออนสลัว',
    hook: 'เสียงกริ่งดังทั้งที่สายถูกตัด → คำเตือนเรื่องกาแฟหก → สิ่งนั้นเกิดขึ้นจริง',
    characterBible: {
      name: 'Claire Vance (C01)',
      age: '26 ปี',
      appearance: 'หญิงสาวผมลอนสีบลอนด์เข้ม เสื้อคาร์ดิแกนสีเขียวมะกอก กางเกงยีนส์สีซีด สวมแว่นตากรอบทอง',
      voice: 'เสียงนุ่มหวาน พูดไทยชัดเจน อารมณ์ประหลาดใจและสับสน',
      referencePrompt: 'Claire Vance, 26-year-old woman, wavy dark blonde hair, olive green knit cardigan, faded jeans, thin gold-rimmed glasses, photorealistic character reference.',
      continuityNotes: ['โทรศัพท์แบบหมุนสีดำบนโต๊ะไม้', 'ห้ามมีคนอื่นในห้อง']
    },
    shots: []
  },
  {
    id: 'last-train',
    title: 'The Last Station — ประตูรถไฟหลากมิติ',
    genre: 'Sci-Fi / Surreal',
    aspectRatio: '9:16',
    durationSeconds: 48,
    totalShots: 6,
    shotDurationSeconds: 8,
    status: 'Draft Outline',
    logline: 'ทุกครั้งที่ประตูขบวนรถไฟใต้ดินเปิดออก หญิงสาวเห็นตัวเองในวัยที่ต่างกันยืนมองอยู่บนชานชาลา',
    setting: 'ขบวนรถไฟใต้ดินลอนดอนยามดึก แสงไฟกะพริบ',
    hook: 'ชานชาลาแรกเห็นตัวเองตอนเด็ก → ชานชาลาถัดไปเห็นตัวเองวัยชรา',
    characterBible: {
      name: 'Maya Lin (M01)',
      age: '29 ปี',
      appearance: 'แจ็กเก็ตหนังสีดำ ผ้าพันคอเทา ผมยาวตรงสีดำ',
      voice: 'เสียงกระซิบตื่นตระหนก พูดไทย',
      referencePrompt: 'Maya Lin, 29-year-old woman, black leather jacket, grey scarf, straight dark hair, moody subway train interior, 9:16.',
      continuityNotes: ['ทิศทางของประตูรถไฟต้องเปิดด้านขวาเสมอ']
    },
    shots: []
  }
];

const REPAIR_PRESETS = [
  {
    id: 'face_changed',
    label: 'หน้าหรือชุดเปลี่ยน (Character Drift)',
    issueText: 'ใบหน้า ทรงผม หรือเสื้อผ้าของตัวละครเปลี่ยนไปจาก Reference เดิม ไม่ตรงกับ Character Bible',
    solutionGuide: 'ใช้ approved character reference เดิม ตรวจสอบว่าโมเดลรองรับ Reference Frame หรือไม่ แล้วใส่รูปลักษณ์/ชุดครบถ้วนใน Prompt ย้ำห้ามเปลี่ยนชุด'
  },
  {
    id: 'wrong_speaker',
    label: 'เสียงพูดผิดคน / มีคนพูดแทรก',
    issueText: 'เสียงพูดดังมาจากคนอื่น หรือโมเดลใส่เสียงคนพูดแทรกนอกเหนือจากตัวละครหลัก',
    solutionGuide: 'ระบุคนที่พูดคนเดียวชัดเจน (เช่น Only Ella speaks) ตัดคนอื่นออกจากเฟรม และย้ำบทพูดตรงตัว'
  },
  {
    id: 'language_drift',
    label: 'ภาษาเพี้ยน / พูดภาษาอังกฤษแทน',
    issueText: 'โมเดลพูดภาษาอังกฤษ หรือแปลบทพูด หรือสำเนียงเพี้ยนไม่ใช่อักษรไทย',
    solutionGuide: 'ใส่ exact Thai dialogue ในเครื่องหมายคำพูด ย้ำว่า "in Thai with natural standard Central Thai pronunciation" และเพิ่มคำสั่ง "no English dialogue, no spoken translation"'
  },
  {
    id: 'prop_drift',
    label: 'พร็อพหลุด / ย้ายมือ / อวัยวะบิดเบี้ยว',
    issueText: 'มือถือพร็อพสลับข้าง พร็อพเปลี่ยนสี หรือมือมีนิ้วเกิน/บิดเบี้ยว',
    solutionGuide: 'ลดการกระทำต่อช็อต ระบุมือและตำแหน่งเริ่ม/จบชัดเจน (เช่น holds with right hand) ใช้ prop reference เดิม และใส่ "no duplicate body parts"'
  },
  {
    id: 'corrupted_text',
    label: 'มีตัวหนังสือ/ซับไตเติลเพี้ยนโผล่มาในภาพ',
    issueText: 'มีข้อความ กราฟิก หรือซับไตเติลภาษาประหลาดที่โมเดลแอบแต่งขึ้นมาเองในภาพ',
    solutionGuide: 'ใส่คำสั่ง "No subtitles, no captions, no logos or readable text" และย้ายการทำซับไตเติลไปทำตอนตัดต่อแทน'
  }
];

const WORKFLOW_CHECKLIST = [
  { id: 'c1', text: 'ดูทั้งเรื่องบนจอแนวตั้ง (9:16) เข้าใจเหตุการณ์และตอนจบหักมุม' },
  { id: 'c2', text: 'หน้า ทรงผม เสื้อผ้า เครื่องประดับ และพร็อพตรง Character Bible ทุกช็อต' },
  { id: 'c3', text: 'แสง ทิศทางเงา ตำแหน่งยืน มือ ทิศสายตา และสภาพฉากต่อเนื่องกันทุกช็อต' },
  { id: 'c4', text: 'ไม่มีมือบิดเบี้ยว อวัยวะเกิน คนโผล่โดยไม่ได้ตั้งใจ หรือตัวหนังสือแปลกปลอม' },
  { id: 'c5', text: 'ฟังด้วยหูฟังและลำโพงมือถือ: ผู้พูด บท สำเนียงภาษาไทย ระดับเสียง และ lip sync ถูกต้อง' },
  { id: 'c6', text: 'ซับไตเติลอ่านทัน ชัดเจน ไม่บังหน้าตัวละคร และไม่ตกขอบ Safe Zone ของแพลตฟอร์ม' },
  { id: 'c7', text: 'ไฟล์ MP4 เปิดเล่นได้ ภาพไม่ยืด เสียงไม่ขาดหาย (1080x1920 หรือ 720x1280)' },
  { id: 'c8', text: 'บันทึกสิทธิ์ภาพ เสียง เอฟเฟกต์ ดนตรี และ reference ที่นำมาใช้' }
];

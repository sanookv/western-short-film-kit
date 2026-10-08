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

// คู่มือการใช้งานสร้างหนังสั้น AI แนวตั้ง 9:16 แบบทีละขั้นตอนตั้งแต่ต้นจนจบ
const PRODUCTION_GUIDE = [
  {
    stepNumber: 1,
    stepId: 'step-1',
    title: 'ขั้นตอนที่ 1: วางพล็อตและเขียนบท (Story & Script)',
    shortTitle: '1. วางพล็อต & บท',
    icon: '💡',
    category: 'Pre-Production',
    summary: 'เริ่มต้นจากไอเดีย 1 ประโยค พัฒนาสู่โครงสร้างหนังสั้น 48 วินาที (6 ช็อต × 8 วินาที) ที่ดึงดูดคนดูตั้งแต่ 3 วินาทีแรกและมีจุดหักมุมน่าจดจำ',
    studioLink: { label: 'ไปที่เมนู Project Brief', view: 'brief' },
    topics: [
      {
        id: 'topic-1-1',
        title: 'โครงสร้างหนังสั้นแนวตั้ง 48 วินาที (The 48-Second Arc)',
        description: 'การทำคลิปสั้นแนวตั้ง (TikTok, Reels, Shorts) ให้คนหยุดดูจนจบ ไม่สามารถเล่าเรื่องแบบหนังยาวได้ ต้องกระชับและแบ่งเป็น 6 ช็อต ช็อตละ 8 วินาทีพอดี ซึ่งสอดคล้องกับความยาวสูงสุดที่โมเดลวิดีโอส่วนใหญ่เจนได้ใน 1 ครั้ง',
        steps: [
          'S01 (00:00–00:08): เปิดตัวละคร + ความผิดปกติแรก (The Hook) เช่น อยู่ในลิฟต์แล้วได้ยินเสียงผิวปาก',
          'S02 (00:08–00:16): ปัญหาเริ่มขยายตัว (Rising Tension) เช่น ลิฟต์เคลื่อนที่เองโดยไม่มีใครกด',
          'S03 (00:16–00:24): จุดวิกฤตแรก (Midpoint Incident) เช่น ไฟดับหรือลิฟต์หยุดนิ่งที่ชั้นลับ',
          'S04 (00:24–00:32): การค้นพบวัตถุปริศนา (The Clue/Prop) เช่น ประตูเปิดพบผ้าพันคอสีแดงตกอยู่',
          'S05 (00:32–00:40): ความจริงเปิดเผย / ความตื่นตระหนกขั้นสุด (Climax) เช่น ก้มหยิบและจำได้ว่าเป็นของใคร',
          'S06 (00:40–00:48): จุดหักมุมและทิ้งท้ายให้คิด (The Twist) เช่น เสียงผิวปากดังซ้ำจากข้างหลัง'
        ],
        proTip: 'อย่าใส่บทพูดยาวเกิน 1-2 ประโยคสั้นๆ ต่อ 1 ช็อต (8 วินาที) เพราะตัวละครต้องมีเวลาแสดงสีหน้าและมีจังหวะเงียบ',
        caution: 'ห้ามเปิดเรื่องด้วยโลโก้ยาวหรือเครดิตเปิดเรื่อง คนดูบนมือถือจะปัดผ่านภายใน 2 วินาทีหากไม่เห็นเหตุการณ์น่าสงสัยทันที'
      },
      {
        id: 'topic-1-2',
        title: 'การเขียน Hook ดึงคนดูใน 3 วินาทีแรก และกำหนดขอบเขตเรื่อง',
        description: 'Hook ที่ดีต้องทำให้คนดูเกิดคำถามในใจทันที เช่น "เสียงอะไร?", "เกิดอะไรขึ้น?", "จะรอดไหม?" และต้องกำหนดขอบเขตสถานที่ให้แคบเพื่อคุมงานง่าย',
        steps: [
          'เลือกสถานที่หลักเพียง 1 แห่ง เช่น ในลิฟต์, หน้าร้านสะดวกซื้อตอนดึก, ในตู้โทรศัพท์สาธารณะ',
          'จำกัดตัวละครหลักเพียง 1-2 คน เพื่อป้องกัน AI สับสนหน้าตาและเสื้อผ้า',
          'สรุปเรื่องย่อใน 1 บรรทัด (Logline) ให้ชัดว่า: ใคร + ต้องการอะไร + เจออุปสรรคอะไร + จบอย่างไร'
        ],
        proTip: 'ใช้ตัวอย่างเรื่อง One Floor Below เป็นแม่แบบ: หญิงสาวกลับบ้านดึก ลิฟต์พาไปชั้นที่ไม่มีอยู่ พร้อมเสียงผิวปากของคนที่จากไป'
      },
      {
        id: 'topic-1-3',
        title: 'กฎเหล็กของบทพูดภาษาไทย (Thai Dialogue Rule)',
        description: 'หากต้องการให้ตัวละครพูดภาษาไทย ต้องคงตัวอักษรไทยไว้ในเครื่องหมายคำพูดเสมอ ห้ามแปลเป็นภาษาอังกฤษใน Prompt เพราะโมเดลจะเข้าใจผิดแล้วออกเสียงเป็นอังกฤษ',
        steps: [
          'เขียนบทพูดเป็นภาษาไทยมาตรฐานสั้นกระชับ เช่น "ฉันจำทำนองนั้นได้", "ฉันยังไม่ได้กดอะไรเลย"',
          'ในคำสั่ง Prompt ให้กำกับด้วยภาษาอังกฤษว่า: Only Ella speaks, in Thai with natural standard Central Thai pronunciation, saying exactly: "ฉันจำทำนองนั้นได้"',
          'ห้ามใส่บทพูดภาษาอังกฤษปนในประโยคที่ต้องการให้พูด'
        ],
        caution: 'หากโมเดลเจนเสียงเพี้ยนหรือไม่พูด ให้ใช้ระบบซ่อมแซมช็อต หรือนำไปอัดเสียงพากย์ไทยทับในขั้นตอนตัดต่อ'
      }
    ]
  },
  {
    stepNumber: 2,
    stepId: 'step-2',
    title: 'ขั้นตอนที่ 2: ล็อกตัวละคร ฉาก และพร็อพ (Character & Scene Bible)',
    shortTitle: '2. ล็อกตัวละคร & ฉาก',
    icon: '🎭',
    category: 'Assets & Bible',
    summary: 'สร้างและบันทึกภาพอ้างอิง (Reference Images) สำหรับตัวละคร ฉาก และสิ่งของ เพื่อแก้ปัญหาหน้าตาตัวละครเปลี่ยนไปมาในแต่ละช็อต',
    studioLink: { label: 'ไปที่เมนู Character Bible', view: 'bible' },
    topics: [
      {
        id: 'topic-2-1',
        title: 'ทำไมหน้าตัวละครชอบเปลี่ยน? (วิธีแก้ด้วย Bible)',
        description: 'ปัญหาอันดับหนึ่งของหนัง AI คือ "Character Drift" ช็อตแรกหน้าฝรั่ง ช็อตสองหน้าเอเชีย ช็อตสามเสื้อเปลี่ยนสี วิธีแก้คือเราต้องสร้าง "Bible" (คัมภีร์ข้อมูลตัวละคร) ที่ระบุรายละเอียดชัดเจนและห้ามเปลี่ยนข้ามช็อต',
        steps: [
          'ระบุข้อมูลตายตัว: ชื่อ, อายุ, เชื้อชาติ, สีตา, ทรงผม, และสีเสื้อผ้าชั้นนอก-ชั้นใน',
          'ล็อกเครื่องประดับเฉพาะ: เช่น "สวมสร้อยเงินเส้นบาง" เพื่อใช้เป็นจุดสังเกตความต่อเนื่อง',
          'ล็อกลักษณะเสียง: เช่น "เสียงหญิงผู้ใหญ่ ระดับกลาง สุขุม นุ่มนวล"'
        ],
        proTip: 'หลีกเลี่ยงการเขียนชื่อดาราจริง ให้ระบุลักษณะเฉพาะตัว (เช่น freckled skin, hazel eyes, dark brown bob) จะได้ตัวละครที่มีเอกลักษณ์และไม่ติดลิขสิทธิ์'
      },
      {
        id: 'topic-2-2',
        title: 'การสร้าง 3 ภาพอ้างอิงสำคัญ (E01, L01, P01)',
        description: 'ก่อนจะเริ่มเจนวิดีโอแม้แต่วินาทีเดียว ต้องมีภาพนิ่ง 3 ภาพนี้ที่ผ่านการตรวจรับแล้วบันทึกไว้ในเครื่อง',
        steps: [
          '1. E01-character.png (ตัวละครเต็มตัว): ยืนตรงบนพื้นหลังเรียบ ท่าทางเป็นกลาง แสงนุ่ม มือว่างเปล่า',
          '2. L01-elevator.png (ฉากหลักว่างเปล่า): สัดส่วน 9:16 ถ่ายมุมมองในลิฟต์ ไม่มีคน ไม่มีตัวหนังสือ',
          '3. P01-scarf.png (พร็อพสำคัญ): ภาพผ้าพันคอสีแดงไหมพรมเดี่ยวๆ บนพื้นหลังสีเรียบ'
        ],
        proTip: 'ในเมนู Character Bible ของแอปนี้ มีปุ่ม "📋 คัดลอก Prompt" สำหรับเจนภาพทั้ง 3 ชิ้นนี้เตรียมไว้ให้แล้ว'
      },
      {
        id: 'topic-2-3',
        title: 'กฎความต่อเนื่อง (Continuity Rules) ที่ห้ามละเลย',
        description: 'ความต่อเนื่องคือหัวใจของภาพยนตร์ ถ้าละเลย คนดูจะรู้สึกสะดุดทันที',
        steps: [
          'ตำแหน่งพร็อพ: พร็อพชิ้นไหนปรากฏช็อตไหน (เช่น ผ้าพันคอเริ่มเห็นใน S04 ห้ามโผล่ใน S01–S03)',
          'มือที่ถือ: ระบุให้ชัดเจน เช่น "ถือด้วยมือขวาเท่านั้น" ป้องกัน AI สลับมือไปมา',
          'สถานะประตูและแสง: หาก S01 ประตูปิด S02 ต้องเริ่มด้วยประตูปิด แสงไฟบนเพดานต้องมีทิศทางเดียวกัน'
        ],
        caution: 'ห้ามใส่ภาพอ้างอิง P01 (พร็อพ) ในช็อตที่ยังไม่ถึงเวลาที่พร็อพต้องปรากฏ'
      }
    ]
  },
  {
    stepNumber: 3,
    stepId: 'step-3',
    title: 'ขั้นตอนที่ 3: ออกแบบ Storyboard & คำสั่ง Prompt 9:16 (Shot Design & Prompts)',
    shortTitle: '3. Storyboard & Prompt',
    icon: '🎞️',
    category: 'Prompt Crafting',
    summary: 'แปลงบรีฟและบทพูดเป็นคำสั่ง Prompt ทีละช็อตสำหรับวิดีโอแนวตั้ง 9:16 พร้อมระบุมุมกล้องและเสียงอย่างเป็นระบบ',
    studioLink: { label: 'ไปที่เมนู Storyboard 9:16', view: 'storyboard' },
    topics: [
      {
        id: 'topic-3-1',
        title: 'หลักการ 1 ช็อต = 1 การกระทำหลัก (One Core Action)',
        description: 'วิดีโอ AI มีความยาวจำกัดที่ 8 วินาที หากคุณสั่งให้ "ตัวละครเดินเข้าลิฟต์ หันหลัง กดปุ่ม แล้วหยิบมือถือขึ้นมาโทร" AI จะรวนและเคลื่อนไหวผิดธรรมชาติ',
        steps: [
          'แตกเหตุการณ์ออกเป็น 1 การกระทำต่อ 1 ช็อตเท่านั้น',
          'ตัวอย่าง S01: ยืนนิ่ง หันหน้าหาประตู ได้ยินเสียงผิวปาก แล้วค่อยๆ เงยหน้าขึ้นมอง (จบ 8 วินาที)',
          'ตัวอย่าง S02: มือขวาเอื้อมไปใกล้แผงปุ่ม ปุ่มสว่างขึ้นเอง ชักมือกลับ (จบ 8 วินาที)'
        ],
        proTip: 'ให้เวลาตัวละคร "หยุดนิ่งและมีปฏิกิริยา" (Reaction) 2-3 วินาที จะทำให้ภาพยนตร์ดูมีชั้นเชิงและสมจริงยิ่งขึ้น'
      },
      {
        id: 'topic-3-2',
        title: 'การจัดมุมกล้องแนวตั้ง 9:16 (Vertical Cinematic Framing)',
        description: 'การถ่ายแนวตั้งมีพื้นที่ด้านข้างแคบ จึงต้องเลือกมุมกล้องที่เน้นสีหน้าและอารมณ์',
        steps: [
          'Medium Close-Up (ครึ่งตัวบน): เหมาะกับช็อตแสดงอารมณ์และบทพูด (เห็นตั้งแต่หน้าอกถึงศีรษะ)',
          'Medium Profile (มุมข้าง): เหมาะกับช็อตที่ตัวละครมีปฏิสัมพันธ์กับสิ่งแวดล้อม เช่น เอื้อมกดปุ่ม',
          'High Angle Looking Down (มุมกด): เหมาะกับช็อตที่พบวัตถุบนพื้น เช่น ก้มมองผ้าพันคอ',
          'Extreme Close-Up (เจาะใกล้): เน้นสายตา ดวงตา หรือมือที่สั่นเทา'
        ]
      },
      {
        id: 'topic-3-3',
        title: 'สูตรโครงสร้าง Prompt มาตรฐาน 5 ส่วน (Prompt Formula)',
        description: 'Prompt ที่ให้ผลลัพธ์แม่นยำที่สุดควรมีองค์ประกอบครบ 5 ส่วนนี้เสมอ:',
        steps: [
          '1. Shot Header: ระบุเลขช็อต สัดส่วน ความยาว (Shot S01. Vertical 9:16, 8-second photorealistic shot)',
          '2. Character & Wardrobe: ดึงข้อความจาก Character Bible มาวางครบชุด',
          '3. Setting & Camera: ระบุสถานที่ แสง และมุมกล้อง (Brushed-steel elevator, static medium close-up)',
          '4. Core Action & Thai Dialogue: การกระทำ + บทพูดภาษาไทยเป๊ะๆ ("ฉันจำทำนองนั้นได้")',
          '5. Audio & Negative Constraints: กำหนดเสียงแวดล้อม และข้อห้าม (No subtitles, no extra people)'
        ],
        copyableSnippet: `Shot S01. Vertical 9:16, 8-second photorealistic cinematic shot.
Ella Ward, a 32-year-old adult woman with fair freckled skin, hazel eyes, and a dark brown bob, wears a navy wool coat over a cream sweater, black trousers, dark brown ankle boots, and a thin silver necklace.
A brushed-steel elevator car in an old Chicago apartment building at night. Cold overhead light, subtle amber spill from the corridor.
Standing inside the car facing the closed doors, empty hands relaxed. Static medium close-up. Ella hears a faint three-note whistle beyond the doors, freezes and slowly looks up.
Only Ella speaks, in Thai with natural standard Central Thai pronunciation: "ฉันจำทำนองนั้นได้"
Audio: A quiet elevator hum, then a faint brief three-note whistle. Keep whistle clearer but quieter than dialogue. One speaker only, no English dialogue, no music.
No subtitles, no captions, no logos or readable text. Maintain her face, age and outfit; no extra people or duplicate body parts.`,
        snippetLabel: 'ตัวอย่าง Prompt ช็อต S01 สมบูรณ์แบบ (พร้อมคัดลอก)'
      }
    ]
  },
  {
    stepNumber: 4,
    stepId: 'step-4',
    title: 'ขั้นตอนที่ 4: คู่มือใช้งาน Google Flow เจนวิดีโอ (Google Flow Master Guide)',
    shortTitle: '4. คู่มือ Google Flow ⚡',
    icon: '⚡',
    category: 'AI Video Generation',
    summary: 'วิธีนำ Prompt และภาพอ้างอิงไปสร้างวิดีโอบน Google Flow อย่างถูกต้อง ประหยัดเครดิต และได้คลิป 9:16 คมชัดระดับภาพยนตร์',
    studioLink: { label: 'เปิดเว็บไซต์ Google Flow', url: 'https://labs.google/fx/tools/flow' },
    topics: [
      {
        id: 'topic-4-1',
        title: 'การเข้าใช้งาน Google Flow และการตั้งค่าโปรเจกต์',
        description: 'Google Flow เป็นเครื่องมือสร้างวิดีโอระดับมืออาชีพของ Google Labs ที่ขับเคลื่อนด้วยโมเดล Veo สามารถควบคุมภาพอ้างอิงและมุมกล้องได้แม่นยำ',
        steps: [
          'เข้าเว็บไซต์ Google Flow ที่ https://labs.google/fx/tools/flow ล็อกอินด้วยบัญชี Google',
          'กดปุ่มสร้างโปรเจกต์ใหม่ (New Project) และตั้งชื่อโปรเจกต์ เช่น "One Floor Below"',
          'สลับโหมดการทำงานเป็นโหมด "Video"'
        ]
      },
      {
        id: 'topic-4-2',
        title: 'การตั้งค่าสเปกสำคัญก่อนกดสร้าง (Settings Checklist)',
        description: 'ตั้งค่าพารามิเตอร์ให้ตรงตามสเปกของโปรเจกต์เสมอ เพื่อป้องกันการเสียเครดิตโดยเปล่าประโยชน์:',
        steps: [
          'Aspect Ratio: เลือก 9:16 (แนวตั้งสำหรับสมาร์ทโฟน)',
          'Duration: เลือก 8 วินาที (สอดคล้องกับไทม์ไลน์ 6 ช็อต = 48 วินาที)',
          'Outputs: ตั้งเป็น 1 ผลลัพธ์ต่อการรัน (ไม่กดสร้างทีละหลายคลิปพร้อมกัน เพื่อประหยัดเครดิตและตรวจสอบทีละ Take)',
          'Resolution: เลือกความละเอียดสูงสุดที่บัญชีของคุณรองรับ'
        ],
        caution: 'ตรวจสอบให้แน่ใจว่าได้เลือก 9:16 แล้ว หากเผลอสร้างเป็น 16:9 แนวนอน จะนำมาตัดต่อในไทม์ไลน์แนวตั้งยากและเสียรายละเอียด'
      },
      {
        id: 'topic-4-3',
        title: 'การเลือกโมเดล (Veo 3.1 Lite/Fast vs Veo Quality)',
        description: 'การเลือกโมเดลมีผลโดยตรงต่อฟีเจอร์ที่ใช้งานได้และเครดิตที่ใช้:',
        steps: [
          'Veo 3.1 Lite / Veo 3.1 Fast: โมเดลแนะนำสูงสุด! รองรับการใส่ภาพอ้างอิง (Ingredients / References) ทั้งสัดส่วน 9:16 และความยาว 8 วินาที มีความเสถียรและประหยัดเครดิต',
          'Veo Quality: ให้รายละเอียดพื้นผิวสูงมาก แต่ในบางช่วงอาจยังไม่รองรับโหมด Ingredients พร้อมกันในสัดส่วน 9:16',
          'หากหน้าตา UI ของบัญชีคุณมีการอัปเดต ให้ยึดฟีเจอร์ที่ปรากฏใน UI และตรวจสอบหน้าคู่มือทางการของ Google Support'
        ],
        proTip: 'แนะนำให้เริ่มทดสอบช็อตแรก (S01) ด้วย Veo 3.1 Lite/Fast ก่อนเสมอเพื่อประเมินผลลัพธ์'
      },
      {
        id: 'topic-4-4',
        title: 'วิธีแนบภาพอ้างอิง (Ingredients Mode vs Frames to Video)',
        description: 'การแนบภาพจะช่วยล็อกหน้าตาและฉากให้ตรงกับ Character Bible มากที่สุด',
        steps: [
          'วิธีที่ 1 (โหมด Ingredients): ลากภาพตัวละคร E01-character.png และภาพฉาก L01-elevator.png ใส่ในช่อง Image References ตามที่ระบบกำหนด',
          'วิธีที่ 2 (โหมด Start Frame / Frames to Video): หากโหมด Ingredients ใช้งานไม่ได้ ให้ใช้ภาพนิ่งจุดเริ่มต้นของช็อตนั้นเป็น Start Frame แล้วสั่ง Animate ต่อ',
          'ใส่เฉพาะพร็อพที่ควรมี: เช่น ผ้าพันคอ P01 ให้แนบเฉพาะในช็อต S04–S06 เท่านั้น ห้ามแนบใน S01–S03'
        ],
        proTip: 'เมื่อระบบสร้างคลิปออกมาแล้ว ให้ตรวจดูว่าหน้าตาและชุดตรงกับภาพอ้างอิงหรือไม่ทันที'
      },
      {
        id: 'topic-4-5',
        title: 'การใส่ Prompt บทพูดภาษาไทยใน Flow',
        description: 'คัดลอก Prompt จากแท็บ Storyboard ไปวางในช่องข้อความของ Flow',
        steps: [
          'คัดลอก Prompt ทั้งกรอบของช็อตนั้นๆ (เช่น S01) ไม่ตัดทอนประโยคสำคัญ',
          'ตรวจสอบว่ามีข้อความ Only Ella speaks, in Thai: "ฉันจำทำนองนั้นได้" ครบถ้วน',
          'ตรวจว่าไม่มีคำสั่งสร้างซับไตเติล (No subtitles) เพื่อให้ภาพออกมาสะอาดที่สุด'
        ]
      },
      {
        id: 'topic-4-6',
        title: 'การบริหารเครดิตและงบประมาณ',
        description: 'เครดิตการใช้งานใน Google Flow มักคิดคำนวณต่อผลลัพธ์ (Per Output) ที่สร้างขึ้น',
        steps: [
          'ตรวจดูจำนวนเครดิตคงเหลือในบัญชีของคุณก่อนกดสร้างทุกครั้ง',
          'บันทึกจำนวนเครดิตที่ใช้ต่อ 1 Take ลงใน Production Log เสมอ',
          'หากเครดิตไม่เพียงพอ ให้หยุดและประเมินงบประมาณ ไม่สั่งเจนรัวๆ ซ้ำซ้อน'
        ],
        caution: 'ระบบนี้เป็นชุดแม่แบบคำสั่ง ไม่มีการคิดเงินหรือเชื่อมต่อ API ตัดเครดิตของคุณโดยอัตโนมัติ คุณเป็นผู้ควบคุมการกดสร้างใน Google Flow เอง 100%'
      },
      {
        id: 'topic-4-7',
        title: 'การดาวน์โหลด Take จริง และสิ่งที่ห้ามสรุปจากพรีวิว',
        description: 'ข้อผิดพลาดที่พบบ่อยที่สุดคือการดูแค่รูปตัวอย่างขนาดเล็ก (Thumbnail) แล้วคิดว่างดงามแล้ว',
        steps: [
          'ห้ามด่วนสรุปจาก Thumbnail หรือสถานะการรันในหน้าคิว',
          'ต้องดาวน์โหลดไฟล์วิดีโอ MP4 จริงลงเครื่อง และตั้งชื่อเป็น S01-take01.mp4',
          'เปิดเล่นไฟล์เต็มจอ และเปิดเสียงฟังจนจบ 8 วินาที',
          'หากผ่านเกณฑ์ QC ให้เปลี่ยนสถานะเป็น Approved แล้วทำช็อตถัดไป (S02)'
        ]
      }
    ]
  },
  {
    stepNumber: 5,
    stepId: 'step-5',
    title: 'ขั้นตอนที่ 5: ตรวจสอบ QC & ซ่อมแซมช็อต (QC Inspection & Repair Studio)',
    shortTitle: '5. ตรวจ QC & ซ่อมช็อต',
    icon: '🔍',
    category: 'QC & Repair',
    summary: 'ตรวจเช็กคลิปตามเกณฑ์มาตรฐาน 8 ข้อ และใช้ระบบสร้างคำสั่งซ่อมแซม (Repair Prompt) เพื่อแก้เฉพาะช็อตที่มีปัญหาโดยไม่แตะต้องช็อตที่ผ่านแล้ว',
    studioLink: { label: 'ไปที่เมนู QC & Repair Studio', view: 'repair' },
    topics: [
      {
        id: 'topic-5-1',
        title: 'เกณฑ์ตรวจสอบคุณภาพ 8 ข้อ (Quality Control Checklist)',
        description: 'ก่อนจะนำคลิปไปตัดต่อ ต้องตรวจเช็กให้ผ่านเกณฑ์ทั้ง 8 ข้อนี้ในแท็บ QC Checklist:',
        steps: [
          '1. จอแนวตั้ง 9:16: ภาพเต็มจอ ไม่ยืด ไม่บิดเบี้ยว',
          '2. รูปลักษณ์ตัวละคร: หน้าตา ทรงผม เสื้อผ้า เครื่องประดับ ตรงกับ Character Bible',
          '3. ความต่อเนื่อง (Continuity): ทิศทางแสง ตำแหน่งยืน ทิศสายตา ต่อเนื่องจากช็อตก่อนหน้า',
          '4. ความสมบูรณ์ของร่างกาย: ไม่มีนิ้วเกิน มือบิดเบี้ยว หรือคนโผล่มาผิดจังหวะ',
          '5. เสียงและบทพูด: ตัวละครพูดภาษาไทยถูกต้อง ชัดเจน ไม่มีภาษาอังกฤษ และ lip sync เข้ากับปาก',
          '6. ไม่มีสิ่งแปลกปลอมในภาพ: ไม่มีตัวหนังสือขยุกขยิกหรือซับไตเติลเพี้ยนที่ AI แต่งขึ้นมาเอง',
          '7. ไฟล์เปิดเล่นได้สมบูรณ์: ไม่มีอาการกระตุก ภาพค้าง หรือเสียงขาดหาย',
          '8. บันทึกสิทธิ์และ Log: บันทึกข้อมูล Take และเครดิตลงในตารางเรียบร้อย'
        ]
      },
      {
        id: 'topic-5-2',
        title: 'การระบุสถานะงานอย่างมืออาชีพ',
        description: 'การจัดการสถานะที่ชัดเจนช่วยให้ไม่สับสนว่าช็อตไหนพร้อมใช้แล้ว:',
        steps: [
          'READY_FOR_REVIEW: ช็อตที่ประกอบหรือเจนเสร็จแล้ว พร้อมให้มนุษย์ตรวจเช็กอย่างละเอียด',
          'NEEDS_HUMAN_REVIEW: ช็อตที่มีข้อสงสัย เช่น เสียงเบาไป หรือหน้าตาคลุมเครือ ต้องให้คนฟังและดูซ้ำ',
          'NOT_GENERATED: ช็อตที่ยังไม่ได้กดเจนจริง มีเพียงแค่คำสั่ง Prompt (ห้ามเคลมว่ามีคลิปแล้ว)'
        ]
      },
      {
        id: 'topic-5-3',
        title: 'วิธีใช้ระบบ QC & Repair Studio แก้ปัญหาเฉพาะจุด',
        description: 'หากช็อตไหนไม่ผ่าน ไม่ต้องตกใจ! ใช้เครื่องมือ QC & Repair Studio ในแอปนี้แก้ปัญหา 5 แบบยอดนิยมได้ทันที:',
        steps: [
          '1. หน้าหรือชุดเปลี่ยน (Character Drift): แอปจะสร้าง Prompt ย้ำลักษณะเดิมพร้อมบังคับให้อ้างอิง E01 เดิม',
          '2. เสียงพูดผิดคน / มีคนพูดแทรก: แอปจะเติมคำสั่ง Only Ella speaks, cut all background voices',
          '3. ภาษาเพี้ยน / พูดภาษาอังกฤษ: แอปจะเติมคำสั่ง in Thai with natural standard Central Thai pronunciation',
          '4. พร็อพหลุด / นิ้วมือบิดเบี้ยว: แอปจะลดความซับซ้อนของการเคลื่อนไหว และระบุข้างของมือชัดเจน',
          '5. มีตัวหนังสือแปลกปลอม: แอปจะใส่ Negative Prompt กำจัด Subtitles และ Watermarks ทันที'
        ],
        proTip: 'เมื่อได้ Repair Prompt แล้ว ให้นำไปเจนเป็น Take ใหม่ เช่น S01-take02.mp4 ห้ามเขียนทับ take เดิม เพื่อเก็บไว้เทียบผลลัพธ์'
      }
    ]
  },
  {
    stepNumber: 6,
    stepId: 'step-6',
    title: 'ขั้นตอนที่ 6: ตัดต่อ ประกอบเสียง และทำซับไตเติล (Post-Production & Editing)',
    shortTitle: '6. ตัดต่อ ซับ & เสียง',
    icon: '✂️',
    category: 'Post-Production',
    summary: 'นำคลิปทั้ง 6 ช็อตมาต่อกันในโปรแกรมตัดต่อ ปรับแต่งเสียงผิวปากให้ต่อเนื่อง และทำซับไตเติลภาษาไทยใน Safe Zone สำหรับจอมือถือ',
    studioLink: { label: 'ดูตัวอย่างคลิปประกอบเสร็จ', view: 'storyboard' },
    topics: [
      {
        id: 'topic-6-1',
        title: 'การตั้งค่า Timeline ในโปรแกรมตัดต่อ (CapCut / Premiere / DaVinci)',
        description: 'ใช้โปรแกรมตัดต่อฟรีที่คุณถนัด เช่น CapCut (มือถือ/คอมพิวเตอร์), Premiere Pro, หรือ DaVinci Resolve',
        steps: [
          'สร้างโปรเจกต์ใหม่และตั้งค่า Canvas/Timeline เป็น 1080×1920 (สัดส่วนแนวตั้ง 9:16)',
          'ตั้งค่า Frame Rate เป็น 30 fps (หรือตรงกับคลิปต้นฉบับ)',
          'นำเข้าเฉพาะคลิป Take ที่ผ่านการอนุมัติแล้วเท่านั้น (S01 ถึง S06)',
          'เรียงลำดับคลิปต่อกัน: ความยาวรวมเป้าหมายคือ 6 ช็อต × 8 วินาที = 48 วินาที'
        ]
      },
      {
        id: 'topic-6-2',
        title: 'การตัดต่อจังหวะและการเชื่อมช็อต (Hard Cut & Pacing)',
        description: 'ในหนังสั้นแนวระทึกขวัญ การตัดต่อแบบเรียบง่าย (Hard Cut) มักได้อารมณ์สดและน่าตื่นเต้นที่สุด',
        steps: [
          'ใช้ Hard Cut เป็นหลักในการต่อช็อต หลีกเลี่ยง Transition หวือหวา เช่น หมุนวนหรือเบลอ เพราะจะทำลายบรรยากาศหนัง',
          'ตรวจเช็กการเคลื่อนไหวข้ามรอยต่อ (Match on Action): ถ้า S01 จบด้วยการเงยหน้า S02 เริ่มต้นต้องอยู่ในท่าที่เงยหน้าแล้ว',
          'หากช่วงต้นหรือท้ายของช็อตมีอาการภาพแกว่ง (Wobble) ให้ Trim (ตัดหัวท้าย) ทิ้ง 0.5–1 วินาที แล้วขยับจังหวะให้กระชับ'
        ]
      },
      {
        id: 'topic-6-3',
        title: 'การออกแบบระบบเสียง (Sound Design & The Whistle Hook)',
        description: 'พลังของหนังสั้นอยู่ที่เสียงมากกว่า 50%! เสียงผิวปากคือคีย์หลักของเรื่อง',
        steps: [
          'เสียงผิวปากข้ามช็อต: ให้ใช้ไฟล์เสียงผิวปาก 3 โน้ตชิ้นเดียวกัน วางในช็อต S01 และช็อต S06 ตอนตัดต่อ เพื่อให้คนดูจำทำนองเดียวกันได้แม่นยำ',
          'ปรับความดัง: เสียงบทพูดตัวละครต้องดังชัดเจนที่สุด (ประมาณ -6dB ถึง -12dB)',
          'เสียงแวดล้อม (Elevator Hum): ใส่เสียงหึ่งของลิฟต์เบาๆ ตลอดทั้ง 48 วินาที เพื่อเชื่อมรอยต่อของแต่ละคลิปไม่ให้เสียงเงียบกริบจนกระโดด',
          'Crossfade เสียง: ทำ Fade เชื่อมเสียงบรรยากาศข้ามรอยต่อช็อตประมาณ 0.2–0.3 วินาที เพื่อให้เสียงเนียนเป็นเนื้อเดียวกัน'
        ],
        proTip: 'ฟังเสียงทดสอบทั้งด้วยหูฟังและลำโพงของสมาร์ทโฟนจริงเสมอ เพราะลำโพงมือถือมักจะขับเสียงทุ้มได้น้อยกว่า'
      },
      {
        id: 'topic-6-4',
        title: 'การทำซับไตเติลภาษาไทย และ Safe Zone บนมือถือ',
        description: 'คนดูบนโซเชียลมีเดียมักเปิดดูคลิปโดยไม่เปิดเสียง หรือเปิดเสียงเบา ซับไตเติลจึงสำคัญมาก',
        steps: [
          'ถอดคำจากเสียงจริง: ฟังสิ่งที่ตัวละครพูดจริงในคลิปแล้วพิมพ์ตาม (ไม่ก็อปปี้สคริปต์มาวางโดยไม่ฟัง)',
          'ความยาวซับ: ซอยให้อยู่ใน 1-2 บรรทัดสั้นๆ อ่านจบได้ใน 2 วินาที',
          'Safe Zone: วางตำแหน่งซับให้อยู่ช่วงกลางล่างของจอ ห้ามวางชิดขอบล่างสุด เพราะจะถูกแถบชื่อผู้ใช้ แคปชัน และปุ่ม Like/Share ของ TikTok, Reels, Shorts บังทับ',
          'เลือกฟอนต์ที่อ่านง่าย มีขอบดำหรือเงาบางๆ เพื่อให้อ่านออกได้ชัดเจนไม่ว่าจะอยู่บนฉากสว่างหรือฉากมืด'
        ],
        caution: 'หากตัวละครพูดไม่ตรงกับบทในสคริปต์ ให้ซ่อมเสียงหรือแก้คลิปใหม่ ห้ามแอบพิมพ์ซับหลอกให้ดูเหมือนถูก'
      }
    ]
  },
  {
    stepNumber: 7,
    stepId: 'step-7',
    title: 'ขั้นตอนที่ 7: ส่งออกวิดีโอสมบูรณ์ & ปล่อยผลงาน (Final Export & Delivery)',
    shortTitle: '7. ส่งออก & เผยแพร่',
    icon: '🚀',
    category: 'Final Delivery',
    summary: 'ส่งออกไฟล์วิดีโอความละเอียดสูง ตรวจสอบเช็กลิสต์ครั้งสุดท้ายบนมือถือจริง และบันทึกข้อมูลสิทธิ์ของโปรเจกต์พร้อมเผยแพร่',
    studioLink: { label: 'ไปที่หน้า QC Checklist', view: 'checklist' },
    topics: [
      {
        id: 'topic-7-1',
        title: 'การตั้งค่า Render และส่งออกไฟล์ (Export Settings)',
        description: 'สเปกมาตรฐานสำหรับแพลตฟอร์มวิดีโอแนวตั้งทั่วโลก:',
        steps: [
          'รูปแบบไฟล์ (Format): MP4',
          'วิดีโอโคเดก (Video Codec): H.264 (เพื่อความเข้ากันได้กับทุกอุปกรณ์และแพลตฟอร์ม)',
          'ความละเอียด (Resolution): 1080 × 1920 พิกเซล (Full HD Vertical)',
          'Frame Rate: 30 fps (คงที่ Constant Frame Rate)',
          'Bitrate: แนะนำ 12–16 Mbps (VBR 2-Pass หรือ Target Bitrate คุณภาพสูง)',
          'ระบบเสียง (Audio): AAC Stereo, 48kHz, 320 kbps'
        ],
        proTip: 'หากคลิปต้นฉบับจาก AI เป็น 720×1280 เมื่อส่งออกเป็น 1080×1920 ให้ระบุในบันทึกว่าเป็นไฟล์ Upscaled'
      },
      {
        id: 'topic-7-2',
        title: 'Final Checklist ตรวจสอบรอบสุดท้ายบนมือถือจริง',
        description: 'ส่งไฟล์เข้ามือถือตัวเอง แล้วเปิดดูแบบเต็มจอก่อนกดโพสต์:',
        steps: [
          'ภาพเต็มจอ 9:16 ไม่เบี้ยว ไม่มียืด หรือมีขอบดำด้านข้าง',
          'สีหน้าและเสื้อผ้าของ Ella ตรงกับภาพ Reference E01 ตั้งแต่วินาทีแรกจนถึงวินาทีที่ 48',
          'บทพูดตรงปาก เสียงผิวปากชัดเจน และเสียงไม่อู้อี้',
          'ซับไตเติลขึ้นตรงคำ ไม่บังใบหน้าตัวละคร และอ่านทันสบายตา',
          'จุดหักมุมตอนจบชัดเจน ดึงดูดให้คนดูอยากกดคอมเมนต์หรือแชร์'
        ]
      },
      {
        id: 'topic-7-3',
        title: 'การบันทึกสิทธิ์ใช้งานและ Production Log',
        description: 'เก็บบันทึกข้อมูลเพื่อความโปร่งใสและพร้อมต่อยอดเรื่องถัดไป:',
        steps: [
          'บันทึกภาพ Reference ที่ใช้ (E01, L01, P01) และ Prompt ที่ใช้เจน',
          'บันทึกแหล่งที่มาของเสียงเอฟเฟกต์และเสียงผิวปาก (ตรวจสอบว่าเป็นเสียงที่มีสิทธิ์ใช้งาน)',
          'บันทึกสถิติการสร้าง: ใช้เวลากี่นาที, ใช้เครดิตไปกี่หน่วย, เจนทั้งหมดกี่ Take',
          'บันทึกไฟล์มาสเตอร์เก็บไว้ในโฟลเดอร์แยกต่างหากเพื่อความปลอดภัย'
        ]
      },
      {
        id: 'topic-7-4',
        title: 'สรุป Roadmap สำหรับสร้างเรื่องใหม่ครั้งถัดไป',
        description: 'ยินดีด้วย! คุณได้สร้างหนังสั้น AI แนวตั้งคุณภาพสูงสำเร็จแล้ว เมื่อเข้าใจลูปการทำงานนี้แล้ว เรื่องถัดไปคุณจะทำได้เร็วขึ้น 3 เท่า:',
        steps: [
          '1. วางบรีฟในแท็บ Project Brief → 2. ล็อกภาพในแท็บ Character Bible',
          '3. ก็อปปี้ Prompt ในแท็บ Storyboard → 4. เจนใน Google Flow ทีละช็อต',
          '5. ตรวจใน QC Checklist & Repair → 6. ต่อใน CapCut 1080×1920 → 7. เผยแพร่ผลงาน!'
        ]
      }
    ]
  }
];

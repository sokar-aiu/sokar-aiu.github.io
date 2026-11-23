window.SOKAR=window.SOKAR||{courses:[]};
SOKAR.updated="23 November 2026";
SOKAR.links=[
 {t:"Canvas",d:"Lectures and quizzes",u:"https://aiu.instructure.com"},
 {t:"University website",d:"Official website",u:"https://aiu.edu.eg/"},
 {t:"Academic Handbook",d:"Regulations and the grading scale",u:"https://aiu.edu.eg/academic-handbook-2/"}
];
/* status: confirmed = from an official announcement, conflict = sources disagree, expected = expected but not announced */
SOKAR.deadlines=[
 {id:"acc-q2-c",c:"acc111",title:"ACC111 Quiz 2: Group C (committees)",type:"quiz",at:null,status:"conflict",note:"The committee announcement of 22 November said Monday 23 November at 2:15 PM. A later announcement (23 November, 6:23 PM) says this week's quiz was postponed and replaced by an online one, but it does not say anything explicit about this slot. This site cannot confirm whether it was held. The names are in an official file on Canvas and are not published here."},
 {id:"acc-q2-a",c:"acc111",title:"ACC111 Quiz 2: Group A (date unclear after a later announcement)",type:"quiz",at:null,status:"conflict",note:"The 22 November announcement said Tuesday 24 November, in two sessions at 11:00 and 11:35 AM. The 23 November announcement (6:23 PM) implies the committee quiz moved to next week but does not say so for these sessions or give dates. A separate Group A announcement (6:32 PM) says the doctor enters the hall at 9:00 sharp on Tuesday. Ask at the lecture or check Canvas before you plan around 11:00 or 11:35."},
 {id:"acc-q2-b",c:"acc111",title:"ACC111 Quiz 2: Group B (committees)",type:"quiz",at:null,status:"conflict",note:"The announcement mentions 2:15 and 2:45 PM but without a clear date. The date is not confirmed yet. Check the course announcement on Canvas."},
 {id:"mgt-tut-nov26",uid:"mgt122-tutorial-2026-11-26",c:"mgt122",title:"MGT122 online Tutorial on Teams",type:"tutorial",at:"2026-11-26T14:30:00+02:00",time:true,status:"confirmed",note:"This week only. 2:30 PM Cairo time."},
 {id:"lib-research-nov30",uid:"lib116-project-2026-11-30",c:"lib116",title:"Research Project submission (individual, 20 marks)",type:"project",at:"2026-11-30T00:00:00+02:00",time:false,status:"confirmed",note:"Last day to submit: Monday 30 November, through Microsoft Forms. The announcement does not give a time."},
 {id:"lan-quiz2",c:"lan022",title:"LAN022 Quiz 2 (online)",type:"quiz",at:null,status:"conflict",note:"Conflict: Canvas says Friday 27 November, 12:00 to 12:45, and the instructor's message says Saturday 28 November at 12 noon. Ask the instructor or check Canvas before you rely on a day."},
 {id:"acc-mid2",c:"acc111",title:"ACC111 Midterm 2",type:"exam",at:null,status:"expected",note:"Expected around week 11 (roughly 28 November to 4 December). The date has not been announced yet."},
 {id:"mat-mid2",c:"mat214",title:"MAT214 Midterm 2",type:"exam",at:null,status:"expected",note:"Expected in the first week of December. The date has not been announced yet. Per the course plan it falls at lecture 12."},
 {id:"finals",c:null,title:"Final exams",type:"exam",at:null,status:"expected",note:"Expected in January 2027. The schedule has not been announced yet."},
 {id:"acc-online-q-nov26",c:"acc111",title:"ACC111 online quiz: Closing and Unearned Revenue",type:"quiz",at:"2026-11-26T22:00:00+02:00",time:true,status:"confirmed",note:"Thursday 26 November, 10:00 to 10:15 PM Cairo time. Online, 12 multiple-choice questions, 4 marks. The personal link comes by email as before. It will not be repeated, per the doctor's announcement on Canvas (23 November, 6:23 PM)."},
 {id:"acc-q-committee-next",c:"acc111",title:"ACC111 committee quiz, 6 marks (date not announced)",type:"quiz",at:null,status:"conflict",note:"The 23 November announcement (6:23 PM) says there will be an in-committee quiz next week during the lectures, 6 marks: two exercises, one on Closing and one on the Perpetual system, 3 marks each. It gives no day or time. Check Canvas."},
 {id:"mgt-lec-a-nov24",c:"mgt122",title:"MGT122 lecture, Group A (this week only)",type:"lecture",at:"2026-11-24T11:30:00+02:00",time:true,status:"confirmed",note:"Tuesday 24 November, 11:30 AM to 1:30 PM. This week only, per the announcement on Canvas (23 November, about 6:40 PM). It replaces the usual time."},
 {id:"mgt-lec-b-nov24",c:"mgt122",title:"MGT122 lecture, Group B (this week only)",type:"lecture",at:"2026-11-24T09:00:00+02:00",time:true,status:"confirmed",note:"Tuesday 24 November, 9:00 to 11:15 AM. This week only, per the announcement on Canvas (23 November, about 6:40 PM)."},
 {id:"acc-lec-a-nov24",c:"acc111",title:"ACC111 lecture, Group A (this week only)",type:"lecture",at:"2026-11-24T09:00:00+02:00",time:true,status:"confirmed",note:"Tuesday 24 November, 9:00 to 11:00 AM. This week only, per the same Canvas announcements (23 November, evening)."},
 {id:"acc-lec-b-nov24",c:"acc111",title:"ACC111 lecture, Group B (this week only)",type:"lecture",at:"2026-11-24T12:00:00+02:00",time:true,status:"confirmed",note:"Tuesday 24 November, 12:00 to 2:00 PM. This week only, per the same Canvas announcements (23 November, evening)."},
 {id:"lan-email-nov27",c:"lan022",title:"LAN022 Professional Email Writing assignment (15 marks)",type:"assignment",at:"2026-11-27T23:59:00+02:00",time:true,status:"confirmed",note:"Due Friday 27 November, 11:59 PM, per Canvas. This is separate from the Quiz 2 day conflict above."},
 {id:"withdraw-dec10",c:null,title:"Last day to withdraw from a course (university-wide)",type:"admin",at:"2026-12-10T00:00:00+02:00",time:false,status:"confirmed",note:"10 December, the end of week 12, per the university announcement of 23 November. The announcement gives no time."}
];
SOKAR.scale=[[97,"A+",4],[93,"A",4],[89,"A-",3.7],[84,"B+",3.3],[80,"B",3],[76,"B-",2.7],[73,"C+",2.3],[70,"C",2],[67,"C-",1.7],[64,"D+",1.3],[60,"D",1],[0,"F",0]];
SOKAR.tips=["Start with the course that has the nearest date, not the one you like most.","25 minutes of focus and 5 minutes of rest. Repeat 4 times, then take a long break.","After each lecture, write the 3 key points by hand without looking at the slides.","Solve questions before the exam. Reading alone gives a false feeling of understanding.","Passing any course needs at least a D and 30% of the final exam grade (per the Academic Handbook)."];
SOKAR.icons={
calc:'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8 7h8M8 12h2m4 0h2M8 16h2m4 0h2"/>',
chart:'<path d="M4 20V4M4 20h16"/><path d="M8 16l4-5 3 3 5-7"/>',
sigma:'<path d="M18 5H6l7 7-7 7h12"/>',
org:'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
leaf:'<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-7 10-9"/>',
book:'<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1z"/><path d="M12 6v13"/>',
talk:'<path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/>'};
SOKAR.reviewed="23 November 2026, 6:58 PM (Cairo time), announcements and new files in the 8 Canvas courses";
SOKAR.published="23 November 2026";
SOKAR.updates=[
["23 November (evening)", "Tonight's Canvas announcements changed the picture. ACC111 now has an online quiz on Thursday 26 November, 10:00 to 10:15 PM (Closing and Unearned Revenue, 12 questions, 4 marks), and an in-committee quiz next week with no day or time yet. The two committee dates posted on 22 November (Group C Monday, Group A Tuesday) are now shown as unclear, because the new announcement implies a postponement without stating it. MGT122 and ACC111 lecture times for Tuesday 24 November changed for this week only, per group. Also added: the LAN022 email assignment (Friday 27 November, 11:59 PM) and the university withdrawal deadline (10 December). Checked at 6:58 PM Cairo time."],
["23 November (evening)", "New files on Canvas that are listed here by name only and are NOT summarized yet. Open them on Canvas. ACC111: Tutorial on Chapter 4 Closing Entries, Tutorial on Chapter 5 perpetual inventory system (Buy), Prepaid Expenses and Depreciation Tutorial (re-uploaded), Tutorial on Chapter 3. FIN101: MICRO-Lect 10, Micro-Lect 9. LAN022: Lec 8, Lec 9 (slides and a video), Lec 10, and the 7th lecture file. MAT214: Lecture 8, Lecture 9, a 40-question determinants and matrices file, Lab 7 matrices worked solutions. MGT122: Chapter 3 Planning (slides and PDF), Chapter 4 Organizing, Tutorial 7. Committee lists and result files are private and are not listed."],
["23 November","The ACC111 Quiz 2 committee announcements were added to the deadlines (Group C Monday 2:15 PM, Group A Tuesday 11:00 and 11:35 AM, Group B date still unclear). The name lists are in official files on Canvas and are not published here. Checked on Canvas by the automatic monitor on 23 November at 12:14 AM Cairo time (this is the review date of this announcement only, not of the other courses)."],
["23 November","Summaries for LAN022 (7 lectures), LIB116 lectures 4 to 6, MAT214 lecture 5, and the SDGs & HRM summary in GEO217."],
["23 November","The \"My committee\" tool reads the committee file on your device only, and no list is put on the site."],
["23 November","LAN022 lectures 9 and 10 are on Canvas but the download is refused for the account used, so they are not covered."]
];
SOKAR.canvasIds={acc111:3072,fin101:3084,geo217:3450,lan022:3451,lib116:3457,mat214:3396,mgt122:3091};

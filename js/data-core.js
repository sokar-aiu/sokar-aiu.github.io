window.SOKAR=window.SOKAR||{courses:[]};
SOKAR.updated="٢٣ نوفمبر ٢٠٢٦";
SOKAR.links=[
 {t:"Canvas",d:"المحاضرات والكويزات",u:"https://aiu.instructure.com"},
 {t:"موقع الجامعة",d:"الموقع الرسمي",u:"https://aiu.edu.eg/"},
 {t:"Academic Handbook",d:"اللوائح وجدول التقديرات",u:"https://aiu.edu.eg/academic-handbook-2/"}
];
/* status: confirmed = مصدره إعلان رسمي، conflict = مصادر متعارضة، expected = متوقع ولم يُعلن */
SOKAR.deadlines=[
 {id:"mgt-tut-nov26",c:"mgt122",title:"MGT122 Tutorial أونلاين على Teams",type:"tutorial",at:"2026-11-26T14:30:00+02:00",time:true,status:"confirmed",note:"الأسبوع ده بس. الساعة ٢:٣٠ العصر بتوقيت القاهرة."},
 {id:"lib-research-nov30",c:"lib116",title:"تسليم Research Project (فردي، ٢٠ درجة)",type:"project",at:"2026-11-30T00:00:00+02:00",time:false,status:"confirmed",note:"آخر يوم للرفع: الاثنين ٣٠ نوفمبر عن طريق Microsoft Forms. الساعة مش محددة في الإعلان."},
 {id:"lan-quiz2",c:"lan022",title:"LAN022 Quiz 2 أونلاين",type:"quiz",at:null,status:"conflict",note:"متعارض: Canvas بيقول الجمعة ٢٧ نوفمبر ١٢:٠٠ إلى ١٢:٤٥، ورسالة الدكتورة بتقول السبت ٢٨ نوفمبر ١٢ الظهر. اسأل الدكتورة أو راجع Canvas قبل ما تعتمد على يوم."},
 {id:"acc-mid2",c:"acc111",title:"ACC111 Midterm 2",type:"exam",at:null,status:"expected",note:"متوقع حوالي الأسبوع ١١ (٢٨ نوفمبر إلى ٤ ديسمبر تقريبًا). التاريخ لسه ما اتعلنش."},
 {id:"mat-mid2",c:"mat214",title:"MAT214 Midterm 2",type:"exam",at:null,status:"expected",note:"متوقع أول أسبوع في ديسمبر. التاريخ لسه ما اتعلنش. حسب خطة المادة بيكون عند المحاضرة ١٢."},
 {id:"finals",c:null,title:"الامتحانات النهائية",type:"exam",at:null,status:"expected",note:"متوقعة في يناير ٢٠٢٧. الجدول لسه ما اتعلنش."}
];
SOKAR.scale=[[97,"A+",4],[93,"A",4],[89,"A-",3.7],[84,"B+",3.3],[80,"B",3],[76,"B-",2.7],[73,"C+",2.3],[70,"C",2],[67,"C-",1.7],[64,"D+",1.3],[60,"D",1],[0,"F",0]];
SOKAR.tips=["ابدأ بالمادة اللي ليها أقرب معاد، مش اللي بتحبها.","٢٥ دقيقة تركيز و٥ دقايق راحة. كرر ٤ مرات وخد راحة طويلة.","بعد كل محاضرة اكتب أهم ٣ نقط بإيدك من غير ما تبص في السلايدات.","حل أسئلة قبل الامتحان، القراءة لوحدها بتديك إحساس كاذب بالفهم.","النجاح في أي مادة محتاج D على الأقل و٣٠٪ من درجة الفاينال (حسب الأكاديميك هاندبوك)."];
SOKAR.icons={
calc:'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8 7h8M8 12h2m4 0h2M8 16h2m4 0h2"/>',
chart:'<path d="M4 20V4M4 20h16"/><path d="M8 16l4-5 3 3 5-7"/>',
sigma:'<path d="M18 5H6l7 7-7 7h12"/>',
org:'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
leaf:'<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-7 10-9"/>',
book:'<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1z"/><path d="M12 6v13"/>',
talk:'<path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/>'};

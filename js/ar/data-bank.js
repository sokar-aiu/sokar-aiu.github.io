/* أسئلة تدريب إضافية متكتبة من مواد Canvas اللي اتنزلت من ١٦ لـ٢٣ نوفمبر. كل سؤال مكتوب مصدره. */
(function(){
var A="ACC111 Tutorial Ch4 (Canvas، ٢٣ نوفمبر)",B="ACC111 Tutorial Ch5 Buy (Canvas، ٢٣ نوفمبر)",F9="FIN101 Lecture 9 (Canvas، ١٦ نوفمبر)",F10="FIN101 Lecture 10 (Canvas، ٢٣ نوفمبر)",M="تمارين MAT214 Lecture 9 (Canvas، ٢٠ نوفمبر)";
var bank={
acc111:[
{s:A,q:"قيود القفل الأربعة في Tutorial الـ Closing Entries ماشية بأنهي ترتيب؟",o:["الإيرادات على Income Summary، المصروفات على Income Summary، Income Summary على Owner's Capital، Drawings على Owner's Capital","Drawings على Income Summary، الإيرادات على Income Summary، المصروفات على Cash، Income Summary على Cash","المصروفات على Owner's Capital، الإيرادات على Drawings، Income Summary على Accounts Payable","الإيرادات على Cash، المصروفات على Accounts Payable، Drawings على Income Summary"],a:0,why:"بتقفل الإيرادات، وبعدين المصروفات، وبعدين صافي الربح أو الخسارة على Owner's Capital، وبعدين Drawings على Owner's Capital."},
{s:A,q:"شركة Hercules عندها Service Revenue بـ 42,400 و Rent Revenue بـ 6,100. إيه اللي بيتدائن في Income Summary لما نقفل الإيرادات؟",o:["42,400","54,600","48,500","49,900"],a:2,why:"42,400 + 6,100 = 48,500."},
{s:A,q:"مصروفات Hercules: Salaries and Wages 37,100 و Utilities 10,100 و Depreciation 2,700. والإيرادات 48,500. إيه نتيجة السنة؟",o:["صافي ربح 1,400","صافي خسارة 1,400","صافي خسارة 12,000","صافي ربح 48,500"],a:1,why:"المصروفات 37,100 + 10,100 + 2,700 = 49,900 وهي أكبر من 48,500. صافي الخسارة = 1,400."},
{s:A,q:"Hercules بدأت بـ Owner's Capital قدره 31,700، وصافي خسارة 1,400 و Owner's Drawings بـ 12,000. كام Owner's Capital بعد القفل؟",o:["19,700","18,300","30,300","42,300"],a:1,why:"31,700 − 1,400 − 12,000 = 18,300."},
{s:A,q:"كام مجموع جانب المدين في Post-closing trial balance بتاع Hercules (Cash و Accounts Receivable و Equipment)؟",o:["89,600","27,700","49,900","18,300"],a:1,why:"10,900 + 6,200 + 10,600 = 27,700، والدائن كمان مجموعه 27,700."},
{s:A,q:"أنهي حساب من دول مش بيتقفل في آخر السنة؟",o:["Service Revenue","Owner's Drawings","Accounts Receivable","Utilities Expense"],a:2,why:"Accounts Receivable حساب دائم. بيفضل في Post-closing trial balance."},
{s:A,q:"في مسألة Pampered Pet Service، المستلزمات تكلفتها 1,300 والمتبقي منها 1,000 في 31 أغسطس. كام مصروف المستلزمات؟",o:["1,300","1,000","200","300"],a:3,why:"1,300 − 1,000 = 300."},
{s:A,q:"في مسألة Pampered Pet Service، المصروفات المقفولة على Income Summary هي 3,200 + 900 + 800 + 500 + 400 + 300 + 200. كام المجموع؟",o:["4,900","6,300","6,800","1,400"],a:1,why:"المجموع 6,300. الإيراد 4,900 ناقص 6,300 يطلع صافي خسارة 1,400."},
{s:B,q:"في نظام Perpetual، أنهي حساب بيتدين لما نشتري بضاعة بالأجل؟",o:["Purchases","Merchandise Inventory","Cost of Goods Sold","Accounts Payable"],a:1,why:"في التمرين، Diaz بتدين Merchandise Inventory بـ 8,000 وبتدائن Accounts Payable بـ 8,000."},
{s:B,q:"Diaz دفعت شحن 400 على مشتريات FOB shipping point. أنهي حساب بيتدين؟",o:["Freight-out Expense","Merchandise Inventory","Accounts Payable","Cost of Goods Sold"],a:1,why:"شحن المشتريات FOB shipping point بيتضاف على Merchandise Inventory."},
{s:B,q:"Diaz اشترت بضاعة بـ 8,000 بشروط 2/10, n/30 ورجّعت بضاعة تالفة بـ 300. كام كاش Diaz بتدفع يوم 19 يونيو، جوه فترة الخصم؟",o:["7,700","7,546","8,000","7,846"],a:1,why:"Accounts Payable بقى 7,700 بعد المرتجع. خصم الـ 2% يطلع 154، فالكاش المدفوع 7,546."},
{s:B,q:"لما Diaz تدفع جوه فترة الخصم، الخصم 2% وقيمته 154 بيتسجل فين؟",o:["Sales Revenue","Merchandise Inventory (دائن)","Interest Revenue","Cash (مدين)"],a:1,why:"في نظام Perpetual الخصم بيقلل تكلفة Merchandise Inventory."},
{s:B,q:"Diaz دفعت الرصيد يوم 25 يونيو بدل 19 يونيو، يعني بعد فترة الخصم. كام الكاش المدفوع؟",o:["7,546","7,700","8,000","7,846"],a:1,why:"مفيش خصم بعد الـ 10 أيام، فـ Diaz بتدفع الـ 7,700 كاملة."},
{s:B,q:"شركة Nandi اشترت بضاعة بـ 25,000 بشروط 2/10, net/30، ورجّعت 2,800 ودفعت بالكامل يوم 15 أبريل. كام الكاش اللي Nandi دفعته؟",o:["22,200","21,756","24,500","23,456"],a:1,why:"الخصم بيتحسب على 25,000 − 2,800 = 22,200، فهو 444 والكاش 22,200 − 444 = 21,756."}
],
fin101:[
{s:F10,q:"Income elasticity of demand لسلعة طلعت +1.06. نوع السلعة إيه؟",o:["Inferior","Normal، ضرورية","Normal، كمالية (luxury)","مستقلة"],a:2,why:"قيمة موجبة أكبر من 1 معناها سلعة Normal كمالية."},
{s:F10,q:"Income elasticity of demand سالبة معناها إن السلعة:",o:["Normal، ضرورية","Normal، كمالية","Inferior","بديل"],a:2,why:"الإشارة السالبة معناها الطلب بيقل لما الدخل يزيد، فالسلعة Inferior."},
{s:F10,q:"سعر البيجل زاد من $0.45 لـ $0.65، وكمية الكريم تشيز المطلوبة نزلت من 12,000 لـ 10,000 أوقية. الـ cross-price elasticity طلعت −0.5. السلعتين:",o:["بدائل","مكملات (complements)","مستقلتين","الاتنين Inferior"],a:1,why:"Cross-price elasticity سالبة معناها مكملات."},
{s:F10,q:"Cross-price elasticity of demand موجبة معناها إن السلعتين:",o:["مكملات","بدائل (substitutes)","مستقلتين","Inferior"],a:1,why:"موجبة يعني بدائل، وسالبة يعني مكملات، وصفر يعني مستقلتين."},
{s:F10,q:"سعر الدرة زاد من $8 لـ $10 للبوشل، والكمية المعروضة زادت من 20,000 لـ 24,000 بوشل. بطريقة midpoint، العرض:",o:["Elastic","Inelastic","Unit elastic","Perfectly elastic"],a:1,why:"التغير في الكمية حوالي 18% والتغير في السعر حوالي 22%. المرونة أقل من 1، فالعرض Inelastic."},
{s:F10,q:"حسب المحاضرة، price elasticity of supply:",o:["دايمًا موجبة","دايمًا سالبة","موجبة أو سالبة","دايمًا صفر"],a:0,why:"المحاضرة بتقول إن إشارة elasticity of supply دايمًا موجبة."},
{s:F10,q:"حسب المحاضرة، أنهي عرض أكثر مرونة (منحنى عرض مسطح)؟",o:["الطماطم والبطاطس","السلع الصناعية اللي تتخزن بسهولة","سلعة منحنى عرضها رأسي","سلعة مينفعش تتنتج"],a:1,why:"السلع اللي تتخزن بسهولة بتستجيب كتير للسعر. السلع الزراعية اللي بتبوظ عرضها Inelastic."},
{s:F9,q:"سعر البيتزا نزل من $20.50 لـ $19.50، والكمية المطلوبة زادت من 9 لـ 11 في الساعة. كام price elasticity of demand؟",o:["−0.25","4","−4","−2"],a:2,why:"متوسط السعر $20 ومتوسط الكمية 10. %ΔQ = 2/10 = 20% و %ΔP = −1/20 = −5%. 20 ÷ (−5) = −4."},
{s:F9,q:"زيادة 10% في سعر السلعة X سببت نقص 22% في الكمية المطلوبة. كام price elasticity of demand؟",o:["2.2","−0.45","−12","−2.2"],a:3,why:"−22% ÷ 10% = −2.2."},
{s:F9,q:"Price elasticity of demand للشوكولاتة −2.0. السعر نزل 10%. إيه اللي بيحصل للكمية المطلوبة؟",o:["بتقل 20%","بتزيد 20%","بتزيد 10%","بتزيد 5%"],a:1,why:"%ΔQ = −2.0 × (−10%) = +20%."},
{s:F9,q:"ليه المحاضرة بتستخدم متوسط السعر ومتوسط الكمية؟",o:["المرونة بتبقى مختلفة لما السعر يزيد ولما ينزل","المرونة بتطلع نفس القيمة سواء السعر زاد أو نزل","المرونة دايمًا موجبة","المرونة دايمًا صفر"],a:1,why:"طريقة midpoint بتدي نفس القيمة في الاتجاهين."},
{s:F9,q:"لو |PED| أكبر من 1، الطلب:",o:["Inelastic","Elastic","Unit elastic","Perfectly inelastic"],a:1,why:"|PED| > 1 معناها طلب Elastic. و |PED| < 1 يعني Inelastic و |PED| = 1 يعني Unit elastic."}
],
mat214:[
{s:M,q:"أوجد dy/dx لـ y = 9x².",o:["9x","18x","18x²","9x³"],a:1,why:"قاعدة القوة: 2 × 9x = 18x."},
{s:M,q:"أوجد dy/dx لـ y = 4x³.",o:["4x²","12x³","12x²","x⁴"],a:2,why:"قاعدة القوة: 3 × 4x² = 12x²."},
{s:M,q:"أوجد dy/dx لـ y = x³ − x.",o:["x² − 1","3x²","3x − 1","3x² − 1"],a:3,why:"مشتقة x³ هي 3x² ومشتقة x هي 1."},
{s:M,q:"أوجد dy/dx لـ y = 5.",o:["5","0","1","x"],a:1,why:"مشتقة الثابت صفر."},
{s:M,q:"أوجد dy/dx لـ y = 4 ln x.",o:["4x","4/x","ln 4","1/x"],a:1,why:"مشتقة ln x هي 1/x، فـ 4 ln x تطلع 4/x."},
{s:M,q:"أوجد dy/dx لـ y = −8x⁴ + ln 2.",o:["−8x³","−32x³ + 1/2","−32x³","−32x³ + ln 2"],a:2,why:"ln 2 ثابت فمشتقته صفر. ومشتقة −8x⁴ هي −32x³."}
]};
SOKAR.courses.forEach(function(c){(bank[c.id]||[]).forEach(function(q){c.quiz.push(q)})});
})();

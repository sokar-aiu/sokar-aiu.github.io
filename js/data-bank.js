/* Extra practice questions written from Canvas material posted on 16 to 23 November. Each question names its source. */
(function(){
var A="ACC111 Tutorial Ch4 (Canvas, 23 Nov)",B="ACC111 Tutorial Ch5 Buy (Canvas, 23 Nov)",F9="FIN101 Lecture 9 (Canvas, 16 Nov)",F10="FIN101 Lecture 10 (Canvas, 23 Nov)",M="MAT214 Lecture 9 exercise list (Canvas, 20 Nov)";
var bank={
acc111:[
{s:A,q:"Which order do the four closing entries follow in the Closing Entries tutorial?",o:["Revenues to Income Summary, expenses to Income Summary, Income Summary to Owner's Capital, Drawings to Owner's Capital","Drawings to Income Summary, revenues to Income Summary, expenses to Cash, Income Summary to Cash","Expenses to Owner's Capital, revenues to Drawings, Income Summary to Accounts Payable","Revenues to Cash, expenses to Accounts Payable, Drawings to Income Summary"],a:0,why:"Close revenues, close expenses, close the net income or loss to Owner's Capital, then close Drawings to Owner's Capital."},
{s:A,q:"Hercules Company has Service Revenue of 42,400 and Rent Revenue of 6,100. What is credited to Income Summary when revenues are closed?",o:["42,400","54,600","48,500","49,900"],a:2,why:"42,400 + 6,100 = 48,500."},
{s:A,q:"Hercules Company's expenses are Salaries and Wages 37,100, Utilities 10,100 and Depreciation 2,700. With revenues of 48,500, what is the result for the year?",o:["Net income of 1,400","Net loss of 1,400","Net loss of 12,000","Net income of 48,500"],a:1,why:"Expenses are 37,100 + 10,100 + 2,700 = 49,900, which is more than 48,500. Net loss = 1,400."},
{s:A,q:"Hercules starts with Owner's Capital of 31,700, has a net loss of 1,400 and Owner's Drawings of 12,000. What is Owner's Capital after closing?",o:["19,700","18,300","30,300","42,300"],a:1,why:"31,700 − 1,400 − 12,000 = 18,300."},
{s:A,q:"What is the total of the debit side of the Hercules post-closing trial balance (Cash, Accounts Receivable and Equipment)?",o:["89,600","27,700","49,900","18,300"],a:1,why:"10,900 + 6,200 + 10,600 = 27,700, and the credits also total 27,700."},
{s:A,q:"Which of these accounts is NOT closed at the end of the year?",o:["Service Revenue","Owner's Drawings","Accounts Receivable","Utilities Expense"],a:2,why:"Accounts Receivable is a permanent account. It stays on the post-closing trial balance."},
{s:A,q:"In the Pampered Pet Service problem, supplies cost 1,300 and 1,000 are on hand on August 31. What is the supplies expense?",o:["1,300","1,000","200","300"],a:3,why:"1,300 − 1,000 = 300."},
{s:A,q:"In the Pampered Pet Service problem, the expenses closed to Income Summary are 3,200 + 900 + 800 + 500 + 400 + 300 + 200. What is the total?",o:["4,900","6,300","6,800","1,400"],a:1,why:"The total is 6,300. Revenue of 4,900 minus 6,300 gives a net loss of 1,400."},
{s:B,q:"Under the perpetual system, which account is debited when merchandise is bought on credit?",o:["Purchases","Merchandise Inventory","Cost of Goods Sold","Accounts Payable"],a:1,why:"In the tutorial, Diaz debits Merchandise Inventory 8,000 and credits Accounts Payable 8,000."},
{s:B,q:"Diaz pays freight of 400 on a purchase made FOB shipping point. Which account is debited?",o:["Freight-out Expense","Merchandise Inventory","Accounts Payable","Cost of Goods Sold"],a:1,why:"Freight on a purchase FOB shipping point is added to Merchandise Inventory."},
{s:B,q:"Diaz bought 8,000 of goods on terms 2/10, n/30 and returned 300 of damaged goods. How much cash does Diaz pay on June 19, within the discount period?",o:["7,700","7,546","8,000","7,846"],a:1,why:"Accounts Payable is 7,700 after the return. The 2% discount is 154, so the cash paid is 7,546."},
{s:B,q:"When Diaz pays within the discount period, where is the 2% discount of 154 recorded?",o:["Sales Revenue","Merchandise Inventory (credit)","Interest Revenue","Cash (debit)"],a:1,why:"Under the perpetual system the discount reduces the cost of Merchandise Inventory."},
{s:B,q:"Diaz pays the balance on June 25 instead of June 19, after the discount period. How much cash is paid?",o:["7,546","7,700","8,000","7,846"],a:1,why:"There is no discount after the 10 days, so Diaz pays the full 7,700."},
{s:B,q:"Nandi Co. bought 25,000 of goods on terms 2/10, net/30, returned 2,800 and paid in full on April 15. How much cash does Nandi pay?",o:["22,200","21,756","24,500","23,456"],a:1,why:"The discount is taken on 25,000 − 2,800 = 22,200, so it is 444 and the cash is 22,200 − 444 = 21,756."}
],
fin101:[
{s:F10,q:"The income elasticity of demand for a good is +1.06. What type of good is it?",o:["Inferior","Normal, necessary","Normal, luxury","Independent"],a:2,why:"A positive value above 1 means a normal, luxury good."},
{s:F10,q:"A negative income elasticity of demand means the good is:",o:["Normal, necessary","Normal, luxury","Inferior","A substitute"],a:2,why:"A negative sign means demand falls when income rises, so the good is inferior."},
{s:F10,q:"The price of bagels rises from $0.45 to $0.65 and the quantity of cream cheese demanded falls from 12,000 to 10,000 ounces. The cross-price elasticity is −0.5. The two goods are:",o:["Substitutes","Complements","Independent","Both inferior"],a:1,why:"A negative cross-price elasticity means complements."},
{s:F10,q:"A positive cross-price elasticity of demand means the two goods are:",o:["Complements","Substitutes","Independent","Inferior"],a:1,why:"Positive means substitutes, negative means complements and zero means independent."},
{s:F10,q:"The price of corn rises from $8 to $10 per bushel and the quantity supplied rises from 20,000 to 24,000 bushels. Using the midpoint method, supply is:",o:["Elastic","Inelastic","Unit elastic","Perfectly elastic"],a:1,why:"The change in quantity is about 18% and the change in price is about 22%. The elasticity is below 1, so supply is inelastic."},
{s:F10,q:"According to the lecture, the price elasticity of supply is:",o:["Always positive","Always negative","Positive or negative","Always zero"],a:0,why:"The lecture states that the sign of the elasticity of supply is always positive."},
{s:F10,q:"According to the lecture, which supply is more elastic (a flat supply curve)?",o:["Tomatoes and potatoes","Industrial goods that can be stored easily","A good with a vertical supply curve","A good that cannot be produced"],a:1,why:"Goods that can be stored easily respond a lot to price. Agricultural goods that spoil have an inelastic supply."},
{s:F9,q:"The price of a pizza falls from $20.50 to $19.50 and the quantity demanded rises from 9 to 11 an hour. What is the price elasticity of demand?",o:["−0.25","4","−4","−2"],a:2,why:"Average price is $20 and average quantity is 10. %ΔQ = 2/10 = 20% and %ΔP = −1/20 = −5%. 20 ÷ (−5) = −4."},
{s:F9,q:"A 10% increase in the price of good X causes a 22% decrease in the quantity demanded. What is the price elasticity of demand?",o:["2.2","−0.45","−12","−2.2"],a:3,why:"−22% ÷ 10% = −2.2."},
{s:F9,q:"The price elasticity of demand for chocolate is −2.0. The price falls by 10%. What happens to the quantity demanded?",o:["It falls by 20%","It rises by 20%","It rises by 10%","It rises by 5%"],a:1,why:"%ΔQ = −2.0 × (−10%) = +20%."},
{s:F9,q:"Why does the lecture use the average price and the average quantity?",o:["The elasticity is different when the price rises and when it falls","The elasticity is the same whether the price rises or falls","The elasticity is always positive","The elasticity is always zero"],a:1,why:"The midpoint method gives the same value in both directions."},
{s:F9,q:"If |PED| is greater than 1, demand is:",o:["Inelastic","Elastic","Unit elastic","Perfectly inelastic"],a:1,why:"|PED| > 1 means elastic demand. |PED| < 1 is inelastic and |PED| = 1 is unit elastic."}
],
mat214:[
{s:M,q:"Find dy/dx for y = 9x².",o:["9x","18x","18x²","9x³"],a:1,why:"Power rule: 2 × 9x = 18x."},
{s:M,q:"Find dy/dx for y = 4x³.",o:["4x²","12x³","12x²","x⁴"],a:2,why:"Power rule: 3 × 4x² = 12x²."},
{s:M,q:"Find dy/dx for y = x³ − x.",o:["x² − 1","3x²","3x − 1","3x² − 1"],a:3,why:"The derivative of x³ is 3x² and the derivative of x is 1."},
{s:M,q:"Find dy/dx for y = 5.",o:["5","0","1","x"],a:1,why:"The derivative of a constant is 0."},
{s:M,q:"Find dy/dx for y = 4 ln x.",o:["4x","4/x","ln 4","1/x"],a:1,why:"The derivative of ln x is 1/x, so 4 ln x gives 4/x."},
{s:M,q:"Find dy/dx for y = −8x⁴ + ln 2.",o:["−8x³","−32x³ + 1/2","−32x³","−32x³ + ln 2"],a:2,why:"ln 2 is a constant, so its derivative is 0. The derivative of −8x⁴ is −32x³."}
]};
SOKAR.courses.forEach(function(c){(bank[c.id]||[]).forEach(function(q){c.quiz.push(q)})});
})();

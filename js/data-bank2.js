/* Extra practice questions from Canvas material posted 16 to 24 November. Each question names its source. */
(function(){
var bank={mat214:[{s:"MAT214 Lecture 8 interactive slides, part 2 (Canvas, 24 Nov)",q:"Find dy/dx for y = −9.",o:["0","−9","1","−9x"],a:0,why:"Rule 1: the derivative of a constant is 0."},
{s:"MAT214 Lecture 8 interactive slides, part 2 (Canvas, 24 Nov)",q:"Find dy/dx for y = 7x⁴.",o:["28x⁴","28x³","7x³","11x³"],a:1,why:"Power rule: 7 × 4x³ = 28x³."},
{s:"MAT214 Lecture 8 interactive slides, part 2 (Canvas, 24 Nov)",q:"Find dy/dx for y = 4√x.",o:["2/√x","4/√x","1/(2√x)","2√x"],a:0,why:"4√x = 4x^(1/2), so the power rule gives 4 × (1/2)x^(−1/2) = 2x^(−1/2) = 2/√x."},
{s:"MAT214 Lecture 8 interactive slides, part 2 (Canvas, 24 Nov)",q:"Find dy/dx for y = 5/x².",o:["−10/x³","−5/x²","10/x³","−10/x"],a:0,why:"5/x² = 5x^(−2), so dy/dx = −10x^(−3) = −10/x³."},
{s:"MAT214 Lecture 8 interactive slides, part 2 (Canvas, 24 Nov)",q:"Find dy/dx for y = x² + 3x.",o:["2x + 3","x² + 3","2x","3x + 2"],a:0,why:"Rule 4, term by term: 2x + 3."},
{s:"MAT214 Lecture 8 interactive slides, part 2 (Canvas, 24 Nov)",q:"Find dy/dx for y = (x + 1)(x − 2).",o:["2x − 1","2x + 1","x² − 2","1"],a:0,why:"Product rule: (x + 1)(1) + (x − 2)(1) = 2x − 1."},
{s:"MAT214 Lecture 8 interactive slides, part 2 (Canvas, 24 Nov)",q:"Find dy/dx for y = (x + 1)/(x − 3).",o:["−4/(x − 3)²","4/(x − 3)²","1","(2x − 2)/(x − 3)²"],a:0,why:"Division rule: ((x − 3)(1) − (x + 1)(1)) ÷ (x − 3)² = −4/(x − 3)²."}]};
SOKAR.courses.forEach(function(c){(bank[c.id]||[]).forEach(function(q){c.quiz.push(q)})});
})();

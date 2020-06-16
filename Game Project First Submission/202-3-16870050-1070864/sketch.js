/*

Officer: 1070864
CaseNum: 202-3-16870050-1070864

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Lime Green filled text with a Deep Sky Blue outline in Diggity font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{/
	createCanvas(510,440);
	textSize(25);
}

function draw()
{
	background(255);

	fill(240,230,140);
	stroke(0,255,255);
	textFont(RonsFont);
	//text("ever", 40,270);
	fill(222,184,135);
	stroke(50,205,50);
	textFont(Diggity);
	text("are", 111,192);
	fill(255,99,71);
	stroke(107,142,35);
	text("You", 73,192);
	push();
	fill(178,34,34);
	stroke(25,25,112);
	textFont(RonsFont);
	//text("My", 14,25);
	pop();
	stroke(178,34,34);
	textFont(Melissa);
	text("not", 369,192);
	fill(255,105,180);
	stroke(255,140,0);
	text("no", 71,75);
	fill(160,82,45);
	stroke(124,252,0);
	text("I", 113,220);
	push();
	fill(255,140,0);
	stroke(32,178,170);
	text("send", 418,162);
	pop();
	fill(34,139,34);
	textFont(Ballpointprint);
	text("sometimes.", 236,192);
	push();
	fill(154,205,50);
	stroke(75,0,130);
	textFont(Diggity);
	text("all", 443,135);
	pop();
	stroke(34,139,34);
	textFont(Melissa);
	text("continual", 275,75);
	fill(218,112,214);
	stroke(128,0,0);
	textFont(Ballpointprint);
	text("Is", 399,75);
	fill(30,144,255);
	stroke(50,205,50);
	textFont(RonsFont);
	text("x", 63,320);
	fill(176,224,230);
	stroke(154,205,50);
	textFont(Melissa);
	text("sure", 397,192);
	fill(233,150,122);
	stroke(124,252,0);
	textFont(RonsFont);
	text("I", 353,162);
	fill(238,232,170);
	stroke(148,0,211);
	textFont(Diggity);
	text("can", 33,75);
	fill(148,0,211);
	stroke(0,139,139);
	textFont(RonsFont);
	text("If", 292,162);
	fill(0,191,255);
	stroke(46,139,87);
	textFont(Diggity);
	text("relationship", 15,106);
	fill(0,0,128);
	stroke(0,255,255);
	textFont(Melissa);
	text("yours,", 91,270);
	push();
	fill(30,144,255);
	stroke(255,0,255);
	textFont(Ballpointprint);
	text("so", 149,192);
	pop();
	stroke(0,255,255);
	text("so,", 325,162);
	fill(238,232,170);
	stroke(128,0,128);
	textFont(Ballpointprint);
	text("much", 19,220);
	fill(186,85,211);
	stroke(199,21,133);
	textFont(RonsFont);
	text("I", 11,75);
	fill(165,42,42);
	stroke(255,0,255);
	text("?", 156,106);
	push();
	stroke(178,34,34);
	textFont(Ballpointprint);
	text("long", 92,75);
	pop();
	fill(255,215,0);
	textFont(Diggity);
	text("Bob,", 132,25);
	fill(72,209,204);
	stroke(0,255,0);
	textFont(RonsFont);
	text("The", 246,220);
	push();
	fill(147,112,219);
	stroke(50,205,50);
	textFont(Diggity);
	text("you", 102,162);
	pop();
	fill(173,216,230);
	text("shou", 49,135);
	fill(205,133,63);
	stroke(124,252,0);
	textFont(Diggity);
	text("and", 329,135);
	push();
	fill(0,128,0);
	stroke(255,0,255);
	textFont(Ballpointprint);
	text("?", 218,220);
	pop();
	stroke(127,255,0);
	textFont(RonsFont);
	text("can", 375,162);
	fill(32,178,170);
	stroke(218,165,32);
	text("ld", 91,135);
	push();
	fill(238,130,238);
	text("silenc", 377,220);
	pop();
	stroke(107,142,35);
	textFont(Ballpointprint);
	text("cash.", 19,192);
	fill(238,232,170);
	stroke(0,255,127);
	text("a", 240,135);
	fill(107,142,35);
	stroke(127,255,0);
	text("take", 166,220);
	push();
	fill(250,128,114);
	stroke(0,206,209);
	textFont(Diggity);
	text("me", 329,106);
	pop();
	fill(25,25,112);
	stroke(210,105,30);
	textFont(Melissa);
	text("you", 215,106);
	fill(139,0,139);
	stroke(0,255,0);
	textFont(Ballpointprint);
	text("sort", 368,135);
	fill(135,206,235);
	stroke(218,165,32);
	textFont(Melissa);
	text("I'm", 341,192);
	push();
	fill(0,100,0);
	stroke(255,215,0);
	textFont(Diggity);
	text("our", 438,75);
	pop();
	fill(50,205,50);
	text("guarded", 178,192);
	fill(240,128,128);
	stroke(0,191,255);
	textFont(RonsFont);
	text("reak", 274,135);
	fill(128,128,0);
	stroke(255,140,0);
	text("we", 12,135);
	fill(148,0,211);
	stroke(154,205,50);
	text("darling", 52,25);
	fill(128,0,0);
	stroke(128,0,128);
	textFont(Ballpointprint);
	text("how", 432,192);
	fill(64,224,208);
	stroke(178,34,34);
	textFont(Melissa);
	text("the", 349,220);
	fill(220,20,60);
	stroke(128,128,0);
	textFont(Diggity);
	text("Are", 174,106);
	fill(255,215,0);
	stroke(210,105,30);
	textFont(Melissa);
	text("secrets,", 284,220);
	fill(154,205,50);
	stroke(255,0,0);
	textFont(RonsFont);
	text("Are", 56,162);
	fill(152,251,152);
	stroke(0,255,255);
	text("For", 9,270);
	fill(144,238,144);
	stroke(0,255,255);
	textFont(Diggity);
	text("out.", 16,162);
	fill(128,0,128);
	stroke(154,205,50);
	textFont(Ballpointprint);
	text("Perhaps", 382,106);
	fill(255,165,0);
	stroke(210,105,30);
	textFont(Melissa);
	text("short", 138,162);
	fill(0,206,209);
	stroke(165,42,42);
	textFont(Ballpointprint);
	text("these", 210,75);
	fill(0,0,139);
	stroke(255,0,255);
	text("er", 123,75);
	push();
	fill(139,69,19);
	stroke(160,82,45);
	textFont(RonsFont);
	text("e.", 430,220);
	pop();
	fill(0,206,209);
	stroke(255,140,0);
	textFont(RonsFont);
	text("?", 274,162);
	fill(222,184,135);
	stroke(0,0,255);
	textFont(Diggity);
	text("delays.", 338,75);
	fill(154,205,50);
	stroke(199,21,133);
	text("?", 362,106);
	fill(205,133,63);
	stroke(154,205,50);
	textFont(Ballpointprint);
	text("away", 149,135);
	fill(25,25,112);
	stroke(255,255,0);
	textFont(RonsFont);
	text("Daisy", 6,320);
	fill(64,224,208);
	stroke(0,255,0);
	textFont(Melissa);
	text("more", 73,220);
	fill(0,255,255);
	stroke(0,206,209);
	textFont(Ballpointprint);
	text("can", 126,220);
	push();
	fill(244,164,96);
	stroke(128,0,0);
	textFont(Melissa);
	//text("this", 410,135);
	pop();
	fill(255,215,0);
	textFont(RonsFont);
	//text("avoiding", 243,106);
	fill(178,34,34);
	stroke(153,50,204);
	text("b", 263,135);
	fill(50,205,50);
	stroke(0,191,255);
	textFont(Diggity);
	text("go", 123,135);
	text("safe", 109,106);
	text("money", 217,162);
	text("ignore", 157,75);
	text("for", 204,135);
	fill(152,251,152);
	stroke(0,206,209);
	textFont(Ballpointprint);
	//text("of", 183,162);



}

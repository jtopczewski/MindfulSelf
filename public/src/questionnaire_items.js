var aes_options = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
var FFMQ_options = ["Never or very rarely true", "Rarely true", "Sometimes true", "Often true", "Very often or always true"];


var aes_qns = [
    "Number",
    "Q01", "Q02", "Q03" , "Q04" , "Q05" , "Q06" , "Q07" , "Q08" ,
    "Q09", "Q10", "Q11" , "Q12" , "Q13" , "Q14" , "Q15" , "Q16"];
var aes_description = [
    "Description",
    "I felt focused on the activity",
    "I felt engaged in the activity",
    "I felt relaxed during the activity",
    "The activity was enjoyable",
    "I put effort to maintain my mental state during the activity",
    "I was alert during the activity",
    "I felt mental pressure to complete the activity",
    "I felt bored by the activity",
    "The activity felt effortless",
    "I felt motivated during the activity",
    "The activity felt easy",
    "I felt peaceful during the activity",
    "I felt comfortable during the activity",
    "I felt nervous by the activity",
    "I was aware of the activity",
    "I felt calm during the activity"
];
var aes_csv = [aes_qns, aes_description];

var FFMQ_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20",
    "Q21", "Q22", "Q23", "Q24", "Q25", "Q26", "Q27", "Q28", "Q29", "Q30",
    "Q31", "Q32", "Q33", "Q34", "Q35", "Q36", "Q37", "Q38",  "Q39",
];
var FFMQ_description = [
    "Description",
    "When I’m walking, I deliberately notice the sensations of my body moving.",
    "I’m good at finding words to describe my feelings.",
    "I criticize myself for having irrational or inappropriate emotions.",
    "I perceive my feelings and emotions without having to react to them.",
    "When I do things, my mind wanders off and I’m easily distracted.",
    "When I take a shower or bath, I stay alert to the sensations of water on my body.",
    "I can easily put my beliefs, opinions, and expectations into words.",
    "I don’t pay attention to what I’m doing because I’m daydreaming, worrying, or otherwise distracted.",
    "I watch my feelings without getting lost in them.",
    "I tell myself I shouldn’t be feeling the way I’m feeling.",
    "I notice how foods and drinks affect my thoughts, bodily sensations, and emotions." ,
    "It’s hard for me to find the words to describe what I’m thinking.",
    "I am easily distracted.",
    "I believe some of my thoughts are abnormal or bad and I shouldn’t think that way.",
    "I pay attention to sensations, such as the wind in my hair or sun on my face." ,
    "I have trouble thinking of the right words to express how I feel about things",
    "I make judgments about whether my thoughts are good or bad.",
    "I find it difficult to stay focused on what’s happening in the present.",
    "When I have distressing thoughts or images, I “step back” and am aware of the thought or image without getting taken over by it.",
    "I pay attention to sounds, such as clocks ticking, birds chirping, or cars passing.",
    "In difficult situations, I can pause without immediately reacting.",
    "When I have a sensation in my body, it’s difficult for me to describe it because I can’t find the right words.",
    "It seems I am “running on automatic” without much awareness of what I’m doing.",
    "When I have distressing thoughts or images, I feel calm soon after.",
    "I tell myself that I shouldn’t be thinking the way I’m thinking.",
    "I notice the smells and aromas of things.",
    "Even when I’m feeling terribly upset, I can find a way to put it into words.",
    "I rush through activities without being really attentive to them.",
    "When I have distressing thoughts or images I am able just to notice them without reacting.",
    "I think some of my emotions are bad or inappropriate and I shouldn’t feel them.",
    "I notice visual elements in art or nature, such as colors, shapes, textures, or patterns of light and shadow.",
    "My natural tendency is to put my experiences into words.",
    "When I have distressing thoughts or images, I just notice them and let them go.",
    "I do jobs or tasks automatically without being aware of what I’m doing.",
    "When I have distressing thoughts or images, I judge myself as good or bad, depending what the thought/image is about.",
    "I pay attention to how my emotions affect my thoughts and behavior.",
    "I can usually describe how I feel at the moment in considerable detail.",
    "I find myself doing things without paying attention.",
    "I disapprove of myself when I have irrational ideas."
];
var FFMQ_csv = [FFMQ_qns, FFMQ_description];

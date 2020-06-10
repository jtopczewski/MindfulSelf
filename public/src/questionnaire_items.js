// AES
const aes_options = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];
const aes_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20",
    "Q21", "Q22", "Q23", "Q24", "Q25", "Q26"];
const aes_description = [
    "Description",
    "I felt focused on the activity.",
    "I find it difficult to stay focused on the activity.",
    "I was aware of the ongoing activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>aware</span> refers to being aware of your experience during the activity)</span>",
    "I felt comfortable during the activity.",
    "I find myself doing the activity without paying attention.",
    "I felt bored by the activity.",
    "I felt motivated during the activity.",
    "I find myself preoccupied with other thoughts when I was doing the activity.",
    "I felt relaxed during the activity.",
    "When I was doing the activity, my mind wandered off often.",
    "I was easily distracted while doing the activity.",
    "The activity was enjoyable.",
    "I had to force myself to complete the activity.",
    "I rushed through the activity.",
    "I felt engaged in the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>engaged</span> refers to being immersed with the activity)</span>",
    "I can notice the experience I had during the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>experience</span> refers to any experience, be it physical, emotional etc.)</span>",
    "The goal of the activity was effortless." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>effortless</span> refers to having to exert little effort to reach the goal of the activity)</span>",
    "I find myself doing the activity automatically without awareness.",
    "I work hard to achieve the goal of the activity.",
    "I felt calm during the activity.",
    "I felt mental pressure to complete the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>mental pressure</span> refers to tension and stress)</span>",
    "I felt peaceful during the activity.",
    "The goal of the activity was easy to achieve.",
    "I felt nervous by the activity.",
    "I felt trapped by the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>trapped</span> refers to wanting the activity to end and be free but it is still ongoing)</span>",
    "My mind was clear during the activity." + "<br><span class='q_keys_text'>(<span class='q_keys_word'>clear mind</span> refers to being aware and focus on the activity, without distracting thoughts)</span>",

];
const aes_csv = [aes_qns, aes_description];

// FFMQ
const FFMQ_options = ["Never or very rarely true", "Rarely true", "Sometimes true", "Often true", "Very often or always true"];
const FFMQ_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20",
    "Q21", "Q22", "Q23", "Q24", "Q25", "Q26", "Q27", "Q28", "Q29", "Q30",
    "Q31", "Q32", "Q33", "Q34", "Q35", "Q36", "Q37", "Q38",  "Q39",
];
const FFMQ_description = [
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
const FFMQ_csv = [FFMQ_qns, FFMQ_description];

// FADplus
const FADplus_options = ["Totally disagree", "Disagree", "Neither agree nor disagree", "Agree", "Totally agree"];
const FADplus_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20",
    "Q21", "Q22", "Q23", "Q24", "Q25", "Q26", "Q27"
];
const FADplus_description = [
    "Description",
    "I believe that the future has already been determined by fate.",
    "People’s biological makeup determines their talents and personality.",
    "Chance events seem to be the major cause of human history.",
    "People have complete control over the decisions they make.",
    "No matter how hard you try, you can’t change your destiny.",
    "Psychologists and psychiatrists will eventually figure out all human behavior.",
    "No one can predict what will happen in this world.",
    "People must take full responsibility for any bad choices they make.",
    "Fate already has a plan for everyone.",
    "Your genes determine your future.",
    "Life seems unpredictable - just like throwing dice or flipping a coin.",
    "People can overcome any obstacles if they truly want to.",
    "Whatever will be, will be – there’s not much you can do about it.",
    "Science has shown how your past environment created your current intelligence and personality.",
    "People are unpredictable.",
    "Criminals are totally responsible for the bad things they do.",
    "Whether people like it or not, mysterious forces seem to move their lives.",
    "As with other animals, human behavior always follows the laws of nature.",
    "Life is hard to predict because it is almost totally random.",
    "Luck plays a big role in people’s lives.",
    "People have complete free will.",
    "Parents' character will determine the character of their children.",
    "People are always at fault for their bad behavior.",
    "Childhood environment will determine your success as an adult.",
    "What happens to people is a matter of chance.",
    "Strength of mind can always overcome the body's desires.",
    "People’s futures cannot be predicted."
];
const FADplus_csv = [FADplus_qns, FADplus_description];

// PSS
const PSS_options = ["Never", "Almost never", "Sometimes", "Fairly often", "Very often"];
const PSS_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10"
];
const PSS_description = [
    "Description",
    "In the last month, how often have you been upset because of something that happened unexpectedly?",
    "In the last month, how often have you felt that you were unable to control the important things in your life? ",
    "In the last month, how often have you felt nervous and “stressed”?",
    "In the last month, how often have you felt confident about your ability to handle your personal problems?",
    "In the last month, how often have you felt that things were going your way?",
    "In the last month, how often have you found that you could not cope with all the things that you had to do?",
    "In the last month, how often have you been able to control irritations in your life?",
    "In the last month, how often have you felt that you were on top of things?",
    "In the last month, how often have you been angered because of things that were outside of your control?",
    "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?"
];
const PSS_csv = [PSS_qns, PSS_description];

// PANAS
const PANAS_options = ["Very slightly or not at all", "A little", "Moderately", "Quite a bit", "Extremely"];
const PANAS_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20"
];
const PANAS_description = [
    "Description",
    "Interested",
    "Distressed",
    "Excited",
    "Upset",
    "Strong",
    "Guilty",
    "Scared",
    "Hostile",
    "Enthusiastic",
    "Proud",
    "Irritable",
    "Alert",
    "Ashamed",
    "Inspired",
    "Nervous",
    "Determined",
    "Attentive",
    "Jittery",
    "Active",
    "Afraid"
];
const PANAS_csv = [PANAS_qns, PANAS_description];
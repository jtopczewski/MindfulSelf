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
    "In the last week, how often have you been upset because of something that happened unexpectedly?",
    "In the last week, how often have you felt that you were unable to control the important things in your life? ",
    "In the last week, how often have you felt nervous and “stressed”?",
    "In the last week, how often have you felt confident about your ability to handle your personal problems?",
    "In the last week, how often have you felt that things were going your way?",
    "In the last week, how often have you found that you could not cope with all the things that you had to do?",
    "In the last week, how often have you been able to control irritations in your life?",
    "In the last week, how often have you felt that you were on top of things?",
    "In the last week, how often have you been angered because of things that were outside of your control?",
    "In the last week, how often have you felt difficulties were piling up so high that you could not overcome them?"
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

// SMS
const SMS_options = ["Not at all", "Slightly", "Somewhat", "Moderately", "Very well"];
const SMS_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20", "Q21"
];
const SMS_description = [
    "Description",
    "I was aware of different emotions that arose in me.",
    "I tried to pay attention to pleasant and unpleasant sensations.",
    "I found some of my experiences interesting.",
    "I noticed many small details of my experience.",
    "I felt aware of what was happening inside of me.",
    "I noticed pleasant and unpleasant emotions.",
    "I actively explored my experience in the moment.",
    "I clearly physically felt what was going on in my body.",
    "I changed my body posture and paid attention to the physical process of moving.",
    "I felt that I was experiencing the present moment fully.",
    "I noticed pleasant and unpleasant thoughts.",
    "I noticed emotions come and go.",
    "I noticed various sensations caused by my surroundings (e.g., heat, coolness, the wind on my face).",
    "I noticed physical sensations come and go.",
    "I had moments when I felt alert and aware.",
    "I felt closely connected to the present moment.",
    "I noticed thoughts come and go.",
    "I felt in contact with my body.",
    "I was aware of what was going on in my mind.",
    "It was interesting to see the patterns of my thinking.",
    "I noticed some pleasant and unpleasant physical sensations."
];
const SMS_csv = [SMS_qns, SMS_description];

// MAIA-2
const MAIA_options = ["Never", "Almost never", "Sometimes", "Fairly often", "Very often", "Always"];
const MAIA_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20",
    "Q21", "Q22", "Q23", "Q24", "Q25", "Q26", "Q27", "Q28", "Q29", "Q30",
    "Q31", "Q32", "Q33", "Q34", "Q35", "Q36", "Q37"
];
const MAIA_description = [
    "Description",
    "When I am tense I notice where the tension is located in my body.",
    "I notice when I am uncomfortable in my body.",
    "I notice where in my body I am comfortable.",
    "I notice changes in my breathing, such as whether it slows down or speeds up.",
    "I ignore physical tension or discomfort until they become more severe.",
    "I distract myself from sensations of discomfort.",
    "When I feel pain or discomfort, I try to power through it.",
    "I try to ignore pain",
    "I push feelings of discomfort away by focusing on something",
    "When I feel unpleasant body sensations, I occupy myself with something else so I don’t have to feel them.",
    "When I feel physical pain, I become upset.",
    "I start to worry that something is wrong if I feel any discomfort.",
    "I can notice an unpleasant body sensation without worrying about it.",
    "I can stay calm and not worry when I have feelings of discomfort or pain.",
    "When I am in discomfort or pain I can’t get it out of my mind",
    "I can pay attention to my breath without being distracted by things happening around me.",
    "I can maintain awareness of my inner bodily sensations even when there is a lot going on around me.",
    "When I am in conversation with someone, I can pay attention to my posture.",
    "I can return awareness to my body if I am distracted.",
    "I can refocus my attention from thinking to sensing my body.",
    "I can maintain awareness of my whole body even when a part of me is in pain or discomfort.",
    "I am able to consciously focus on my body as a whole.",
    "I notice how my body changes when I am angry.",
    "When something is wrong in my life I can feel it in my body.",
    "I notice that my body feels different after a peaceful experience.",
    "I notice that my breathing becomes free and easy when I feel comfortable.",
    "I notice how my body changes when I feel happy / joyful.",
    "When I feel overwhelmed I can find a calm place inside.",
    "When I bring awareness to my body I feel a sense of calm.",
    "I can use my breath to reduce tension.",
    "When I am caught up in thoughts, I can calm my mind by focusing on my body/breathing.",
    "I listen for information from my body about my emotional state.",
    "When I am upset, I take time to explore how my body feels.",
    "I listen to my body to inform me about what to do.",
    "I am at home in my body.",
    "I feel my body is a safe place.",
    "I trust my body sensations."
];
const MAIA_csv = [MAIA_qns, MAIA_description];

// ADHD
const ADHD_options = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];
const ADHD_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18"
];
const ADHD_description = [
    "Description",
    "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
    "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
    "How often do you have problems remembering appointments or obligations?",
    "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    "How often do you make careless mistakes when you have to work on a boring or difficult project?",
    "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
    "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
    "How often do you misplace or have difficulty finding things at home or at work?",
    "How often are you distracted by activity or noise around you?",
    "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
    "How often do you feel restless or fidgety?",
    "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    "How often do you find yourself talking too much when you are in social situations?",
    "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
    "How often do you have difficulty waiting your turn in situations when turn taking is required?",
    "How often do you interrupt others when they are busy?"
];
const ADHD_csv = [ADHD_qns, ADHD_description];

// Anxiety
const Anxiety_options = ["Never", "Rarely", "Sometimes", "Often", "Always"];
const Anxiety_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08"
];
const Anxiety_description = [
    "Description",
    "I felt fearful",
    "I found it hard to focus on anything other than my anxiety",
    "My worries overwhelmed me",
    "I felt uneasy",
    "I felt nervous",
    "I felt like I needed help for my anxiety",
    "I felt anxious",
    "I felt tense"
];
const Anxiety_csv = [Anxiety_qns, Anxiety_description];

// Depression
const QIDS_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16"
];
const QIDS_description = [
    "Description",
    "Falling Asleep:",
    "Sleep During the Night:",
    "Waking Up Too Early:",
    "Sleeping Too Much:",
    "Feeling Sad:",
    "Decreased Appetite:",
    "Increased Appetite:",
    "Decreased Weight (Within the Last Two Weeks):",
    "Increased Weight (Within the Last Two Weeks):",
    "Concentration/Decision Making:",
    "View of Myself:",
    "Thoughts of Death or Suicide:",
    "General Interest:",
    "Energy Level:",
    "Feeling Slowed Down:",
    "Feeling Restless:"
];
const QIDS_csv = [QIDS_qns, QIDS_description];


// ERQ
const ERQ_options = ["Strongly disagree", "Disagree", "Slightly disagree", "Neutral", "Slightly agree", "Agree", "Strongly agree"];
const ERQ_qns = [
    "Number",
    "Q01", "Q02", "Q03", "Q04", "Q05", "Q06", "Q07", "Q08", "Q09", "Q10"
];
const ERQ_description = [
    "Description",
    "When I want to feel more positive emotion (such as joy or amusement), I change what I’m thinking about.",
    "I keep my emotions to myself.",
    "When I want to feel less negative emotion (such as sadness or anger), I change what I’m thinking about.",
    "When I am feeling positive emotions, I am careful not to express them.",
    "When I’m faced with a stressful situation, I make myself think about it in a way that helps me stay calm.",
    "I control my emotions by not expressing them.",
    "When I want to feel more positive emotion, I change the way I’m thinking about the situation.",
    "I control my emotions by changing the way I think about the situation I’m in.",
    "When I am feeling negative emotions, I make sure not to express them.",
    "When I want to feel less negative emotion, I change the way I’m thinking about the situation.",
];
const ERQ_csv = [ERQ_qns, ERQ_description];

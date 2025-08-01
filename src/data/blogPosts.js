const blogPosts = [
  {
    slug: "who-are-you",
    title: "who are you",
    date: "July 27, 2025",
    excerpt: "I talk abt me.",
    published: true,
    content: `

 I'm John Kim. My Korean name is Dongwhi Kim, but no one calls me that except my parents and relatives. 

## Who are you (professionally)?

I am a senior at the University of Notre Dame, double majoring in CS and applied math. I am thankful to research closely with both [Nuno Moniz](https://www.nunomoniz.co/) and [Meng Jiang](http://www.meng-jiang.com/) on **trustworthy and interpretable AI**, fairness, imbalanced data, graph neural networks, and machine unlearning. Previously, I've founded a venture-backed startup (Atti), interned at AWS building AI agents, and researched trustworthy AI. I graduate in 2026, so I am searching for ~~jobs~~ what I truly want to do. I am 80% sure it is a PhD, but what really drives me is learning + solving hard problems.

As an AI researcher, of course I've read the [bitter lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html). While I agree that methods that leverage compute prevail, and that our minds are irredeemably complex, I disagree that we should entirely avoid encoding our human discoveries into our methods that progress research. In the end, we must have learned something from the process. The prototypes we build and discard are a mark of our progress. 

I am mostly curious about why machines work as they do (interpretable), and how to make them safe (trustworthy). These systems are black-box models, yet they are used by billions of people. As researchers and innovators, I believe we are responsible for the future and the technologies we create.{{ref:1}}

## Who are you (personally)? 

I just like learning.

Corollary: I like reading, solving problems, and building stuff.

I think that's why I gravitate to academia, because it's a lot of reading, but you're learning so much while building solutions to problems that no one else has solved.

I like cooking, dancing (i'm bad), and exploring. I think there is a child-like fascination that still remains in me when uncovering new things, like hiking to find waterfalls, or watching cave crawling videos (i'd never do that).{{ref:2}}

I also like watching kdramas, anime, and movies. My favorite kdrama is Pinocchio (or strong girl bongsoon, or when life gives you tangerines, ~~there's too many~~), favorite anime is 86 (or hxh, or mob psycho!), and movie is maybe Train to Busan. My favorite game is probably Minecraft. I love horror movies and games too.

## Where are you from?

I was born in South Korea, Seoul. I moved to the US a year later. I grew up in New Jersey until 2018. I then moved to China, Shanghai, where I spent my entire high school years. Then I moved back to the US for university. 

I consider myself Korean-American. My Korean is not as good as I want it to be. I grew up everywhere, so I don't know where my physical home is. Instead, I realized home is where your people are (family and friends). Anywhere with them is where home is.

If you ask me where I'm from, I'll say I'm from New Jersey. Sometimes, people will ask more specific questions about New Jersey, like which high school, in which I'll then explain I moved to Shanghai, but can only say around 11 words, and my biggest regret is not learning to speak Mandarin since many of my friends are Chinese.{{ref:3}}

## What is this website?

I made the first version of my website in my 2nd year of university (based off [joseph han's](https://josephhan.io/)). I didn't update it that much, but given that I want to start writing blog posts, sharing updates, and do stuff, I saw fit to rehaul my personal website completely.

### Okay, so why does my website look like this?

My korean name is 김동휘. 김 is my family surname. 동 means “east” in hanja, and 휘 means “star”. So together, my name means “east star” which is a pretty cool name :){{ref:4}}

The theme for the website comes from my name, but I really wanted to go for a minimalistic, academic, yet unique feeling. Especially because many PhD students and professor websites are simple, with content that speaks for itself. 

I hope I nailed a mix of minimalism with flare, but I'm concerned the website looks to flashy.

The inspiration for my website comes from:
- [zen wu](https://zen-wu.social/index.html)
- [aryaman arora](https://aryaman.io/index.html)
- [alex yen](https://www.alexlwyen.com/misc/cooking/) 

`,
    sideComments: [
      {
        id: 1,
        content: "this is the acute techno-social opacity problem. it has two parts: techno-social speaks about how technologies don't live alone, instead living in a dense social context with ourselves. opacity speaks about how technology moves so fast, and is accelerating, so it is harder to see into the future (it is opaque). we need to think about where our technology is moving and how they work, so we can ensure a safe future.",
        position: "ref:1",
        clickable: false
      },
      {
        id: 2,
        content: "one of my core memories is hiking in puerto rico for spring break with my college friends. we went to this hour long trail that leads to a crazy nice waterfall, but we underestimated the time it'd take to get there. so, on our way back, it was night time and pitch black with only our phone flashlights. one of the scariest, reckless, yet coolest things i've done imo.",
        position: "ref:2",
        clickable: false
      },
      {
        id: 3,
        content: "instead i learned french, a continuation from middle school. i wanted to take mandarin, but i started my 1st year of high school 2 months late since we were moving. this meant the class had advanced too far, and i didn't really care at the time. in hindsight, i should've fought back, because why am i learning french when i'm literally in china.",
        position: "ref:3",
        clickable: false
      },
      {
        id: 4,
        content: "from what my family says, my name means east star, but after searching it up, 휘 means brightness, brilliance, or glory. star sort of encompasses all of that. i like it better since east glory sounds weird. tbf, my english name is like the most generic american first name + generic korean last name, which is why i have my korean name for my website.",
        position: "ref:4",
        clickable: false
      },
    ]
  }
];

export default blogPosts;

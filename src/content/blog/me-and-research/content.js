// import { shanghaiCode, idaConference, collegeWork } from './images';

export const metadata = {
  slug: "me-and-research",
  title: "me and research",
  date: "oct 9, 2025",
  time_date: "2025-10-09",
  excerpt: "why i want to do research, college = time to find what you like + don't like, my thoughts on AI now, what I think I want to research on.",
  published: true
};

export const content = `## Introduction

I have reached a point in my life where I have more doors closed than open. 

It's not a bad thing, since the earlier you choose your path, the farther you will be compared to others. But as I look back, I feel that I haven't stuck to a path. I have been a generalist most of my life. I didn't take my first programming class until I entered college, I had no particular passion in high school and chose biochemistry because I was good at it, and I just enjoyed learning stuff. I feel strange considering I just turned 21, and it seemed only yesterday when I had to make the same decision on what major I would choose. 

Now I am graduating college and applying to PhD programs in trustworthy, human-centered AI. 

I still consider myself a generalist, but first…

## What changed? Why research?

The 2022 covid-19 lockdowns in Shanghai kept us quarantined for over six months, dependent on government groceries and constant throat swabs. My high school graduation was hosted online and my final IB exams were cancelled, but it afforded me a lot of time to explore computer science. I liked the idea of really building something from the ground up, and as technology continued to shape the world, I wanted to know what the big deal about coding was. So, I self-taught myself through Harvard's CS50, assignments from a university curriculum that my friend sent me, and projects. At the end of the summer, I built a Korean drama NLP (natural language processing) recommendation system, which I used to recommend dramas for my family to watch. Really, the only NLP part was [tf-idf](https://medium.com/codex/how-to-generate-recommendations-using-tf-idf-52d46eca606f) which is just a statistical method to measure a word's importance in a document with a collection of documents, but enabled me to recommend dramas. 

As the summer was ending and college would start soon, I emailed a program director at the [Lucy Family Institute for Data and Society](https://lucyinstitute.nd.edu/) (at Notre Dame), where I then connected with [Professor Nuno Moniz](https://www.nunomoniz.co/). To be honest, as a freshman I didn't know what I wanted to research specifically, just broadly things that help people. I did a few projects here and there with grid search and imbalanced data in cancer classification tasks, but my first real project was to provide algorithmic recourses in regression settings where most previous work purely focused on classification. I think the reason for this is because it is easier to minimize a cost function with some decision boundary to cross, but regression tasks are more difficult with how the range is continuous. It was important because our work can be extended to high-stakes decision making domains like healthcare, loan denials, and criminal justice to provide marginalized communities explanations and steps to overturn decisions.

Although that sounds fancy, in truth, this project was a lot of exploring and looking stuff up, fixing errors, and self-doubting myself. I was a sophomore but had not taken a single AI course at this point and wouldn't until junior year{{ref:1}}, but I learned a lot about taking an idea to execution end-to-end, documenting your work, and how to write a research paper. This cumulated into a [1st-author paper](https://link.springer.com/chapter/10.1007/978-3-031-91398-3_33) accepted at [IDA 2025](https://ida2025.org/). At this time, it was satisfying [solving hard, important problems](https://www.benkuhn.net/hard/). 

Since then, I have worked on more projects with multimodal contextual safety (looking to submit to ACL 2026), machine unlearning which is how we can strip dangerous information from a model without fully retraining it (poster presentation at RISE AI conference), and research tools for fact-checking. I have grown a lot since then, and I feel more passionate about working on these problems compared to the rest of what I've done. 


## What about a career that isn't research?

I believe college is the time where you can fail safely, and it is just as important to find the things that you don't like than the things you do. I worked as a lead software engineer at a student startup, then went on to launch my own venture-backed startup with my roommate (Atti), as well as interning as a data analyst at Humana and then a software engineer at Amazon. Those are three entirely different paths—academia, industry, startup. But those experiences informed me of what I did and didn't like. I didn't particularly enjoy my time at industry because I couldn't choose the problems I worked on, my part felt small, and I didn't feel particularly motivated by the products I worked on. Yes, there were hard problems, but the impact wasn't there for me. As for startups, it is an interesting experience. The problems are incredibly hard, the impact is good because you're literally changing the world if you make it, and if you start your company you can sort of choose what problem you want to solve.

Overall though, I had a more positive experience with research, and a lot of mentorship from my two advisors who shaped much of how I think about academia. A good analogy that changed my view is that being a professor is much like being the CEO of your startup. You manage students to carry out crazy cool projects, write grant proposals to get funding much like startups with VCs, and doing genuinely important work by teaching students and literally shaping the future of technology. Plus, you can relatively choose your work life balance compared to startups that consume your life. I don't think there was a single turning point that convinced me about research, but continuously being challenged to solve problems no one else has and witnessing my work positively impact my community and world slowly convinced me. 

## Didn't you say you were a generalist?
I still feel like one because I've tried my hand at so many things. Dashboards, agentic workflows, cloud infrastructure, backend systems, pitching to VCs, open-source contributions, even a graduate embedded systems course right now. Each time something caught my interest, I'd dive in. The upside? I learned a lot on what I actually care about. The downside? I never went deep enough in any single area to feel like an expert. I have the most depth in AI and research, but I'm still figuring things out. 

## Simple thoughts on AI.

So, what have the last three years of working with AI taught me? AI at its core is an optimization problem. We minimize loss functions, beat benchmarks, and then generate new ones like "humanity's last exam". And that is the strength of machine learning. The [train-test paradigm](https://www.argmin.net/p/just-when-i-thought-i-was-out) allows us to incrementally improve metrics on the tasks we want to accomplish.

Our technology is amazing, but I worry that we are viewing humans more as datapoints than humans themselves. People are reduced to demographic patterns, their browsing history, credit score, and more. We build systems that unknowingly encode historical biases and perpetuate discrimination at scale.{{ref:2}}

## On trustworthy, human-centered AI.

That is why I believe we need to be thinking about safety and trustworthiness from the start. Even if you try to actively avoid using AI, you will be indirectly affected by it. Regardless of the goal of your system, whether that be an agent to handle customer service calls or to parse documents, we need to begin with responsibility. By putting humans first and thinking about the end-user, we can create fairer, more powerful technology to empower humanity. In that way we fix how we view humans, but also ensure we continue to build to better humanity rather than to keep chasing leaderboards.

I believe this is an important problem, I'm motivated to solve it, and the downstream applications are huge. But also, I am young, started research only three years ago, and took my first actual AI class last year (followed by two AI graduate courses now :) ). My [research taste](https://www.cs.virginia.edu/~robins/YouAndYourResearch.html) is not refined, and there is still so much I want to explore. I think there are many important problems, not just trustworthy AI, but it is the one I have worked on the most, and continue feeling the most motivated for. 

## My thoughts on the future of AI.

A paradigm shift to generative computing/AI programs. I have noticed a trend where we are realizing LLMs are another abstraction. We can specify what we want, instead of worrying about how. At one point, we will be writing pure functional code with explicit if/else statement and control flows, but also AI code where we pass in structured inputs and outputs, since neural networks are function approximators. We will move away from "prompt engineering", which isn't really true engineering because it feels more like guess and check, towards a better way to interact with these models. Not sure exactly what that will be yet. But these are my humble thoughts after talking and listening to people smarter than me.{{ref:3}}
`;


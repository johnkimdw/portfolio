const blogPosts = [
  {
    slug: "who-are-you",
    title: "who are you",
    date: "July 27, 2025",
    time_date: "2025-07-27",
    excerpt: "i talk abt me.",
    published: true,
    content: `

 I am John Kim. My Korean name is Dongwhi Kim, but no one calls me that except my parents and relatives. 

## Who are you (professionally)?

I am a senior at the University of Notre Dame, double majoring in CS and applied math. I am thankful to research closely with both [Nuno Moniz](https://www.nunomoniz.co/) and [Meng Jiang](http://www.meng-jiang.com/) on **trustworthy and interpretability AI**, fairness, imbalanced data, graph neural networks, and machine unlearning. Previously, I've founded a venture-backed startup (Atti), interned at AWS building AI agents, and researched trustworthy AI. I graduate in 2026, so I am searching for ~~jobs~~ what I truly want to do. I am 80% sure it is a PhD, but what really drives me is learning + solving hard problems.

As an AI researcher, of course I've read the [bitter lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html). While I agree that methods that leverage compute prevail, and that our minds are irredeemably complex, I disagree that we should entirely avoid encoding our human discoveries into our methods that progress research. In the end, we must have learned something from the process. The prototypes we build and discard are a mark of our progress. 

I am mostly curious about why machines work as they do (interpretable), and how to make them safe (trustworthy). These systems are black-box models, yet they are used by billions of people. As researchers and innovators, I believe we are responsible for the future and the technologies we create.{{ref:1}}

## Who are you (personally)? 

I just like learning.

Corollary: I like reading, solving problems, and building cool stuff.

I think that's why I gravitate to academia, because it's a lot of reading, but you're learning so much while solving problems that no one else has solved.

I like cooking, dancing (bad), and exploring. I think there is a child-like fascination that still remains in me when uncovering new things, like hiking to find waterfalls, or watching cave crawling videos (I'd never do that).{{ref:2}}

I also like watching kdramas, anime, and movies. My favorite kdrama is Pinocchio (or strong girl bongsoon), favorite anime is 86, and movie is maybe Train to Busan. My favorite game is probably Minecraft. I love horror movies and games too.

## Where are you from?

I was born in South Korea, Seoul. I moved to the US a year later. I grew up in New Jersey until 2018. I then moved to China, Shanghai, where I spent my entire high school years. Then I moved back to the US for university. 

I consider myself Korean-American. My Korean is not as good as I want it to be. I grew up everywhere, so I don't know where my physical home is. Instead, I realized home is where your people are (family and friends). Anywhere with them is where home is.

If you ask me where I'm from, I'll say I'm from New Jersey. Sometimes, people will ask more specific question about New Jersey, like which high school, in which I'll then explain I moved to Shanghai, but can only say 11 words, and my biggest regret is not learning to speak Mandarin since many of my friends are Chinese.{{ref:3}}

## What is this website?

I made the first version of my website in my 2nd year in university (based off [joseph han's](https://josephhan.io/)). I didn't update it that much, but given that I want to start writing blog posts, share my updates, and brand myself, I saw fit to rehaul my personal website completely.

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
  },
  {
    slug: "aws-internship-2025",
    title: "my summer internship @ aws (sagemaker)",
    date: "aug 11, 2025",
    time_date: "2025-08-11",
    excerpt: "what i did, what i learned, and what i think abt aws.",
    published: true,
    content: `

## Introduction

> **Disclaimer:** I signed an NDA which prevents me from talking too in-depth about what I did at AWS, but I will try to be as transparent as possible.

  <img src="/images/aws-pics/day1-aws-min.jpg" alt="AWS 
  Hackathon" style="width: 100%; max-width: 600px; height: 300px;
   object-fit: cover; object-position: center;" />

This summer, I was an AI/ML SDE intern at AWS on the SageMaker Unified Studio (prev. DataZone) team. This was 12 weeks, ~$10k per month, with ~$7k housing stipend in the bay area. I was referred to the role, but I also applied to around 200 internships. I received an offer from Capital One, and received interviews with Robinhood (final), Belvedere Trading (didn't do), and PWC (didn't do).

I'll talk about what it's like to work at AWS, my role/team, my project, agentic concepts, stuff I did outside of work, and my final thoughts :)

### Wait, but aren't you applying to PhD programs in the fall?

Yup. I've been exploring and I just like building/learning. That's why I can say I know I want to do research. In another post I will write (probably this year), I will go more in-depth. But tldr, research ≠ only publish papers, it means picking + working on a meaningful problem where you want to build your research story (e.g. long-term project) that will benefit the community and downstream users (e.g. open-source!).{{ref:1}}

I applied because I wanted to see how big tech uses AI + build production-grade services. I also believe that being a good coder lends to being a good researcher.{{ref:2}}

## What was it like to work at AWS?

In general, this is influenced by two factors: AWS culture, and your team's culture.

The company culture is embodied by their [leadership principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles) which drives the decisions you make, and even the promotions you get. Amazon uses these leadership principles to determine who they hire (in their interviews) and who they promote (in their evaluations). In my interview for my internship, this was tested through the behavioral portion, and through my internship, this was graded in my midterm/final evaluations. And I can tell how customer obsessed (one of their LPs) Amazon is when I learned from an AMA with senior leadership that most services/features Amazon work on are due to their customers wanting them. 

For teams, I know people who worked overtime and others who breezed through their internship. The biggest discriminator though is your manager. If your manager gives you a hard time, you're going to end up working a lot. If he's more chill, then it'll be a relatively easy summer. For me, my manager was understanding but he also moved fast as he previously worked at a startup. I think I ended up working the normal 9-5, but in the last few weeks definitely worked overtime so I could finish my project. We pivoted a lot, and that meant we'd work from scratch again, but I enjoyed moving fast and learning new tech. Also, our team culture was welcoming, and we would have occasional happy hours, plus we had a launch party for a sister organization. But if I interned in this team last summer, it would've been more hectic since our service released last year (for general access?).

Regardless, you will learn a lot at Amazon. You will likely work closely with many AWS services, provisioning cloud resources (AWS CDK), and learning how each service works with each other. You will also learn more Amazon-specific things like their version of github, package management, and more. I also think most interns will learn good coding practices as their code is reviewed by seniors engineers.

## Okay, so what is an AI/ML SDE (my role)?

We build applied AI software like AI agents, AI infrastructure, and more. It's the same as an SDE where we design, build, and implement software, but we work closer with AI. But we don't train, fine-tune, or build any models (that's more research).

## What is SageMaker Unified Studio (SMUS)?
![SMUS Overview](/images/aws-pics/smus-arch.jpg)

The team I worked on! I believe our service ([SageMaker Unified Studio](https://aws.amazon.com/sagemaker/unified-studio/)) is similar to Databricks or Snowflake. We are a data governance platform, allowing admins to oversee an organization's data assets, projects, and permissions of its users. We unify access to data from all over the place (AWS, on premises, or third party sources) into a data catalog where engineers can analyze their data.

## What did I work on?

- Built MCP servers
- Built enterprise-scaled AI agents
- Cloud infrastructure 

My project changed several times throughout my internship, but I mostly worked on building an AI admin agent that serves IT admins (SMUS users) and the cloud infrastructure to automate their deployment, ensure their security, and be scalable.

### So, what is this admin agent?

#### Problem

SMUS is complex to use with admins having to manage their domains, data assets, and projects. Launching a domain means navigating through IAM policies, domain-unit hierarchies, and cross-account role mappings before the first data analyst can even catalog an asset.

For new admins, learning to use SMUS is complex. For experienced admins, using SMUS is time-consuming = delayed time-to-value.

#### Solution

Admin AI agent that lets IT admins declare what they want, instead of specifying exactly how to get that (declarative!). We abstract the process so that new admins use SMUS with best practices, quickly, and securely. This also means experienced IT admins can move exponentially quicker.

#### Examples

- "Can you create a new retail domain, with this role as the owner?"
- "How can I make a new data analytics project under domain x for our data analysts?"
- "Why is user x not able to access this data asset?"

#### What does an AI agent like that need?

Some integral features were: able to answer questions about SMUS, use [SMUS APIs](https://docs.aws.amazon.com/datazone/latest/APIReference/Welcome.html), best practices/SOPs, persistent memory, and highly scalable/available/secure.

Without going into the specific designs, I instead want to show the type of questions I'd face.

A general system design question is where to host your application? For AWS, maybe you're thinking about using [Lambda](https://aws.amazon.com/lambda/), or with a docker image with [ECS/Fargate](https://aws.amazon.com/ecs/), or maybe with [EKS](https://aws.amazon.com/eks/)? Lambda is simple, but since behind the scenes each Lambda function is within its own [VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html), if we host our servers and agents as separate functions, we'd need to deliberately make a hole in our wall (peering) so that each service can talk to each other, making it less secure. Similar tradeoffs for the other two.

As a result, I learned that with cloud solutions, there is no "true" right answer, only pros and cons. There are multiple ways to do something, and each comes with their weaknesses which you need to weigh.

Another is choosing the agentic framework. There are many out there and two I worked closest with are [LangGraph](https://langchain-ai.github.io/langgraph/concepts/why-langgraph/) and [DSPy](https://dspy.ai/). LangGraph has more support and abstractions available, such as human-in-the-loop, checkpointed states, and managed memory. However, DSPy gives more flexibility to the developers, defining your programs with structured modules and signatures. I really wanted to dive into finding a way to use DSPy's optimizers for my agent (and others) as accuracy is huge for my usecase, but in the end, we used LangGraph because we needed to move fast, and LangGraph had more prebuilt for us.

## How can you build an AI agent?

Here I'll go into what MCP, LangGraph, memory, and human-in-the-loop are, which I believe are the basics you need to know to build a stateful agent.

### Model Context Protocol (MCP)

I heard about MCP before my internship, but never learned or built with it until I started at AWS. 

#### What is [MCP](https://modelcontextprotocol.io/docs/getting-started/intro)?
- Open protocol that standardizes how apps provide context to LLMs
- Basically, an API wrapper.

#### Why do we need MCP?
- The model is only as good as context, so we need to teach the model how to call APIs.

#### Who uses MCP?
- The LM (language model) = client
- APIs (tools) = server

#### How did I use MCP?
I built MCP servers for some of AWS services like Glue. For the AI agent, we used MCP for the agent to know how to call SMUS APIs. Another intern made an open-source SMUS (DataZone) [MCP server](https://github.com/awslabs/amazon-datazone-mcp-server), which I used (configured as a FastAPI server), and then I created the client and adapted the MCP tools into LangChain tools so that the agent can call them. This gave the agent the ability to use SMUS!

### LangGraph

#### What is LangGraph?
- Orchestration framework: control the flow + how the AI agent uses state + passes through stages
- Build, manage, deploy complex, persistent, stateful agents (loops, graph)

#### What is an agent?
- 3 things: LLM + Tools + Prompt

#### What are the building blocks of LangGraph?
- State: History/memory of the model
- Nodes: state → function → updated state (python function that does stuff + returns a change in state, like an LLM call, complete agent, or even a compiled LangGraph)
- Edges: either normal (absolute path from first to last node) or conditional (deterministic decision logic to determine next node)

#### How did I use LangGraph?
- Used ReAct prebuilt agent, which means the agent thinks (re) then executes tools (act)
- Created MCP client with LangGraph to use the MCP tools and added memory + RAG + more

### Memory



In LangGraph ([langmem](https://langchain-ai.github.io/langmem/concepts/conceptual_guide/)), we can categorize memory into three types:

![Langmem table from their website](/images/aws-pics/lg-mem-table.png)

#### Semantic memory:
- Important facts (e.g. stuff you learned in textbooks)
- This can be stored as a schema (hashmap) or collection (unbounded)

#### Episodic memory:
- Experiences that help the agent remember how to do tasks
- Usually few shot examples

#### Procedural memory:
- Rules for agent to follow
- System prompt (dynamic)

And two types of memory creation:

![Langmem image from their website](/images/aws-pics/hot_path_vs_background_langmem.png)

#### Hot path:
- Store memory right after a message
- Memory becomes immediately available, but with higher latency

#### Background:
- Store memory in between conversations
- Lower latency, but memory may not be available (cross-session)

These types of memory are pretty easy to add to your agent with LangGraph. For hot path, adding create/update/search memory tools let the agent manage memory. With this addition, our agent remembers the active domains, current tasks, and preferences about the IT admins across sessions.

### Human-in-the-loop

When you want to restrict or monitor your agent's actions, use human-in-the-loop (add human oversight). Whenever it does something, you can have it ask the user to approve, deny, or edit what it is doing. This is especially useful for tool calling, where it might be deleting resources or calling a tool wrong.

This is also not too difficult to add, but makes streaming and handling user inputs more difficult because you need to identify when the user wants to ask a question to the agent or give an approval.

With LangGraph, you can wrap any tool to ask for permission before use. This happens with:
- **Interrupts:** pause graph execution + surfaces query to client
- **Command:** how we pass the decision to the paused graph

Now your agent needs to ask you to run \`alias ls="sudo rm -rf /*"\` before running it :)

## Besides projects, did you do anything else?

  <img src="/images/aws-pics/hacking-aws-min.JPG" alt="AWS 
  Hackathon" style="width: 100%; max-width: 600px; height: 300px;
   object-fit: cover; object-position: center;" />



Yup! I hosted an intern hackathon in the bay area with 200 signups!

The problem was there were no events for interns, meanwhile Seattle had so much. So, I thought I'd make an event for interns to meet each other + build cool projects!

What happened was:
- Emailed Andy Jassy, AUTA (university talent acquisition), my org, and others for funding, support, and merch
- Assembled a team with two other interns

**Results:**
- 150+ merch like shirts for free
- $3k+ in funding for catering and prizes
- 8 wonderful judges
- Empty 4 story Amazon building

Within 4 weeks of planning!

### My final thoughts

Would I recommend other people to intern at AWS?

Yes. You learn a lot, meet smart people, and get paid pretty well. But, it really depends on what you want to do. I noticed that because AWS is so customer-obsessed, it lags a bit behind innovation. They prioritize being reliable rather than pushing boundaries. That doesn't mean that they don't innovate, it just feels more like catchup. I doubt this is just an AWS issue, but big tech in general. This is also good too because they can release products they are proud of, that satisfy their customers, rather than rushing.

Would I do it again?

~~Maybe.~~ I think I would have liked to work on the more AI side of things, rather than the software. If I was in a different team that let me do that (e.g. work on inference, model customization, etc.) I would. I do appreciate software, and I believe that what I learned here will be very useful, but honestly more research experience would be better for going into a PhD (which I am doing).

**Result on RO:**
TBD...

`,
    sideComments: [
      {
        id: 1,
        content: "Click here for a good blog on this!",
        position: "ref:1",
        clickable: true,
        link: "https://github.com/okhat/blog/blob/main/2024.09.impact.md#1-invest-in-projects-not-papers"
      },
      {
        id: 2,
        content: "You learn to better articulate problems, design systems, work with customers, understand why you're doing things the way you are, and learn + move fast while the industry keeps pushing forward.",
        position: "ref:2",
        clickable: false
      },
      
    ]
  }
];

export default blogPosts;
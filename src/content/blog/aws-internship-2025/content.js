import { day1AWS, smusArch, lgMemTable, hotPathVsBackground, hackingAWS } from './images';

export const metadata = {
  slug: "aws-internship-2025",
  title: "my summer internship @ aws (sagemaker)",
  date: "aug 11, 2025",
  time_date: "2025-08-11",
  excerpt: "what i did, what i learned, and what i think abt aws.",
  published: true
};

export const content = `## Introduction

> **Disclaimer:** I signed an NDA so I can't share everything I did at AWS, but I will try to be as transparent as possible.

<img src="${day1AWS}" alt="AWS Day 1" style="width: 100%; max-width: 600px; height: 300px; object-fit: cover; object-position: center;" />

This summer, I was an AI/ML SDE intern at AWS on the SageMaker Unified Studio (prev. DataZone) team. This was 12 weeks, ~$10k per month, with ~$7k housing stipend in the bay area. I was referred to the role, but I also applied to around 200 internships. I received an offer from Capital One, and received interviews with Robinhood (final), Belvedere Trading (didn't do), and PWC (didn't do).

I'll talk about what it's like to work at AWS, my role/team, my project, agentic concepts, stuff I did outside of work, and my final thoughts :)

### Wait, but aren't you applying to PhD programs in the fall?

Yup. I've been exploring and I just like building/learning. That's why I can say I know I want to do research. In another post I will write (probably this year), I will go more in-depth. But tldr, research ≠ only publish papers, it means picking + working on a meaningful problem where you want to build your research story (e.g. long-term project) that will benefit the community and downstream users (e.g. open-source!).{{ref:1}}

I applied because I wanted to see how big tech uses AI + build production-grade services. I also believe that being a good coder lends to being a good researcher.{{ref:2}}

## What was it like to work at AWS?

In general, this is influenced by two factors: AWS culture, and your team's culture.

The company culture is embodied by their [leadership principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles) which drives the decisions you make, and even the promotions you get. Amazon uses these leadership principles to determine who they hire (in their interviews) and who they promote (in their evaluations). In my interview for my internship, this was tested through the behavioral portion, and through my internship, this was graded in my midterm/final evaluations. And I can tell how customer obsessed (one of their LPs) Amazon is when I learned from an AMA with senior leadership that most services/features Amazon work on are due to their customers wanting them. 

For teams, I know people who worked overtime and others who breezed through their internship. The biggest discriminator though is your manager. If your manager gives you a hard time, you're going to end up working a lot. If he's more chill, then it'll be a relatively easy summer. For me, my manager was understanding but he also moved fast as he previously worked at a startup. I think I ended up working the normal 9-5, but in the last few weeks definitely worked more so I could finish my project. We pivoted a lot, and that meant we'd work from scratch again, but I enjoyed moving fast and learning new tech. Beyond just my team, my org/service was welcoming. We would have occasional happy hours, plus we had a launch party for a sister organization. Another factor into your workload is the timeline you join Amazon. At the end of the year, the team works more because of Re:Invent, but in the summer it is more relaxed. It also depends on if any other major events are happening for your service. For example, if I interned in this team last summer, it would've been more hectic since were pushing to be released last year for general access I believe.

Regardless, you will learn a lot at Amazon. You will likely work closely with many AWS services, provisioning cloud resources (AWS CDK), and learning how each service works with each other. You will also learn more Amazon-specific things like their version of github, package management, and more. I also think most interns will learn good coding practices as their code is reviewed by seniors engineers.

## Okay, so what is an AI/ML SDE (my role)?

We build applied AI software like AI agents, AI infrastructure, and more. It's the same as an SDE where we design, build, and implement software, but we work closer with AI. But we don't train, fine-tune, or build any models (that's more research).

## What is SageMaker Unified Studio (SMUS)?
<img src="${smusArch}" alt="SMUS Overview" style="width: 100%; height: auto;" />

The team I worked on! I believe our service ([SageMaker Unified Studio](https://aws.amazon.com/sagemaker/unified-studio/)) is similar to [Databricks](https://www.databricks.com/) and [Snowflake](https://www.snowflake.com/en/). We are a data governance platform, allowing admins to oversee an organization's data assets, projects, and permissions of its users. We unify access to data from all over the place (AWS, on premises, or third party sources) into a data catalog where engineers can analyze their data.

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
I built MCP servers for some of AWS services. For the AI agent, we used MCP for the agent to know how to call SMUS APIs. Another intern made an open-source SMUS (DataZone) [MCP server](https://github.com/awslabs/amazon-datazone-mcp-server), which I used (configured as a FastAPI server), and then I created the client and adapted the MCP tools into LangChain tools so that the agent can call them. This gave the agent the ability to use SMUS!

### LangGraph

Okay, so our agent can call tools (APIs) for us. Now, how do we even make the agent? That is where LangGraph comes in.

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

We now have our agent! But now I want it to remember the user across sessions. How can I do that?

For example, if I'm working on a project, I don't want the agent to forget what I'm working on after I stop using it. I also want it to remember notes about me like my AWS region, domains, and more. This can be solved using LangGraph's memory library ([langmem](https://langchain-ai.github.io/langmem/concepts/conceptual_guide/)). 

But what is memory? We can categorize memory into three types:

<img src="${lgMemTable}" alt="Langmem table from their website" style="width: 100%; height: auto;" />

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

<img src="${hotPathVsBackground}" alt="Langmem image from their website" style="width: 100%; height: auto;" />

#### Hot path:
- Store memory right after a message
- Memory becomes immediately available, but with higher latency

#### Background:
- Store memory in between conversations
- Lower latency, but memory may not be available (cross-session)

These types of memory are pretty easy to add to your agent with LangGraph. For hot path, adding create/update/search memory tools let the agent manage memory. By using a mix of these memory types, each with their own storage method, we can add memory to our agent. This will create an agent to remember facts about the user, how to do certain skills, and evolve with usage. 

### Human-in-the-loop

So this agent can use tools, remember me, and answer my questions! But what if it harms me? Like dropping my database...

When you want to restrict or monitor your agent's actions, use human-in-the-loop (add human oversight). Whenever it acts, you can restrict it to ask the user to approve, deny, or edit what it is doing. This is especially useful for tool calling, where it might be deleting resources or calling a tool wrong.

This is also not too difficult to add, but makes streaming and handling user inputs more difficult because you need to identify when the user wants to ask a question to the agent or give an approval.

With LangGraph, you can wrap any tool to ask for permission before use. This happens with:
- **Interrupts:** pause graph execution + surfaces query to client
- **Command:** how we pass the decision to the paused graph

Now your agent needs to ask you to run \`alias ls="sudo rm -rf /*"\` before running it :)

## Besides projects, did you do anything else?

<img src="${hackingAWS}" alt="AWS Hackathon" style="width: 100%; max-width: 600px; height: 300px; object-fit: cover; object-position: center;" />

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

~~Maybe.~~ I think if I went back in time, I would still do this internship. The work is interesting, and it's a good mix between software engineering and AI. The only thing I would prefer is working on the research side of things rather than engineering because I find things like model customization, interpretability, and other areas really interesting. It would also help more in PhD apps :)

**Result on RO:**
TBD...`;
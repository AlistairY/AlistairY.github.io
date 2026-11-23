/* Website copy and research content. English only. */
window.SITE_CONTENT = {
  "ui": {
    "skip": "Skip to content",
    "navAbout": "About",
    "navResearch": "Research",
    "navProjects": "Selected work",
    "navNotes": "Blog",
    "eyebrow": "MACHINE LEARNING & PHYSICS",
    "heroDescription": "How neural networks learn structure,<br>and when that structure generalizes.",
    "heroResearch": "Research interests",
    "heroWork": "Explore selected work",
    "orbitAlt": "Phase-space trajectories around a shared centre, illustrating structure across experiences",
    "orbitCaption": "Representations, dynamics & memory",
    "aboutTitle": "About Me",
    "aboutAside": "",
    "about1": "I’m Leqian Yang, an undergraduate at the University of Science and Technology of China (USTC), studying artificial intelligence and physics. I am advised by <a href=\"https://kindxiaoming.github.io/\" target=\"_blank\" rel=\"noopener\">Ziming Liu</a> at Tsinghua University and <a href=\"https://www.mit.edu/~ziyinl/\" target=\"_blank\" rel=\"noopener\">Liu Ziyin</a> at MIT.",
    "about2": "I’m interested in making sense of how AI learns. My research centers on <strong>learning dynamics and interpretability</strong>: how representations and behaviors emerge during training, and what mechanisms can explain them. I’m especially drawn to complex learning phenomena that might admit a simple, testable explanation, and I enjoy exploring them through theoretical analysis and controlled experiments. My current work approaches these questions through diffusion models and physical world models, representation geometry, and the relationship between data structure and generalization.",
    "questionLabel": "A continuing research question",
    "question": "In what form does learned structure persist, and what makes it available for reuse?",
    "researchTitle": "Research interests",
    "researchAside": "",
    "thread1": "Experience",
    "thread2": "Representation",
    "thread3": "New situations",
    "projectsTitle": "Selected work",
    "projectsAside": "",
    "filterAll": "All",
    "filterWorld": "World models",
    "filterLearning": "Learning",
    "filterPhysics": "Physics & computing",
    "notesTitle": "Blog",
    "notesAside": "",
    "notesIntro": "",
    "footer": "Learning dynamics & AI interpretability",
    "backTop": "Back to top",
    "close": "Close",
    "read": "Research overview",
    "status": "Research project",
    "detailLabel": "Research overview",
    "questionHeading": "Starting point",
    "approachHeading": "Experimental approach",
    "evidenceHeading": "What we have learned",
    "boundaryHeading": "Open questions",
    "figureHeading": "Experiment figure",
    "noteLabel": "Research note",
    "showProjects": "Related projects",
    "about3": "I also work on memory in physical systems and the computational methods used to predict them, including thermalization in perturbed Toda chains and learnable operators under finite compute budgets. Simple systems make it possible to turn a broad intuition into a sequence of tractable questions, and to see precisely which part of an explanation the evidence supports.",
    "profileRole": "Undergraduate",
    "profileMajor": "Artificial Intelligence & Physics",
    "profileUniversity": "University of Science and Technology of China",
    "profileEmail": "Get in touch",
    "copyEmail": "Copy email",
    "copiedEmail": "Email copied",
    "copyFallback": "Please use the address shown above",
    "welcome": "I’m always happy to exchange ideas with people who share these interests, whether about ongoing research, a puzzling observation, or a possible collaboration. Feel free to get in touch.",
    "hobbies": "Outside of research, I enjoy cooking, puzzle hunts, running, and badminton.",
    "blogPlaceholder": "Coming soon",
    "blogDescription": "A place for research notes and other writing.",
    "filterResearch": "AI research"
  },
  "areas": [
    {
      "label": "REPRESENTATIONS & GEOMETRY",
      "title": "Representations & geometry",
      "text": "How knowledge is organized inside a network, and how representation geometry reflects the learning process and shapes model behavior.",
      "filter": "learning"
    },
    {
      "label": "LEARNING DYNAMICS",
      "title": "Learning dynamics",
      "text": "Tracing how representations and behaviors develop during training, and seeking mechanisms that explain learning phenomena and can be tested experimentally.",
      "filter": "learning"
    },
    {
      "label": "PHYSICAL WORLD MODELS",
      "title": "Physical world models",
      "text": "Using diffusion models and video prediction to study how models acquire, represent, and use knowledge of physical systems.",
      "filter": "world"
    },
    {
      "label": "LEARNING & GENERALIZATION",
      "title": "Learning & generalization",
      "text": "What do models learn from data, and how does that knowledge carry to new situations? I study the connections between data structure, learning, and generalization.",
      "filter": "learning"
    }
  ],
  "projects": [
    {
      "id": "world-models",
      "category": "world",
      "image": "causal-writability-figure1.png",
      "meta": "VIDEO MODELS · CAUSAL INTERVENTIONS",
      "title": "A Chosen Future Can Still Be Rewritten: Causal Writability in Video Models",
      "description": "When a video model predicts the wrong motion, has it failed to learn the physics—or failed to use what it knows? We find that a small internal intervention can recover correct motion even after the model has chosen an incorrect future.",
      "question": "A wrong prediction does not necessarily mean that physical knowledge is absent. We ask whether correct motion remains available inside a video model, and whether intervening on that information can change the generated future.",
      "approach": "We train video models on color–motion correlations, then present conflicting evidence: a red mass whose observed motion is fast rather than slow. Low-dimensional edits derived from physical variables test where internal motion information can still control the output.",
      "evidence": "Correct motion can be restored through internal edits. At a fixed intervention strength, effectiveness closes sharply across network depth, although stronger downstream edits can still recover physical motion. Early writability also distinguishes errors that training later corrects from those that persist. The phenomenon is reproduced in a pretrained 1.3B video model.",
      "boundary": "The effect depends on intervention location and strength. Recovering correct motion in these settings does not by itself establish a general understanding of physics.",
      "caption": "Figure 1 from the paper: appearance–motion conflicts, an internal edit that restores physical motion, and the depth boundary for a fixed-strength intervention.",
      "status": "ICLR 2027 submission",
      "links": [
        {
          "label": "arXiv",
          "url": "https://arxiv.org/abs/2609.15980"
        },
        {
          "label": "PDF",
          "url": "https://arxiv.org/pdf/2609.15980"
        }
      ],
      "paperFigure": true
    },
    {
      "id": "learning-dynamics",
      "category": "learning",
      "image": "dynamics.svg",
      "meta": "LEARNING DYNAMICS · REPRESENTATION GEOMETRY",
      "title": "EoS–PRH: learning dynamics & representation alignment",
      "description": "Two networks can solve the same task while preserving different internal geometries. Deep linear networks let me trace the roles of initialization, learning rate, and training noise.",
      "question": "Independently trained networks sometimes develop similar representations, but task error alone does not determine that similarity. Initial geometry can persist after fitting, while stochastic training can continue to separate replicas. The challenge is to explain when each factor matters.",
      "approach": "Starting with embedded deep linear networks, I describe output-relevant and geometric quantities through Gram states and model their finite-step evolution. Experiments track task error and CKA together, then test trajectory predictions by changing layerwise learning rates, shared versus independent minibatches, and training history.",
      "evidence": "Within the tested configurations, one distributional model connects slowly decaying initial-state memory at low rates, stronger alignment at intermediate rates, and differences maintained by relative fluctuations at higher rates. History interventions also distinguish differences already present across replicas from fluctuations occurring now.",
      "boundary": "The current predictions depend on the studied networks and data. Open problems include long-time behavior with anisotropic data at general finite step sizes, and extensions to deeper or nonlinear networks. Trajectory validation does not yet establish a global common attractor.",
      "figure": "learning-trajectories.png",
      "caption": "Original experiment figure: training trajectories and late-time geometry under different learning-rate configurations. Curves connect saved checkpoints; task and projection conventions are noted within the figure."
    },
    {
      "id": "structance",
      "category": "learning",
      "image": "structure.svg",
      "meta": "REPRESENTATIONS · PREDICTIVE REGULARITY",
      "title": "Structure in Data",
      "description": "A shared rule can keep helping as a dataset grows. I study the growth of that predictive benefit and its relationship to performance on new problems.",
      "question": "A small model can memorize a small set of arbitrary labels, or learn a rule shared by many examples. As the training set grows, how do those possibilities differ? Can the growth of cumulative prediction gain reveal the use of shared regularity?",
      "approach": "I express prediction gain as bits saved relative to uniform guessing and measure its slope against dataset size. Experiments begin with rules whose information content is known, then extend to modular addition and language, varying architecture, training protocol, input order, and held-out syntactic combinations.",
      "evidence": "Controlled calibrations show slope changes that track the information supplied by known rules. Further comparisons complicate the picture: a higher modular-addition training slope can accompany worse rule-based test accuracy, and similar language-training gains can accompany different transfer behavior.",
      "boundary": "The useful question is now when the slope admits a specific interpretation. Memorization, rule use, and incomplete training need to be separated, and the conclusions tested across models, dataset-size intervals, and budgets. Generalization remains something to measure directly.",
      "caption": "Conceptual illustration: similar training gains can coexist with different ways of organizing information. Transfer requires a separate test; no experimental measurements are shown."
    },
    {
      "id": "architectureiq",
      "category": "research",
      "image": "architectureiq-figure1.png",
      "meta": "AI RESEARCH · TRAINING INTUITION",
      "title": "ArchitectureIQ: On the Measure of Training Intuition",
      "description": "Before running an experiment, researchers usually have a guess about which model or optimizer will work. We built ArchitectureIQ to test whether language models can make these judgments too, and to see where their intuition breaks down.",
      "status": "ICLR 2027 submission",
      "links": [
        {
          "label": "arXiv",
          "url": "https://arxiv.org/abs/2609.39714"
        },
        {
          "label": "PDF",
          "url": "https://arxiv.org/pdf/2609.39714"
        }
      ],
      "caption": "Figure 1 from the paper: accuracy on ArchitectureIQ. Model results use the 500-question benchmark; the human result shown uses a 50-question subset.",
      "sections": [
        {
          "heading": "Why test training intuition?",
          "text": "A fair amount of research happens before a training run starts. We look at the data, choose a model, and decide which experiments are worth trying. These choices often rely on experience that is hard to put into words. As language models take on more research work, we wanted to know how much of this judgment they actually have."
        },
        {
          "heading": "How we approached it",
          "text": "We give a researcher or a language model a synthetic dataset and a few training recipes, then ask which recipe will perform best. The answer comes from running the experiments. Synthetic data gives us control over the problem and makes it harder to answer from familiarity with a known benchmark."
        },
        {
          "heading": "What stood out",
          "text": "The models get many questions right, but their choices are not always sensitive to changes in the data. Giving them more time to reason helps surprisingly little. A small collection of explicit lessons helps weaker models more. That leaves a question I find interesting: what would it take to turn a collection of useful training intuitions into knowledge we can reason with?"
        }
      ],
      "paperFigure": true
    },
    {
      "id": "scaling-insight",
      "category": "research",
      "image": "scaling-insight-figure1.png",
      "meta": "AI RESEARCH · SCIENTIFIC UNDERSTANDING",
      "title": "AI Research Should Scale Insight, Not Just Compute",
      "description": "A better training result does not always tell us what to try next. We study how observing learning dynamics can help researchers form hypotheses, test interventions, and leave behind knowledge that others can use.",
      "status": "ICLR 2027 submission",
      "links": [],
      "sections": [
        {
          "heading": "Where the question starts",
          "text": "After an experiment works, there is often a gap between having a better model and knowing why the change helped. Automating more experiments can leave that gap untouched. We want experiments to produce knowledge that someone else can examine and reuse, with a clear account of where it applies. That knowledge need not be a complete mechanism; a reliable empirical rule can already give the next study a useful starting point."
        },
        {
          "heading": "How we explore it",
          "text": "We start by looking more closely at training itself. The nanoGPT Observable Library records internal quantities across layers and training steps, so we can look for behavior that loss curves miss. OPHIS organizes the next steps: identify a problem in these observations, propose an explanation, and test an intervention. ComfyResearch provides a way to build and share these experiments as executable graphs, including familiar settings such as grokking and edge-of-stability training."
        },
        {
          "heading": "What the experiments give us",
          "text": "One example is an attention-entropy pattern in nanoGPT’s second block that changes with network depth and learning-rate warmup. It raises questions that the usual weight-norm curves do not reveal. In a separate AutoResearch study, OPHIS finds interventions that improve validation performance within a fixed training-step budget. These are early examples. Whether the resulting knowledge transfers, and when the benefit justifies the time and compute spent acquiring it, remain open questions."
        }
      ],
      "caption": "Figure 1 from the paper: a schematic comparison of outcome-driven and insight-guided research. The landscape and paths illustrate the research process; they are not experimental measurements.",
      "paperFigure": true
    }
  ],
  "notes": []
};

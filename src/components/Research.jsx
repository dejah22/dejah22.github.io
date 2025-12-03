import React from "react";
import ResearchPaper from "./ResearchPaper";
import "../styles/Research.css";
import "../styles/ExperienceCard.css";
import ExperienceCard from "../components/ExperienceCard";

const papers = [
  {
    id: 0,
    title:
      "Bharatanatyam Pose Generation and Expression Inference using Region-Based Analysis (Ongoing)",
    authors: `<u>Dejah Madhusankar</u>, S. Karthika, R. Srinivasan`,
  },
  {
    id: 1,
    title: "Posture Extraction and Deduplication in Bharatanatyam Dances",
    citation: "(Under Review @ Grenze GIJET)",
    authors: `<u>Dejah Madhusankar</u>,  S. Karthika, R. Srinivasan`,
  },
  {
    id: 2,
    title:
      "Real-time Video Captioning Using Feature Fusion and Attention Mechanism",
    citation: "(Springer SIVP 2025)",
    authors: `KR Sarath Chandran, <u>Dejah Madhusankar</u>, Krithika Swaminathan (all authors contributed equally)`,
    abstract:
      "The increasing prevalence and volume of short-form video content and real-time multimedia has made live video captioning indispensable. Consequently, there is a rising demand for autonomous systems that can understand the observed scene and describe it for applications ranging from large-scale content-indexing to live-commentary systems. Effective scene understanding requires precise object identification along with contextual interpretation of object interactions. This research achieves this through a novel feature fusion approach, combining low-level VGG16 CNN-extracted spatial features with YOLOv8 object detection results. The fused features are then processed through an LSTM-based encoder-decoder architecture, augmented with a customised category-aware attention mechanism, to enable real-time caption generation. Trained on the MSVD dataset, the proposed approach outperforms our baseline model by over 20% in BLEU-4 and METEOR scores, with a 54% drop in average inference time. Indeed, it is substantial to note that the motivation of this paper lies in improving foundational uni-modal methods for converting live video into natural language in rapid, resource-constrained environments, hypothesizing that advancements in this area can subsequently benefit the development of more efficient architectures leveraging lighter and more modern models.",
    link: "https://link.springer.com/article/10.1007/s11760-025-04622-6",
  },
  {
    id: 3,
    title: "Multi-Label Emotion Classification in Urdu",
    citation: "(CEUR-WS EmoThreat@FIRE 2022)",
    authors: `<u>Dejah Madhusankar</u>, Avanthika Karthikeyan, B Bharathi`,
    abstract:
      " With the massive growth and widespread usage of social media platforms, the rates of its misuse and its corresponding impact on society have seen an exponential rise in numbers. The comfort of anonymity and wide reach offered by social media has led to the convenient spread of hatred and incitement to threats, that are often targeted against particular users and communities. Thus identifying hate speech, threats and intense emotions in the digital arena has gained attention recently. This is also the aim of the EmoThreat: Emotions and Threat Detection in Urdu 2022 challenge. In this paper, we describe a few traditional machine learning models and deep neural networks submitted by our team...",
    link: "https://ceur-ws.org/Vol-3395/T4-2.pdf",
  },
  {
    id: 4,
    title:
      "Online Resource 1: Implementation of Real-time Video Captioning using Feature Fusion and Attention Mechanism",
    citation: "(SIVP Supplement 2025)",
    authors: `KR Sarath Chandran, <u>Dejah Madhusankar</u>, Krithika Swaminathan (all authors contributed equally)`,
    abstract:
      "This supplementary paper provides a detailed account of the implementation aspects of the proposed video captioning system. It is organized into four main sections: Feature Extraction and Fusion, which explains the integration of visual features from VGG16 and YOLOv8; Attention Layer, which describes the standard and custom attention mechanisms used to guide the input to the LSTM; Encoder-Decoder Architecture, outlining the structure of the sequence generation model; and Caption Generation, which details the process of generating natural language descriptions from video frames. Together, these sections offer in-depth technical details for the methodology presented in the main paper.",
    link: "https://static-content.springer.com/esm/art%3A10.1007%2Fs11760-025-04622-6/MediaObjects/11760_2025_4622_MOESM1_ESM.pdf",
  },
  {
    id: 5,
    title:
      "Online Resource 2: Evaluation Metrics and Hardware Specifications of Real-time Video Captioning using Feature Fusion and Attention Mechanism",
    citation: "(SIVP Supplement 2025)",
    authors: `KR Sarath Chandran, <u>Dejah Madhusankar</u>, Krithika Swaminathan (all authors contributed equally)`,
    abstract:
      "This supplementary paper presents the evaluation criteria and hardware environment used to assess the performance of the proposed video captioning system. It includes a description of the evaluation metrics adopted to measure caption quality, and details the hardware specifications available in the Google Colab environment where training and inference were conducted. These details are provided to ensure transparency and reproducibility of the reported results.",
    link: "https://static-content.springer.com/esm/art%3A10.1007%2Fs11760-025-04622-6/MediaObjects/11760_2025_4622_MOESM2_ESM.pdf",
  },
];

const exp = [
  {
    role: "Summer Research Intern",
    company:
      "Crypto Lab, Indian Institute of Technology (IIT) Kharagpur, India",
    period: "Jun 2023- Aug 2023",
    bullets: [
      "Advisor: Dr. Indranil Sengupta.",
      "Built a command-line network scanning tool (similar to Nmap) using low-level C/C++ using Socket Programming.",
      {
        text: "Independently explored video watermarking approaches from previous audio-level methods used in the lab",
        sub: [
          "Explored extension of SVD-based cepstral-domain watermarking (from audio) to 3D-DCT/SVD domains of video sequences.",
          "Implemented attack simulations (compression, noise addition, frame dropping) to test watermark robustness.",
          "Identified gaps under adversarial transformations, and presented findings to the group.",
        ],
      },
      {
        text: "Assisted with vulnerability analyses, prototype developments, and tool optimizations in ongoing research projects.",
        sub: [
          "In one case, analyzed and proposed the usage of calligraphy stroke theories to create AI-resistant symbol sets for CAPTCHA.",
        ],
      },
    ],
    tags: ["Socket Programming", "C/C++", "Computer Networks"],
  },
  {
    role: "ML Research Assistant",
    company: "NLP Lab, SSN College of Engineering, Chennai, India",
    period: "Aug 2022 - Jan 2023",
    bullets: [
      "Advisor: Dr. Bharathi.",
      "Served as first author on a competitive shared task paper, led model development, and presented findings at a national conference.",
      "Developed and optimized ML and DL algorithms for various ongoing projects in NLP and Image Processing.",
      "Proposed alternative modeling ideas and demonstrated feasibility to the group with prototypes.",
      "Provided comprehensive coding support and identified research gaps through literature surveys.",

      "Delivered departmental seminars, and guided junior interns and peers.",
    ],
    tags: [
      "Deep Learning",
      "Python",
      "Natural Language Processing",
      "Machine Learning",
    ],
  },
];

const Research = () => {
  return (
    <>
      <div className="research-page">
        <h1 className="research-title">Research (Papers) </h1>
        <p
          style={{
            padding: "0rem 3rem 2rem 1.5rem",
            fontSize: "clamp(1rem, 0.7vw + 0.4rem, 5rem)",
          }}
        >
          My work ranges ranges from NLP methodologies, deep vision
          architectures to transformer-based human-pose estimators. Currently
          I'm combining these experiences to study generative dance models at
          the intersection of ML, affective computing and performative arts.
          Here are some of my published and ongoing research papers, followed by
          my lab experiences.
        </p>
        <div className="research-list">
          {papers.map((paper) => (
            <ResearchPaper key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
      <div className="experience-page" style={{ padding: "0rem 4rem" }}>
        <h1 className="exp-title">Assistantships</h1>

        <div className="timeline">
          {exp.map((exp, i) => (
            <ExperienceCard key={i} {...exp} showLine={false} showDot={true} />
          ))}
        </div>
        <footer
          style={{
            textAlign: "right",
            padding: "4rem 0rem 0rem 1rem",
            marginBottom: "-30px",
            fontSize: "0.8rem",
            color: "#3a2d1fff",
            opacity: 0.7,
          }}
        >
          © 2025 Dejah Madhusankar. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Research;

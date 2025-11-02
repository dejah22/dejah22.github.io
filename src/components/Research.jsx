import React from "react";
import ResearchPaper from "./ResearchPaper";
import "../styles/Research.css";

const papers = [
  {
    id: 3,
    title:
      "Posture Extraction and Deduplication in Jathiswaram Dances via Similarity Filtering",
    citation: "(Under Review at Elsevier ICMLDE 2025)",
    authors: `KR Sarath Chandran, <u>Dejah Madhusankar</u>, Krithika Swaminathan (all authors contributed equally)`,
    abstract:
      "We propose a multimodal transformer model that synchronizes visual and textual representations for real-time captioning of short-form videos...",
    link: "https://example.com/paper1.pdf",
  },
  {
    id: 1,
    title:
      "Real-time Video Captioning Using Feature Fusion and Attention Mechanism",
    citation: "(Springer SIVP 2025)",
    authors: `KR Sarath Chandran, <u>Dejah Madhusankar</u>, Krithika Swaminathan (all authors contributed equally)`,
    abstract:
      "We propose a multimodal transformer model that synchronizes visual and textual representations for real-time captioning of short-form videos...",
    link: "https://example.com/paper1.pdf",
  },
  {
    id: 4,
    title: "Multi-Label Emotion Classification in Urdu",
    citation: "(CEUR-WS EmoThreat@FIRE 2022)",
    authors: `<u>Dejah Madhusankar</u>, Avanthika Karthikeyan, B Bharathi`,
    abstract:
      "This paper presents a dataset and a transformer-based approach for detecting multiple emotional tones in short social media texts...",
    link: "https://example.com/paper2.pdf",
  },
  {
    id: 2,
    title:
      "Online Resource 1: Implementation of Real-time Video Captioning using Feature Fusion and Attention Mechanism",
    citation: "(SIVP Supplement 2025)",
    authors: `KR Sarath Chandran, <u>Dejah Madhusankar</u>, Krithika Swaminathan (all authors contributed equally)`,
    abstract:
      "This supplementary document provides a detailed account of the implementation aspects of the proposed video captioning system. It is organized into four main sections: Feature Extraction and Fusion, which explains the integration of visual features from VGG16 and YOLOv8; Attention Layer, which describes the standard and custom attention mechanisms used to guide the input to the LSTM; Encoder-Decoder Architecture, outlining the structure of the sequence generation model; and Caption Generation, which details the process of generating natural language descriptions from video frames. Together, these sections offer in-depth technical details for the methodology presented in the main paper.",
    link: "https://example.com/paper1.pdf",
  },
  {
    id: 2,
    title:
      "Online Resource 1: Implementation of Real-time Video Captioning using Feature Fusion and Attention Mechanism",
    citation: "(SIVP Supplement 2025)",
    authors: `KR Sarath Chandran, <u>Dejah Madhusankar</u>, Krithika Swaminathan (all authors contributed equally)`,
    abstract:
      "This supplementary document provides a detailed account of the implementation aspects of the proposed video captioning system. It is organized into four main sections: Feature Extraction and Fusion, which explains the integration of visual features from VGG16 and YOLOv8; Attention Layer, which describes the standard and custom attention mechanisms used to guide the input to the LSTM; Encoder-Decoder Architecture, outlining the structure of the sequence generation model; and Caption Generation, which details the process of generating natural language descriptions from video frames. Together, these sections offer in-depth technical details for the methodology presented in the main paper.",
    link: "https://example.com/paper1.pdf",
  },
];

const Research = () => {
  return (
    <div className="research-page">
      <h1 className="research-title">Research</h1>
      <div className="research-list">
        {papers.map((paper) => (
          <ResearchPaper key={paper.id} paper={paper} />
        ))}
      </div>
    </div>
  );
};

export default Research;

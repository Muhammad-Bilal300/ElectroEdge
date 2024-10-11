import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./ReduxToolkit/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Job description of Securiti.ai in backend development
// ========================================================

// Securiti has been widely recognized as an industry innovator, being named “Most Innovative Start-up” at RSA Conference 2020, Leader in the IDC Marketplace, Leader in the Forrester Wave Privacy Management Software, and winner of the 2020 HPE-IAPP Innovation Award. The company is being built by proven serial entrepreneurs and executives who have successfully built and scaled high-growth global companies before. We are now expanding our development team and have multiple backend development roles open. If you aspire to work on cutting-edge technologies and frameworks, side by side with some of the smartest technologists, this may be a unique place for you. You will be working as a part of a distributed agile team, building a new SaaS platform that underpins a suite of enterprise applications solving a variety of hard data analytics and enterprise problems.

// Responsibilities
// • Be a part of a globally distributed team of backend engineers to design/develop/architect Securiti’s core backend platform
// • Help create architecture documents, functional specifications, design documents, and developer test plans
// • Coordinate end-to-end development, deployment, and testing of new features and enhancements in the product
// • Write reliable, secure, performant, and scalable code
// • Perform code reviews and analysis
// • Monitor platform performance and be on-call to address any urgent issues
// • Work with customer support and address customer issues
// • Integrate new technologies into back-end cloud infrastructure

// Requirements
// • Minimum 2 years experience developing software, with some experience using container technologies like Docker
// • Strong conceptual understanding of multi-threaded applications
// • Professional development experience in GoLang, Java, C++, or Python
// • Good knowledge of Linux and bash scripting
// • Good software development practices: should thrive in an environment of rapid development, peer code reviews, and write good functional/unit tests
// • Experience with microservices and REST-based HTTP/2 architectures
// • Experience with SQL (Postgres) and NoSQL (Mongo/Elasticsearch) technologies
// • Knowledge and use of performance tuning, profiling, and software metrics tools
// • Very strong diagnostic and troubleshooting skills
// • Understanding of continuous integration tools, including Jenkins
// • Experience with agile development methodologies is a must
// • Outstanding verbal, written, and interpersonal communication skills
// • High level of energy, teamwork, can-do attitude, and willingness to learn new technologies
// • Working knowledge of networks and web concepts

// Bonus points
// • Experience in building highly available and scalable distributed systems for the cloud is required for senior roles
// • Proven ability to utilize creative thinking to solve complex engineering problems
// • Experience with cloud platforms such as AWS, GCP, and Azure
// • Experience with Containerisation technologies (Kubernetes, Docker)
// • Experience with tools like terraform, helm, docker
// • Understanding of Network Services such as Load-Balancers, Security, QoS
// • Understanding of platform level concerns, such as configuration management, network request routing, blue/green or canary deployments, in-service software upgrade
// • Experience in building API based connectors to cloud-based SaaS services is a big plus

// About Us

// Securiti solves challenges across governance, privacy, and security. With a foundation in data understanding and a team that was responsible for developing and deploying the market-leading CASB & DLP technology, we were able to create a platform from the ground up that leverages automation and workflows to solve complex privacy, data, and security business challenges with a simplified interface promoting collaboration across the business. Ease of use, quick to deploy and customizable are all reasons why companies select Securiti versus stitching multiple vendors together to address their challenges.

// The exponential growth of data brings massive new opportunities but also brings increasingly perilous security, compliance, and privacy risks. At Securiti, our mission is to enable organizations to safely harness the incredible power of data and the cloud by controlling the complex security, compliance, and privacy risks. Securiti’s solution uniquely combines AI-powered data intelligence with full workflow automation, simplifying compliance with GDPR, CCPA, LGPD, and other regulations. Granular insights into structured and unstructured data enable organizations to monitor risk, control access, and protect sensitive data at scale.

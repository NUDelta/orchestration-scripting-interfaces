// constants.ts
export const DETECTOR = "Fully Immersed In One Category";
export const REASONS = [
  "Sprint Log: {10} out of {10} points spent are under category {tech}",
  "Currently is end of sprint 3: 05/01-05/14"
];
export const GEN_CONTEXT = [
  { title: "Summary of Sprint Log Stories", data: "Building a user interface for diagnosing RCs" },
  { title: "Last Canvas Edit", data: "5/9/23 6:12 PM" }
];
export const ROOT_CAUSES = [
  {
    RC: "Student's riskiest risk requires them to work mostly on a particular category",
    context: [
      "Sprint Log: Riskiest Risk in Planning View: There is a disconnect between our technological progress and conceptual approach (which we cannot test unless we have a working prototype) so we need to build the basic architecture first. We are trying to address the asynchronous approach in an easier way with an MVP which can still show the contributor what the other group's contribution is.  For our deliverable - we want to create an MVP that captures the basic end to end journey"
    ],
    strategy: "Strategy A..."
  },
  { RC: "RC B", context: ["Context B1", "Context B2"], strategy: "Strategy B..." },
  { RC: "RC C", context: ["Context C1", "Context C2"], strategy: "Strategy C..." }
];

// "use client";

// import data from "@/public/task-data.json"; // Ensure this path is correct and JSON is valid
// import { Card } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";

// // Define types explicitly
// interface Topic {
//   name: string;
//   image?: string;
//   correct_percentage?: number;
// }

// interface Topics {
//   [key: string]: Topic[]; // Dynamically map keys to arrays of Topic
// }

// // Ensure safe access to the "topics" property in the data
// const topics: Topics = data.topics || {};

// interface TopicsListProps {
//   title: string; // Accept string titles instead of dynamically mapping types
// }

// export function TopicsList({ title }: TopicsListProps) {
//   const topicList = topics[title] || [];

//   if (topicList.length === 0) {
//     return <div>No topics available for the selected category.</div>;
//   }

//   return (
//     <Card className="p-4 sm:p-6">
//       <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-4">{title}</h3>
//       <div className="space-y-2 sm:space-y-4">
//         {topicList.map((topic, index) => (
//           <div
//             key={index}
//             className="space-y-1 sm:space-y-2 border-b pb-2 last:border-b-0"
//           >
//             <div className="flex items-center gap-2">
//               <span className="text-base sm:text-xl mr-1">
//                 {topic.image || "🌟"}
//               </span>
//               <span className="text-xs sm:text-sm font-medium">{topic.name}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Progress
//                 value={topic.correct_percentage || 0}
//                 className="flex-1 h-2 sm:h-3"
//               />
//               <span className="text-xs text-muted-foreground">
//                 {topic.correct_percentage || 0}% Correct
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Card>
//   );
// }

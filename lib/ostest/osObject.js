/* SprintLog {
    *   url: "String"                           // link to Google Drive Spreadsheet
    *   documentId: "String"                    // ID of document parsed from URL
    *   people: [String]                        // student names
    *   sprints: [                              // list of SprintPlans for each sprint in the qtr
    *   -----------------------------------------------this is 'sprintlog'                           
    *     SprintPlan {
    *       name: "String",                     // name of sprint (e.g., "Sprint 0")
    *       points: [                           // summary of points for the sprint for each student
    *          name: "String",                  // name of specific student
    *          pointsAvailable: Number,         // number of points student has (for ugrads, typically 8)
    *          pointsCommitted: {               // number of points committed
    *              total: Number,
    *              design: Number,
    *              technology: Number,
    *              research: Number
    *          },
    *          hoursSpent: {                    // number of hours spent
    *              total: Number,
    *              design: Number,
    *              technology: Number,
    *              research: Number
    *          }
    *       ],
    *       totalPoints: {                      // total points planned/spent on sprint (students combined)
    *          pointAvailable: Number,
    *          pointsCommitted: {
    *              total: 0,
    *              design: 0,
    *              technology: 0,
    *              research: 0
    *          },
    *          hoursSpent: {
    *              total: 0,
    *              design: 0,
    *              technology: 0,
    *              research: 0
    *          }
    *       },
    *       url: "String"                         // link to specific Worksheet in Google Drive for this sprint
    *       stories: [                            // list of SprintStories for the SprintPlan
    *         SprintStory {
    *          description: "String",             // description of the story (typically, the risk in project)
    *          purpose: "String",                 // purpose of the story (typically, why the risk is important to address)
    *          deliverables: "String",            // description of the deliverable
    *          totalPointsRequired: Number,       // number of points allocated to this story
    *          totalPointsSpent: Number,          // number of points spend so far on this story
    *          tasks: [                           // list of SprintTasks for each SprintStory
    *           SprintTask {
    *              description: "String",         // description of the task
    *              expectedRoadblocks: "String",  // expected roadblocks for the task (if any)
    *              pointsAllocated: Number,       // number of points allocated for the task
    *              taskCategory: "String",        // category the task is of (D/T/R)
    *              assignee: "String",            // student assigned to the task
    *              taskStatus: "String"           // current status of task (blank, in-progress, backlogged, done)
    *              pointsSpent: Number,           // number of points spent on the task
    *              helpfulLinks: "String",        // helpful links added by user for that task
    *            }
    *          ];
    *         }
    *       ]
    *     }
    * -----------------------------------------------this is the end of 'sprintlog'
    *   ]
    * }
    */

// Load project object from json
import * as project from './sprint-log-old.json' assert { type: 'json' };
console.log('project: ', project)

let myproject = project.name

console.log('name: ', myproject)

// Sprint Log Points Context Table
const points = project.tools.sprintLog.points
const totalPoints = project.tools.sprintLog.totalPoints

// Third row in sprint log table
let totalObj = {
    pointsAvailable: totalPoints.pointAvailable,
    pointsCommitted: totalPoints.pointsCommitted.total,
    DCommitted: totalPoints.pointsCommitted.design,
    TCommitted: totalPoints.pointsCommitted.technology,
    RCommitted: totalPoints.pointsCommitted.research,
    pointsSpent: totalPoints.hoursSpent.total, 
    DSpent: totalPoints.hoursSpent.design,
    TSpent: totalPoints.hoursSpent.technology,
    RSpent: totalPoints.hoursSpent.researcht
}

console.log('totalObj: ', totalObj)

// Returns a list of student objects with extracted fields
// One object for one roow in sprint log table
let studentObjs = points.map(student => {
const {name, pointsAvailable
, pointsCommitted, hoursSpent} = student;

return {
        name: name,
        totalPointsCommitted: pointsCommitted.total,
        totalPointsAvailable: pointsAvailable,
        totalHoursSpent: hoursSpent.total,
        DCommitted: pointsCommitted.design,
        TCommitted: pointsCommitted.technology,
        RCommitted: pointsCommitted.research,
        DSpent: hoursSpent.design,
        TSpent: hoursSpent.technology,
        RSpent: hoursSpent.research,
    };
});

// Sprint Log Stories and Tasks Table
/*       stories: [                            // list of SprintStories for the SprintPlan
*         SprintStory {
*          description: "String",             // description of the story (typically, the risk in project)
*          purpose: "String",                 // purpose of the story (typically, why the risk is important to address)
*          deliverables: "String",            // description of the deliverable
*          totalPointsRequired: Number,       // number of points allocated to this story
*          totalPointsSpent: Number,          // number of points spend so far on this story
*          tasks: [                           // list of SprintTasks for each SprintStory
*           SprintTask {
*              description: "String",         // description of the task
*              expectedRoadblocks: "String",  // expected roadblocks for the task (if any)
*              pointsAllocated: Number,       // number of points allocated for the task
*              taskCategory: "String",        // category the task is of (D/T/R)
*              assignee: "String",            // student assigned to the task
*              taskStatus: "String"           // current status of task (blank, in-progress, backlogged, done)
*              pointsSpent: Number,           // number of points spent on the task
*              helpfulLinks: "String",        // helpful links added by user for that task
*            }
*          ]; */

const Stories = project.tools.sprintLog.stories

let storiesObjs = Stories.map(story => {

    const tasks = story.tasks;

    let DCategory, TCategory, RCategory = False;
    let pointsD, pointsT, pointsR = 0;

    let taskObjs = tasks.map(task => {
        // Calculate D T R points for the story by summing Task Categories while checking taskCategory
        if (task.taskCategory == 'D'){
            DCategory = True;
            pointsD += task.pointsAllocated
        } else if  (task.taskCategory == 'T') {
            TCategory = True;
            pointsT += task.pointsAllocated
        } else if (task.taskCategory == 'R') {
            RCategory = task.pointsAllocated;
            pointsR += task.pointsAllocated;
        } else {
            console.log('task.taskCategory needs to be one of D T and R!')
        }

        return {
            description: task.description,         // description of the task
            expectedRoadblocks: task.expectedRoadblocks,  // expected roadblocks for the task (if any)
            pointsRequired: task.pointsAllocated,       // number of points allocated for the task
            DCategory: DCategory,
            TCategory: TCategory,
            RCategory: RCategory,
            assignee: task.assignee,            // student assigned to the task
            taskStatus: task.taskStatus,           // current status of task (blank, in-progress, backlogged, done)
            pointsSpent: task.pointsSpent,           // number of points spent on the task
        }
    })

return {
    description: story.description,             // description of the story (typically, the risk in project)
    purpose: story.purpose,                 // purpose of the story (typically, why the risk is important to address)
    deliverables: story.deliverables,            // description of the deliverable
    totalPointsRequired: story.totalPointsRequired,       // number of points allocated to this story
    DPointsRequired: pointsD,
    TPointsRequired: pointsT,
    RPointsRequired: pointsR,
    totalPointsSpent: story.totalPointsSpent,          // number of points spend so far on this story
    tasks: taskObjs,
    }
})

export function populate_sprint_log_points(OS_object) {
  let project = OS_object.project;
  // console.log('project', project)

  // Sprint Log Points Context Table
  const points = project.tools.sprintLog.points;
  const totalPoints = project.tools.sprintLog.totalPoints;

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
    RSpent: totalPoints.hoursSpent.research,
  };

  // Returns a list of student objects with extracted fields
  // One object for one roow in sprint log table
  let studentObjs = points.map((student) => {
    const { name, pointsAvailable, pointsCommitted, hoursSpent } = student;

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

  return { totalObj, studentObjs };
}

export function populate_sprint_log_summary_of_stories(OS_object) {
  let project = OS_object.project;
  const Stories = project.tools.sprintLog.stories;

  let storiesObjs = Stories.map((story) => {
    const tasks = story.tasks;

    let DCategory,
      TCategory,
      RCategory = false;
    let pointsD,
      pointsT,
      pointsR = 0;

    let taskObjs = tasks.map((task) => {
      // Calculate D T R points for the story by summing Task Categories while checking taskCategory
      if (task.taskCategory == 'D') {
        DCategory = true;
        pointsD += task.pointsAllocated;
      } else if (task.taskCategory == 'T') {
        TCategory = true;
        pointsT += task.pointsAllocated;
      } else if (task.taskCategory == 'R') {
        RCategory = true;
        pointsR += task.pointsAllocated;
      } else {
        console.log('task.taskCategory needs to be one of D T and R!');
      }

      return {
        description: task.description, // description of the task
        expectedRoadblocks: task.expectedRoadblocks, // expected roadblocks for the task (if any)
        pointsRequired: task.pointsAllocated, // number of points allocated for the task
        DCategory: DCategory,
        TCategory: TCategory,
        RCategory: RCategory,
        assignee: task.assignee, // student assigned to the task
        taskStatus: task.taskStatus, // current status of task (blank, in-progress, backlogged, done)
        pointsSpent: task.pointsSpent, // number of points spent on the task
      };
    });

    return {
      description: story.description, // description of the story (typically, the risk in project)
      purpose: story.purpose, // purpose of the story (typically, why the risk is important to address)
      deliverables: story.deliverables, // description of the deliverable
      totalPointsRequired: story.totalPointsRequired, // number of points allocated to this story
      DPointsRequired: pointsD,
      TPointsRequired: pointsT,
      RPointsRequired: pointsR,
      totalPointsSpent: story.totalPointsSpent, // number of points spend so far on this story
      tasks: taskObjs,
    };
  });

  return storiesObjs;
}

// Takes the title of a context piece and returns the value for it
export function getContextValue(title, OS_object) {
  if (title == 'Sprint log-Total Points Spent This Sprint') {
    let sprintLogPointsContext = populate_sprint_log_points(OS_object);
    let output =
      sprintLogPointsContext.totalObj.pointsSpent +
      '/' +
      sprintLogPointsContext.totalObj.pointsAvailable;
    return output;
  } else if (title == 'Sprint log-Total Points Commited This Sprint') {
    let sprintLogPointsContext = populate_sprint_log_points(OS_object);
    let output =
      sprintLogPointsContext.totalObj.pointsCommitted +
      '/' +
      sprintLogPointsContext.totalObj.pointsAvailable;
    return output;
  } else if (title == 'Sprint log-D T and R Points Breakdown') {
    let sprintLogPointsContext = populate_sprint_log_points(OS_object);
    let output = [
      OS_object.DPointsRequired,
      OS_object.TPointsRequired,
      OS_object.RPointsRequired,
    ];
    return output;
  } else if (title == 'Sprint log-Summary of Stories') {
    let storiesObjs = populate_sprint_log_summary_of_stories(OS_object);
    let output = storiesObjs[0].description;
    if (storiesObjs.length == 0) {
      return 'no stories planned';
    } else {
      return output;
    }
  } else if (title == 'Sprint log-Summary of Tasks') {
    let storiesObjs = populate_sprint_log_summary_of_stories(OS_object);
    let output = storiesObjs[0].tasks[0].description;
    if (storiesObjs.length == 0) {
      return 'no stories planned';
    } else {
      return output;
    }
  } else if (title == 'Sprint log-PRC-link to PRC') {
    return 'placeholder';
    
  } else {
    return 'No Match';
  }
 
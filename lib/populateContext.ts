import Link from 'next/link';

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
    // PRC_link: project.tools.practicalResearchCanvas.url,
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
    // Extract the D, T, and R points breakdown
    const DPointsCommitted = sprintLogPointsContext.totalObj.DCommitted;
    const TPointsCommitted = sprintLogPointsContext.totalObj.TCommitted;
    const RPointsCommitted = sprintLogPointsContext.totalObj.RCommitted;

    // Format the breakdown as a string
    const output = `
        Design Points: ${DPointsCommitted},
        Technology Points: ${TPointsCommitted},
        Research Points: ${RPointsCommitted}
        `;
    return output;
  } else if (title == 'Sprint log-Summary of Stories') {
    let storiesObjs = populate_sprint_log_summary_of_stories(OS_object);
    console.log('storiesObjs', storiesObjs)
    const output = storiesObjs.map((story) => story.description);
    const format_output = `\n${output.join(', ')}`

    if (storiesObjs.length == 0) {
      return 'no stories planned';
    } else {
      return format_output;
    }
  } else if (title == 'Sprint log-Summary of Tasks') {
    let storiesObjs = populate_sprint_log_summary_of_stories(OS_object);
    console.log(storiesObjs[0].tasks);
    const output = storiesObjs.map((story) => {
      const tasksWithDescriptions = story.tasks.map((task) => `----${task.description}, [${task.pointsRequired} hr], [assigned to ${task.assignee}]`);
      return `\n${story.description}:\n${tasksWithDescriptions.join('\n')}`;
    });
    if (storiesObjs.length == 0) {
      return 'no stories planned';
    } else {
      return output;
    }
  } else if (title == 'PRC-link to PRC') {
    let link = OS_object.project.tools.researchCanvas.url;
    return link;
  }  else if (title == 'PRC-Time Last Edited'){
    return 'Nov 7, 7 days ago'
  } else if (title == 'PRC-Slides Updated in this sprint'){
    return 'User Study Plan'
  } else if (title == 'Sprint log-Riskiest Risk Specified in Planning View') {
    return 'None Specified.'
  } else if (title == 'Sprint log-Canvases Planned to Update Last Week') {
    return 'Design Argument, User Study Plan';
  } else if (title == 'Sprint log-Individual Points Commited This Sprint') {
    return 'Ella: 21/16; Jonah 2.5/16'
  }  else if (title == 'Sprint log-Individual Points Spent This Sprint (MidSprint)') {
    return 'Ella: 11/8; Jonah 1.5/8'
  } else if (title == 'Sprint log-Individual Points Commited-All Sprints') {
    return `\nElla: [Sprint 0] 5/8, [Sprint 1] 12.5/16, [Sprint 2] 6.8/16, [Sprint 3] 14.3/16, [Sprint 4] 21/16\nJonah: [Sprint 0] 5/8, [Sprint 1] 12.5/16, [Sprint 2] 3.8/16, [Sprint 3] 12.3/16, [Sprint 4] 2.5/16`
  } else if (title == 'Sprint log-Individual Points Spent-All Sprint') {
    return `\nElla: [Sprint 0] 5/8, [Sprint 1] 12.5/16, [Sprint 2] 6/16, [Sprint 3] 8.3/16, [Sprint 4] 11/16\nJonah: [Sprint 0] 5/8, [Sprint 1] 12.5/16, [Sprint 2] 3/16, [Sprint 3] 10.3/16, [Sprint 4] 1.5/16`
  }
  else {
    return 'No Match';
  }
}

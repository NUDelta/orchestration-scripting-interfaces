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
  const studentObjs = populate_sprint_log_points(OS_object).studentObjs;

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
    const output = storiesObjs.map(
      (story) =>
        `----${story.description} [${story.totalPointsRequired} hr]\nPurpose: ${
          story.purpose || 'none'
        }\n Deliverables: ${story.deliverables} \n`
    );
    const format_output = `\n${output.join('\n')}`;

    if (storiesObjs.length == 0) {
      return 'no stories planned';
    } else {
      return format_output;
    }
  } else if (title == 'Sprint log-Summary of Tasks') {
    let storiesObjs = populate_sprint_log_summary_of_stories(OS_object);
    const output = storiesObjs.map((story) => {
      const tasksWithDescriptions = story.tasks.map(
        (task) =>
          `----${task.description}, [${task.pointsRequired} hr], [assigned to ${task.assignee}]`
      );
      return `\n${story.description}:\n${tasksWithDescriptions.join('\n')}\n`;
    });
    if (storiesObjs.length == 0) {
      return 'no stories planned';
    } else {
      return output;
    }
  } else if (title == 'PRC-link to PRC') {
    let link = OS_object.project.tools.researchCanvas.url;
    return link;
  } else if (title == 'PRC-Time Last Edited') {
    return 'Sep 21, 55 days ago';
  } else if (title == 'PRC-Slides Updated in this sprint') {
    return 'None';
  } else if (title == 'Sprint log-Riskiest Risk Specified in Planning View') {
    return `\nExplore and check if there exist another type of prevalence difference (mentioned in lass SIG -> Exist in both but quanlity of reviews or quality is different?).`;
  } else if (title == 'Sprint log-Canvases Planned to Update Last Week') {
    return 'System Argument';
  } else if (title == 'Sprint log-Individual Points Commited This Sprint') {
    const output = studentObjs.map(
      (student) => `${student.name} [${student.totalPointsCommitted} hr]; `
    );
    return output;
  } else if (
    title == 'Sprint log-Individual Points Spent This Sprint (MidSprint)'
  ) {
    // How to detect midsprint?
    const output = studentObjs.map(
      (student) => `${student.name} [${student.totalHoursSpent} hr]; `
    );
    console.log(OS_object);
    return output;
  } else if (title == 'Sprint log-Individual Points Commited-All Sprints') {
    // Issue: OS_Object only return current sprint [temp sol: hardcode]
    return `\nJiayi: [Sprint 0] 10/8, [Sprint 1] 18.75/16, [Sprint 2] 15.5/16, [Sprint 3] 17/16, [Sprint 4] 8/16\nYiran: [Sprint 0] 10/8, [Sprint 1] 18.25/16, [Sprint 2] 15.5/16, [Sprint 3] 11.5/16, [Sprint 4] 8/16`;
  } else if (title == 'Sprint log-Individual Points Spent-All Sprint') {
    // Issue: OS_Object only return current sprint [temp sol: hardcode]
    let project = OS_object.project;
    const sprint = project.tools;
    return `\nJiayi: [Sprint 0] 8/8, [Sprint 1] 14.55/16, [Sprint 2] 8.5/16, [Sprint 3] 14.5/16, [Sprint 4] 0/16\nYiran: [Sprint 0] 8/8, [Sprint 1] 14.05/16, [Sprint 2] 8.5/16, [Sprint 3] 11/16, [Sprint 4] 0/16`;
  } else {
    return 'No Match';
  }
}

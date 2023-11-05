export function populate_sprint_log_points (OS_object) {
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

    return { totalObj, studentObjs};
}

// Takes the title of a context piece and returns the value for it
export function getContextValue(title, OS_object) {
    if (title == "Sprint log-Total Points Spent This Sprint") {
        let sprintLogPointsContext = populate_sprint_log_points(OS_object)
        let output = sprintLogPointsContext.totalObj.pointsSpent + '/' + sprintLogPointsContext.totalObj.pointsAvailable
        return output;
    }
    else if (title == "Sprint log-Total Points Commited This Sprint") {
        let sprintLogPointsContext = populate_sprint_log_points(OS_object)
        let output = sprintLogPointsContext.totalObj.pointsCommitted + '/' + sprintLogPointsContext.totalObj.pointsAvailable
        return output;
    }
    else if (title ==  "Sprint log-D T and R Points Breakdown") {
        let sprintLogPointsContext = populate_sprint_log_points(OS_object)
        let output = 'placeholder'
        return output;
    }
}
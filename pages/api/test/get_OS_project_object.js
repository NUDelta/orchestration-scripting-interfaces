async function getComputedOrganizationalObjectsForProject(projectName) {
  const requestBody = {
    projectName,
  };
  try {
    const response = await fetch(`${process.env.API_URL}/organizationalObjects/getComputedOrganizationalObjectsForProject`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch data with ${process.env.API_URL}/organizationalObjects/getComputedOrganizationalObjectsForProject for ${projectName}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getComputedOrganizationalObjectsForProject;

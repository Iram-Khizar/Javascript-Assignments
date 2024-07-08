// Function to fetch albums from JSONPlaceholder API
async function fetchAlbums() {
  try {
    // Fetch the list of albums from the API
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");

    // Check if the response is okay (status code 200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response as JSON
    const albums = await response.json(); // Function to fetch albums and transform the data
    async function fetchAlbums() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const albums = await response.json();

        // Filter out albums that do not have a title
        const filteredAlbums = albums.filter((album) => album.title);

        // Transform the albums into a simpler format
        const transformedAlbums = filteredAlbums.map((album) => ({
          id: album.id,
          title: album.title,
          userId: album.userId,
        }));

        return transformedAlbums;
      } catch (error) {
        console.error("Failed to fetch albums:", error);
        throw error;
      }
    }

    // Test the function by calling it and logging the result
    fetchAlbums()
      .then((albums) => console.log(albums))
      .catch((error) => console.error("Error:", error));

    // Filter out albums without a title
    const filteredAlbums = albums.filter((album) => album.title);

    // Transform the remaining albums into a simpler format
    const simplifiedAlbums = filteredAlbums.map((album) => ({
      id: album.id,
      title: album.title,
    }));

    // Return the transformed array of albums
    return simplifiedAlbums;
  } catch (error) {
    console.error("Failed to fetch albums:", error);
  }
}

// Test the function by calling it and logging the result
fetchAlbums().then((albums) => console.log(albums));

//
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // Filter users that do not have an email address
  const usersWithEmail = users.filter((user) => user.email);

  // Calculate the total number of users that have a phone number listed
  const totalUsersWithPhoneNumber = usersWithEmail.reduce((count, user) => {
    return user.phone ? count + 1 : count;
  }, 0);

  console.log(`Total users with phone number: ${totalUsersWithPhoneNumber}`);
  return usersWithEmail;
}

// Test the function
fetchUsers().then((users) => console.log(users));
//
async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  // Filter out the todos that are already completed
  const incompleteTodos = todos.filter((todo) => !todo.completed);

  // Transform the remaining todos into a simpler format
  const simplifiedTodos = incompleteTodos.map((todo) => ({
    id: todo.id,
    title: todo.title,
  }));

  return simplifiedTodos;
}

// Test the function
fetchTodos().then((todos) => console.log(todos));

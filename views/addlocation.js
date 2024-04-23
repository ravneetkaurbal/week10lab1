<!-- addlocation.ejs -->
<!DOCTYPE html>
<html lang="en">
  <!-- Pass a JavaScript variable to a partial in EJS -->
  <%- include('partials/head.ejs', { title: "Add Location" }) %>

  <body>
    <%- include('partials/navbar') %>

    <div class="content">
      <div class="create">
        <h2>Add a New Location</h2>
        <form action="/addLocation" method="POST">
          <label>Name:</label
          ><input type="text" value="" id="name" name="name" required />

          <label for="address">Address:</label>
          <textarea
            value=""
            id="address"
            name="address"
            rows="4"
            required
          ></textarea
          ><br />

          <label for="latitude">Latitude:</label>
          <input type="number" id="latitude" name="latitude" required /><br />

          <label for="longitude">Longitude:</label>
          <input type="number" id="longitude" name="longitude" required /><br />

          <button type="submit">Add Location</button>
        </form>
      </div>
    </div>

    <%- include('partials/footer') %>
  </body>
</html>
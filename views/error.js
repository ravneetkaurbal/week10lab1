<!-- addlocation.ejs -->
<!DOCTYPE html>
<html lang="en">
  <!-- Pass a JavaScript variable to a partial in EJS -->
  <%- include('partials/head.ejs', { title: "Error page" }) %>
  <body>
    <%- include('partials/navbar') %>

    <div class="content">
      <div class="not-found">
        <h2>Error</h2>
        <p></p>
        <a href="/">Back to the homepage...</a>
      </div>
    </div>

    <%- include('partials/footer') %>
  </body>
</html>
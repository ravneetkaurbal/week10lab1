<!-- Define a function to render each location -->
<% function renderLocation(location) { %>
    <div class="item-preview">
      <a href="/single-location/<%= location._id %>">
        <h2>Name: <%= location.name %></h2>
        <p>Details</p>
      </a>
    </div>
    <% } %>
    
    <!DOCTYPE html>
    <html lang="en">
      <!-- Pass a JavaScript variable to a partial in EJS -->
      <%- include('partials/head.ejs', { title: "Home page" }) %>
    
      <body>
        <%- include('partials/navbar') %>
    
        <div class="content">
          <div class="home">
            <div class="item-list">
              <% if (locations.length > 0) { %>
              <!-- Call the renderLocation function for each location -->
              <% locations.forEach(renderLocation); %> <% } else { %>
              <p>No locations found.</p>
              <% } %>
            </div>
          </div>
        </div>
    
        <%- include('partials/footer') %>
      </body>
    </html>
    
function insertFakePost() {
  let feed = document.querySelector('[aria-label="Timeline: Your Home Timeline"]'); // Find feed
  if (!feed) return;

  let fakePost = document.createElement("div");
  fakePost.className = "fake-x-post";
  fakePost.innerHTML = `
      <div class="post-content">
          <p><strong>@FakeUser</strong>: This is a made-up post!</p>
      </div>
      <button class="report-fake">Is this fake?</button>
  `;

  feed.prepend(fakePost);

  fakePost.querySelector(".report-fake").addEventListener("click", () => {
      alert("Yes! This post was fake. Good job spotting it.");
  });
}

setInterval(insertFakePost, 10000); // Add a fake post every 10 seconds
